import ReservationForm from "@/src/components/sections/reservationForm";
import Image from "next/image";

export default function ReservationsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="text-center pt-16 pb-10">
        <span className="text-primary text-sm font-medium uppercase tracking-widest">
          Book a Spot
        </span>
        <h1
          className="text-4xl md:text-5xl font-bold text-foreground mt-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Reserve Your <span className="text-primary">Table</span>
        </h1>
        <p className="text-text-muted mt-3 text-sm">
          Experience exceptional cuisine — book your spot today
        </p>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Panel */}
        <div className="space-y-6">
          <div className="relative w-full h-[300px] sm:h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/images/reservationImg.jpg"
              alt="Featured dish"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* What to Expect */}
          <div className="bg-surface border border-border rounded-2xl p-6">
            <h3
              className="text-foreground font-semibold text-lg mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What to expect
            </h3>
            <ul className="space-y-3">
              {[
                "Warm ambiance with curated lighting and music",
                "Full bar with signature cocktails and fine spirits",
                "Perfect for dates, celebrations, and business dinners",
                "Live music on weekends (Fri & Sat)",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-text-muted"
                >
                  <span className="text-primary mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-amber-50/50 border border-amber-200/50 rounded-2xl p-6">
            <h3
              className="text-amber-800 font-semibold text-lg mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Cancellation Policy
            </h3>
            <p className="text-amber-700 text-sm leading-relaxed">
              Free cancellation up to 2 hours before your reservation. Please
              call us if you need to make any changes.
            </p>
          </div>
        </div>

        {/* Right Panel — Form */}
        <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 h-fit">
          <ReservationForm />
        </div>
      </section>
    </main>
  );
}
