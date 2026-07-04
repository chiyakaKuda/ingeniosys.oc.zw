"use client";

import Link from "next/link";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  Boxes,
  Code2,
  Factory,
  GraduationCap,
  Hotel,
  Landmark,
  LayoutDashboard,
  MessageCircle,
  ShoppingBag,
  Sprout,
  Stethoscope,
  Truck,
  Wallet,
  type LucideIcon,
} from "lucide-react";

type Capability = {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
};

const capabilities: Capability[] = [
  {
    title: "WhatsApp AI Chatbots",
    description:
      "Official Meta Cloud API assistants that book, sell, answer and remind — 24/7, on the app your customers already use.",
    tags: ["Bookings", "Orders", "Support", "Payments"],
    icon: MessageCircle,
  },
  {
    title: "AI ERP & Dashboards",
    description:
      "Live dashboards and back-office systems — inventory, sales, analytics and reporting — so you run on data, not guesswork.",
    tags: ["Inventory", "Analytics", "Reporting", "Automation"],
    icon: LayoutDashboard,
  },
  {
    title: "Custom Web & Software",
    description:
      "Modern web apps and internal tools built for your exact workflow — from customer portals to full platforms, engineered to scale.",
    tags: ["Web apps", "Portals", "APIs", "Integrations"],
    icon: Code2,
  },
  {
    title: "Management Systems",
    description:
      "Complete systems for schools, clinics and operations — records, scheduling, billing, staff and reporting in one place.",
    tags: ["Records", "Scheduling", "Billing", "Reporting"],
    icon: Boxes,
  },
];

type Industry = {
  label: string;
  icon: LucideIcon;
};

const industries: Industry[] = [
  { label: "Retail & E-commerce", icon: ShoppingBag },
  { label: "Healthcare & Pharma", icon: Stethoscope },
  { label: "Education", icon: GraduationCap },
  { label: "Logistics & Fleet", icon: Truck },
  { label: "Agriculture", icon: Sprout },
  { label: "Finance & Fintech", icon: Wallet },
  { label: "Manufacturing", icon: Factory },
  { label: "Hospitality & Tourism", icon: Hotel },
  { label: "Government / NGO", icon: Landmark },
];

const CARD_STAGGER_STEP = 90;
const INDUSTRY_STAGGER_STEP = 45;
const INDUSTRIES_DELAY = CARD_STAGGER_STEP * 4 + 100;
const CLOSING_DELAY =
  INDUSTRIES_DELAY +
  120 +
  (industries.length + 1) * INDUSTRY_STAGGER_STEP +
  150;

export default function Capabilities() {
  return (
    <section className="relative overflow-hidden full-bleed bg-[var(--hero-dark)] py-20 text-[var(--hero-text)] sm:py-24 lg:py-28">
      {/* Eyebrow + heading */}
      <div className="relative mx-auto w-[95vw] max-w-4xl px-4 text-center sm:px-6">
        <Animate>
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--hero-primary)]">
            What we build
          </span>
          <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl sm:leading-[0.98] lg:text-5xl">
            Your problem, engineered into software.
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--hero-muted)] sm:text-lg">
            WhatsApp automation is what we&apos;re known for — but it&apos;s
            one of many. We design and build software for whatever your
            business runs on. If it can be solved with software, we can
            build it.
          </p>
        </Animate>
      </div>

      {/* Capability grid — illustrative examples, not a fixed menu */}
      <div className="relative mx-auto mt-14 w-[95vw] max-w-6xl px-4 sm:px-6 lg:px-10">
        <Animate>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--hero-muted)]">
            A few of the things we build:
          </p>
        </Animate>

        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Animate
                key={capability.title}
                delay={index * CARD_STAGGER_STEP}
                className="h-full"
              >
                <li className="h-full">
                  <article className="group flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--hero-primary)]/50 hover:shadow-[0_24px_60px_rgba(0,168,107,0.22)] sm:p-8">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--hero-primary)]/15 text-[var(--hero-primary)]"
                      aria-hidden="true"
                    >
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>

                    <h3 className="mt-5 text-xl font-bold text-[var(--hero-text)]">
                      {capability.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-[var(--hero-muted)] sm:text-base">
                      {capability.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {capability.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[var(--hero-primary)]/25 bg-[var(--hero-primary)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--hero-primary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </li>
              </Animate>
            );
          })}
        </ul>
      </div>

      {/* Industries strip — the part that sells the breadth */}
      <div className="relative mx-auto mt-16 w-[95vw] max-w-6xl px-4 text-center sm:px-6 lg:px-10">
        <Animate delay={INDUSTRIES_DELAY}>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--hero-muted)]">
            Industries we serve
          </p>
        </Animate>

        <ul className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Animate
                key={industry.label}
                delay={INDUSTRIES_DELAY + 120 + index * INDUSTRY_STAGGER_STEP}
              >
                <li>
                  <span className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.02] py-2 pl-2.5 pr-4 text-sm font-medium text-[var(--hero-text)]/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--hero-primary)]/50 hover:bg-[var(--hero-primary)]/10 hover:text-[var(--hero-text)] hover:shadow-[0_10px_28px_rgba(0,168,107,0.22)]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/8 text-[var(--hero-muted)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--hero-primary)]/20 group-hover:text-[var(--hero-primary)]">
                      <Icon
                        className="h-3.5 w-3.5"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>
                    {industry.label}
                  </span>
                </li>
              </Animate>
            );
          })}

          <Animate
            delay={
              INDUSTRIES_DELAY +
              120 +
              industries.length * INDUSTRY_STAGGER_STEP
            }
          >
            <li>
              <span className="inline-flex items-center rounded-full bg-[var(--hero-primary)] px-4 py-2.5 text-sm font-bold text-[var(--hero-dark)] shadow-[0_10px_28px_rgba(0,168,107,0.32)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[var(--hero-primary-hover)]">
                + your industry
              </span>
            </li>
          </Animate>
        </ul>
      </div>

      {/* Closing strip */}
      <Animate
        delay={CLOSING_DELAY}
        className="relative mx-auto mt-14 w-[95vw] max-w-3xl px-4 sm:px-6 lg:mt-16"
      >
        <div className="rounded-3xl border-t border-white/10 bg-white/[0.02] px-6 py-10 text-center sm:px-10">
          <p className="text-lg font-semibold text-[var(--hero-text)] sm:text-xl">
            Don&apos;t see your exact need? That&apos;s usually where we do
            our best work.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--hero-primary)] px-7 py-4 text-base font-bold text-[var(--hero-dark)] shadow-[0_24px_54px_rgba(0,168,107,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--hero-primary-hover)]"
            >
              Tell us your problem
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-semibold text-[var(--hero-muted)] underline-offset-4 transition hover:text-[var(--hero-primary)] hover:underline"
            >
              See our work
            </Link>
          </div>
        </div>
      </Animate>
    </section>
  );
}
