"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  reservationSchema,
  ReservationSchema,
} from "@/src/lib/validation/reservation";
import { ApiResponse } from "@/src/types/reservation";

const TIME_SLOTS = [
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
];

const OCCASIONS = [
  { value: "birthday", label: "Birthday" },
  { value: "anniversary", label: "Anniversary" },
  { value: "business", label: "Business" },
  { value: "date", label: "Date Night" },
  { value: "celebration", label: "Celebration" },
  { value: "other", label: "Other" },
];

export default function ReservationForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ReservationSchema>({
    resolver: zodResolver(reservationSchema) as any,
  });

  const selectedTimeSlot = watch("timeSlot");

  const onSubmit: SubmitHandler<ReservationSchema> = async (data) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: ApiResponse = await res.json();

      if (result.success) {
        setStatus("success");
        setServerMessage(result.message);
        reset();
        setTimeout(() => {
          setStatus("idle");
          setServerMessage("");
        }, 3000);
      } else {
        setStatus("error");
        setServerMessage(result.error);
      }
    } catch {
      setStatus("error");
      setServerMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Full Name */}
      <div>
        <label className="block text-sm text-text-muted mb-1.5">
          Full Name *
        </label>
        <input
          {...register("fullName")}
          placeholder="Your Name Here"
          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
        />
        {errors.fullName && (
          <p className="text-accent text-xs mt-1">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-text-muted mb-1.5">
            Email *
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
          />
          {errors.email && (
            <p className="text-accent text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm text-text-muted mb-1.5">
            Phone *
          </label>
          <input
            {...register("phone")}
            placeholder="+1 234 567 8900"
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
          />
          {errors.phone && (
            <p className="text-accent text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Date & Guests */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-text-muted mb-1.5">
            {" "}
            Date *
          </label>
          <input
            {...register("date")}
            type="date"
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
          />
          {errors.date && (
            <p className="text-accent text-xs mt-1">{errors.date.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm text-text-muted mb-1.5">
            {" "}
            Guests *
          </label>
          <input
            {...register("guests", { valueAsNumber: true })}
            type="number"
            min={1}
            max={20}
            placeholder="2"
            className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
          />
          {errors.guests && (
            <p className="text-accent text-xs mt-1">{errors.guests.message}</p>
          )}
        </div>
      </div>

      {/* Time Slots */}
      <div>
        <label className="block text-sm text-text-muted mb-2">
          Time Slot *
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() =>
                setValue("timeSlot", slot, { shouldValidate: true })
              }
              className={`py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedTimeSlot === slot
                  ? "bg-primary text-white"
                  : "bg-background border border-border text-text-muted hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
        {errors.timeSlot && (
          <p className="text-accent text-xs mt-1">{errors.timeSlot.message}</p>
        )}
      </div>

      {/* Occasion */}
      <div>
        <label className="block text-sm text-text-muted mb-1.5">
          Select Occasion (Optional)
        </label>
        <select
          {...register("occasion")}
          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-text-muted focus:outline-none focus:border-primary transition-colors"
        >
          <option value="">Birthday, Anniversary, Business...</option>
          {OCCASIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {/* Special Requests */}
      <div>
        <label className="block text-sm text-text-muted mb-1.5">
          Special Requests (Optional)
        </label>
        <textarea
          {...register("specialRequests")}
          rows={3}
          placeholder="Dietary restrictions, preferred seating, decorations..."
          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors resize-none"
        />
        {errors.specialRequests && (
          <p className="text-accent text-xs mt-1">
            {errors.specialRequests.message}
          </p>
        )}
      </div>

      {/* Server Feedback */}
      {status === "success" && (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-3 text-green-600 text-sm">
          ✅ {serverMessage}
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-accent text-sm">
          ❌ {serverMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-colors duration-200"
      >
        {status === "loading" ? "Sending..." : "✓ Confirm Reservation"}
      </button>

      <p className="text-center text-text-muted text-xs">
        By confirming, you agree to our cancellation policy
      </p>
    </form>
  );
}
