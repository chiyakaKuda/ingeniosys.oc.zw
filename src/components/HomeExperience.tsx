// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBolt,
  faChartLine,
  faCheck,
  faCommentDots,
  faFlask,
  faGraduationCap,
  faHandshake,
  faIndustry,
  faLaptopCode,
  faRecycle,
  faRobot,
  faSchool,
  faStar,
  faStethoscope,
  faTooth,
  faWandMagicSparkles,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import AboutSection from "@/components/AboutSection";

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
  {
    name: "Pharma-Bot",
    eyebrow: "Healthcare AI",
    mark: "Pharma-Bot",
    accent: "text-emerald-600",
    src: null,
    icon: faFlask,
  },
  {
    name: "Dental Clinic Bot",
    eyebrow: "Healthcare AI",
    mark: "Dental Clinic Bot",
    accent: "text-cyan-600",
    src: null,
    icon: faTooth,
  },
  {
    name: "St Patrick High",
    eyebrow: "School Platform",
    mark: null,
    accent: "text-yellow-600",
    src: "/st patricks.png",
    icon: null,
  },
  {
    name: "Guinea Fowl High",
    eyebrow: "School Website and Portal",
    mark: null,
    accent: "text-red-700",
    src: "/guinea.png",
    icon: null,
  },
  {
    name: "Ixar Academy",
    eyebrow: "School Platform",
    mark: null,
    accent: "text-blue-600",
    src: "/ixar.png",
    icon: null,
  },
];

