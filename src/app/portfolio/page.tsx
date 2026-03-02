import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChartSimple,
  faDesktop,
  faGlobe,
  faLaptopCode,
  faMobileScreenButton,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const highlights = [
  { label: "Real project screens", value: "5" },
  { label: "Product types shown", value: "4" },
  { label: "Sectors represented", value: "3" },
];

const capabilities = [
  "Marketing websites",
  "Client dashboards",
  "Student portals",
  "Branded UI systems",
  "Responsive web apps",
  "Product landing experiences",
];

const caseStudies = [
  {
    title: "Fleet-Eye Tracking Systems",
    category: "Business Website",
    summary:
      "A bold product website for a vehicle tracking business, built to look technical, feel credible, and drive quote enquiries clearly.",
    image: "/fleeteye.png",
    alt: "Fleet-Eye tracking systems website screenshot",
    headerClass:
      "bg-[linear-gradient(135deg,#0F3A36_0%,#19A7BA_100%)] text-white",
    categoryClass: "text-white/76",
    imageFrameClass: "bg-[#07141c]",
    chips: ["Hero-led sales page", "Strong CTA hierarchy", "High-contrast interface"],
  },
  {
    title: "Invoicee Client Dashboard",
    category: "Web Application",
    summary:
      "A clean invoicing and client management interface focused on simple navigation, export actions, and day-to-day admin usability.",
    image: "/invoicee.png",
    alt: "Invoicee client management dashboard screenshot",
    headerClass:
      "bg-[linear-gradient(135deg,#eef4f7_0%,#f8fbfc_100%)] text-[#152238]",
    categoryClass: "text-[#5f7081]",
    imageFrameClass: "bg-[#edf2f7]",
    chips: ["Client records", "Invoice workflow", "Admin tools"],
  },
  {
    title: "kchiyaka.com",
    category: "Creative Portfolio",
    summary:
      "An immersive personal portfolio experience with stronger visual identity, section-based storytelling, and a more experimental navigation system.",
    image: "/kchiyaka.com.png",
    alt: "kchiyaka.com portfolio website screenshot",
    headerClass:
      "bg-[linear-gradient(135deg,#021c22_0%,#0F3A36_100%)] text-white",
    categoryClass: "text-white/76",
    imageFrameClass: "bg-[#07141c]",
    chips: ["Creative UI direction", "Personal brand site", "Interactive layout"],
  },
];

