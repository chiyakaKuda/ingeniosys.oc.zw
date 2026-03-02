import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import PricingSection from "@/components/PricingSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendarCheck,
  faChartSimple,
  faCheckCircle,
  faCommentDots,
  faCubes,
  faGraduationCap,
  faHeadset,
  faLaptopCode,
  faMobileScreenButton,
  faScrewdriverWrench,
  faShieldHalved,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Websites and landing pages",
    description:
      "Fast, credible websites that explain your offer clearly and convert interest into enquiries.",
    icon: faLaptopCode,
    points: ["Clear structure", "Responsive UI", "SEO-ready setup"],
  },
  {
    title: "Custom portals and systems",
    description:
      "Internal tools, portals, and dashboards shaped around your workflow instead of generic software limits.",
    icon: faCubes,
    points: ["Role-based access", "Reporting", "Operational workflows"],
  },
  {
    title: "Mobile app development",
    description:
      "Practical mobile experiences for customers, staff, and field teams that need reliability on the move.",
    icon: faMobileScreenButton,
    points: ["Android-ready", "Cross-platform", "Production support"],
  },
  {
    title: "WhatsApp automation",
    description:
      "Automated conversations for enquiries, routing, reminders, and support without losing the human handoff.",
    icon: faCommentDots,
    points: ["Lead capture", "Smart replies", "Team handover"],
  },
  {
    title: "Analytics and visibility",
    description:
      "Better reporting, search visibility, and performance insight so your digital product stays measurable.",
    icon: faChartSimple,
    points: ["SEO improvements", "Analytics setup", "Performance reviews"],
  },
  {
    title: "Support and iteration",
    description:
      "Updates, fixes, maintenance, and post-launch improvements that keep the product useful over time.",
    icon: faHeadset,
    points: ["Monitoring", "Enhancements", "Responsive support"],
  },
];

const audiences = [
  {
    title: "Schools and colleges",
    description:
      "Admissions platforms, communication tools, portals, and systems that support day-to-day education operations.",
    icon: faGraduationCap,
  },
  {
    title: "Growing businesses",
    description:
      "Sales websites, client-facing experiences, booking flows, and internal software that support growth cleanly.",
    icon: faUsers,
  },
  {
    title: "Teams with manual processes",
    description:
      "Automation, dashboards, and workflow tools that reduce repeated admin work and improve visibility.",
    icon: faScrewdriverWrench,
  },
];

