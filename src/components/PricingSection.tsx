"use client";

import { useState } from "react";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheckCircle,
  faCommentDots,
  faCubes,
  faHeadset,
  faLaptopCode,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import Animate from "@/components/Animate";

type PricingTabId =
  | "websites"
  | "systems"
  | "mobile"
  | "automation"
  | "support";

type Accent = "green" | "gold" | "teal";

type PricingPlan = {
  title: string;
  price: string;
  recurring?: string;
  description: string;
  featured?: boolean;
  accent: Accent;
  features: string[];
};

const pricingTabs: Array<{
  id: PricingTabId;
  label: string;
  icon: IconDefinition;
}> = [
  { id: "websites", label: "Websites", icon: faLaptopCode },
  { id: "systems", label: "AI / ERP", icon: faCubes },
  { id: "mobile", label: "Mobile Apps", icon: faMobileScreenButton },
  { id: "automation", label: "Automation", icon: faCommentDots },
  { id: "support", label: "Support", icon: faHeadset },
];

const pricingData: Record<PricingTabId, PricingPlan[]> = {
  websites: [
    {
      title: "Starter Site",
      price: "$350",
      description:
        "A focused brochure site or landing page for organizations that need credibility quickly.",
      accent: "green",
      features: [
        "Responsive website build",
        "Content sections and enquiry forms",
        "Basic SEO structure",
        "Deployment support",
      ],
    },
    {
      title: "Growth Website",
      price: "$750",
      description:
        "A stronger public-facing website with clearer conversion paths and room for content growth.",
      accent: "gold",
      featured: true,
      features: [
        "Everything in Starter Site",
        "Custom page architecture",
        "News, blog, or updates section",
        "Analytics and performance setup",
        "Launch support and QA",
      ],
    },
    {
      title: "Platform Website",
      price: "$1,200",
      description:
        "A larger website with user flows, protected areas, or more tailored functionality.",
      accent: "teal",
      features: [
        "Advanced forms and workflows",
        "User access areas",
        "Custom integrations",
        "Structured handover",
      ],
    },
  ],
  systems: [
    {
      title: "Core ERP Portal",
      price: "$800",
      description:
        "A single workflow system or internal ERP-style portal designed around one operational need.",
      accent: "green",
      features: [
        "Role-based access",
        "Dashboard interface",
        "Data capture and export",
        "Admin controls",
      ],
    },
    {
      title: "AI-Assisted System",
      price: "$1,500",
      description:
        "A broader internal system that connects workflows, improves reporting, and supports smarter operations.",
      accent: "gold",
      featured: true,
      features: [
        "Multiple user roles",
        "Reporting and workflow automation",
        "Responsive web interface",
        "Delivery support and training",
        "Deployment assistance",
      ],
    },
    {
      title: "Custom ERP Platform",
      price: "Custom",
      description:
        "A tailored platform for teams that need deeper process design, integrations, automation, and growth planning.",
      accent: "teal",
      features: [
        "Discovery and technical planning",
        "Custom modules",
        "Third-party integrations",
        "Staged rollout path",
      ],
    },
  ],
  mobile: [
    {
      title: "MVP App",
      price: "$900",
      description:
        "A lean mobile build for testing a concept or launching one focused user journey.",
      accent: "green",
      features: [
        "Core screens and flows",
        "Responsive UI system",
        "API-ready architecture",
        "QA and handover",
      ],
    },
    {
      title: "Production App",
      price: "$1,800",
      description:
        "A stronger mobile product with clearer UX, better polish, and launch-readiness.",
      accent: "gold",
      featured: true,
      features: [
        "Extended feature set",
        "Authentication and user state",
        "Admin or backend connection",
        "Release support",
        "Post-launch review",
      ],
    },
    {
      title: "Connected App Suite",
      price: "Custom",
      description:
        "A mobile product tied to a broader platform, team workflow, or service system.",
      accent: "teal",
      features: [
        "Cross-system planning",
        "Custom backend work",
        "Scalable architecture",
        "Longer delivery roadmap",
      ],
    },
  ],
  automation: [
    {
      title: "Workflow Starter",
      price: "$250",
      description:
        "Automate repetitive messages, basic routing, and simple follow-up tasks.",
      accent: "green",
      features: [
        "WhatsApp or web-based flow",
        "Structured replies",
        "Lead capture",
        "Basic reporting",
      ],
    },
    {
      title: "Automation Stack",
      price: "$550",
      description:
        "A fuller automation setup connecting enquiries, reminders, and team handoff logic.",
      accent: "gold",
      featured: true,
      features: [
        "Multi-step flows",
        "Escalation and handoff",
        "Data collection logic",
        "Iteration after launch",
        "Usage review",
      ],
    },
    {
      title: "Integrated Assistant",
      price: "Custom",
      description:
        "Deeper automation tied into internal systems, dashboards, or customer journeys.",
      accent: "teal",
      features: [
        "Custom flow design",
        "System integrations",
        "Operational reporting",
        "Support for future expansion",
      ],
    },
  ],
  support: [
    {
      title: "Essential Care",
      price: "$40",
      recurring: "/month",
      description:
        "Ongoing updates and maintenance for smaller websites or products.",
      accent: "green",
      features: [
        "Routine maintenance",
        "Bug fixes",
        "Basic monitoring",
        "Priority email support",
      ],
    },
    {
      title: "Active Partner",
      price: "$85",
      recurring: "/month",
      description:
        "A better fit for teams that need regular improvements, fixes, and guidance.",
      accent: "gold",
      featured: true,
      features: [
        "Everything in Essential Care",
        "Monthly enhancement time",
        "Performance reviews",
        "Faster response support",
        "Improvement recommendations",
      ],
    },
    {
      title: "Dedicated Support",
      price: "Custom",
      recurring: "/month",
      description:
        "For teams that want an ongoing technical partner rather than ad hoc fixes.",
      accent: "teal",
      features: [
        "Planned iteration cycles",
        "Priority fixes and monitoring",
        "Advisory support",
        "Roadmap collaboration",
      ],
    },
  ],
};

