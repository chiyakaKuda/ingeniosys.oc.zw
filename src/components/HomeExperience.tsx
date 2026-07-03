import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBell,
  faBriefcase,
  faCalendarCheck,
  faCheck,
  faCircleQuestion,
  faCreditCard,
  faGraduationCap,
  faHeadset,
  faIndustry,
  faReceipt,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const industries = [
  {
    label: "Institutes",
    blurb: "Schools & universities",
    icon: faGraduationCap,
    accent: "check" as const,
  },
  {
    label: "Healthcare",
    blurb: "Clinics & pharmacies",
    icon: faStethoscope,
    accent: "bars" as const,
  },
  {
    label: "Corporate",
    blurb: "SMEs & enterprises",
    icon: faBriefcase,
    accent: "badge" as const,
  },
  {
    label: "Manufacturing",
    blurb: "Green & sustainable",
    icon: faIndustry,
    accent: "ring" as const,
  },
];

const capabilities = [
  { label: "Bookings", icon: faCalendarCheck },
  { label: "Orders", icon: faReceipt },
  { label: "Reminders", icon: faBell },
  { label: "Support", icon: faHeadset },
  { label: "Payments", icon: faCreditCard },
  { label: "FAQs", icon: faCircleQuestion },
];

export default function HomeExperience() {
  return (
    <Layout>
      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="group relative mb-16 flex h-screen flex-col overflow-hidden full-bleed bg-[var(--hero-dark)] text-[var(--hero-text)]"
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

        <div className="relative mx-auto flex w-[95vw] max-w-7xl flex-1 items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-10 lg:pb-28 lg:pt-36">
          <div className="grid w-full gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* LEFT: copy */}
            <div>
              <Animate>
                <h1 className="max-w-xl text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
                  The Fastest Way to{" "}
                  <span className="text-[var(--hero-primary)]">
                    Serve More Customers.
                  </span>
                </h1>
              </Animate>

              <Animate delay={100}>
                <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--hero-muted)] sm:text-xl">
                  We build WhatsApp chatbots that answer, book, and sell for
                  your business — the app your customers already use.
                  Trusted by schools, healthcare providers, and growing
                  businesses across Zimbabwe.
                </p>
              </Animate>

              <Animate
                delay={180}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
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
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-7 py-4 text-base font-semibold text-[var(--hero-text)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--hero-primary)] hover:text-[var(--hero-primary)]"
                >
                  See Use Cases
                </Link>
              </Animate>

              <Animate delay={260} className="mt-12">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--hero-muted)]">
                  Industries we serve
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {industries.map((industry) => (
                    <div
                      key={industry.label}
                      className="group rounded-[24px] border border-white/15 bg-transparent p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--hero-primary)] hover:bg-white/5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--hero-primary)]/12 text-[var(--hero-primary)] transition-transform duration-300 group-hover:scale-110">
                          <FontAwesomeIcon icon={industry.icon} className="text-sm" />
                        </span>

                        {industry.accent === "check" ? (
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--hero-primary)] text-white">
                            <FontAwesomeIcon icon={faCheck} className="text-[10px]" />
                          </span>
                        ) : null}

                        {industry.accent === "bars" ? (
                          <span className="flex items-end gap-0.5" aria-hidden="true">
                            {[6, 10, 8, 14, 11].map((height, index) => (
                              <span
                                key={index}
                                className="w-1 rounded-full bg-[var(--hero-primary)]/70"
                                style={{ height: `${height}px` }}
                              />
                            ))}
                          </span>
                        ) : null}

                        {industry.accent === "badge" ? (
                          <span className="rounded-full border border-[var(--hero-primary)]/30 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--hero-primary)]">
                            Active
                          </span>
                        ) : null}

                        {industry.accent === "ring" ? (
                          <span
                            className="h-8 w-8 rounded-full border-[3px] border-white/15 border-t-[var(--hero-primary)]"
                            aria-hidden="true"
                          />
                        ) : null}
                      </div>

                      <p className="mt-4 text-sm font-bold text-[var(--hero-text)]">
                        {industry.label}
                      </p>
                      <p className="mt-0.5 text-xs text-[var(--hero-muted)]">
                        {industry.blurb}
                      </p>
                    </div>
                  ))}
                </div>
              </Animate>
            </div>

            {/* RIGHT: orbiting capability wheel */}
            <Animate
              delay={200}
              className="relative mx-auto hidden h-[380px] w-[380px] lg:block"
            >
              <div className="absolute inset-0 rounded-full border border-white/15" />
              <div className="absolute inset-10 rounded-full border border-white/10" />

              <div className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--hero-primary)] shadow-[0_20px_50px_rgba(0,168,107,0.4)]">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-4xl text-[var(--hero-dark)]"
                />
              </div>

              <div className="absolute inset-0 animate-orbit-spin">
                {capabilities.map((capability, index) => {
                  const angle = (360 / capabilities.length) * index;
                  return (
                    <div
                      key={capability.label}
                      className="absolute left-1/2 top-1/2 h-0 w-0"
                      style={{
                        transform: `rotate(${angle}deg) translate(150px)`,
                      }}
                    >
                      <div className="flex -translate-x-1/2 -translate-y-1/2 animate-orbit-spin-reverse items-center gap-2 whitespace-nowrap rounded-full bg-white px-3 py-2 text-xs font-bold text-[var(--hero-dark)] shadow-lg">
                        <FontAwesomeIcon
                          icon={capability.icon}
                          className="text-[var(--hero-primary)]"
                        />
                        {capability.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Animate>
          </div>
        </div>
      </section>
    </Layout>
  );
}
