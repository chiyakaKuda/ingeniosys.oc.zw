import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBullseye,
  faCommentDots,
  faEnvelope,
  faEye,
  faLaptopCode,
  faLightbulb,
  faMobileScreenButton,
  faShieldAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const values = [
  {
    title: "Clarity first",
    description:
      "We keep communication direct and make sure the product direction stays easy to understand.",
    icon: faEye,
  },
  {
    title: "Reliable delivery",
    description:
      "Clear scope, careful build quality, and realistic execution matter more to us than empty promises.",
    icon: faShieldAlt,
  },
  {
    title: "Practical innovation",
    description:
      "We use modern tools where they solve the actual problem, not just because they sound impressive.",
    icon: faLightbulb,
  },
  {
    title: "Work that lasts",
    description:
      "Support, refinement, and long-term usefulness are part of the job, not an afterthought.",
    icon: faBullseye,
  },
];

const approach = [
  {
    title: "We start with the sector need",
    description:
      "Every project begins by understanding the workflow, users, and real environment behind the technology request.",
    icon: faUsers,
  },
  {
    title: "We build across systems and products",
    description:
      "Our work includes AI ERP systems, healthcare bots, school platforms, websites, dashboards, and automation.",
    icon: faMobileScreenButton,
  },
  {
    title: "We stay close to the work",
    description:
      "Clients work directly with the people building the product, which keeps delivery faster and communication cleaner.",
    icon: faLaptopCode,
  },
];

