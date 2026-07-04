"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  FileText,
  GraduationCap,
  Pill,
  Truck,
  type LucideIcon,
} from "lucide-react";

type CaseStudy = {
  sector: string;
  name: string;
  problem: string;
  built: string;
  /** Metric strings may contain {{placeholder}} tokens — filled in later. */
  result: string;
  icon: LucideIcon;
};

// ─── EDIT ME: case studies (add/reorder/swap freely) ────────────
const caseStudies: CaseStudy[] = [
  {
    sector: "Healthcare & Pharma",
    name: "Pharma-Bot",
    problem:
      "A busy pharmacy drowning in refill requests and repeat questions.",
    built:
      "A WhatsApp assistant that handles refills, stock checks and reminders on Meta's official Cloud API.",
    result: "{{X}} refills handled per month, {{X}}% fewer missed requests",
    icon: Pill,
  },
  {
    sector: "Logistics & Fleet",
    name: "Fleet-Eye",
    problem: "No live view of vehicles, routes or driver activity.",
    built: "A real-time fleet dashboard with tracking, alerts and reporting.",
    result: "{{X}} vehicles tracked live across {{X}} routes",
    icon: Truck,
  },
  {
    sector: "Education",
    name: "Guinea Fowl High School",
    problem:
      "Records, fees and communication scattered across paper and phones.",
    built:
      "A complete school management system — records, fees, staff and reporting in one place.",
    result: "{{X}} students managed, {{X}} hours of admin saved weekly",
    icon: GraduationCap,
  },
  {
    sector: "Business / Finance",
    name: "Invoicee",
    problem: "Manual invoicing that was slow, error-prone and hard to track.",
    built:
      "A custom invoicing platform with automated billing and payment tracking.",
    result: "{{X}} invoices processed, paid {{X}}x faster",
    icon: FileText,
  },
];

// ─── EDIT ME: aggregate stats ───────────────────────────────────
// `value` is the display string. Wrap in {{ }} until the real figure is
// verified — those render flagged and will NOT count up (never animate a
// fake number). Replace {{8}} with 8 and the count-up activates automatically.
type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: "{{8}}", label: "products shipped" },
  { value: "{{5}}+", label: "sectors served" },
  { value: "{{3}}", label: "global partners" },
  { value: "24/7", label: "systems running" },
];

// ⚠️ VERIFY BEFORE PUBLISHING: only show these partner names/logos once each
// partnership is confirmed accurate and you have permission to display them.
const partners = ["UNICEF", "KOICA", "Amnesty International"];

const CARD_STAGGER_STEP = 90;
const STATS_DELAY = CARD_STAGGER_STEP * 4 + 120;
const CLOSING_DELAY = STATS_DELAY + 260;

const PLACEHOLDER_RE = /(\{\{[^}]*\}\})/g;

