import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Award01Icon,
  ChefHatIcon,
  Clock01Icon,
  HatIcon,
} from "@hugeicons/core-free-icons";

const VALUES = [
  {
    icon: ChefHatIcon,
    title: "Culinary Excellence",
    desc: "Every dish is crafted by passionate chefs who treat cooking as an art form, not just a job.",
  },
  {
    icon: HatIcon,
    title: "Made With Love",
    desc: "We put genuine care into every plate — from ingredient sourcing to the final garnish.",
  },
  {
    icon: Award01Icon,
    title: "Quality First",
    desc: "Only the freshest, finest ingredients make it to your table. No shortcuts, ever.",
  },
  {
    icon: Clock01Icon,
    title: "Always On Time",
    desc: "We respect your time. Reservations are honoured and service is always prompt.",
  },
];

const STATS = [
  { value: "8+", label: "Years of Experience" },
  { value: "120+", label: "Menu Items" },
  { value: "8,000+", label: "Happy Guests" },
  { value: "4.9★", label: "Average Rating" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative bg-foreground py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #e8a020 0%, transparent 50%), radial-gradient(circle at 80% 20%, #e8a020 0%, transparent 40%)",
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Our Story
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mt-3 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Passion on Every <span className="text-primary">Plate</span>
          </h1>
          <p className="text-white/60 mt-4 text-lg leading-relaxed">
            From a small family kitchen to a beloved dining destination — this
            is the story of Eateria.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative rounded-3xl overflow-hidden h-[480px]">
          <Image
            src="/images/restaurantImg.png"
            alt="Eateria Restaurant"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Overlay badge */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
            <p
              className="text-foreground font-bold text-2xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Since 2016
            </p>
            <p className="text-text-muted text-sm">Serving with love</p>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Who We Are
          </span>
          <h2
            className="text-4xl font-bold text-foreground leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            More Than Just a <span className="text-primary">Restaurant</span>
          </h2>
          <div className="flex flex-col gap-4 text-text-muted leading-relaxed">
            <p>
              Eateria was born from a simple belief — that great food has the
              power to bring people together. What started as a small family
              kitchen in Oklahoma has grown into one of the most beloved dining
              destinations in the region.
            </p>
            <p>
              Our chefs draw inspiration from global cuisines while staying
              rooted in honest, wholesome cooking. Every recipe is thoughtfully
              developed, every ingredient carefully sourced, and every guest
              treated like family.
            </p>
            <p>
              Whether you're joining us for a quiet dinner, a celebration, or a
              business lunch — we promise an experience worth remembering.
            </p>
          </div>
          <Link
            href="/reservations"
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 w-fit mt-2"
          >
            Reserve a Table
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-foreground py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-5xl font-bold text-primary"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </p>
              <p className="text-white/50 text-sm mt-2 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            What Drives Us
          </span>
          <h2
            className="text-4xl font-bold text-foreground mt-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Core Values
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="bg-surface border border-border rounded-3xl p-6 flex flex-col gap-4 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <HugeiconsIcon icon={value.icon} size={24} color="#e8a020" />
              </div>
              <h3
                className="text-foreground font-semibold text-lg"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {value.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-foreground py-16 px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Ready for an Unforgettable{" "}
          <span className="text-primary">Experience?</span>
        </h2>
        <p className="text-white/50 mt-3 max-w-md mx-auto">
          Book your table today and let us take care of everything else.
        </p>
        <Link
          href="/reservations"
          className="inline-block mt-6 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200"
        >
          Reserve a Table
        </Link>
      </section>
    </main>
  );
}
