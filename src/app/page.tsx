// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faFlask,
  faGraduationCap,
  faHandshake,
  faIndustry,
  faLaptopCode,
  faRecycle,
  faRobot,
  faSchool,
  faStethoscope,
  faTooth,
  faWandMagicSparkles,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// ─── DATA ───────────────────────────────────────────────

const innovationPillars = [
  {
    title: "AI-Driven ERP Systems",
    description:
      "Intelligent operational platforms, dashboards, and automation that help organizations run smarter — from inventory to patient flows.",
    icon: faRobot,
    color: "from-violet-500/10 to-indigo-500/5",
    iconColor: "text-violet-600",
  },
  {
    title: "Healthcare Bots",
    description:
      "Pharma-Bot and Dental Clinic Bot handle patient bookings, reminders, triage flows, and clinic workflows with AI precision.",
    icon: faStethoscope,
    color: "from-emerald-500/10 to-teal-500/5",
    iconColor: "text-emerald-600",
  },
  {
    title: "School Systems & Websites",
    description:
      "Full school management platforms and beautiful websites for institutions like Ixar Academy — admissions, portals, communication.",
    icon: faSchool,
    color: "from-amber-500/10 to-orange-500/5",
    iconColor: "text-amber-600",
  },
  {
    title: "Digital Products & Automation",
    description:
      "Websites, dashboards, chatbots, WhatsApp flows, and custom portals — built sharp, maintained properly, always improving.",
    icon: faLaptopCode,
    color: "from-blue-500/10 to-cyan-500/5",
    iconColor: "text-blue-600",
  },
  {
    title: "Green Manufacturing",
    description:
      "Biodegradable plastic pellets for sustainable packaging — INGENIO GREEN innovation that reduces environmental footprint at scale.",
    icon: faRecycle,
    color: "from-green-500/10 to-lime-500/5",
    iconColor: "text-green-600",
  },
];

const selectedWork = [
  {
    category: "Healthcare AI",
    projects: [
      {
        name: "Pharma-Bot",
        description:
          "AI pharmacy assistant handling prescriptions, inventory queries, and patient refill workflows.",
        image: "/work/pharma-bot.png",
        link: "#",
        icon: faFlask,
      },
      {
        name: "Dental Clinic Bot",
        description:
          "Smart booking, reminders, and patient triage for dental practices — reducing no-shows and admin load.",
        image: "/work/dental-bot.png",
        link: "#",
        icon: faTooth,
      },
    ],
  },
  {
    category: "Education",
    projects: [
      {
        name: "Ixar Academy",
        description:
          "Complete school management system with portals, admissions, and parent communication tools.",
        image: "/work/ixar.png",
        link: "#",
        icon: faGraduationCap,
      },
      {
        name: "Guinea Fowl High School",
        description:
          "Modern school website and digital presence for a growing institution.",
        image: "/work/guinea-fowl.png",
        link: "#",
        icon: faSchool,
      },
    ],
  },
  {
    category: "Digital Products",
    projects: [
      {
        name: "Fleet-Eye",
        description:
          "Vehicle tracking and fleet management dashboard with real-time monitoring and reporting.",
        image: "/work/fleet-eye.png",
        link: "#",
        icon: faIndustry,
      },
      {
        name: "Invoicee",
        description:
          "Smart invoicing and payment tracking platform for small businesses and freelancers.",
        image: "/work/invoicee.png",
        link: "#",
        icon: faLaptopCode,
      },
      {
        name: "kchiyaka.com",
        description:
          "Digital platform connecting users to services with a clean, fast, mobile-first experience.",
        image: "/work/kchiyaka.png",
        link: "#",
        icon: faWandMagicSparkles,
      },
    ],
  },
  {
    category: "Sustainable Manufacturing",
    projects: [
      {
        name: "Biodegradable Pellets",
        description:
          "Eco-friendly plastic pellets for packaging — manufactured under INGENIO GREEN for real-world supply chains.",
        image: "/work/pellets.png",
        link: "#",
        icon: faRecycle,
      },
    ],
  },
];

