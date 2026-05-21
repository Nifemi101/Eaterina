export type OccasionType =
  | "birthday"
  | "anniversary"
  | "business"
  | "date"
  | "celebration"
  | "other";

export interface ReservationFormData {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  guests: number;
  timeSlot: string;
  occasion?: OccasionType | "";
  specialRequests?: string;
}

export interface ReservationEmailPayload extends ReservationFormData {
  submittedAt: string;
}

export type ApiResponse =
  | { success: true; message: string }
  | { success: false; error: string };