const founders = [
  {
    name: "Godfrey Wapemha",
    role: "CEO, Founder and Technical Trainer",
    image: "/team/godfrey.jpeg",
    alt: "Godfrey Wapemha portrait",
    summary:
      "Godfrey leads strategy, client relationships, technology training, and INGENIO GREEN direction across software and innovation work.",
    qualification:
      "Bachelor of Technology in Engineering, Harare Institute of Technology",
    email: "director@ingeniosys.co.zw",
    whatsapp: "263785015243",
    phone: "+263 78 501 5243",
  },
  {
    name: "Kudakwashe Chiyaka",
    role: "Lead Software Engineer",
    image: "/team/kuda.jpg",
    alt: "Kudakwashe Chiyaka portrait",
    summary:
      "Kuda leads product engineering and interface execution across AI systems, websites, portals, dashboards, and branded digital products.",
    qualification:
      "Bachelor of Technology in Computer Science, Harare Institute of Technology",
    email: "kudachiyaka@ingeniosys.co.zw",
    whatsapp: "263718083975",
    phone: "+263 71 808 3975",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden full-bleed">
        <div className="absolute inset-0">
          <Image
            src="/workshop-2.jpeg"
            alt="Ingenio Systems working with a client team"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,17,28,0.92)_0%,rgba(15,58,54,0.84)_48%,rgba(25,167,186,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_34%)]" />

        <div className="relative mx-auto grid min-h-[100svh] w-[95vw] max-w-7xl items-center gap-10 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:pb-24 lg:pt-36">
          <div className="max-w-3xl text-white">
            <Animate className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                About Ingenio Systems
              </span>
              <h1 className="text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl">
                A Zimbabwean innovative tech company powered by INGENIO GREEN.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
                Ingenio Systems builds AI-driven ERP systems, healthcare tools
                like Pharma-Bot and Dental Clinic Bot, school management
                systems, websites, automation, and biodegradable packaging
                innovation.
              </p>
            </Animate>

            <Animate
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
              delay={100}
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-gold)] px-7 py-4 text-base font-semibold text-[var(--color-text)] transition duration-300 hover:-translate-y-0.5"
              >
                View Portfolio
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/18 bg-white/10 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:bg-white/14"
              >
                Contact Us
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
            </Animate>
          </div>

          <Animate delay={160}>
            <div className="rounded-[32px] border border-white/12 bg-white/10 p-6 text-white shadow-[0_24px_60px_rgba(7,17,28,0.22)] backdrop-blur-md sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                What defines us
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
                Small team, direct access, and innovation built around real
                operational problems.
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-black/10 px-5 py-4">
                  <p className="text-3xl font-bold text-white">2</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Founders staying close to delivery
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-black/10 px-5 py-4">
                  <p className="text-3xl font-bold text-white">AI + Green</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Technology work across AI systems and INGENIO GREEN ideas
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-black/10 px-5 py-4">
                  <p className="text-3xl font-bold text-white">Zimbabwe</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Local context, local collaboration, practical delivery
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-black/10 px-5 py-4">
                  <p className="text-3xl font-bold text-white">Direct</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Fewer layers between the idea and the product being built
                  </p>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Animate>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
              Our Story
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
              Built from education roots, grown into broader tech innovation
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              Ingenio Systems was shaped by practical work on the ground:
              schools that needed better systems, organizations that needed
              stronger digital tools, and teams that needed technology they
              could actually use.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Today the company is positioned around innovation: AI-driven ERP
              systems, healthcare bots, school management platforms, websites,
              digital products, and sustainable manufacturing through INGENIO
              GREEN.
            </p>
          </Animate>

          <div className="grid gap-6 md:grid-cols-3">
            {approach.map((item, index) => (
              <Animate key={item.title} delay={index * 80}>
                <div className="h-full rounded-[28px] border border-[rgba(30,126,52,0.14)] bg-white p-6 shadow-[0_18px_45px_rgba(15,58,54,0.05)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-light)] text-[var(--color-green)]">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <section className="full-bleed overflow-hidden bg-[linear-gradient(135deg,var(--color-light)_0%,#f8fcfa_55%,var(--color-green-light)_100%)] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-[95vw] max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <Animate>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
                Core Values
              </span>
              <h2 className="mt-3 text-3xl font-bold text-[var(--color-text)] sm:text-4xl lg:text-5xl">
                The standards behind every build
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
                These standards shape how we scope technology, communicate with
                clients, and judge whether a product or manufacturing idea is
                ready for real use.
              </p>
            </Animate>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <Animate key={value.title} delay={index * 80}>
                <div className="h-full rounded-[30px] border border-[rgba(30,126,52,0.14)] bg-white p-7 shadow-[0_20px_50px_rgba(15,58,54,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(15,58,54,0.1)]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-light)] text-[var(--color-green)]">
                    <FontAwesomeIcon icon={value.icon} className="text-xl" />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold text-[var(--color-text)]">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                    {value.description}
                  </p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Animate>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
              Founders
            </span>
              <h2 className="mt-3 text-3xl font-bold text-[var(--color-text)] sm:text-4xl lg:text-5xl">
                The people building the company
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
              Ingenio Systems stays intentionally lean. That means clients work
              directly with the people leading the product, system, or
              innovation path.
            </p>
          </Animate>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {founders.map((founder, index) => (
            <Animate key={founder.name} delay={index * 100}>
              <div className="overflow-hidden rounded-[32px] border border-[rgba(30,126,52,0.14)] bg-white shadow-[0_24px_60px_rgba(15,58,54,0.06)]">
                <div className="relative h-[360px] overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover object-center transition duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3A36]/82 via-[#0F3A36]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                    <h3 className="text-3xl font-bold">{founder.name}</h3>
                    <p className="mt-2 text-base font-medium text-[var(--color-gold)]">
                      {founder.role}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-base leading-8 text-[var(--color-muted)]">
                    {founder.summary}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-[var(--color-text)]">
                    <span className="font-semibold">Qualification:</span>{" "}
                    {founder.qualification}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`mailto:${founder.email}`}
                      className="inline-flex items-center gap-3 rounded-full border border-[rgba(30,126,52,0.14)] bg-[var(--color-light)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] transition duration-300 hover:border-[var(--color-gold)]/40 hover:bg-white"
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                      Email
                    </a>
                    <a
                      href={`https://wa.me/${founder.whatsapp}`}
                      className="inline-flex items-center gap-3 rounded-full border border-[rgba(30,126,52,0.14)] bg-[var(--color-light)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] transition duration-300 hover:border-[var(--color-gold)]/40 hover:bg-white"
                    >
                      <FontAwesomeIcon icon={faCommentDots} />
                      WhatsApp
                    </a>
                  </div>

                  <p className="mt-5 text-sm font-medium text-[var(--color-muted)]">
                    {founder.phone}
                  </p>
                </div>
              </div>
            </Animate>
          ))}
        </div>

        <Animate delay={220}>
          <div className="mt-12 rounded-[30px] border border-[rgba(30,126,52,0.14)] bg-[var(--color-light)] px-6 py-6 text-center sm:px-8">
            <p className="text-lg font-semibold text-[var(--color-text)]">
              Ingenio Systems is a Zimbabwean innovative tech company powered by INGENIO GREEN.
            </p>
            <p className="mt-3 text-base leading-8 text-[var(--color-muted)]">
              Sales:{" "}
              <a
                href="mailto:sales@ingeniosys.co.zw"
                className="underline decoration-[var(--color-gold)] decoration-2 underline-offset-4"
              >
                sales@ingeniosys.co.zw
              </a>{" "}
              | WhatsApp:{" "}
              <a
                href="https://wa.me/263772800899"
                className="underline decoration-[var(--color-gold)] decoration-2 underline-offset-4"
              >
                +263 77 280 0899
              </a>
            </p>
          </div>
        </Animate>
      </section>

      <section className="mb-10 overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#0F3A36_0%,var(--color-green)_100%)] px-6 py-10 text-white sm:px-8 lg:px-10 lg:py-12">
        <Animate className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
              Work With Us
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Tell us what you need to build, automate, digitize, or manufacture
              better.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/76 sm:text-lg">
              Whether you need AI ERP, healthcare bots, school systems,
              websites, or green packaging innovation, we can help define the
              right scope and move it forward properly.
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
              href="https://wa.me/263772800899"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/16 bg-white/8 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:bg-white/12"
            >
              Message on WhatsApp
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </Link>
          </div>
        </Animate>
      </section>
    </Layout>
  );
}
