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
    if (open) {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className="relative">
      <div className="hidden items-center gap-3 text-sm font-medium sm:flex sm:gap-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full px-3 py-2 text-slate-800 transition hover:bg-white hover:text-slate-900"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm sm:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">Menu</span>
        <div className="flex flex-col gap-1.5">
          <span className="block h-0.5 w-6 bg-slate-800" />
          <span className="block h-0.5 w-6 bg-slate-800" />
          <span className="block h-0.5 w-6 bg-slate-800" />
        </div>
      </button>

      {open && (
        <div className="absolute right-0 top-14 z-30 w-48 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg sm:hidden">
          <div className="flex flex-col gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

