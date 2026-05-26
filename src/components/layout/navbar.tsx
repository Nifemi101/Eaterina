"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-2xl font-bold text-foreground tracking-tight"
          >
            Eat<span className="text-primary">eria</span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-primary relative py-1 ${
                      isActive ? "text-primary" : "text-text-muted"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}

            {/* Reserve CTA */}
            <li>
              <Link
                href="/reservations"
                className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
              >
                Reserve a Table
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2 text-foreground hover:text-primary transition-colors focus:outline-none relative z-[60]"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <HugeiconsIcon
              icon={isMenuOpen ? Cancel01Icon : Menu01Icon}
              size={24}
              className="transition-transform duration-300"
            />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Content */}
        <div
          className={`absolute top-0 right-0 w-[240px] h-full bg-surface border-l border-border transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-8 pt-24">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-2xl font-bold transition-colors ${
                        isActive ? "text-primary" : "text-text-muted hover:text-primary"
                      }`}
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 pt-10 border-t border-border">
              <Link
                href="/reservations"
                className="bg-primary hover:bg-primary-dark text-white text-center font-semibold py-4 rounded-xl transition-colors duration-200 block"
              >
                Reserve a Table
              </Link>
            </div>

            <div className="mt-auto">
              <p className="text-text-muted text-xs text-center">
                © {new Date().getFullYear()} Eateria. <br />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}