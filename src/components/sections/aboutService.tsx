import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CalendarAdd01Icon,
  Clock01Icon,
  ChefHatIcon,
  CleanIcon,
  Award01Icon,
  MusicNote01Icon,
} from "@hugeicons/core-free-icons";

const SERVICES = [
  {
    icon: CalendarAdd01Icon,
    label: "Pre-Reservation",
    desc: "Book your table in advance hassle-free",
  },
  {
    icon: Clock01Icon,
    label: "24/7 Service",
    desc: "We're always here when you need us",
  },
  {
    icon: ChefHatIcon,
    label: "Expert Chefs",
    desc: "Trained professionals passionate about food",
  },
  {
    icon: CleanIcon,
    label: "Clean Kitchen",
    desc: "Hygiene and quality are our top priority",
  },
  {
    icon: Award01Icon,
    label: "Cozy Atmosphere",
    desc: "A warm space perfect for every occasion",
  },
  {
    icon: MusicNote01Icon,
    label: "Live Music",
    desc: "Live performances every Friday & Saturday",
  },
];

export default function AboutServices() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Chef Image */}
        <div className="relative flex justify-center items-end">
          <div
            className="relative z-10"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 60%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 60%, transparent 100%)",
            }}
          >
            <Image
              src="/images/chef.png"
              alt="Our Chef"
              width={499}
              height={499}
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Right — Text & Services */}
        <div className="flex flex-col gap-6">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2
            className="text-4xl font-bold text-foreground leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            We Are More Than <br />
            <span className="text-primary">Just a Restaurant</span>
          </h2>

          <p className="text-text-muted leading-relaxed">
            At Eateria, every detail matters — from the sourcing of fresh
            ingredients to the moment your plate arrives at the table. We craft
            experiences, not just meals.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            {SERVICES.map((service) => (
              <div
                key={service.label}
                className="flex items-start gap-3 bg-surface border border-border rounded-2xl p-4 hover:border-primary/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex-shrink-0">
                  <HugeiconsIcon
                    icon={service.icon}
                    size={28}
                    color="#e8a020"
                  />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">
                    {service.label}
                  </p>
                  <p className="text-text-muted text-xs mt-0.5 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
