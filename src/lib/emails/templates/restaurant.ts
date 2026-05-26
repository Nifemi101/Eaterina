import { ReservationEmailPayload } from "@/src/types/reservation";

export function restaurantEmailHtml(data: ReservationEmailPayload): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Reservation</title>
        <style>
          @media only screen and (max-width: 600px) {
            .container { padding: 20px 10px !important; }
            h1 { font-size: 22px !important; }
            .summary-table td { font-size: 13px !important; }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; background: #ffffff; font-family: sans-serif;">
        <div class="container" style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">

          <h1 style="color: #1a1a1a; margin: 0 0 4px 0; font-size: 28px; line-height: 1.2;">
            New Table Reservation
          </h1>
          <p style="color: #888880; margin: 0 0 24px 0; font-size: 14px;">
            Submitted on ${data.submittedAt}
          </p>

          <div style="margin: 32px 0; background: #fdfaf5; border: 1px solid #e8e0d0; border-radius: 12px; padding: 24px;">
            <p style="margin: 0 0 16px 0; color: #888880; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px;">
              Reservation Details
            </p>
            <table class="summary-table" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #888880; font-size: 14px; width: 40%; vertical-align: top;">Full Name</td>
                <td style="padding: 10px 0; color: #1a1a1a; font-weight: 600; font-size: 15px;">${data.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888880; font-size: 14px; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; color: #1a1a1a; font-weight: 600; font-size: 15px;">${data.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888880; font-size: 14px; vertical-align: top;">Phone</td>
                <td style="padding: 10px 0; color: #1a1a1a; font-weight: 600; font-size: 15px;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888880; font-size: 14px; vertical-align: top;">Date</td>
                <td style="padding: 10px 0; color: #1a1a1a; font-weight: 600; font-size: 15px;">${data.date}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888880; font-size: 14px; vertical-align: top;">Time</td>
                <td style="padding: 10px 0; color: #1a1a1a; font-weight: 600; font-size: 15px;">${data.timeSlot}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888880; font-size: 14px; vertical-align: top;">Guests</td>
                <td style="padding: 10px 0; color: #1a1a1a; font-weight: 600; font-size: 15px;">${data.guests}</td>
              </tr>
              ${data.occasion ? `
              <tr>
                <td style="padding: 10px 0; color: #888880; font-size: 14px; vertical-align: top;">Occasion</td>
                <td style="padding: 10px 0; color: #1a1a1a; font-weight: 600; font-size: 15px; text-transform: capitalize;">${data.occasion}</td>
              </tr>` : ""}
              ${data.specialRequests ? `
              <tr>
                <td style="padding: 10px 0; color: #888880; font-size: 14px; vertical-align: top;">Special Requests</td>
                <td style="padding: 10px 0; color: #1a1a1a; font-weight: 600; font-size: 15px;">${data.specialRequests}</td>
              </tr>` : ""}
            </table>
          </div>

          <p style="color: #bbb; font-size: 13px; margin: 40px 0 0 0;">
            Submitted via the Eateria website reservation system.
          </p>

        </div>
      </body>
    </html>
  `;
}