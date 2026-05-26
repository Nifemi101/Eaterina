import { ReservationEmailPayload } from "@/src/types/reservation";

export function userConfirmationHtml(data: ReservationEmailPayload): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Reservation Received</title>
        <style>
          @media only screen and (max-width: 600px) {
            .container { padding: 20px 10px !important; }
            h1 { font-size: 24px !important; }
            p { font-size: 14px !important; }
            .summary-table td { font-size: 13px !important; }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; background: #ffffff; font-family: sans-serif;">
        <div class="container" style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">

          <h1 style="color: #e8a020; margin: 0 0 12px 0; font-size: 32px; line-height: 1.2;">
            Hi ${data.fullName} 
          </h1>

          <p style="color: #555550; line-height: 1.6; margin: 16px 0 24px 0; font-size: 16px;">
            Thanks for reaching out! We've received your reservation request
            and we're reviewing it now. We'll confirm your booking and get
            back to you shortly.
          </p>

          <div style="margin: 32px 0; background: #fdfaf5; border: 1px solid #e8e0d0; border-radius: 12px; padding: 24px;">
            <p style="margin: 0 0 16px 0; color: #888880; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px;">
              Booking Summary
            </p>
            <table class="summary-table" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #888880; font-size: 14px; width: 35%; vertical-align: top;">Date</td>
                <td style="padding: 8px 0; color: #1a1a1a; font-weight: 600; font-size: 15px;">${data.date}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #888880; font-size: 14px; vertical-align: top;">Time</td>
                <td style="padding: 8px 0; color: #1a1a1a; font-weight: 600; font-size: 15px;">${data.timeSlot}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #888880; font-size: 14px; vertical-align: top;">Guests</td>
                <td style="padding: 8px 0; color: #1a1a1a; font-weight: 600; font-size: 15px;">${data.guests}</td>
              </tr>
              ${data.occasion ? `
              <tr>
                <td style="padding: 8px 0; color: #888880; font-size: 14px; vertical-align: top;">Occasion</td>
                <td style="padding: 8px 0; color: #1a1a1a; font-weight: 600; font-size: 15px; text-transform: capitalize;">${data.occasion}</td>
              </tr>` : ""}
            </table>
          </div>

          <p style="color: #555550; line-height: 1.6; margin: 24px 0 0 0; font-size: 15px;">
            Need to make changes? Call us at +1 720-971-6549 or reply to this email and we'll sort it out.
          </p>

          <p style="color: #e8a020; font-weight: 700; margin: 40px 0 0 0; font-size: 18px;">
            — The Eateria Team
          </p>

        </div>
      </body>
    </html>
  `;
}