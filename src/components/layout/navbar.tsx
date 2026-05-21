"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/90 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          style={{ fontFamily: "var(--font-playfair)" }}
          className="text-2xl font-bold text-foreground tracking-tight"
        >
          Eat<span className="text-primary">eria</span>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    isActive
                      ? "text-primary border-b-2 border-primary pb-0.5"
                      : "text-text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}

          {/* Reserve CTA */}
          <li>
            <Link
              href="/reservations"
              className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
            >
              Reserve a Table
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}