const deliveryPrinciples = [
  {
    title: "Structure before decoration",
    description:
      "We sort out the message, page flow, and user path first so people know where they are, what matters, and what to do next.",
    icon: faCalendarCheck,
  },
  {
    title: "Built for the phones people actually use",
    description:
      "Menus, forms, buttons, and content blocks are designed to stay usable on smaller screens before they expand to desktop.",
    icon: faMobileScreenButton,
  },
  {
    title: "Refined after testing, not before",
    description:
      "We review spacing, readability, interactions, and handoff details before launch so the final product feels solid when users touch it.",
    icon: faShieldHalved,
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden full-bleed">
        <div className="absolute inset-0">
          <Image
            src="/team/tech.jpg"
            alt="Ingenio Systems software services banner"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,17,28,0.9)_0%,rgba(15,58,54,0.84)_48%,rgba(25,167,186,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_34%)]" />

        <div className="relative mx-auto grid min-h-[100svh] w-[95vw] max-w-7xl items-center gap-10 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-24 lg:pt-36">
          <div className="max-w-3xl text-white">
            <Animate className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                Services
              </span>
              <h1 className="text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl">
                Premium software services built to look sharp and work
                properly.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
                We design and build websites, mobile apps, portals, and
                automation systems that solve the real job, feel credible, and
                stay usable across devices.
              </p>
            </Animate>

            <Animate
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
              delay={120}
            >
              <Link
                href="#services-overview"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-gold)] px-7 py-4 text-base font-semibold text-[var(--color-text)] shadow-[0_18px_40px_rgba(255,215,0,0.22)] transition duration-300 hover:-translate-y-0.5"
              >
                Explore Services
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/18 bg-white/10 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:bg-white/14"
              >
                Get a Quote
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
            </Animate>
          </div>

          <Animate delay={180}>
            <div className="rounded-[32px] border border-white/12 bg-white/10 p-6 text-white shadow-[0_24px_60px_rgba(7,17,28,0.2)] backdrop-blur-md sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                What we fix
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
                Better structure, stronger UI, and reliable delivery across
                screen sizes.
              </h2>
              <div className="mt-8 grid gap-4">
                {deliveryPrinciples.map((principle) => (
                  <div
                    key={principle.title}
                    className="rounded-[24px] border border-white/10 bg-black/10 px-5 py-4"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/12 text-[var(--color-gold)]">
                        <FontAwesomeIcon icon={principle.icon} />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {principle.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-white/74">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Animate>
        </div>
      </section>

      <section
        id="services-overview"
        className="scroll-mt-32 py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-3xl text-center">
          <Animate>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
              Service Overview
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-text)] sm:text-4xl lg:text-5xl">
              A cleaner service mix for real software delivery
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
              These are the services clients ask us for most: websites, mobile
              apps, internal systems, automation, and ongoing support, arranged
              clearly so the page still reads well on both phone and desktop.
            </p>
          </Animate>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Animate key={service.title} delay={index * 70}>
              <div className="group flex h-full flex-col rounded-[30px] border border-[rgba(30,126,52,0.14)] bg-white p-6 shadow-[0_18px_45px_rgba(15,58,54,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-[var(--color-gold)]/45 hover:shadow-[0_26px_60px_rgba(15,58,54,0.1)] sm:p-7">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-light)] text-[var(--color-green)]">
                  <FontAwesomeIcon icon={service.icon} className="text-xl" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-[var(--color-text)]">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-8 text-[var(--color-muted)]">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.points.map((point) => (
                    <span
                      key={point}
                      className="inline-flex items-center rounded-full border border-[rgba(30,126,52,0.14)] bg-[var(--color-light)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-green)]"
                    >
                      {point}
                    </span>
                  ))}
                </div>

                <Link
                  href="/quote"
                  className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-green)] transition duration-300 group-hover:gap-4 group-hover:text-[var(--color-gold)]"
                >
                  Get pricing for this service
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </Link>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      <section className="full-bleed overflow-hidden bg-[linear-gradient(135deg,var(--color-light)_0%,#f8fcfa_50%,var(--color-green-light)_100%)] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-[95vw] max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Animate className="rounded-[32px] bg-[#0F3A36] p-8 text-white shadow-[0_28px_70px_rgba(15,58,54,0.16)] sm:p-10">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                Better Fit
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Not just for schools. Built for any team that needs software to
                work properly.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/76 sm:text-lg">
                Ingenio Systems can still deliver education-focused systems, but
                the service offering now reflects the wider work: business
                sites, internal platforms, mobile products, automation, and
                support.
              </p>
            </Animate>

            <div className="grid gap-6 md:grid-cols-3">
              {audiences.map((audience, index) => (
                <Animate key={audience.title} delay={index * 80}>
                  <div className="h-full rounded-[28px] border border-[rgba(30,126,52,0.14)] bg-white/92 p-6 shadow-[0_16px_40px_rgba(15,58,54,0.06)]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-green)] text-[var(--color-gold)]">
                      <FontAwesomeIcon icon={audience.icon} />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold text-[var(--color-text)]">
                      {audience.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      {audience.description}
                    </p>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Animate>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
              Our Approach
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
              Software people can understand and use from the first screen
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
              Before launch, we judge the work the same way your users will:
              can they understand the offer quickly, find the next step without
              guessing, and use the experience properly on mobile? That is the
              standard we build to.
            </p>
          </Animate>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {deliveryPrinciples.map((principle, index) => (
            <Animate key={principle.title} delay={index * 80}>
              <div className="h-full rounded-[30px] border border-[rgba(30,126,52,0.14)] bg-white p-7 shadow-[0_18px_45px_rgba(15,58,54,0.05)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-light)] text-[var(--color-green)]">
                  <FontAwesomeIcon icon={principle.icon} />
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-[var(--color-text)]">
                  {principle.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                  {principle.description}
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-[var(--color-green)]">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-xs" />
                  Applied on every project
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      <PricingSection />

      <section className="mb-10 overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#0F3A36_0%,var(--color-green)_100%)] px-6 py-10 text-white sm:px-8 lg:px-10 lg:py-12">
        <Animate className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
              Start here
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              If the current experience feels weak, we can rebuild it
              properly.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/76 sm:text-lg">
              Tell us what you need to improve, what users are struggling with,
              and what outcome matters most. We will scope the right service
              mix around that.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-gold)] px-7 py-4 text-base font-semibold text-[var(--color-text)] transition duration-300 hover:-translate-y-0.5"
            >
              Get a Quote
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/16 bg-white/8 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:bg-white/12"
            >
              View Portfolio
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </Link>
          </div>
        </Animate>
      </section>
    </Layout>
  );
}
