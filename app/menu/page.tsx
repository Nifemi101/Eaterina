"use client";

import { useState } from "react";
import Image from "next/image";
import menuData from "@/src/lib/data/menuItems.json";
const MENU_ITEMS = menuData as MenuItem[];

type Category =
  | "All"
  | "Starters"
  | "Soups"
  | "Main Course"
  | "Pasta"
  | "Drinks"
  | "Desserts";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: Exclude<Category, "All">;
  image: string;
  badge?: string;
}

const CATEGORIES: Category[] = [
  "All",
  "Starters",
  "Soups",
  "Main Course",
  "Pasta",
  "Drinks",
  "Desserts",
];

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="bg-surface border border-border rounded-3xl p-4 flex flex-col xs:flex-row items-center xs:items-start gap-5 hover:shadow-md hover:border-primary/30 transition-all duration-300 text-center xs:text-left">
      {/* Image */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 80px, 96px"
          className="object-contain drop-shadow-md"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 flex-1 min-w-0 w-full">
        <div className="flex flex-col xs:flex-row items-center xs:items-start justify-between gap-2">
          <div className="flex flex-col items-center xs:items-start gap-1">
            {item.badge && (
              <span className="text-[10px] font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full w-fit">
                {item.badge}
              </span>
            )}
            <h3
              className="text-foreground font-semibold text-base sm:text-lg leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {item.name}
            </h3>
          </div>
          <span className="text-primary font-bold text-base flex-shrink-0">
            {item.price}
          </span>
        </div>
        <p className="text-text-muted text-xs sm:text-sm leading-relaxed line-clamp-2 max-w-xs mx-auto xs:mx-0">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Header */}
      <section className="text-center pt-16 md:pt-24 pb-10 px-6">
        <span className="text-primary text-sm font-medium uppercase tracking-widest">
          What We Serve
        </span>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Our <span className="text-primary">Menu</span>
        </h1>
        <p className="text-text-muted mt-3 max-w-md mx-auto text-sm md:text-base">
          Every dish is crafted with fresh ingredients and bold flavours.
          Something for every craving.
        </p>
      </section>

      {/* Category Tabs */}
      <div className="sticky top-16 md:top-20 z-40 bg-background/90 backdrop-blur-md border-b border-border px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-sm"
                  : "bg-surface border border-border text-text-muted hover:border-primary/50 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted">No items found in this category.</p>
          </div>
        )}
      </section>
    </main>
  );
}
