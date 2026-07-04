"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  BellRing,
  CalendarCheck,
  CreditCard,
  LifeBuoy,
  MessageCircleQuestion,
  Package,
  type LucideIcon,
} from "lucide-react";

type Capability = {
  label: string;
  icon: LucideIcon;
};

const capabilities: Capability[] = [
  { label: "Bookings", icon: CalendarCheck },
  { label: "Orders", icon: Package },
  { label: "Payments", icon: CreditCard },
  { label: "Reminders", icon: BellRing },
  { label: "FAQs", icon: MessageCircleQuestion },
  { label: "Support", icon: LifeBuoy },
];

// Distance of each node from center, as a percentage of the container side.
const ORBIT_RADIUS_PERCENT = 42;

function nodePosition(index: number) {
  const angleDeg = (360 / capabilities.length) * index - 90;
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    left: 50 + ORBIT_RADIUS_PERCENT * Math.cos(angleRad),
    top: 50 + ORBIT_RADIUS_PERCENT * Math.sin(angleRad),
    isRightHalf: Math.cos(angleRad) >= 0,
  };
}

export default function CapabilityOrbit() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      {/* Tablet / desktop: radial orbit */}
      <div className="relative mx-auto hidden aspect-square w-full md:block">
        {/* Dedicated dark stage so the graphic reads clearly regardless of
            what part of the photo sits behind it */}
        <div
          aria-hidden="true"
          className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(4,16,12,0.72)_0%,rgba(4,16,12,0.42)_58%,transparent_78%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-[8%] animate-orbit-spin rounded-full border border-dashed border-white/20"
        />

        {/* Spokes connecting each node to the center hub */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
        >
          {capabilities.map((capability, index) => {
            const { left, top } = nodePosition(index);
            const isHovered = hoveredIndex === index;
            return (
              <line
                key={capability.label}
                x1={50}
                y1={50}
                x2={left}
                y2={top}
                stroke={
                  isHovered ? "rgba(47,190,126,0.65)" : "rgba(255,255,255,0.12)"
                }
                strokeWidth={isHovered ? 0.6 : 0.35}
                className="transition-[stroke,stroke-width] duration-300"
              />
            );
          })}
        </svg>

        {/* Center hub */}
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#25D366] shadow-[0_20px_50px_rgba(37,211,102,0.45)]">
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-orbit-pulse rounded-full bg-[#25D366]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-orbit-pulse rounded-full bg-[#25D366] [animation-delay:0.9s]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-orbit-pulse rounded-full bg-[#25D366] [animation-delay:1.8s]"
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              aria-hidden="true"
              className="relative text-4xl text-white"
            />
          </div>
        </div>

        {/* Capability nodes — positioned by left/top %, never rotated */}
        <ul
          className="contents"
          aria-label="WhatsApp chatbot capabilities"
        >
          {capabilities.map((capability, index) => {
            const { left, top, isRightHalf } = nodePosition(index);
            const Icon = capability.icon;

            return (
              <li
                key={capability.label}
                className="absolute"
                style={{ left: `${left}%`, top: `${top}%` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* This inner div is the (0,0) anchor: the badge is centered
                    exactly on the ring point, the label is offset outward
                    from that same anchor — so a long label can never pull
                    the badge itself toward the hub. */}
                <div
                  className="group relative animate-orbit-float"
                  style={{ animationDelay: `${index * 260}ms` }}
                >
                  <span className="absolute left-0 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[var(--hero-dark)]/85 text-[var(--hero-primary)] shadow-[0_10px_24px_rgba(0,0,0,0.45)] backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-[calc(50%+4px)]">
                    <Icon
                      className="h-[18px] w-[18px]"
                      strokeWidth={2.2}
                      aria-hidden="true"
                    />
                  </span>
                  <span
                    className={`absolute top-0 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/15 bg-[var(--hero-dark)]/85 px-3 py-1.5 text-sm font-semibold text-[var(--hero-text)] shadow-[0_10px_24px_rgba(0,0,0,0.45)] backdrop-blur-md ${
                      isRightHalf ? "text-left" : "text-right"
                    }`}
                    style={isRightHalf ? { left: "26px" } : { right: "26px" }}
                  >
                    {capability.label}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile: stacked layout, orbit is not shrunk to fit */}
      <div className="md:hidden">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366] shadow-[0_16px_36px_rgba(37,211,102,0.4)]">
          <FontAwesomeIcon
            icon={faWhatsapp}
            aria-hidden="true"
            className="text-3xl text-white"
          />
        </div>

        <ul
          className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3"
          aria-label="WhatsApp chatbot capabilities"
        >
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <li
                key={capability.label}
                className="flex items-center gap-2 rounded-2xl border border-white/15 bg-[var(--hero-dark)]/85 px-3 py-2.5 shadow-[0_10px_24px_rgba(0,0,0,0.35)] backdrop-blur-md"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[var(--hero-primary)]">
                  <Icon className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-[var(--hero-text)]">
                  {capability.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
