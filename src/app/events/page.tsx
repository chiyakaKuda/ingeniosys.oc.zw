import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function EventsPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden full-bleed">
        <div className="absolute inset-0">
          <Image
            src="/team/tech.jpg"
            alt="Ingenio Systems events banner"
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
              Events
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.02] sm:text-5xl lg:text-6xl">
              Where you can find Ingenio Systems next.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
              We are building out our events calendar — workshops, demos,
              and sector meetups. Nothing scheduled yet, check back soon.
            </p>
          </Animate>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Animate>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--hero-primary)]/10 text-[var(--hero-primary)] mx-auto">
              <FontAwesomeIcon icon={faCalendarDays} className="text-xl" />
            </span>
            <h2 className="mt-6 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
              No events on the calendar right now
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
              Want us at your school, clinic, or business event, or want to
              be notified when we announce one? Reach out and we will follow
              up.
            </p>
          </Animate>

          <Animate className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--hero-primary)] px-7 py-4 text-base font-bold text-[var(--hero-dark)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--hero-primary-hover)]"
            >
              Contact Us
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[rgba(0,168,107,0.3)] px-7 py-4 text-base font-semibold text-[var(--color-text)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--hero-primary)]"
            >
              View Case Studies
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </Link>
          </Animate>
        </div>
      </section>
    </Layout>
  );
}
