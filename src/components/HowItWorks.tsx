"use client";

import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  Blocks,
  MessageSquare,
  Rocket,
  type LucideIcon,
} from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Tell us your problem",
    description:
      "Start with a message, not a spec sheet. We listen, ask the right questions, and map exactly what your business needs — in plain language.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "We design & build",
    description:
      "We architect, design and engineer the solution — WhatsApp bot, dashboard, platform or all of it — keeping you in the loop with real progress, not empty updates.",
    icon: Blocks,
  },
  {
    number: "03",
    title: "Go live, fully supported",
    description:
      "We launch it, train your team, and stay on to support and improve it. You get working software and a partner who doesn't disappear after handover.",
    icon: Rocket,
  },
];

const STEP_STAGGER_STEP = 140;
const CLOSING_DELAY = steps.length * STEP_STAGGER_STEP + 160;

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden full-bleed bg-[var(--hero-dark)] py-20 text-[var(--hero-text)] sm:py-24 lg:py-28">
      {/* Eyebrow + heading */}
      <div className="relative mx-auto w-[95vw] max-w-4xl px-4 text-center sm:px-6">
        <Animate>
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--hero-primary)]">
            How it works
          </span>
          <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl sm:leading-[0.98] lg:text-5xl">
            From problem to live software — without the headache.
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--hero-muted)] sm:text-lg">
            No jargon, no endless meetings. Three steps from the first
            conversation to a system that&apos;s actually running your
            business.
          </p>
        </Animate>
      </div>

      {/* Steps */}
      <div className="relative mx-auto mt-16 w-[95vw] max-w-6xl px-4 sm:px-6 lg:px-10">
        <ol className="relative grid gap-8 md:grid-cols-3 md:gap-6">
          {/* Connector — vertical on mobile (through the icon-badge column),
              horizontal on desktop (across the three badges). Decorative,
              sits behind the step nodes. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-12 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-[var(--hero-primary)]/40 to-transparent md:left-[16.666%] md:right-[16.666%] md:top-14 md:bottom-auto md:h-px md:w-auto md:bg-gradient-to-r"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Animate
                key={step.number}
                delay={index * STEP_STAGGER_STEP}
                className="h-full"
              >
                <li className="group relative flex h-full gap-5 rounded-2xl border border-white/8 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--hero-primary)]/50 hover:shadow-[0_24px_60px_rgba(0,168,107,0.22)] sm:p-8 md:flex-col">
                  {/* Icon badge + ghosted step number */}
                  <div className="flex shrink-0 items-start justify-between gap-4 md:w-full">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--hero-primary)]/15 text-[var(--hero-primary)]"
                      aria-hidden="true"
                    >
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <span
                      className="text-4xl font-black leading-none text-[var(--hero-primary)]/20 sm:text-5xl"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                  </div>

                  <div className="min-w-0 md:mt-6">
                    <h3 className="text-xl font-bold text-[var(--hero-text)]">
                      <span className="sr-only">{`Step ${step.number}: `}</span>
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--hero-muted)] sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Animate>
            );
          })}
        </ol>
      </div>

      {/* Closing strip */}
      <Animate
        delay={CLOSING_DELAY}
        className="relative mx-auto mt-14 w-[95vw] max-w-3xl px-4 sm:px-6 lg:mt-16"
      >
        <div className="rounded-3xl border-t border-white/10 bg-white/[0.02] px-6 py-10 text-center sm:px-10">
          <p className="text-lg font-semibold text-[var(--hero-text)] sm:text-xl">
            Most projects start with a single WhatsApp message. Yours can
            too.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://wa.me/263772800899"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--hero-primary)] px-7 py-4 text-base font-bold text-[var(--hero-dark)] shadow-[0_24px_54px_rgba(0,168,107,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--hero-primary-hover)]"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-base" />
              Start the conversation
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </a>
          </div>
        </div>
      </Animate>
    </section>
  );
}
