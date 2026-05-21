import { ReservationEmailPayload } from "@/src/types/reservation";

export function restaurantEmailHtml(data: ReservationEmailPayload): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>New Reservation</title>
      </head>
      <body style="font-family: sans-serif; background: #f9f9f9; padding: 32px;">
        <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 10px; padding: 32px; border: 1px solid #eee;">
          
          <h1 style="color: #c8a96e; margin-bottom: 4px;">New Table Reservation</h1>
          <p style="color: #666; margin-top: 0;">Submitted on ${data.submittedAt}</p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #999; width: 40%;">Full Name</td>
              <td style="padding: 10px 0; color: #111; font-weight: 600;">${data.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #999;">Email</td>
              <td style="padding: 10px 0; color: #111;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #999;">Phone</td>
              <td style="padding: 10px 0; color: #111;">${data.phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #999;">Date</td>
              <td style="padding: 10px 0; color: #111;">${data.date}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #999;">Time</td>
              <td style="padding: 10px 0; color: #111;">${data.timeSlot}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #999;">Guests</td>
              <td style="padding: 10px 0; color: #111;">${data.guests}</td>
            </tr>
            ${data.occasion ? `
            <tr>
              <td style="padding: 10px 0; color: #999;">Occasion</td>
              <td style="padding: 10px 0; color: #111; text-transform: capitalize;">${data.occasion}</td>
            </tr>` : ""}
            ${data.specialRequests ? `
            <tr>
              <td style="padding: 10px 0; color: #999; vertical-align: top;">Special Requests</td>
              <td style="padding: 10px 0; color: #111;">${data.specialRequests}</td>
            </tr>` : ""}
          </table>

          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="color: #999; font-size: 13px;">This reservation was submitted via the Eateria website.</p>
        </div>
      </body>
    </html>
  `;
}