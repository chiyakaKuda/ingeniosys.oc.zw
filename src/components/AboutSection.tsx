import Link from "next/link";
import Image from "next/image";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const solutions = [
  {
    title: "Pharma & Dental ERP",
    desc: "AI-driven clinic management with WhatsApp convenience — bookings, patient records, inventory, follow-ups.",
  },
  {
    title: "Education Tech",
    desc: "School management systems and websites — portals, admissions, parent communication, automation.",
  },
  {
    title: "Ingenio Green",
    desc: "Biodegradable plastic pellets for sustainable packaging — manufacturing innovation that reduces footprint.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="mb-24 scroll-mt-28">
      {/* Header */}
      <Animate className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
          Our DNA
        </span>
        <h2 className="mt-3 text-3xl font-bold text-[var(--color-text)] sm:text-4xl lg:text-5xl">
          AI-driven solutions, built for how people{" "}
          <span className="text-[var(--color-gold)] italic">actually</span>{" "}
          work.
        </h2>
        <p className="mt-4 text-lg text-[var(--color-muted)]">
          Born in Zimbabwe. Solving real-world operational friction since day one.
        </p>
      </Animate>

      {/* Content */}
      <div className="mt-14 flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
        {/* Image side */}
        <Animate className="relative lg:w-1/2" delay={80}>
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[40px] shadow-[0_24px_60px_rgba(15,58,54,0.14)]">
            <Image
              src="/workshop-2.jpeg"
              alt="Ingenio Systems team collaborating"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0F3A36]/40 to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 rounded-3xl border border-[var(--color-gold)]/25 bg-white px-6 py-4 shadow-[0_20px_50px_rgba(15,58,54,0.10)] sm:-right-10">
            <p className="text-sm font-bold text-[var(--color-text)]">
              Born in Zimbabwe
            </p>
            <p className="text-xs text-[var(--color-muted)]">
              Solving real-world friction.
            </p>
          </div>
        </Animate>

        {/* Text side */}
        <Animate className="lg:w-5/12" delay={120}>
          <p className="text-xl leading-relaxed text-[var(--color-muted)]">
            We do not build tech for the sake of it. We integrate AI into the
            platforms people already use, turning manual workflows into
            automated growth engines.
          </p>

          <ul className="mt-10 space-y-6">
            {solutions.map((item) => (
              <li key={item.title} className="group flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-light)] text-[var(--color-green)] shadow-sm transition-all duration-300 group-hover:bg-[var(--color-green)] group-hover:text-white">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="/quote"
            className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-green)] transition-colors hover:text-[var(--color-gold)]"
          >
            <span className="border-b-2 border-[var(--color-green)] pb-1 transition-colors group-hover:border-[var(--color-gold)]">
              Start a Project
            </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xs transition-transform group-hover:translate-x-1.5"
            />
          </Link>
        </Animate>
      </div>
    </section>
  );
}
