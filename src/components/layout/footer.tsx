import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  NewTwitterIcon,
  TiktokIcon,
  Location01Icon,
  Call02Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Reservations", href: "/reservations" },
];

const HOURS = [
  { day: "Mon — Thu", time: "11:00 AM – 10:00 PM" },
  { day: "Fri — Sat", time: "11:00 AM – 10:00 PM" },
  { day: "Sunday", time: "2:00 PM – 9:00 PM" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <h2
            className="text-2xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Eat<span className="text-primary">eria</span>
          </h2>
          <p className="text-white/50 text-sm leading-relaxed">
            Crafting unforgettable dining experiences with fresh
            ingredients, bold flavours, and warm hospitality.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://twitter.com/Theeaterina"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors duration-200 flex items-center justify-center"
            >
              <HugeiconsIcon icon={NewTwitterIcon} size={16} color="white" />
            </a>
            <a
              href="https://tiktok.com/@eaterinaFoods"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors duration-200 flex items-center justify-center"
            >
              <HugeiconsIcon icon={TiktokIcon} size={16} color="white" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/50 hover:text-primary text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Opening Hours */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest">
            Opening Hours
          </h3>
          <ul className="flex flex-col gap-3">
            {HOURS.map((item) => (
              <li key={item.day} className="flex flex-col">
                <span className="text-white/50 text-sm">{item.day}</span>
                <span className="text-white text-sm font-medium">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <HugeiconsIcon icon={Location01Icon} size={18} color="#e8a020" />
              <span className="text-white/50 text-sm leading-relaxed">
                3286 Leo Street, Lucien,
                <br />
                Oklahoma 73757, US
              </span>
            </li>
            <li className="flex items-center gap-3">
              <HugeiconsIcon icon={Call02Icon} size={18} color="#e8a020" />
              <a
                href="tel:+17209716549"
                className="text-white/50 hover:text-primary text-sm transition-colors duration-200"
              >
                +1 720-971-6549
              </a>
            </li>
            <li className="flex items-center gap-3">
              <HugeiconsIcon icon={Mail01Icon} size={18} color="#e8a020" />
              <a
                href="mailto:eaterina@gmail.com"
                className="text-white/50 hover:text-primary text-sm transition-colors duration-200"
              >
                eaterina@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-xs">
          {`© ${new Date().getFullYear()} Eateria. All rights reserved.`}
        </p>
        <p className="text-white/30 text-xs">
          Here for the food lovers
        </p>
      </div>
    </footer>
  );
}