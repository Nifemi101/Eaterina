import Image from "next/image";

const DISHES = [
  {
    id: 1,
    name: "Beef Oxtail Soup",
    image: "/images/beefSoup.png",
    description:
      "Slow-cooked oxtail in a rich, deeply savory broth with tender vegetables and aromatic herbs. A soul-warming classic.",
    tag: "Chef's Favourite",
  },
  {
    id: 2,
    name: "Creamy Tom-Kah-Gai Soup",
    image: "/images/creamySoup.png",
    description:
      "A velvety Thai coconut soup with lemongrass, galangal, mushrooms, and a delicate balance of sweet, sour, and spice.",
    tag: "Most Ordered",
  },
  {
    id: 3,
    name: "Chicken Biryani",
    image: "/images/rice.png",
    description:
      "Fragrant basmati rice layered with spiced chicken, caramelised onions, saffron, and fresh herbs. A timeless classic.",
    tag: "Fan Favourite",
  },
  {
    id: 4,
    name: "Stir Fry Pasta",
    image: "/images/stirFryPasta.png",
    description:
      "Al dente pasta tossed in a bold stir-fry sauce with crisp vegetables, garlic, and a hint of chilli heat.",
    tag: "House Special",
  },
];

export default function PopularDishes() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Our Menu
          </span>
          <h2
            className="text-4xl font-bold text-foreground mt-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Popular Dishes
          </h2>
          <p className="text-text-muted mt-3 max-w-md mx-auto">
            Handpicked favourites loved by our guests — crafted fresh, served
            with care.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DISHES.map((dish) => (
            <div
              key={dish.id}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-surface border border-border rounded-3xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center sm:text-left"
            >
              {/* Image */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 640px) 96px, 112px"
                  className="object-contain drop-shadow-md"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col items-center sm:items-start gap-1.5">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full w-fit">
                  {dish.tag}
                </span>
                <h3
                  className="text-foreground font-semibold text-lg leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {dish.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed line-clamp-2 max-w-xs">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
