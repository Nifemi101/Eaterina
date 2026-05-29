import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    name: "James Alexander",
    role: "Food Blogger",
    image: "/images/user1.jpg",
    review:
      "Eateria completely blew me away. The Beef Oxtail Soup was the most flavourful thing I've had in years. The ambiance, the service, everything was perfect. I'll definitely be back.",
    rating: 5,
  },
  {
    id: 2,
    name: "andrea smith",
    role: "Regular Guest",
    image: "/images/user2.jpg",
    review:
      "I reserved a table for my anniversary and the team went above and beyond. The food was exceptional and the live music made the night truly special. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Noir",
    role: "First Time Visitor",
    image: "/images/user3.jpg",
    review:
      "From the moment we walked in, we felt so welcome. The Chicken Biryani was fragrant and perfectly spiced. Easily the best dining experience I've had in this city.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-primary text-lg">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-background py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Reviews
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mt-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Our Guests Say
          </h2>
          <p className="text-text-muted mt-3 max-w-md mx-auto text-sm md:text-base">
            Real experiences from the people who matter most — our guests.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-surface border border-border rounded-3xl p-6 md:p-8 flex flex-col gap-4 hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              {/* Rating */}
              <StarRating count={t.rating} />

              {/* Review */}
              <p className="text-text-muted text-sm md:text-base leading-relaxed flex-1">
                "{t.review}"
              </p>

              {/* Customer */}
              <div className="flex items-center gap-3 pt-5 border-t border-border mt-2">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-surface-muted flex-shrink-0">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p
                    className="text-foreground font-semibold text-sm"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-text-muted text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}