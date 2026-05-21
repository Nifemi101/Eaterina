import { z } from "zod";

const isDateValid = (dateStr: string) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selected = new Date(dateStr);
  return selected >= today;
};

export const reservationSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be at most 80 characters"),

  email: z.string().email("Please enter a valid email address"),

  phone: z
    .string()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long"),

  date: z
    .string()
    .min(1, "Please select a date")
    .refine(isDateValid, "Date must be today or in the future"),

  guests: z.coerce
    .number({ error: "Please select number of guests" })
    .int()
    .min(1, "At least 1 guest required")
    .max(20, "Maximum 20 guests per reservation"),
  timeSlot: z.string().min(1, "Please select a time slot"),

  occasion: z
    .enum([
      "birthday",
      "anniversary",
      "business",
      "date",
      "celebration",
      "other",
      "",
    ])
    .optional(),

  specialRequests: z
    .string()
    .max(500, "Must be under 500 characters")
    .optional(),
});

export type ReservationSchema = z.infer<typeof reservationSchema>;