const collaborations = [
  { name: "UNICEF", src: "/unicef.png" },
  { name: "KOICA", src: "/koica.png" },
  { name: "Amnesty International", src: "/amnesty.jpg" },
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

const heroChecklist = [
  "AI Systems",
  "Healthtech Bots",
  "Green Products",
  "24/7 Support",
];

// Placeholder figures — swap for real numbers before shipping.
const heroStats = [
  { label: "Projects delivered", value: "40+", icon: faChartLine },
  { label: "Avg. reply time", value: "2h", icon: faBolt },
  { label: "Client retention", value: "96%", icon: faCommentDots },
  { label: "Client rating", value: "4.9/5", icon: faStar },
];

const heroStatusPills = [
  "System deployed",
  "Bot live",
  "Report generated",
  "AI analyzing...",
];

const heroChatMenu = [
  "Get a Quote",
  "View Portfolio",
  "Talk to a Human",
  "Learn About Services",
];

// ─── PAGE ───────────────────────────────────────────────

export default function HomeExperience() {
  return (
    <Layout>
      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="group relative mb-16 flex min-h-screen flex-col overflow-hidden full-bleed bg-[var(--hero-dark)] text-[var(--hero-text)]"
      >
        <div className="absolute inset-0 hero-image-layer">
          <Image
            src="/hero-whatsapp.jpg"
            alt="Customer chatting with an Ingenio Systems AI assistant on WhatsApp"
            fill
            priority
            sizes="100vw"
            className="hero-cinematic-image object-cover object-[72%_46%]"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,16,12,0.96)_0%,rgba(4,16,12,0.86)_38%,rgba(4,16,12,0.38)_68%,rgba(4,16,12,0.58)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(0deg,var(--hero-dark)_0%,rgba(4,16,12,0)_100%)]" />

        <div className="relative mx-auto flex w-[95vw] max-w-7xl flex-1 items-center px-4 pb-20 pt-32 sm:px-6 lg:px-10 lg:pb-24 lg:pt-40">
        <div className="grid w-full gap-16 lg:grid-cols-2 lg:items-center">
          {/* LEFT: copy */}
          <div>
            <Animate className="inline-flex items-center gap-2 rounded-full border border-[var(--hero-primary)]/30 bg-[var(--hero-primary)]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--hero-primary)]">
              <FontAwesomeIcon icon={faWandMagicSparkles} className="text-[10px]" />
              AI-Powered Systems
            </Animate>

            <Animate delay={80}>
              <h1 className="mt-7 max-w-xl text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
                We engineer intelligent systems for{" "}
                <span className="text-[var(--hero-primary)]">
                  real-world operations.
                </span>
              </h1>
            </Animate>

            <Animate delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--hero-muted)] sm:text-xl">
                AI ERP platforms, healthcare bots, school systems, digital
                products, and green manufacturing — built with the discipline
                to survive outside the demo.
              </p>
            </Animate>

            <Animate
              delay={200}
              className="mt-8 grid max-w-md grid-cols-2 gap-3"
            >
              {heroChecklist.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold text-[var(--hero-text)]"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--hero-primary)]/15 text-[var(--hero-primary)]">
                    <FontAwesomeIcon icon={faCheck} className="text-[10px]" />
                  </span>
                  {item}
                </div>
              ))}
            </Animate>

            <Animate
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              delay={260}
            >
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--hero-primary)] px-7 py-4 text-base font-bold text-[var(--hero-dark)] shadow-[0_24px_54px_rgba(0,168,107,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--hero-primary-hover)]"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-base" />
                Book Free Demo
              </Link>
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/18 bg-white/5 px-7 py-4 text-base font-semibold text-[var(--hero-text)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--hero-primary)]/50 hover:bg-white/10"
              >
                Explore Work
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </a>
            </Animate>

            <Animate delay={320} className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {["A", "K", "T"].map((initial) => (
                  <span
                    key={initial}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--hero-dark)] bg-[var(--hero-primary)]/20 text-sm font-bold text-[var(--hero-primary)]"
                  >
                    {initial}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[var(--hero-muted)]">
                <span className="font-bold text-[var(--hero-text)]">XX+</span>{" "}
                businesses working with Ingenio Systems
              </p>
            </Animate>
          </div>

          {/* RIGHT: floating cards over the full-bleed photo (desktop only) */}
          <Animate
            delay={180}
            className="relative hidden min-h-[520px] lg:block"
          >
            {/* Chat mockup card */}
            <div className="absolute left-0 top-4 w-72 rounded-2xl bg-white p-3 text-[var(--hero-dark)] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-black/5 pb-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--hero-primary)] text-white">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-sm" />
                </span>
                <div>
                  <p className="text-sm font-bold leading-none">
                    Ingenio Systems
                  </p>
                  <p className="mt-1 text-[10px] font-semibold text-emerald-600">
                    Online
                  </p>
                </div>
              </div>
              <p className="mt-3 rounded-xl rounded-tl-sm bg-black/5 p-2 text-xs leading-5">
                👋 Hi! Welcome to Ingenio Systems. How can I help today?
              </p>
              <div className="mt-2 space-y-1.5">
                {heroChatMenu.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg bg-[var(--hero-primary)]/8 px-2 py-1.5 text-xs font-semibold text-[var(--hero-primary)]"
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--hero-primary)]/15 text-[10px]">
                      {index + 1}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-end">
                <span className="rounded-xl rounded-tr-sm bg-[var(--hero-primary)] px-3 py-1.5 text-xs font-semibold text-white">
                  1
                </span>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute right-0 top-2 flex flex-col gap-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-[var(--hero-dark)] shadow-xl"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--hero-primary)]/12 text-[var(--hero-primary)]">
                    <FontAwesomeIcon icon={stat.icon} className="text-sm" />
                  </span>
                  <div>
                    <p className="text-sm font-black leading-none">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold text-black/50">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating status pills */}
            <div className="absolute bottom-2 left-0 right-0 flex flex-wrap items-center justify-between gap-3">
              {heroStatusPills.map((pill) => (
                <span
                  key={pill}
                  className="flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-semibold text-[var(--hero-dark)] shadow-lg"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--hero-primary)]" />
                  {pill}
                </span>
              ))}
            </div>
          </Animate>
        </div>
        </div>

        {/* Trusted-by strip */}
        <div className="relative border-t border-white/8 bg-[var(--hero-surface)]">
          <div className="mx-auto w-[95vw] max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
            <p className="text-center text-xs font-bold uppercase tracking-[0.24em] text-[var(--hero-muted)]">
              Platforms we have built and support
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {clientLogos.map((client) => (
                <span
                  key={client.name}
                  className="text-sm font-bold text-white/70"
                >
                  {client.name}
                </span>
              ))}
            </div>
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
    

      {/* ═══════════════════════════════════════════════════
          CLIENTS
      ═══════════════════════════════════════════════════ */}
      <section id="clients" className="mb-24 scroll-mt-28">
        <Animate className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
            Clients & Products
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Platforms and partners in the Ingenio ecosystem
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted)]">
            A snapshot of the schools, healthcare products, and digital systems
            shaped by our team.
          </p>
        </Animate>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {clientLogos.map((client, index) => (
            <Animate key={client.name} delay={index * 50}>
              <div className="group flex h-full min-h-48 flex-col items-center justify-center rounded-[24px] border border-[rgba(30,126,52,0.10)] bg-white p-5 text-center shadow-[0_12px_34px_rgba(15,58,54,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)]/30 hover:shadow-[0_22px_44px_rgba(15,58,54,0.08)]">
                <div className="relative flex h-20 w-full items-center justify-center">
                  {client.src ? (
                    <Image
                      src={client.src}
                      alt={`${client.name} logo`}
                      fill
                      sizes="(min-width: 1024px) 16vw, (min-width: 640px) 40vw, 80vw"
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : client.icon ? (
                    <span
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-light)] text-2xl ${client.accent}`}
                    >
                      <FontAwesomeIcon icon={client.icon} />
                    </span>
                  ) : null}
                </div>
                {client.mark ? (
                  <p className={`mt-5 text-lg font-black ${client.accent}`}>
                    {client.mark}
                  </p>
                ) : (
                  <p className="mt-5 text-lg font-black text-[var(--color-text)]">
                    {client.name}
                  </p>
                )}
                <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  {client.eyebrow}
                </span>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
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
      Discovery → Delivery → Growth
    </h2>
    <p className="mt-4 text-lg text-[var(--color-muted)]">
      No endless proposals. Just a clear, repeatable process that turns ideas
      into working products.
    </p>
  </Animate>

  <div className="mt-12 flex flex-col gap-4 lg:gap-6">
    {processSteps.map((step, index) => (
        <Animate key={step.step} delay={index * 80}>
          <div
            className={`group flex flex-col gap-6 rounded-[28px] border border-[rgba(30,126,52,0.10)] bg-white p-6 shadow-[0_12px_34px_rgba(15,58,54,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)]/30 hover:shadow-[0_20px_44px_rgba(15,58,54,0.08)] sm:flex-row sm:items-center sm:gap-10 sm:p-8`}
          >
            {/* Number + Icon */}
            <div className="flex items-center gap-4 sm:w-48 sm:shrink-0 sm:flex-col sm:items-start sm:gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F3A36] text-xl font-bold text-[var(--color-gold)] sm:h-16 sm:w-16 sm:text-2xl">
                {index + 1}
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-green)]">
                {["Discover", "Build", "Support"][index]}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[var(--color-text)] sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                {step.description}
              </p>
            </div>

            {/* Arrow indicator */}
            <span className="hidden shrink-0 text-2xl text-[var(--color-muted)]/25 transition-colors group-hover:text-[var(--color-gold)]/50 sm:block">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
        </Animate>
    ))}
  </div>
</section>

      {/* ═══════════════════════════════════════════════════
          ABOUT
          
      ═══════════════════════════════════════════════════ */}
      
{/* ═══════════════════════════════════════════════════
    ABOUT
═══════════════════════════════════════════════════ */}
<AboutSection/>
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
                    href="mailto:sale@ingeniosys.co.zw"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-[var(--color-gold)]"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                    sale@ingeniosys.co.zw
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
                  href="mailto:sale@ingeniosys.co.zw"
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
