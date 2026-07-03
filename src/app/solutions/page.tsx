import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faGraduationCap,
  faRecycle,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";

const sectors = [
  {
    title: "Healthcare",
    description:
      "Pharma-Bot and Dental Clinic Bot handle bookings, reminders, and patient communication for clinics and pharmacies.",
    icon: faStethoscope,
  },
  {
    title: "Education",
    description:
      "School management platforms and websites for institutions like Ixar Academy — admissions, portals, communication.",
    icon: faGraduationCap,
  },
  {
    title: "Sustainable Manufacturing",
    description:
      "INGENIO GREEN biodegradable plastic pellets for sustainable packaging, built for real supply chains.",
    icon: faRecycle,
  },
];

export default function SolutionsPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden full-bleed">
        <div className="absolute inset-0">
          <Image
            src="/team/tech.jpg"
            alt="Ingenio Systems solutions banner"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(4,16,12,0.94)_0%,rgba(4,16,12,0.8)_48%,rgba(0,168,107,0.35)_100%)]" />

        <div className="relative mx-auto flex min-h-[60vh] w-[95vw] max-w-7xl flex-col justify-center px-4 pb-16 pt-32 sm:px-6 lg:px-10 lg:pb-20">
          <Animate className="max-w-3xl text-white">
            <span className="inline-flex w-fit items-center rounded-full border border-[var(--hero-primary)]/30 bg-[var(--hero-primary)]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--hero-primary)]">
              Solutions
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.02] sm:text-5xl lg:text-6xl">
              Solutions organized by sector, not just by product.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
              We are putting together a detailed breakdown of what we build
              for healthcare, education, and sustainable manufacturing.
              Here is where we are headed.
            </p>
          </Animate>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Animate>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--hero-primary)]">
              Sectors We Serve
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
              Full sector breakdowns are on the way
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
              In the meantime, see what we already build on the Services
              page, or get in touch to talk through your specific need.
            </p>
          </Animate>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {sectors.map((sector, index) => (
            <Animate key={sector.title} delay={index * 70}>
              <div className="h-full rounded-[28px] border border-[rgba(0,168,107,0.14)] bg-white p-6 shadow-[0_16px_40px_rgba(4,16,12,0.05)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--hero-primary)]/10 text-[var(--hero-primary)]">
                  <FontAwesomeIcon icon={sector.icon} />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-[var(--color-text)]">
                  {sector.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {sector.description}
                </p>
              </div>
            </Animate>
          ))}
        </div>

        <Animate className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--hero-primary)] px-7 py-4 text-base font-bold text-[var(--hero-dark)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--hero-primary-hover)]"
          >
            See Services
            <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
          </Link>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-[rgba(0,168,107,0.3)] px-7 py-4 text-base font-semibold text-[var(--color-text)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--hero-primary)]"
          >
            Get a Quote
            <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
          </Link>
        </Animate>
      </section>
    </Layout>
  );
}
