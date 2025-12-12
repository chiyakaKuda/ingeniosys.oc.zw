"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

type ResponsiveNavProps = {
  items: NavItem[];
};

export default function ResponsiveNav({ items }: ResponsiveNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) setOpen(false);
  }, [pathname]);

  return (
    <div className="relative">

      {/* DESKTOP NAV */}
      <div className="hidden items-center gap-4 sm:flex">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                px-4 py-2 rounded-full text-base transition
                font-semibold
                ${
                  active
                    ? "bg-[var(--color-gold)] text-[var(--color-text)] font-bold shadow-sm"
                    : "text-[var(--color-text)] hover:bg-[var(--color-light)]"
                }
              `}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* MOBILE TOGGLE BUTTON */}
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[var(--color-text)] shadow-sm sm:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex flex-col gap-1.5">
          <span className="block h-0.5 w-6 bg-[var(--color-text)]" />
          <span className="block h-0.5 w-6 bg-[var(--color-text)]" />
          <span className="block h-0.5 w-6 bg-[var(--color-text)]" />
        </div>
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute right-0 top-14 z-30 w-48 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg sm:hidden">
          <div className="flex flex-col gap-1">
            {items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    rounded-xl px-3 py-2 text-sm transition font-semibold
                    ${
                      active
                        ? "bg-[var(--color-gold)] text-[var(--color-text)] font-bold"
                        : "text-[var(--color-text)] hover:bg-[var(--color-light)]"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
