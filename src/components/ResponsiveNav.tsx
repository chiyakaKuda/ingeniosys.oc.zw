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
                px-4 py-2 rounded-full text-base transition font-semibold
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

      
      {/* MOBILE HAMBURGER */}
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="sm:hidden relative flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[var(--color-text)] shadow-sm transition"
      >
        <div className="relative h-5 w-6">
          <span
            className={`
              absolute left-0 top-0 block h-0.5 w-full bg-[var(--color-text)] transform transition-all duration-300
              ${open ? "translate-y-2.5 rotate-45" : ""}
            `}
          />
          <span
            className={`
              absolute left-0 top-2.5 block h-0.5 w-full bg-[var(--color-text)] transition-all duration-300
              ${open ? "opacity-0" : ""}
            `}
          />
          <span
            className={`
              absolute left-0 top-5 block h-0.5 w-full bg-[var(--color-text)] transform transition-all duration-300
              ${open ? "-translate-y-2.5 -rotate-45" : ""}
            `}
          />
        </div>
      </button>


      {/* MOBILE MENU */}
      {open && (
        <div className="
          absolute right-0 top-14 z-30 w-60 
          rounded-2xl border border-slate-200 bg-white 
          p-4 shadow-[0_6px_24px_rgba(0,0,0,0.08)]
          animate-fadeIn
        ">
          <div className="flex flex-col gap-2">
            {items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    px-3 py-3 rounded-xl text-base font-semibold transition
                    ${
                      active
                        ? "bg-[var(--color-gold)] text-[var(--color-text)] shadow-sm"
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
