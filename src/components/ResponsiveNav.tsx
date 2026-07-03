// components/ResponsiveNav.tsx
"use client";

import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
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
  activeSection?: string;
  onNavClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  variant?: "light" | "dark";
};

function subscribeToClientReady() {
  return () => {};
}

export default function ResponsiveNav({
  items,
  activeSection,
  onNavClick,
  variant = "dark",
}: ResponsiveNavProps) {
  const pathname = usePathname();
  const mounted = useSyncExternalStore(
    subscribeToClientReady,
    () => true,
    () => false,
  );
  const ctaItem = items.find((item) => item.emphasized);
  const navigationItems = items.filter((item) => !item.emphasized);

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      if (!activeSection) return false;
      return activeSection === href.replace("#", "");
    }

    return pathname === href;
  };

  return (
    <>
      <div className="hidden flex-1 items-center justify-end gap-8 lg:flex">
        <nav
          aria-label="Primary navigation"
          className="flex flex-1 items-center justify-center gap-8 xl:gap-10"
        >
          {navigationItems.map((item) => (
            <a
              key={`${item.href}-${item.label}`}
              href={item.href}
              onClick={(e) => onNavClick?.(e, item.href)}
              className={`text-[15px] font-medium transition-colors duration-200 ${
                isActive(item.href)
                  ? "text-[var(--hero-primary)]"
                  : variant === "light"
                    ? "text-white/80 hover:text-[var(--hero-primary)]"
                    : "text-[#344054] hover:text-[var(--hero-primary)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {ctaItem ? (
          <a
            href={ctaItem.href}
            onClick={(e) => onNavClick?.(e, ctaItem.href)}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--hero-primary)] px-6 py-3 text-[15px] font-bold text-[var(--hero-dark)] shadow-[0_12px_28px_rgba(0,168,107,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--hero-primary-hover)] hover:shadow-[0_16px_34px_rgba(0,168,107,0.3)]"
          >
            {ctaItem.label}
          </a>
        ) : null}
      </div>

      {mounted
        ? createPortal(
            <nav
              aria-label="Mobile navigation"
              className="fixed inset-x-3 bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-[80] flex items-center justify-between rounded-[999px] border border-[rgba(30,126,52,0.14)] bg-white/95 px-1.5 py-2 shadow-[0_20px_50px_rgba(15,58,54,0.14)] backdrop-blur-xl lg:hidden"
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
                      className={`flex items-center justify-center rounded-full transition duration-300 ${
                        item.emphasized
                          ? "bg-[var(--hero-primary)] text-[var(--hero-dark)] shadow-[0_10px_22px_rgba(0,168,107,0.22)]"
                          : active
                            ? "bg-[var(--hero-primary)] text-white shadow-[0_10px_22px_rgba(0,168,107,0.22)]"
                            : "text-[var(--color-muted)] hover:bg-[var(--color-light)] hover:text-[var(--color-text)]"
                      } h-10 w-10 sm:h-11 sm:w-11`}
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
