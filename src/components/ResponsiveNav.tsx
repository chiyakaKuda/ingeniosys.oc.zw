// components/ResponsiveNav.tsx
"use client";

import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

function subscribeToClientReady() {
  return () => {};
}

export default function ResponsiveNav({
  items,
  inverted = false,
  activeSection,
  onNavClick,
}: ResponsiveNavProps) {
  const mounted = useSyncExternalStore(
    subscribeToClientReady,
    () => true,
    () => false,
  );

  const linkClasses = (emphasized?: boolean) =>
    emphasized
      ? "inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,215,0,0.28)]"
      : "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 hover:text-[var(--color-gold)]";

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
            key={`${item.href}-${item.label}`}
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
            <FontAwesomeIcon icon={item.icon} className="text-sm" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      {mounted
        ? createPortal(
            <nav
              aria-label="Mobile navigation"
              className="fixed inset-x-3 bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-[80] flex items-center justify-between rounded-[999px] border border-[rgba(30,126,52,0.14)] bg-white/95 px-2 py-2 shadow-[0_20px_50px_rgba(15,58,54,0.14)] backdrop-blur-xl lg:hidden"
            >
              {items.map((item) => {
                const active = isActive(item.href);

                return (
                  <a
                    key={`${item.href}-${item.label}`}
                    href={item.href}
                    aria-label={item.label}
                    title={item.label}
                    onClick={(e) => onNavClick?.(e, item.href)}
                    className="flex min-w-0 flex-1 justify-center"
                  >
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full transition duration-300 ${
                        item.emphasized
                          ? "bg-[var(--color-gold)] text-[var(--color-text)] shadow-[0_10px_22px_rgba(255,215,0,0.22)]"
                          : active
                            ? "bg-[var(--color-green)] text-white shadow-[0_10px_22px_rgba(30,126,52,0.22)]"
                            : "text-[var(--color-muted)] hover:bg-[var(--color-light)] hover:text-[var(--color-text)]"
                      }`}
                    >
                      <FontAwesomeIcon icon={item.icon} className="text-base" />
                      <span className="sr-only">{item.label}</span>
                    </span>
                  </a>
                );
              })}
            </nav>,
            document.body,
          )
        : null}
    </>
  );
}
