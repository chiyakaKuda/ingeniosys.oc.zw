"use client";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavItem = {
  href: string;
  label: string;
  icon: IconDefinition;
  emphasized?: boolean;
};

type ResponsiveNavProps = {
  items: NavItem[];
  inverted: boolean;
};

export default function ResponsiveNav({
  items,
  inverted,
}: ResponsiveNavProps) {
  const pathname = usePathname();

  return (
    <>
      <nav
        aria-label="Primary navigation"
        className="hidden items-center gap-2 lg:flex"
      >
        {items.map((item) => {
          const active = pathname === item.href;
          const isQuote = item.emphasized === true;
          const baseClasses = inverted
            ? "border-white/12 text-white/82 hover:bg-white/10 hover:text-white"
            : "border-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-950";
          const activeClasses = isQuote
            ? "border-[var(--color-gold)] bg-[var(--color-gold)] text-slate-950 shadow-[0_12px_30px_rgba(255,215,0,0.28)]"
            : inverted
              ? "border-white/18 bg-white/14 text-white"
              : "border-[var(--color-green)]/15 bg-[var(--color-green)] text-white shadow-[0_12px_26px_rgba(30,126,52,0.18)]";
          const emphasizedClasses =
            isQuote && !active
              ? inverted
                ? "border-[var(--color-gold)]/50 bg-[var(--color-gold)] text-slate-950 shadow-[0_12px_30px_rgba(255,215,0,0.24)]"
                : "border-[var(--color-green)] bg-[var(--color-green)] text-white shadow-[0_12px_26px_rgba(30,126,52,0.24)]"
              : baseClasses;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
                active ? activeClasses : emphasizedClasses
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-sm" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-3 bottom-4 z-50 flex items-center rounded-[999px] border border-slate-200/90 bg-white/95 px-2 py-2 shadow-[0_20px_50px_rgba(15,23,42,0.16)] backdrop-blur-xl lg:hidden"
      >
        {items.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              className="flex flex-1 justify-center"
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full transition duration-300 ${
                  active
                    ? "bg-[var(--color-green)] text-white shadow-[0_10px_22px_rgba(30,126,52,0.22)]"
                    : item.emphasized
                      ? "bg-[var(--color-gold)] text-slate-950 shadow-[0_10px_22px_rgba(255,215,0,0.22)]"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                <FontAwesomeIcon icon={item.icon} className="text-base" />
                <span className="sr-only">{item.label}</span>
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
