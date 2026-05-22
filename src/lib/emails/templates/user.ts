import { ReservationEmailPayload } from "@/src/types/reservation";

export function userConfirmationHtml(data: ReservationEmailPayload): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Reservation Received</title>
      </head>
      <body style="margin: 0; padding: 0; background: #ffffff; font-family: sans-serif;">
        <div style="max-width: 700px; margin: 0 auto; padding: 24px 16px;">

          <h1 style="color: #c8a96e; margin: 0 0 8px 0; font-size: 28px; line-height: 1.3;">
            Hi ${data.fullName} 
          </h1>

          <p style="color: #555; line-height: 1.7; margin: 16px 0 24px 0; font-size: 16px;">
            Thanks for reaching out! We've received your reservation request
            and we're reviewing it now. We'll confirm your booking and get
            back to you shortly.
          </p>

          <div style="margin: 32px 0;">
            <p style="margin: 0 0 12px 0; color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">
              Your Booking Summary
            </p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; color: #999; font-size: 14px; width: 25%; vertical-align: top;">Date</td>
                <td style="padding: 12px 0; color: #111; font-weight: 600; font-size: 15px; word-break: break-word;">${data.date}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #999; font-size: 14px; vertical-align: top;">Time</td>
                <td style="padding: 12px 0; color: #111; font-weight: 600; font-size: 15px; word-break: break-word;">${data.timeSlot}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #999; font-size: 14px; vertical-align: top;">Guests</td>
                <td style="padding: 12px 0; color: #111; font-weight: 600; font-size: 15px; word-break: break-word;">${data.guests}</td>
              </tr>
              ${data.occasion ? `
              <tr>
                <td style="padding: 12px 0; color: #999; font-size: 14px; vertical-align: top;">Occasion</td>
                <td style="padding: 12px 0; color: #111; font-weight: 600; font-size: 15px; text-transform: capitalize; word-break: break-word;">${data.occasion}</td>
              </tr>` : ""}
            </table>
          </div>

          <p style="color: #555; line-height: 1.7; margin: 24px 0 0 0; font-size: 15px;">
            Need to make changes? Call us or reply to this email and we'll sort it out.
          </p>

          <p style="color: #c8a96e; font-weight: 600; margin: 32px 0 0 0; font-size: 16px;">
            — The Eateria Team
          </p>

        </div>
      </body>
    </html>
  `;
}