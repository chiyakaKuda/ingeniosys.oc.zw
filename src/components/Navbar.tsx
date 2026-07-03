"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/events", label: "Events" },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex h-[84px] w-[95vw] max-w-7xl items-center justify-between px-3 sm:px-4 lg:px-6">
        <Link href="/" className="group relative z-[60] flex min-w-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt="Ingenio Systems logo"
            width={44}
            height={44}
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="truncate text-lg font-extrabold tracking-[0.02em] text-white">
            Ingenio Systems
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 xl:flex"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative whitespace-nowrap py-2 text-[16px] font-bold uppercase tracking-[0.05em] transition-colors duration-200 ${
                  active ? "text-[var(--hero-primary)]" : "text-white hover:text-[var(--hero-primary)]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-[var(--hero-primary)] transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          href="/quote"
          className="hidden shrink-0 items-center justify-center rounded-full border-2 border-white/30 px-7 py-3 text-[15px] font-bold uppercase tracking-[0.03em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-[var(--hero-primary)] hover:bg-[var(--hero-primary)] hover:text-[var(--hero-dark)] xl:inline-flex"
        >
          Get a Quote
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-[60] flex h-11 w-11 items-center justify-center text-white transition duration-300 hover:text-[var(--hero-primary)] xl:hidden"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} className="text-2xl" />
        </button>
      </div>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-[var(--hero-dark)] transition-opacity duration-500 xl:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(0,168,107,0.28),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_100%,rgba(0,168,107,0.12),transparent_45%)]" />

        <div className="h-[84px] shrink-0" aria-hidden="true" />

        <nav
          aria-label="Mobile navigation"
          className="relative flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-8 py-6 sm:px-12"
        >
          {navItems.map((item, index) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${index * 50 + 100}ms` : "0ms" }}
                className={`border-b border-white/10 py-3 text-2xl font-black uppercase leading-none tracking-tight transition-all duration-500 sm:text-3xl ${
                  open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                } ${active ? "text-[var(--hero-primary)]" : "text-white active:text-[var(--hero-primary)]"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div
          className={`relative shrink-0 px-8 pb-10 pt-2 transition-all duration-500 sm:px-12 ${
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: open ? "450ms" : "0ms" }}
        >
          <Link
            href="/quote"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-[var(--hero-primary)] px-6 py-4 text-lg font-black uppercase tracking-[0.03em] text-[var(--hero-dark)] shadow-[0_16px_36px_rgba(0,168,107,0.35)] transition duration-300 hover:bg-[var(--hero-primary-hover)]"
          >
            Get a Quote
          </Link>
          <a
            href="https://wa.me/263772800899"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-white/50 transition hover:text-white"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            +263 77 280 0899
          </a>
        </div>
      </div>
    </header>
  );
}
