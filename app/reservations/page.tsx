import ReservationForm from "@/src/components/sections/reservationForm";
import Image from "next/image";

export default function ReservationsPage() {
  return (
    <main className="min-h-screen bg-[#111009]">
      {/* Header */}
      <section className="text-center pt-16 pb-10">
        <h1
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Reserve Your <span className="text-primary">Table</span>
        </h1>
        <p className="text-gray-500 mt-3 text-sm">
          Experience exceptional cuisine — book your spot today
        </p>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Panel */}
        <div className="space-y-6">
          {/* Food Image */}
          <div className="relative w-full h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/reservation-dish.jpg"
              alt="Featured dish"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* What to Expect */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3
              className="text-white font-semibold text-lg mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What to expect
            </h3>
            <ul className="space-y-2">
              {[
                "Warm ambiance with curated lighting and music",
                "Full bar with signature cocktails and fine spirits",
                "Perfect for dates, celebrations, and business dinners",
                "Live music on weekends (Fri & Sat)",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-400"
                >
                  <span className="text-primary mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
            <h3
              className="text-primary font-semibold text-lg mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Cancellation Policy
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Free cancellation up to 2 hours before your reservation. Please
              call us if you need to make any changes.
            </p>
          </div>
        </div>

        {/* Right Panel — Form */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <ReservationForm />
        </div>
      </section>
    </main>
  );
}
