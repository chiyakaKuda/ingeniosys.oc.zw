import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendarCheck,
  faChartLine,
  faChalkboardUser,
  faCubes,
  faLaptopCode,
  faShieldHalved,
  faScrewdriverWrench,
  faUserTie,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const services = [
  {
    title: "Website Development",
    description:
      "Fast, credible websites that explain what you do clearly and help the right people take action.",
    icon: faLaptopCode,
  },
  {
    title: "Mobile App Development",
    description:
      "Practical mobile apps for customers, staff, or field teams that need a dependable experience on the go.",
    icon: faCubes,
  },
  {
    title: "Custom Platforms",
    description:
      "Portals, dashboards, and internal tools built around your workflow instead of forcing your team into a generic system.",
    icon: faUsers,
  },
  {
    title: "WhatsApp Automation",
    description:
      "Conversation flows that answer questions, route enquiries, and reduce repetitive manual follow-up.",
    icon: faWhatsapp,
  },
  {
    title: "SEO And Performance",
    description:
      "Technical and content improvements that make your product easier to find, faster to load, and easier to trust.",
    icon: faChartLine,
  },
  {
    title: "Support And Maintenance",
    description:
      "Ongoing updates, fixes, monitoring, and iteration after launch so the product keeps delivering value.",
    icon: faShieldHalved,
  },
];

const clientTypes = [
  {
    title: "Schools and colleges",
    description:
      "Admissions sites, portals, communication systems, and digital tools that support daily learning operations.",
    icon: faChalkboardUser,
  },
  {
    title: "Growing businesses",
    description:
      "Sales websites, booking flows, client portals, and operational systems that remove friction and support growth.",
    icon: faUserTie,
  },
  {
    title: "Teams with manual workflows",
    description:
      "Automation, forms, reporting, and internal dashboards that save time and reduce repeated work.",
    icon: faScrewdriverWrench,
  },
];

const process = [
  {
    title: "Start with the real problem",
    description:
      "We ask the right questions first so the scope stays tied to the outcome you actually need.",
    icon: faCalendarCheck,
  },
  {
    title: "Build the right level of product",
    description:
      "From a focused website to a custom platform, we keep the solution clear, useful, and maintainable.",
    icon: faCubes,
  },
  {
    title: "Support what ships",
    description:
      "Training, fixes, and improvement work stay part of the delivery so the product keeps getting used.",
    icon: faShieldHalved,
  },
];

const principles = [
  "Problem-led scoping before design or code starts",
  "Clean, high-quality delivery across web, mobile, and internal systems",
  "Direct collaboration with a lean team that stays close to the work",
];