export default function PortfolioPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden full-bleed">
        <div className="absolute inset-0 bg-[linear-gradient(125deg,#061924_0%,#0F3A36_48%,#19A7BA_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_32%)]" />

        <div className="relative mx-auto grid min-h-[100svh] w-[95vw] max-w-7xl items-center gap-10 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:pb-24 lg:pt-36">
          <div className="max-w-3xl text-white">
            <Animate className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                Portfolio
              </span>
              <h1 className="text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl">
                Real interfaces, real products, and work that already shipped.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
                This portfolio shows the kind of work Ingenio Systems actually
                builds: public-facing websites, dashboards, portals, and
                branded digital products designed to look sharp and work
                properly.
              </p>
            </Animate>

            <Animate
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
              delay={100}
            >
              <Link
                href="#selected-work"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-gold)] px-7 py-4 text-base font-semibold text-[var(--color-text)] transition duration-300 hover:-translate-y-0.5"
              >
                View Selected Work
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/18 bg-white/10 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:bg-white/14"
              >
                Start a Project
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
            </Animate>

            <Animate className="mt-10 grid gap-4 sm:grid-cols-3" delay={180}>
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-sm"
                >
                  <p className="text-3xl font-bold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {item.label}
                  </p>
                </div>
              ))}
            </Animate>
          </div>

          <Animate delay={180}>
            <div className="relative mx-auto w-full max-w-3xl">
              <div className="grid gap-4 md:grid-cols-[1.08fr_0.92fr] md:items-start">
                <div className="self-start overflow-hidden rounded-[30px] border border-white/12 bg-black/12 p-4 shadow-[0_24px_70px_rgba(7,17,28,0.22)] backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">
                        Featured Build
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-white">
                        Fleet-Eye Tracking Systems
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/72">
                      Website
                    </span>
                  </div>

                  <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-[24px] bg-[#07141c]">
                    <Image
                      src="/fleeteye.png"
                      alt="Fleet-Eye tracking systems website preview"
                      fill
                      priority
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      className="object-contain object-center p-3 md:p-4"
                    />
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-[26px] border border-white/12 bg-black/12 p-4 shadow-[0_20px_50px_rgba(7,17,28,0.18)] backdrop-blur-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                          Web Application
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-white">
                          Invoicee Dashboard
                        </h3>
                      </div>
                    </div>

                    <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-[20px] bg-[#edf2f7]">
                      <Image
                        src="/invoicee.png"
                        alt="Invoicee dashboard preview"
                        fill
                        sizes="(min-width: 1024px) 20vw, 100vw"
                        className="object-contain object-center p-2"
                      />
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[26px] border border-white/12 bg-black/12 p-4 shadow-[0_20px_50px_rgba(7,17,28,0.18)] backdrop-blur-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                          Creative Portfolio
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-white">
                          kchiyaka.com
                        </h3>
                      </div>
                    </div>

                    <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-[20px] bg-[#07141c]">
                      <Image
                        src="/kchiyaka.com.png"
                        alt="kchiyaka.com portfolio preview"
                        fill
                        sizes="(min-width: 1024px) 20vw, 100vw"
                        className="object-contain object-center p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      <section id="selected-work" className="scroll-mt-32 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Animate>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
              Selected Work
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-text)] sm:text-4xl lg:text-5xl">
              Project snapshots from real client and product work
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
              Each example below shows a different kind of interface: sales
              websites, education platforms, internal tools, and personality-led
              portfolio design.
            </p>
          </Animate>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Animate key={study.title} delay={index * 90}>
              <div className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-[rgba(30,126,52,0.14)] bg-white shadow-[0_20px_55px_rgba(15,58,54,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(15,58,54,0.1)]">
                <div className={`${study.headerClass} px-6 py-5`}>
                  <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${study.categoryClass}`}>
                    {study.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">{study.title}</h3>
                </div>

                <div className="p-4">
                  <div className={`relative aspect-[16/10] overflow-hidden rounded-[24px] border border-[rgba(30,126,52,0.12)] ${study.imageFrameClass}`}>
                    <Image
                      src={study.image}
                      alt={study.alt}
                      fill
                      sizes="(min-width: 1280px) 28vw, (min-width: 768px) 50vw, 100vw"
                      className="object-contain object-center p-2 transition duration-500 group-hover:scale-[1.01]"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-6 pb-6">
                  <p className="text-base leading-8 text-[var(--color-muted)]">
                    {study.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.chips.map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center rounded-full border border-[rgba(30,126,52,0.14)] bg-[var(--color-light)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-green)]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      <section className="full-bleed overflow-hidden bg-[linear-gradient(135deg,var(--color-light)_0%,#f8fcfa_50%,var(--color-green-light)_100%)] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-[95vw] max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <Animate className="rounded-[32px] bg-[#0F3A36] p-8 text-white shadow-[0_28px_70px_rgba(15,58,54,0.16)] sm:p-10">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                Education Build
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Guinea Fowl High School digital presence and student access
              </h2>
              <p className="mt-5 text-base leading-8 text-white/76 sm:text-lg">
                This work shows the public-facing school website and the student
                portal login experience as part of one clearer school system:
                information on the front end, account access on the inside.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-[24px] border border-white/10 bg-white/8 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faGlobe} className="text-[var(--color-gold)]" />
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">
                      Public Website
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-white/74">
                    School brand presence, admissions direction, navigation,
                    gallery access, and a cleaner public-facing homepage.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/8 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-[var(--color-gold)]" />
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">
                      Student Portal
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-white/74">
                    A branded portal login surface designed to make access feel
                    clear, familiar, and part of the same school system.
                  </p>
                </div>
              </div>
            </Animate>

            <div className="grid gap-6 lg:grid-cols-2">
              <Animate delay={80}>
                <div className="overflow-hidden rounded-[30px] border border-[rgba(30,126,52,0.14)] bg-white p-4 shadow-[0_18px_50px_rgba(15,58,54,0.06)]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[22px]">
                    <Image
                      src="/gfhs.png"
                      alt="Guinea Fowl High School website screenshot"
                      fill
                      sizes="(min-width: 1024px) 26vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </Animate>

              <Animate delay={140}>
                <div className="overflow-hidden rounded-[30px] border border-[rgba(30,126,52,0.14)] bg-white p-4 shadow-[0_18px_50px_rgba(15,58,54,0.06)]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[22px]">
                    <Image
                      src="/gfhsportal.png"
                      alt="Guinea Fowl High School student portal screenshot"
                      fill
                      sizes="(min-width: 1024px) 26vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </Animate>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Animate>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
              What This Work Shows
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
              Different visual directions, same delivery standard
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              The portfolio is intentionally varied. Some products need a clean
              admin feel, some need a bold commercial landing page, and some
              need more personality. The common thread is clarity, structure,
              and responsiveness.
            </p>
          </Animate>

          <Animate delay={100}>
            <div className="rounded-[32px] border border-[rgba(30,126,52,0.14)] bg-white p-8 shadow-[0_20px_55px_rgba(15,58,54,0.05)]">
              <div className="grid gap-4 sm:grid-cols-2">
                {capabilities.map((capability, index) => {
                  const icons = [
                    faDesktop,
                    faLaptopCode,
                    faShieldHalved,
                    faChartSimple,
                    faMobileScreenButton,
                    faGlobe,
                  ];

                  return (
                    <div
                      key={capability}
                      className="flex items-start gap-3 rounded-[22px] bg-[var(--color-light)] px-4 py-4"
                    >
                      <span className="mt-1 text-[var(--color-green)]">
                        <FontAwesomeIcon icon={icons[index]} />
                      </span>
                      <p className="text-sm font-medium leading-7 text-[var(--color-text)]">
                        {capability}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Animate>
        </div>
      </section>

      <section className="mb-10 overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#0F3A36_0%,var(--color-green)_100%)] px-6 py-10 text-white sm:px-8 lg:px-10 lg:py-12">
        <Animate className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
              Next Project
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              If you want work at this level, bring the brief and we will build
              it properly.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/76 sm:text-lg">
              We can help with business websites, internal platforms, portals,
              responsive admin tools, and branded product interfaces.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-gold)] px-7 py-4 text-base font-semibold text-[var(--color-text)] transition duration-300 hover:-translate-y-0.5"
            >
              Start a Quote
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/16 bg-white/8 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:bg-white/12"
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