const clientLogos = [
  { name: "Pharma-Bot", src: "/clients/pharma-bot.png" },
  { name: "Dental Clinic Bot", src: "/clients/dental-bot.png" },
  { name: "Ixar Academy", src: "/clients/ixar.png" },
  { name: "Guinea Fowl High", src: "/clients/guinea-fowl.png" },
  { name: "Fleet-Eye", src: "/clients/fleet-eye.png" },
  { name: "Invoicee", src: "/clients/invoicee.png" },
  { name: "INGENIO GREEN", src: "/clients/ingenio-green.png" },
];

const collaborations = [
  { name: "UNICEF", src: "/collaborations/unicef.png" },
  { name: "KOICA", src: "/collaborations/koica.png" },
  { name: "BOOST Fellowship", src: "/collaborations/boost.png" },
  { name: "Amnesty International", src: "/collaborations/amnesty.png" },
];

const processSteps = [
  {
    step: "01",
    title: "Understand the need",
    description:
      "We dig into your sector, users, and workflows before a single line of code or manufacturing spec is written.",
  },
  {
    step: "02",
    title: "Build practical solutions",
    description:
      "AI systems, bots, websites, or green products — engineered to work in the real world, not just on a slide deck.",
  },
  {
    step: "03",
    title: "Support & improve",
    description:
      "Training, maintenance, and continuous improvement keep every solution growing long after launch.",
  },
];

// ─── PAGE ───────────────────────────────────────────────

