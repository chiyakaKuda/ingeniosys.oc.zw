// components/ResponsiveNav.tsx
"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type NavItem = {
  href: string;
  label: string;
  icon: IconProp;
  emphasized?: boolean;
};

type ResponsiveNavProps = {
  items: NavItem[];
  inverted?: boolean;
  activeSection?: string;
  onNavClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export default function ResponsiveNav({
  items,
  inverted = false,
  activeSection,
  onNavClick,
}: ResponsiveNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClasses = (emphasized?: boolean) =>
    emphasized
      ? "inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,215,0,0.28)]"
      : "text-sm font-semibold transition-colors duration-300 hover:text-[var(--color-gold)]";

  const mobileLinkClasses = (emphasized?: boolean) =>
    emphasized
      ? "block w-full rounded-full bg-[var(--color-gold)] px-5 py-3 text-center text-sm font-semibold text-[var(--color-text)]"
      : "block w-full rounded-xl px-4 py-3 text-sm font-semibold text-[var(--color-text)] hover:bg-[var(--color-light)] transition-colors";

  const isActive = (href: string) => {
    if (!activeSection) return false;
    return activeSection === href.replace("#", "");
  };

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden items-center gap-1 lg:flex">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => onNavClick?.(e, item.href)}
            className={`px-4 py-2 ${
              isActive(item.href)
                ? "text-[var(--color-gold)]"
                : inverted
                ? "text-white/80 hover:text-white"
                : "text-[var(--color-muted)]"
            } ${linkClasses(item.emphasized)}`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        <FontAwesomeIcon
          icon={mobileOpen ? faXmark : faBars}
          className={`text-xl ${inverted ? "text-white" : "text-[var(--color-text)]"}`}
        />
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-4 top-20 w-72 rounded-[28px] border border-[rgba(30,126,52,0.14)] bg-white p-5 shadow-[0_24px_60px_rgba(15,58,54,0.14)]">
            <nav className="flex flex-col gap-2">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    onNavClick?.(e, item.href);
                    setMobileOpen(false);
                  }}
                  className={mobileLinkClasses(item.emphasized)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
