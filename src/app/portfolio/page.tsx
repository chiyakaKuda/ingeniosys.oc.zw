"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faGlobe,
  faMobileScreenButton,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

const portfolioItems = [
  {
    title: "Business Websites And Portals",
    description:
      "Custom websites, client portals, and internal dashboards for service businesses and organizations.",
    icon: faGlobe,
  },
  {
    title: "Mobile App Concepts",
    description:
      "Product planning, UI direction, and production-ready builds for Android and cross-platform apps.",
    icon: faMobileScreenButton,
  },
  {
    title: "Automation And Smart Workflows",
    description:
      "Chatbots, automated intake flows, and software integrations that reduce manual work.",
    icon: faRobot,
  },
];

export default function PortfolioPage() {
  return (
    <Layout>
      <section className="full-bleed relative overflow-hidden bg-gradient-to-br from-[#edf7ef] via-white to-[#e7f1fb] pb-24 pt-32">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-12">
          <Animate>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-green)]">
              Portfolio
            </p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl">
              Products And Platforms Built For Real-World Use
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[var(--color-muted)] sm:text-xl">
              Ingenio Systems builds software beyond education: websites,
              mobile apps, automation tools, and operational systems for teams
              that need reliable digital products.
            </p>
          </Animate>
        </div>
      </section>

      <section className="py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Animate key={item.title} delay={index * 80}>
              <div className="h-full rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.1)]">
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
          <div className="mt-10 rounded-[36px] bg-[var(--color-text)] px-8 py-10 text-white shadow-[0_24px_55px_rgba(15,23,42,0.18)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
              Next Project
            </p>
            <h3 className="mt-4 text-3xl font-bold">
              Want your product to be the next one on this page?
            </h3>
            <p className="mt-4 max-w-2xl text-white/80">
              Share what you need to build and we will map the fastest path from
              idea to launch.
            </p>
            <Link
              href="/quote"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[var(--color-gold)] px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Start A Quote
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </Link>
          </div>
        </Animate>
      </section>
    </Layout>
  );
}