export default function Home() {
  return (
    <Layout>
      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative mb-16 overflow-hidden full-bleed -mx-4 sm:-mx-6 lg:-mx-10"
      >
        <div className="absolute inset-0">
          <Image
            src="/team/tech.jpg"
            alt="Ingenio Systems — innovative technology"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(9,21,35,0.88)_0%,rgba(15,58,54,0.80)_46%,rgba(25,167,186,0.48)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_35%)]" />

        <div className="relative mx-auto flex min-h-[100svh] w-[95vw] max-w-6xl items-center px-4 pb-20 pt-32 sm:px-6 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="max-w-3xl text-white">
            <Animate className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                Innovative Tech Company
              </span>
              <h1 className="text-4xl font-black leading-[1.04] sm:text-5xl lg:text-6xl">
                We build AI systems, healthcare bots, school platforms, and
                green manufacturing — all under one roof.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/82 sm:text-xl">
                Ingenio Systems, powered by <strong>INGENIO GREEN</strong>,
                delivers practical innovation across healthcare, education,
                digital products, and sustainable packaging.
              </p>
            </Animate>

            <Animate className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center" delay={120}>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-gold)] px-7 py-4 text-base font-semibold text-[var(--color-text)] shadow-[0_18px_40px_rgba(255,215,0,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(255,215,0,0.25)]"
              >
                Start a Project
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/14"
              >
                Explore Work
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </a>
            </Animate>

            <Animate className="mt-6" delay={180}>
              <p className="text-sm font-medium text-white/70">
                From Pharma-Bot and Dental Clinic Bot to biodegradable plastic
                pellets — we build where technology moves real work forward.
              </p>
            </Animate>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          INNOVATION PILLARS
      ═══════════════════════════════════════════════════ */}
      <section id="services" className="mb-24 scroll-mt-28">
        <Animate className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
            What We Build
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Innovation across every sector we touch
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted)]">
            We are not centered around one industry. We bring AI, automation, and
            sustainable engineering wherever it creates real impact.
          </p>
        </Animate>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {innovationPillars.map((pillar, index) => (
            <Animate key={pillar.title} delay={index * 60}>
              <div className="group flex h-full flex-col rounded-[28px] border border-[rgba(30,126,52,0.10)] bg-white p-6 shadow-[0_12px_34px_rgba(15,58,54,0.04)] transition duration-300 hover:-translate-y-2 hover:border-[var(--color-gold)]/30 hover:shadow-[0_24px_50px_rgba(15,58,54,0.08)]">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${pillar.color} text-lg ${pillar.iconColor}`}
                >
                  <FontAwesomeIcon icon={pillar.icon} />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-[var(--color-text)]">
                  {pillar.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted)]">
                  {pillar.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-green)] transition duration-300 group-hover:gap-3 group-hover:text-[var(--color-gold)]">
                  Learn more
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </span>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CLIENT LOGOS
      ═══════════════════════════════════════════════════ */}
      <section className="mb-24 scroll-mt-28">
        <Animate>
          <div className="overflow-hidden rounded-[32px] border border-[rgba(30,126,52,0.10)] bg-[linear-gradient(135deg,var(--color-light)_0%,#f8fcfa_60%,var(--color-green-light)_100%)] px-6 py-10 sm:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
                Trusted Across Industries
              </span>
              <h2 className="mt-3 text-2xl font-bold text-[var(--color-text)] sm:text-3xl">
                Products and platforms already in the wild
              </h2>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
              {clientLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="relative h-14 w-28 sm:h-16 sm:w-36">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      fill
                      className="object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-text)]">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Animate>
      </section>

      {/* ═══════════════════════════════════════════════════
          SELECTED WORK
      ═══════════════════════════════════════════════════ */}
      <section id="work" className="mb-24 scroll-mt-28">
        <Animate className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
            Selected Work
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Projects we have shipped
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted)]">
            From healthcare bots to school platforms, fleet tools to green
            manufacturing — real products, real users.
          </p>
        </Animate>

        <div className="mt-12 flex flex-col gap-16">
          {selectedWork.map((group) => (
            <div key={group.category}>
              <Animate>
                <h3 className="mb-6 text-lg font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {group.category}
                </h3>
              </Animate>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.projects.map((project, idx) => (
                  <Animate key={project.name} delay={idx * 60}>
                    <Link
                      href={project.link}
                      className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(30,126,52,0.10)] bg-white shadow-[0_12px_34px_rgba(15,58,54,0.04)] transition duration-300 hover:-translate-y-2 hover:border-[var(--color-gold)]/30 hover:shadow-[0_24px_50px_rgba(15,58,54,0.08)]"
                    >
                      <div className="relative flex h-44 items-center justify-center bg-[var(--color-light)] sm:h-48">
                        <FontAwesomeIcon
                          icon={project.icon}
                          className="text-4xl text-[var(--color-muted)]/30 transition-colors group-hover:text-[var(--color-gold)]/50"
                        />
                        {/* Replace with real image when available:
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                        */}
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h4 className="text-lg font-semibold text-[var(--color-text)]">
                          {project.name}
                        </h4>
                        <p className="mt-2 flex-1 text-sm leading-7 text-[var(--color-muted)]">
                          {project.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-green)] transition duration-300 group-hover:gap-3 group-hover:text-[var(--color-gold)]">
                          View project
                          <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                        </span>
                      </div>
                    </Link>
                  </Animate>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          COLLABORATIONS
      ═══════════════════════════════════════════════════ */}
      <section id="collaborations" className="mb-24 scroll-mt-28">
        <Animate>
          <div className="overflow-hidden rounded-[32px] border border-[rgba(30,126,52,0.10)] bg-white px-6 py-10 shadow-[0_12px_34px_rgba(15,58,54,0.04)] sm:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
                <FontAwesomeIcon icon={faHandshake} className="text-base" />
                Collaborations
              </span>
              <h2 className="mt-3 text-2xl font-bold text-[var(--color-text)] sm:text-3xl">
                Trusted by global organisations
              </h2>
              <p className="mt-3 text-base text-[var(--color-muted)]">
                We have had the privilege of working alongside impactful global
                institutions.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16">
              {collaborations.map((collab) => (
                <div
                  key={collab.name}
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="relative h-14 w-28 sm:h-16 sm:w-36">
                    <Image
                      src={collab.src}
                      alt={`${collab.name} logo`}
                      fill
                      className="object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-text)]">
                    {collab.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Animate>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW WE WORK
      ═══════════════════════════════════════════════════ */}
      <section className="mb-24 scroll-mt-28">
        <Animate className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
            How We Work
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            From discovery to delivery and beyond
          </h2>
        </Animate>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <Animate key={step.step} delay={index * 80}>
              <div className="h-full rounded-[30px] bg-[#0F3A36] px-6 py-8 text-white shadow-[0_20px_50px_rgba(15,58,54,0.12)]">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
                  {step.step}
                </span>
                <h3 className="mt-6 text-2xl font-semibold leading-tight">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  {step.description}
                </p>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════════════════ */}
      <section id="about" className="mb-24 scroll-mt-28 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-stretch">
        <Animate className="rounded-[32px] bg-[#0F3A36] p-8 text-white shadow-[0_24px_60px_rgba(15,58,54,0.14)] sm:p-10">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
            About Ingenio Systems
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Roots in education. Now building across every sector.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            We started by solving real problems for schools in Zimbabwe. That
            practical foundation shaped how we approach everything — healthcare
            bots, AI systems, digital products, and sustainable manufacturing
            under INGENIO GREEN. We are not tied to one industry. We build where
            innovation creates impact, and we deliver work that actually
            functions in the environments it is meant for.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              "Software engineering + AI systems + green innovation under one roof",
              "Practical delivery — no vapourware, no slide-deck theatre",
              "Powered by INGENIO GREEN for sustainable technology",
            ].map((principle) => (
              <div
                key={principle}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-4"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]" />
                <p className="text-sm leading-7 text-white/80">{principle}</p>
              </div>
            ))}
          </div>
        </Animate>

        <Animate delay={120}>
          <div className="relative min-h-[420px] overflow-hidden rounded-[32px] border border-[rgba(30,126,52,0.10)] shadow-[0_16px_40px_rgba(15,58,54,0.06)]">
            <Image
              src="/workshop-2.jpeg"
              alt="Ingenio Systems collaborating with a client team"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F3A36]/88 via-[#0F3A36]/28 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="max-w-md rounded-[28px] border border-white/10 bg-white/10 p-5 text-white backdrop-blur-md">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                  Zimbabwe-born, globally-minded
                </span>
                <h3 className="mt-3 text-2xl font-semibold leading-tight">
                  Practical tech, delivered where it counts.
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  Workshops, planning, feedback loops, and team training ensure
                  every solution fits the real environment it is built for.
                </p>
              </div>
            </div>
          </div>
        </Animate>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA / CONTACT
      ═══════════════════════════════════════════════════ */}
      <section id="contact" className="mb-16 scroll-mt-28">
        <Animate>
          <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#0F3A36_0%,var(--color-green)_100%)] px-6 py-12 sm:px-10 sm:py-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                  Bring your brief
                </span>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Got an AI, healthcare, school, website, automation, or green
                  manufacturing project? Let us scope it.
                </h2>
                <p className="mt-4 text-base leading-8 text-white/74 sm:text-lg">
                  No vague proposals. We scope clearly, build practically, and
                  support what we deliver. Reach out on WhatsApp, email, or send
                  a brief through our project form.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-5">
                  <a
                    href="https://wa.me/263772800899"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-[var(--color-gold)]"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                    +263 77 280 0899
                  </a>
                  <a
                    href="mailto:hello@ingeniosystems.co.zw"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-[var(--color-gold)]"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                    hello@ingeniosystems.co.zw
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-gold)] px-7 py-4 text-base font-semibold text-[var(--color-text)] transition duration-300 hover:-translate-y-0.5"
                >
                  Start a Project
                  <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                </Link>
                <a
                  href="mailto:hello@ingeniosystems.co.zw"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/8 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:bg-white/12"
                >
                  Email Us
                  <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        </Animate>
      </section>
    </Layout>
  );
}
