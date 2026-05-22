import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-background overflow-hidden flex items-center">
      {/* Background decoration */}
      <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[350px] h-[350px] bg-primary-light/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left — Text & CTA */}
        <div className="flex flex-col gap-6 z-10">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full w-fit">
            Fine Dining Experience
          </span>

          {/* Heading */}
          <h1
            className="text-5xl md:text-6xl font-bold text-foreground leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            We Serve The{" "}
            <span className="relative inline-block">
              <span className="text-primary">Taste</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M0 6 Q50 0 100 4 Q150 8 200 2"
                  stroke="#e8a020"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>{" "}
            You Love
          </h1>

          {/* Subtext */}
          <p className="text-text-muted text-lg leading-relaxed max-w-md">
            An unforgettable dining experience crafted with passion. Fresh
            ingredients, bold flavours, and a warm atmosphere waiting just for
            you.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4 mt-2">
            <Link
              href="/menu"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
            >
              Explore Menu
            </Link>
            <Link
              href="/reservations"
              className="border border-border hover:border-primary text-foreground hover:text-primary font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-4 pt-6 border-t border-border">
            {[
              { value: "120+", label: "Menu Items" },
              { value: "4.9★", label: "Average Rating" },
              { value: "8k+", label: "Happy Guests" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {stat.value}
                </p>
                <p className="text-text-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Dish Image */}
        <div className="relative flex items-center justify-center z-10">
          {/* Glow behind dish */}
          <div className="absolute w-[380px] h-[380px] bg-primary/20 rounded-full blur-2xl" />

          <Image
            src="/images/heroPlate.png"
            alt="Featured dish"
            width={500}
            height={500}
            className="relative z-10 drop-shadow-2xl object-contain transition-transform duration-500 hover:rotate-12"
            priority
          />
        </div>
      </div>
    </section>
  );
}