/** Renders text, flagging any {{token}} as an obvious placeholder. */
function renderWithPlaceholders(text: string) {
  return text.split(PLACEHOLDER_RE).map((part, index) => {
    if (PLACEHOLDER_RE.test(part)) {
      return (
        <span
          key={index}
          title="Placeholder — replace with a verified figure"
          className="mx-0.5 inline-block rounded border border-dashed border-amber-400/60 bg-amber-400/10 px-1 font-mono text-[0.9em] text-amber-300"
        >
          {part}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

/**
 * Renders a stat value. If it's a plain number (optionally with a trailing
 * "+"), it counts up on scroll into view. Placeholders (containing {{ }}) or
 * any non-numeric label (e.g. "24/7") render statically — we never animate a
 * number that hasn't been verified.
 */
function StatValue({ value }: { value: string }) {
  const reduced = usePrefersReducedMotion();
  const [count, setCount] = useState<number | null>(null);
  const ref = useRef<HTMLSpanElement>(null);

  const isPlaceholder = value.includes("{{");
  const numericMatch = value.match(/^(\d+)(\+?)$/);
  const canCountUp = !isPlaceholder && numericMatch !== null;
  const target = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = numericMatch ? numericMatch[2] : "";

  useEffect(() => {
    // Reduced-motion shows the final value directly in render — no effect,
    // no animation. Only the animated path drives state, and only from
    // inside the rAF callback.
    if (!canCountUp || reduced) return;

    const node = ref.current;
    if (!node) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [canCountUp, reduced, target]);

  if (isPlaceholder) {
    return (
      <span
        title="Placeholder — replace with a verified figure"
        className="inline-block rounded-lg border border-dashed border-amber-400/60 bg-amber-400/10 px-2 font-mono text-amber-300"
      >
        {value}
      </span>
    );
  }

  if (!canCountUp) {
    return <span>{value}</span>;
  }

  const shown = reduced ? `${target}${suffix}` : `${count ?? 0}${suffix}`;
  return <span ref={ref}>{shown}</span>;
}

export default function CaseStudies() {
  return (
    <section className="relative overflow-hidden full-bleed bg-[var(--hero-dark)] py-20 text-[var(--hero-text)] sm:py-24 lg:py-28">
      {/* Eyebrow + heading */}
      <div className="relative mx-auto w-[95vw] max-w-4xl px-4 text-center sm:px-6">
        <Animate>
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--hero-primary)]">
            Proof, not promises
          </span>
          <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl sm:leading-[0.98] lg:text-5xl">
            Real systems, running real businesses.
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--hero-muted)] sm:text-lg">
            We don&apos;t do demos that die after the pitch. Here&apos;s
            software we&apos;ve shipped that&apos;s in daily use across
            Zimbabwe right now.
          </p>
        </Animate>
      </div>

      {/* Case study grid */}
      <div className="relative mx-auto mt-14 w-[95vw] max-w-6xl px-4 sm:px-6 lg:px-10">
        <ul className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <Animate
                key={study.name}
                delay={index * CARD_STAGGER_STEP}
                className="h-full"
              >
                <li className="h-full">
                  <article className="group flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--hero-primary)]/50 hover:shadow-[0_24px_60px_rgba(0,168,107,0.22)] sm:p-8">
                    {/* Sector tag + icon */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex items-center rounded-full border border-[var(--hero-primary)]/25 bg-[var(--hero-primary)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--hero-primary)]">
                        {study.sector}
                      </span>
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--hero-primary)]/15 text-[var(--hero-primary)]"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-[var(--hero-text)]">
                      {study.name}
                    </h3>

                    <dl className="mt-4 space-y-3">
                      <div>
                        <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--hero-muted)]/70">
                          The problem
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-[var(--hero-muted)]">
                          {study.problem}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--hero-muted)]/70">
                          What we built
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-[var(--hero-text)]/85">
                          {study.built}
                        </dd>
                      </div>
                    </dl>

                    {/* Result metric — emphasized on its own accent bar */}
                    <div className="mt-6 flex-1" />
                    <div className="mt-2 rounded-xl border-l-[3px] border-[var(--hero-primary)] bg-[var(--hero-primary)]/10 px-4 py-3">
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--hero-primary)]">
                        Result
                      </p>
                      <p className="mt-1 text-base font-semibold leading-6 text-[var(--hero-text)]">
                        {renderWithPlaceholders(study.result)}
                      </p>
                    </div>
                  </article>
                </li>
              </Animate>
            );
          })}
        </ul>
      </div>

      {/* Aggregate stats band */}
      <Animate
        delay={STATS_DELAY}
        className="relative mx-auto mt-14 w-[95vw] max-w-5xl px-4 sm:px-6 lg:mt-16"
      >
        <div className="rounded-3xl border border-white/8 bg-white/[0.02] px-4 py-8 sm:px-8">
          <dl className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-white/8 px-4 text-center md:[&:not(:first-child)]:border-l"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-4xl font-black text-[var(--hero-primary)] sm:text-5xl">
                    <StatValue value={stat.value} />
                  </span>
                  <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--hero-muted)]">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          {/* Global partners — VERIFY each partnership before publishing. */}
          <div className="mt-8 border-t border-white/8 pt-6 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--hero-muted)]/70">
              In collaboration with
            </p>
            <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {partners.map((partner) => (
                <li
                  key={partner}
                  className="text-sm font-bold tracking-wide text-[var(--hero-text)]/75"
                >
                  {partner}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Animate>

      {/* Closing strip */}
      <Animate
        delay={CLOSING_DELAY}
        className="relative mx-auto mt-14 w-[95vw] max-w-3xl px-4 sm:px-6 lg:mt-16"
      >
        <div className="rounded-3xl border-t border-white/10 bg-white/[0.02] px-6 py-10 text-center sm:px-10">
          <p className="text-lg font-semibold text-[var(--hero-text)] sm:text-xl">
            Your business could be the next one running on software that just
            works.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--hero-primary)] px-7 py-4 text-base font-bold text-[var(--hero-dark)] shadow-[0_24px_54px_rgba(0,168,107,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--hero-primary-hover)]"
            >
              Start your project
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </Link>
            <a
              href="https://wa.me/263772800899"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--hero-muted)] underline-offset-4 transition hover:text-[var(--hero-primary)] hover:underline"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-base" />
              Talk to us on WhatsApp
            </a>
          </div>
        </div>
      </Animate>
    </section>
  );
}