const accentStyles: Record<
  Accent,
  {
    badge: string;
    border: string;
    icon: string;
    topBar: string;
    button: string;
    price: string;
    surface: string;
  }
> = {
  green: {
    badge: "bg-[var(--color-light)] text-[var(--color-green)]",
    border: "border-[rgba(30,126,52,0.14)]",
    icon: "bg-[var(--color-light)] text-[var(--color-green)]",
    topBar: "bg-[var(--color-green)]",
    button: "bg-[var(--color-green)] text-white hover:bg-[#16642a]",
    price: "text-[var(--color-green)]",
    surface: "bg-[var(--color-light)]/70",
  },
  gold: {
    badge: "bg-[rgba(255,215,0,0.16)] text-[var(--color-text)]",
    border: "border-[rgba(255,215,0,0.42)]",
    icon: "bg-[rgba(255,215,0,0.16)] text-[var(--color-text)]",
    topBar: "bg-[var(--color-gold)]",
    button: "bg-[var(--color-gold)] text-[var(--color-text)] hover:bg-[#e7c400]",
    price: "text-[var(--color-text)]",
    surface: "bg-[rgba(255,215,0,0.12)]",
  },
  teal: {
    badge: "bg-[rgba(25,167,186,0.14)] text-[#0f6670]",
    border: "border-[rgba(25,167,186,0.26)]",
    icon: "bg-[rgba(25,167,186,0.14)] text-[#0f6670]",
    topBar: "bg-[#19A7BA]",
    button: "bg-[#19A7BA] text-white hover:bg-[#138697]",
    price: "text-[#0f6670]",
    surface: "bg-[rgba(25,167,186,0.08)]",
  },
};

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<PricingTabId>("websites");
  const currentPricing = pricingData[activeTab];
  const activePricingTab =
    pricingTabs.find((tab) => tab.id === activeTab) ?? pricingTabs[0];

  return (
    <section id="pricing" className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_340px] lg:items-end">
          <Animate>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
              Pricing Guide
            </span>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--color-text)] sm:text-4xl lg:text-5xl">
              Guide pricing for common technology scopes
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              Guide prices for common website, ERP, automation, mobile, and
              support scopes. Healthcare bots, school systems, and INGENIO GREEN
              manufacturing work are quoted based on exact requirements.
            </p>
          </Animate>

          <Animate delay={80}>
            <div className="rounded-[28px] border border-[rgba(30,126,52,0.14)] px-6 py-5">
              <div className="flex items-center gap-3 text-[var(--color-green)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-light)]">
                  <FontAwesomeIcon icon={activePricingTab.icon} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-green)]">
                    Current Range
                  </p>
                  <p className="text-lg font-semibold text-[var(--color-text)]">
                    {activePricingTab.label}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                Use the tabs below to compare common scopes. If none of them
                fit exactly, we can phase the work.
              </p>
            </div>
          </Animate>
        </div>

        <Animate delay={100}>
          <div className="mt-10 overflow-x-auto pb-2">
            <div className="flex min-w-max gap-3">
              {pricingTabs.map((tab) => {
                const active = tab.id === activeTab;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-semibold whitespace-nowrap transition duration-300 sm:text-base ${
                      active
                        ? "border-[var(--color-green)] bg-[var(--color-green)] text-white shadow-[0_16px_36px_rgba(30,126,52,0.2)]"
                        : "border-[rgba(30,126,52,0.14)] bg-white text-[var(--color-text)] hover:border-[var(--color-gold)]/40 hover:text-[var(--color-green)]"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={tab.icon}
                      className={active ? "text-white" : "text-[var(--color-green)]"}
                    />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Animate>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {currentPricing.map((plan, index) => {
            const accent = accentStyles[plan.accent];

            return (
              <Animate key={`${activeTab}-${plan.title}`} delay={index * 90}>
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-[30px] border bg-white shadow-[0_16px_40px_rgba(15,58,54,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(15,58,54,0.09)] ${accent.border}`}
                >
                  <div className={`h-1.5 w-full ${accent.topBar}`} />

                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-[var(--color-text)]">
                          {plan.title}
                        </h3>
                        <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
                          {plan.description}
                        </p>
                      </div>
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${accent.icon}`}
                      >
                        <FontAwesomeIcon icon={activePricingTab.icon} />
                      </span>
                    </div>

                    <div className={`mt-7 rounded-[24px] p-5 ${accent.surface}`}>
                      {plan.featured ? (
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${accent.badge}`}
                        >
                          Recommended
                        </span>
                      ) : null}

                      <div className="mt-4 flex items-end gap-2">
                        <span className={`text-5xl font-bold ${accent.price}`}>
                          {plan.price}
                        </span>
                        {plan.recurring ? (
                          <span className="pb-1 text-sm font-medium text-[var(--color-muted)]">
                            {plan.recurring}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <ul className="mt-8 space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-1 text-[var(--color-green)]">
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              className="text-sm"
                            />
                          </span>
                          <span className="text-sm leading-7 text-[var(--color-text)] sm:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/quote"
                      className={`mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 sm:text-base ${accent.button}`}
                    >
                      Request this scope
                      <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                    </Link>
                  </div>
                </div>
              </Animate>
            );
          })}
        </div>

        <Animate delay={300}>
          <div className="mt-10 flex flex-col gap-4 rounded-[28px] border border-[rgba(30,126,52,0.14)] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <p className="max-w-3xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              Need a tighter budget or a more custom scope? We can phase the
              work so the first release stays practical and the product can
              expand later.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-green)] transition duration-300 hover:gap-4 sm:text-base"
            >
              Talk through a custom quote
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </Link>
          </div>
        </Animate>
      </div>
    </section>
  );
}
