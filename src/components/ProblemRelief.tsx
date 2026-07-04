"use client";

import Link from "next/link";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  Bot,
  CalendarCheck,
  CalendarX,
  Clock,
  FileQuestion,
  History,
  Infinity as InfinityIcon,
  RefreshCw,
  UserX,
  Zap,
  type LucideIcon,
} from "lucide-react";

// Each item is split into `lead` (bolded skim-words) + `rest` — the
// concatenation of the two is the original, unedited copy.
type ComparisonItem = {
  lead: string;
  rest: string;
  icon: LucideIcon;
};

const problems: ComparisonItem[] = [
  {
    lead: "After-hours messages",
    rest: " sit unread till morning — the customer already moved on.",
    icon: Clock,
  },
  {
    lead: "Staff answer",
    rest: " the same questions all day: price? open? in stock?",
    icon: RefreshCw,
  },
  {
    lead: "Bookings and orders",
    rest: " get missed, forgotten, or double-booked.",
    icon: CalendarX,
  },
  {
    lead: "No record",
    rest: " of who asked what, so follow-ups slip through.",
    icon: FileQuestion,
  },
  {
    lead: "One person,",
    rest: " one phone, hundreds of chats.",
    icon: UserX,
  },
];

const reliefs: ComparisonItem[] = [
  {
    lead: "Every message",
    rest: " answered in seconds — 2pm or 2am, weekday or holiday.",
    icon: Zap,
  },
  {
    lead: "Repetitive questions",
    rest: " handled automatically; your team does the real work.",
    icon: Bot,
  },
  {
    lead: "Bookings, orders and",
    rest: " reminders captured and logged, every time.",
    icon: CalendarCheck,
  },
  {
    lead: "Full conversation",
    rest: " history, ready to hand to a human when it matters.",
    icon: History,
  },
  {
    lead: "One assistant,",
    rest: " unlimited chats — your brand, your number.",
    icon: InfinityIcon,
  },
];

const LEFT_STAGGER_START = 0;
const RIGHT_STAGGER_START = 380;
const ROW_STAGGER_STEP = 70;

export default function ProblemRelief() {
  return (
    <section className="relative overflow-hidden full-bleed bg-[var(--hero-dark)] py-20 text-[var(--hero-text)] sm:py-24 lg:py-28">
      {/* Eyebrow + heading */}
      <div className="relative mx-auto w-[95vw] max-w-4xl px-4 text-center sm:px-6">
        <Animate>
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--hero-primary)]">
            The problem
          </span>
          <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl sm:leading-[0.98] lg:text-5xl">
            Right now, you&apos;re losing chats you never even see.
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--hero-muted)] sm:text-lg">
            Your customers reach you on WhatsApp at every hour — and every
            message that waits is a booking, an order, or a patient going
            somewhere else.
          </p>
        </Animate>
      </div>

      {/* Comparison columns */}
      <div className="relative mx-auto mt-14 w-[95vw] max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-0">
          {/* LEFT: the problem — dim, flat, tired */}
          <div className="h-full rounded-2xl border border-white/8 bg-black/25 p-6 sm:p-8 lg:rounded-r-none lg:border-r-0">
            <Animate>
              <h3 className="text-lg font-bold text-white/50 sm:text-xl">
                Handling WhatsApp manually
              </h3>
            </Animate>

            <ul className="mt-6 divide-y divide-white/[0.06]">
              {problems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Animate
                    key={item.lead + item.rest}
                    delay={LEFT_STAGGER_START + index * ROW_STAGGER_STEP}
                  >
                    <li className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
                      <span
                        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center text-[#C77B54]"
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <p className="pt-1.5 text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                        <strong className="font-bold text-white/85">
                          {item.lead}
                        </strong>
                        {item.rest}
                      </p>
                    </li>
                  </Animate>
                );
              })}
            </ul>
          </div>

          {/* "vs" divider — desktop only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[var(--hero-dark)] text-xs font-bold uppercase tracking-widest text-[var(--hero-muted)] shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
              vs
            </span>
          </div>

          {/* RIGHT: the relief — bright, alive, the clear upgrade */}
          <div className="relative h-full overflow-hidden rounded-2xl border border-[var(--hero-primary)]/30 bg-[var(--hero-primary)]/10 p-6 shadow-[0_30px_80px_rgba(0,168,107,0.22)] sm:p-8 lg:rounded-l-none">
            <div
              aria-hidden="true"
              className="animate-glow-pulse pointer-events-none absolute -inset-x-10 -top-16 -z-0 h-56 rounded-full bg-[var(--hero-primary)]/25 blur-3xl"
            />

            {/* Short, fading divider accent — reads as a seam between two
                distinct cards rather than a seam running through one */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-10 left-0 hidden w-[3px] rounded-full bg-gradient-to-b from-transparent via-[var(--hero-primary)] to-transparent shadow-[0_0_16px_2px_rgba(0,168,107,0.5)] lg:block"
            />

            <div className="relative">
              <Animate delay={RIGHT_STAGGER_START - 80}>
                <h3 className="text-lg font-bold text-[var(--hero-text)] sm:text-xl">
                  With an Ingenio assistant
                </h3>
              </Animate>

              <ul className="mt-6 divide-y divide-white/[0.06]">
                {reliefs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Animate
                      key={item.lead + item.rest}
                      delay={RIGHT_STAGGER_START + index * ROW_STAGGER_STEP}
                    >
                      <li className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--hero-primary)]/30 bg-[var(--hero-primary)]/15 text-[var(--hero-primary)]">
                          <Icon
                            className="h-4 w-4"
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </span>
                        <p className="pt-1.5 text-sm leading-6 text-[var(--hero-text)] sm:text-base sm:leading-7">
                          <strong className="font-bold text-white">
                            {item.lead}
                          </strong>
                          {item.rest}
                        </p>
                      </li>
                    </Animate>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Closing strip — tightened, seated on its own raised panel */}
      <Animate
        delay={RIGHT_STAGGER_START + reliefs.length * ROW_STAGGER_STEP + 120}
        className="relative mx-auto mt-10 w-[95vw] max-w-3xl px-4 sm:px-6 lg:mt-12"
      >
        <div className="rounded-3xl border-t border-white/10 bg-white/[0.02] px-6 py-10 text-center sm:px-10">
          <p className="text-lg font-semibold text-[var(--hero-text)] sm:text-xl">
            Same WhatsApp your customers already use. Just one that never
            sleeps.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/263772800899"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--hero-primary)] px-7 py-4 text-base font-bold text-[var(--hero-dark)] shadow-[0_24px_54px_rgba(0,168,107,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--hero-primary-hover)]"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-base" />
              Try it on WhatsApp
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </a>
            <Link
              href="/services"
              className="text-sm font-semibold text-[var(--hero-muted)] underline-offset-4 transition hover:text-[var(--hero-primary)] hover:underline"
            >
              See how it works
            </Link>
          </div>
        </div>
      </Animate>
    </section>
  );
}
