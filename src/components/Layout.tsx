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
  faHouse,
  faInfoCircle,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import ChatWidget from "@/components/ChatWidget";

const navigation = [
  { href: "#hero", label: "Home", icon: faHouse },
  { href: "#services", label: "Services", icon: faCubes },
  { href: "#clients", label: "Clients", icon: faBriefcase },
  { href: "#collaborations", label: "Partners", icon: faInfoCircle },
  { href: "#about", label: "About", icon: faInfoCircle },
  { href: "#contact", label: "Start", icon: faPaperPlane, emphasized: true },
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

  const inverted = isHome && !scrolled;
  const headerShellClasses = inverted
    ? "border-white/15 bg-[rgba(15,58,54,0.38)] text-white shadow-[0_26px_70px_rgba(15,58,54,0.24)] backdrop-blur-xl"
    : "border-[rgba(30,126,52,0.12)] bg-white/92 text-[var(--color-text)] shadow-[0_18px_45px_rgba(15,58,54,0.08)] backdrop-blur-xl";
  const brandTextClass = inverted ? "text-white" : "text-[var(--color-text)]";
  const brandMetaClass = inverted ? "text-white/72" : "text-[var(--color-muted)]";

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-white)] text-[var(--color-text)]">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex w-[95vw] max-w-7xl justify-center px-2 sm:px-4 lg:px-6">
          <div
            className={`mt-4 flex w-fit max-w-full min-w-[290px] items-center justify-center gap-4 rounded-[999px] border px-5 py-3 transition-all duration-300 lg:w-full lg:justify-between lg:px-7 ${headerShellClasses}`}
          >
            <Link href="/" className="group flex min-w-0 items-center gap-3">
              <Image
                src="/logo-ing.png"
                alt="Ingenio Systems logo"
                width={56}
                height={56}
                className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14"
                priority
              />
              <div className="min-w-0">
                <span
                  className={`block truncate text-base font-bold transition-colors duration-300 group-hover:text-[var(--color-gold)] sm:text-lg ${brandTextClass}`}
                >
                  Ingenio Systems
                </span>
                <span
                  className={`hidden text-[11px] font-semibold uppercase tracking-[0.22em] sm:block ${brandMetaClass}`}
                >
                  Innovative Tech Company
                </span>
              </div>
            </Link>

            {/* Pass activeSection + click handler to ResponsiveNav */}
            <ResponsiveNav
              items={navigation}
              inverted={inverted}
              activeSection={isHome ? activeSection : undefined}
              onNavClick={handleNavClick}
            />
          </div>
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