export default function Home() {
  return (
    <Layout>
      <section className="relative mb-16 overflow-hidden full-bleed">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0F3A36_0%,var(--color-green)_55%,#2f9448_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(209,250,229,0.14),transparent_30%)]" />
        <div className="absolute -left-16 top-16 h-56 w-56 rounded-full bg-white/6 blur-3xl" />
        <div className="absolute bottom-8 right-0 h-64 w-64 rounded-full bg-[rgba(255,215,0,0.08)] blur-3xl" />

        <div className="relative mx-auto flex min-h-[100svh] w-[95vw] max-w-6xl items-center px-4 pb-20 pt-32 sm:px-6 lg:px-10 lg:pb-24 lg:pt-36">
          <div className="max-w-3xl text-white">
            <Animate className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                Web, Mobile And Custom Software
              </span>
              <h1 className="text-4xl font-black leading-[1.04] sm:text-5xl lg:text-6xl">
                Authentic, high-quality software built to solve your real
                problem.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/82 sm:text-xl">
                We build websites, mobile apps, portals, and automation systems
                for organizations that need clarity, quality, and practical
                results. If you need the right solution, we are right here.
              </p>
            </Animate>

            <Animate
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
              delay={120}
            >
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-gold)] px-7 py-4 text-base font-semibold text-[var(--color-text)] shadow-[0_18px_40px_rgba(255,215,0,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(255,215,0,0.25)]"
              >
                Get a Quote
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/14"
              >
                View Services
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
            </Animate>

            <Animate className="mt-6" delay={180}>
              <p className="text-sm font-medium text-white/70">
                We listen first, define the problem properly, then build the
                solution with care.
              </p>
            </Animate>
          </div>
        </div>
      </section>

      <section className="mb-20 flex flex-col gap-8">
        <Animate className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
            Services
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            The core products and systems we build
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted)]">
            Ingenio Systems builds focused digital products that solve the job
            that matters, whether that means a public-facing website, a mobile
            app, or an internal platform your team depends on every day.
          </p>
        </Animate>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Animate key={service.title} delay={index * 60}>
              <Link
                href="/services"
                className="group flex h-full flex-col rounded-[28px] border border-[rgba(30,126,52,0.14)] bg-white p-6 shadow-[0_16px_40px_rgba(15,58,54,0.05)] transition duration-300 hover:-translate-y-2 hover:border-[var(--color-gold)]/45 hover:shadow-[0_24px_50px_rgba(15,58,54,0.1)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-light)] text-lg text-[var(--color-green)]">
                  <FontAwesomeIcon icon={service.icon} />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-[var(--color-text)]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted)]">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-green)] transition duration-300 group-hover:gap-3 group-hover:text-[var(--color-gold)]">
                  Explore service
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </span>
              </Link>
            </Animate>
          ))}
        </div>
      </section>

      <section className="mb-20 overflow-hidden rounded-[32px] border border-[rgba(30,126,52,0.14)] bg-[linear-gradient(135deg,var(--color-light)_0%,#f8fcfa_55%,var(--color-green-light)_100%)] px-5 py-10 sm:px-8 lg:px-10">
        <Animate className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
            Where We Fit
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Built for more than one kind of client
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted)]">
            We started with education-focused work, but the same delivery
            approach now serves schools, businesses, and teams that need better
            systems to operate well.
          </p>
        </Animate>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {clientTypes.map((clientType, index) => (
            <Animate key={clientType.title} delay={index * 80}>
              <div className="h-full rounded-[28px] border border-white/80 bg-white/92 p-6 shadow-[0_14px_34px_rgba(15,58,54,0.06)] backdrop-blur-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-green)] text-base text-[var(--color-gold)]">
                  <FontAwesomeIcon icon={clientType.icon} />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-[var(--color-text)]">
                  {clientType.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {clientType.description}
                </p>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {process.map((step, index) => (
            <Animate key={step.title} delay={index * 80}>
              <div className="h-full rounded-[30px] bg-[#0F3A36] px-6 py-8 text-white shadow-[0_24px_60px_rgba(15,58,54,0.16)]">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
                    0{index + 1}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-base text-white">
                    <FontAwesomeIcon icon={step.icon} />
                  </span>
                </div>
                <h2 className="mt-8 text-2xl font-semibold leading-tight">
                  {step.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  {step.description}
                </p>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      <section className="mb-20 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <Animate className="rounded-[32px] bg-[#0F3A36] p-8 text-white shadow-[0_28px_70px_rgba(15,58,54,0.16)] sm:p-10">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
            Ingenio Systems
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            A small software team that stays close to the problem until the
            solution is working.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            We do not chase complexity for its own sake. The goal is software
            that feels credible, works reliably, and solves a real operational
            problem for the people using it.
          </p>

          <div className="mt-8 grid gap-4">
            {principles.map((principle) => (
              <div
                key={principle}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-4"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]" />
                <p className="text-sm leading-7 text-white/80">{principle}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-gold)] px-6 py-3.5 text-sm font-semibold text-[var(--color-text)] transition duration-300 hover:-translate-y-0.5"
            >
              View Portfolio
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/12"
            >
              About Us
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </Link>
          </div>
        </Animate>

        <Animate delay={120}>
          <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-[rgba(30,126,52,0.14)] shadow-[0_20px_50px_rgba(15,58,54,0.08)]">
            <Image
              src="/workshop-2.jpeg"
              alt="Ingenio Systems working directly with a client team"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F3A36]/88 via-[#0F3A36]/28 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="max-w-md rounded-[28px] border border-white/10 bg-white/10 p-5 text-white backdrop-blur-md">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                  Close collaboration
                </span>
                <h3 className="mt-3 text-2xl font-semibold leading-tight">
                  Discovery, rollout, and support stay connected.
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  Workshops, planning sessions, feedback loops, and team
                  training help us make sure the final product is useful in the
                  real environment where it has to work.
                </p>
              </div>
            </div>
          </div>
        </Animate>
      </section>

      <section className="mb-16 overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#0F3A36_0%,var(--color-green)_100%)] px-6 py-10 sm:px-8 lg:px-10">
        <Animate className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
              Ready to build?
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Tell us what needs to work better, and we will shape the right
              solution around it.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/74 sm:text-lg">
              Whether you need a website, a mobile app, or a custom internal
              system, we can scope it clearly and move with purpose.
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
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/8 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:bg-white/12"
            >
              Contact Us
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </Link>
          </div>
        </Animate>
      </section>
    </Layout>
  );
}
