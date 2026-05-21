import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { reservationSchema } from "@/src/lib/validation/reservation";
import { ReservationEmailPayload, ApiResponse } from "@/src/types/reservation";
import { restaurantEmailHtml } from "@/src/lib/emails/templates/restaurant";
import { userConfirmationHtml } from "@/src/lib/emails/templates/user";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate incoming data against our zod schema
    const parsed = reservationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Invalid form data" },
        { status: 400 }
      );
    }

    const payload: ReservationEmailPayload = {
      ...parsed.data,
      submittedAt: new Date().toLocaleString("en-US", {
        dateStyle: "full",
        timeStyle: "short",
      }),
    };

    // Send both emails in parallel
    const [restaurantEmail, userEmail] = await Promise.all([
      resend.emails.send({
        from: "Eateria Reservations <reservations@yourdomain.com>",
        to: process.env.RESTAURANT_EMAIL!,
        subject: `New Reservation — ${payload.fullName} on ${payload.date}`,
        html: restaurantEmailHtml(payload),
      }),
      resend.emails.send({
        from: "Eateria <no-reply@yourdomain.com>",
        to: payload.email,
        subject: "We've received your reservation request!",
        html: userConfirmationHtml(payload),
      }),
    ]);

    if (restaurantEmail.error || userEmail.error) {
      console.error("Resend error:", restaurantEmail.error ?? userEmail.error);
      return NextResponse.json<ApiResponse>(
        { success: false, error: "Failed to send emails. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json<ApiResponse>(
      { success: true, message: "Reservation submitted successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Reservation API error:", err);
    return NextResponse.json<ApiResponse>(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}