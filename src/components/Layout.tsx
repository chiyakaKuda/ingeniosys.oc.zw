"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ResponsiveNav from "@/components/ResponsiveNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faCubes,
  faEnvelope,
  faHouse,
  faInfoCircle,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import ChatWidget from "@/components/ChatWidget";

const navigation = [
  { href: "#hero", label: "Home", icon: faHouse },
  { href: "#about", label: "About", icon: faInfoCircle },
  { href: "#services", label: "Services", icon: faCubes },
  { href: "/portfolio", label: "Portfolio", icon: faBriefcase },
  { href: "#collaborations", label: "Partners", icon: faInfoCircle },
  { href: "#contact", label: "Contact", icon: faEnvelope },
  {
    href: "/quote",
    label: "Start Project",
    icon: faPaperPlane,
    emphasized: true,
  },
];

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const year = new Date().getFullYear();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const syncScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    syncScroll();
    window.addEventListener("scroll", syncScroll, { passive: true });

    return () => window.removeEventListener("scroll", syncScroll);
  }, []);

  // Track active section for scroll spy
  useEffect(() => {
    if (!isHome) return;

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHome]);

  // Smooth scroll handler for hash links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (!isHome) {
        window.location.href = `/${href}`;
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        setActiveSection(href.replace("#", ""));
      }
    }
  };

  const onHero = isHome && activeSection === "hero";

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-white)] text-[var(--color-text)]">
      <header
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-colors duration-300 ${
          onHero
            ? "border-b border-white/10 bg-[var(--hero-dark)]/70"
            : `border-b border-black/[0.04] bg-white/96 ${
                scrolled ? "shadow-[0_16px_42px_rgba(15,58,54,0.08)]" : "shadow-none"
              }`
        }`}
      >
        <div className="mx-auto flex h-[76px] w-[95vw] max-w-7xl items-center justify-between px-3 sm:px-4 lg:px-6">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3 lg:min-w-[280px]"
          >
            <Image
              src="/logo-ing.png"
              alt="Ingenio Systems logo"
              width={48}
              height={48}
              className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="min-w-0">
              <span
                className={`block truncate text-lg font-extrabold leading-none tracking-[0.02em] transition-colors duration-300 group-hover:text-[var(--hero-primary)] ${
                  onHero ? "text-[var(--hero-text)]" : "text-[#101828]"
                }`}
              >
                Ingenio Systems
              </span>
              <span
                className={`mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.24em] sm:block ${
                  onHero ? "text-white/55" : "text-[#667085]"
                }`}
              >
                Powered by INGENIO GREEN
              </span>
            </div>
          </Link>

          <ResponsiveNav
            items={navigation}
            activeSection={isHome ? activeSection : undefined}
            onNavClick={handleNavClick}
            variant={onHero ? "light" : "dark"}
          />
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto w-[95vw] max-w-7xl px-4 pb-28 pt-0 sm:px-6 sm:pb-16 sm:pt-0 lg:px-10">
          {children}
        </div>
      </main>

      <footer className="border-t border-[rgba(30,126,52,0.12)] bg-gradient-to-br from-[var(--color-green-light)]/55 via-white to-[var(--color-light)] text-[var(--color-text)]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
            <div className="flex flex-col items-start md:col-span-1">
              <div className="mb-6 flex items-center gap-4">
                <Link href="/" className="group">
                  <Image
                    src="/logo-ing.png"
                    alt="Ingenio Systems logo"
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <div>
                  <h4 className="text-2xl font-bold text-[var(--color-text)]">
                    Ingenio Systems
                  </h4>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    Powered by INGENIO GREEN
                  </p>
                </div>
              </div>
              <p className="mb-6 leading-relaxed text-[var(--color-muted)]">
                An innovative tech company building AI-driven ERP systems,
                healthcare bots, school platforms, websites, automation,
                and sustainable manufacturing solutions.
              </p>
              <p className="text-sm text-[var(--color-muted)]">
                Copyright {year} Ingenio Systems. All rights reserved.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:col-span-2 sm:grid-cols-2 md:gap-16">
              <div>
                <h5 className="mb-4 text-lg font-semibold text-[var(--color-text)]">
                  Sections
                </h5>
                <ul className="space-y-3">
                  {navigation.map((item) => (
                    <li key={`${item.href}-${item.label}`}>
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="inline-block text-[var(--color-muted)] transition-all hover:text-[var(--color-green)] hover:underline cursor-pointer"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="mb-4 text-lg font-semibold text-[var(--color-text)]">
                  Connect
                </h5>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://wa.me/263772800899"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center text-[var(--color-muted)] transition-all hover:text-[var(--color-green)]"
                    >
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="mr-3 text-xl transition-transform group-hover:scale-110"
                      />
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/ingeniosystems"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center text-[var(--color-muted)] transition-all hover:text-[var(--color-green)]"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="mr-3 text-xl transition-transform group-hover:scale-110"
                      />
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}
