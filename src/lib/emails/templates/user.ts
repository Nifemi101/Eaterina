import { ReservationEmailPayload } from "@/src/types/reservation";

export function userConfirmationHtml(data: ReservationEmailPayload): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Reservation Received</title>
      </head>
      <body style="font-family: sans-serif; background: #f9f9f9; padding: 32px;">
        <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 10px; padding: 32px; border: 1px solid #eee;">

          <h1 style="color: #c8a96e;">Hi ${data.fullName} 👋</h1>
          <p style="color: #444; line-height: 1.6;">
            Thanks for reaching out! We've received your reservation request and we're reviewing it now.
            We'll confirm your booking and get back to you shortly.
          </p>

          <div style="background: #fdf8f2; border-left: 4px solid #c8a96e; padding: 16px 20px; border-radius: 6px; margin: 24px 0;">
            <p style="margin: 0 0 8px; color: #888; font-size: 13px;">YOUR BOOKING SUMMARY</p>
            <p style="margin: 4px 0; color: #111;"><strong>Date:</strong> ${data.date}</p>
            <p style="margin: 4px 0; color: #111;"><strong>Time:</strong> ${data.timeSlot}</p>
            <p style="margin: 4px 0; color: #111;"><strong>Guests:</strong> ${data.guests}</p>
            ${data.occasion ? `<p style="margin: 4px 0; color: #111;"><strong>Occasion:</strong> ${data.occasion}</p>` : ""}
          </div>

          <p style="color: #444; line-height: 1.6;">
            Need to make changes? Call us or reply to this email and we'll sort it out.
          </p>

          <p style="color: #c8a96e; font-weight: 600; margin-top: 32px;">— The Eateria Team</p>
        </div>
      </body>
    </html>
  `;
}