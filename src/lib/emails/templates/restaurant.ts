import { ReservationEmailPayload } from "@/src/types/reservation";

export function restaurantEmailHtml(data: ReservationEmailPayload): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Reservation</title>
      </head>
      <body style="margin: 0; padding: 0; background: #ffffff; font-family: sans-serif;">
        <div style="max-width: 700px; margin: 0 auto; padding: 24px 16px;">

          <h1 style="color: #c8a96e; margin: 0 0 4px 0; font-size: 26px;">
            New Table Reservation
          </h1>
          <p style="color: #999; margin: 0 0 24px 0; font-size: 14px;">
            Submitted on ${data.submittedAt}
          </p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 0 0 24px 0;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; color: #999; font-size: 14px; width: 25%; vertical-align: top;">Full Name</td>
              <td style="padding: 12px 0; color: #111; font-weight: 600; font-size: 15px; word-break: break-word;">${data.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #999; font-size: 14px; vertical-align: top;">Email</td>
              <td style="padding: 12px 0; color: #111; font-size: 15px; word-break: break-word;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #999; font-size: 14px; vertical-align: top;">Phone</td>
              <td style="padding: 12px 0; color: #111; font-size: 15px; word-break: break-word;">${data.phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #999; font-size: 14px; vertical-align: top;">Date</td>
              <td style="padding: 12px 0; color: #111; font-size: 15px; word-break: break-word;">${data.date}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #999; font-size: 14px; vertical-align: top;">Time</td>
              <td style="padding: 12px 0; color: #111; font-size: 15px; word-break: break-word;">${data.timeSlot}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #999; font-size: 14px; vertical-align: top;">Guests</td>
              <td style="padding: 12px 0; color: #111; font-size: 15px; word-break: break-word;">${data.guests}</td>
            </tr>
            ${data.occasion ? `
            <tr>
              <td style="padding: 12px 0; color: #999; font-size: 14px; vertical-align: top;">Occasion</td>
              <td style="padding: 12px 0; color: #111; font-size: 15px; text-transform: capitalize; word-break: break-word;">${data.occasion}</td>
            </tr>` : ""}
            ${data.specialRequests ? `
            <tr>
              <td style="padding: 12px 0; color: #999; font-size: 14px; vertical-align: top;">Special Requests</td>
              <td style="padding: 12px 0; color: #111; font-size: 15px; word-break: break-word;">${data.specialRequests}</td>
            </tr>` : ""}
          </table>

          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />

          <p style="color: #bbb; font-size: 13px; margin: 0;">
            Submitted via the Eateria website.
          </p>

        </div>
      </body>
    </html>
  `;
}