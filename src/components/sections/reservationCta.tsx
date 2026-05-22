import Image from "next/image";
import Link from "next/link";

export default function reservationCta() {
  return (
    <section className="bg-background py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — Text & CTA */}
        <div className="flex flex-col gap-6">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Reservations
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Do You Have A <span className="text-primary">Dinner Plan</span>{" "}
            Today?
          </h2>

          <p className="text-text-muted text-lg leading-relaxed max-w-md">
            Reserve your table now and let us take care of the rest. Fresh food,
            warm ambiance, and an experience worth remembering.
          </p>

          <div className="flex items-center gap-4 mt-2">
            <Link
              href="/reservations"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200"
            >
              Reserve a Table
            </Link>
            <Link
              href="/menu"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-200"
            >
              View Menu
            </Link>
          </div>
        </div>

        {/* Right — Dish Image */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[380px] h-[380px] bg-primary/20 rounded-full blur-3xl" />
          <Image
            src="/images/ctaImage.png"
            alt="Reserve your table"
            width={520}
            height={520}
            className="relative z-10 object-contain drop-shadow-2xl transition-transform duration-500 hover:rotate-12"
          />
        </div>
      </div>
    </section>
  );
}
