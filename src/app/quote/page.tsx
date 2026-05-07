"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCode,
  faMobileScreenButton,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

const quoteAreas = [
  {
    title: "AI ERP And Business Systems",
    description:
      "Dashboards, ERP workflows, reporting tools, and business systems built around your operations.",
    icon: faCode,
  },
  {
    title: "Healthcare And School Platforms",
    description:
      "Pharma-Bot, Dental Clinic Bot, school management systems, portals, and websites with clear rollout support.",
    icon: faMobileScreenButton,
  },
  {
    title: "Automation And Green Innovation",
    description:
      "Chatbot integrations, workflow automation, product support, and INGENIO GREEN manufacturing ideas.",
    icon: faWandMagicSparkles,
  },
];

export default function QuotePage() {
  return (
    <Layout>
      <section className="full-bleed relative overflow-hidden bg-gradient-to-br from-[#0F3A36] via-[#145346] to-[var(--color-green)] pb-24 pt-32 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-12">
          <Animate>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
              Get A Quote
            </p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Tell Us What You Need Built, Automated, Or Improved
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">
              From AI-driven ERP systems and healthcare bots to school
              platforms, websites, and green manufacturing ideas, we can scope
              the work and help you move with confidence.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--color-gold)] px-6 py-3 font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5"
            >
              Send Project Details
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </Link>
          </Animate>
        </div>
      </section>

      <section className="py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {quoteAreas.map((item, index) => (
            <Animate key={item.title} delay={index * 80}>
              <div className="h-full rounded-[30px] border border-[rgba(30,126,52,0.14)] bg-white p-8 shadow-[0_18px_40px_rgba(15,58,54,0.06)]">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-green-light)] text-[var(--color-green)]">
                  <FontAwesomeIcon icon={item.icon} className="text-xl" />
                </span>
                <h2 className="mt-6 text-2xl font-bold text-[var(--color-text)]">
                  {item.title}
                </h2>
                <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>
            </Animate>
          ))}
        </div>

        <Animate delay={220}>
          <div className="mt-10 rounded-[36px] border border-[rgba(30,126,52,0.14)] bg-[var(--color-light)] px-8 py-10 shadow-[0_24px_55px_rgba(15,58,54,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-green)]">
              What To Include
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[var(--color-muted)]">
              Share your goal, sector, target users, must-have features,
              preferred launch timeline, and whether the work is AI, healthcare,
              school systems, websites, automation, or manufacturing-related.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[var(--color-green)] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5"
            >
              Continue To Contact
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </Link>
          </div>
        </Animate>
      </section>
    </Layout>
  );
}
