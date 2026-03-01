"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLaptopCode,
  faMobileScreenButton,
  faChartLine,
  faScrewdriverWrench,
  faChalkboardUser,
  faCubes,
  faCalendarCheck,
  faUserCheck,
  faChalkboardTeacher,
  faShieldHalved,
  faUserTie,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const heroHighlights = [
  {
    title: "Authentic discovery",
    description:
      "We learn the real workflow, friction points, and user needs before we suggest the product.",
    icon: faUserCheck,
  },
  {
    title: "High-quality delivery",
    description:
      "From websites to mobile apps, we build polished experiences backed by dependable engineering.",
    icon: faMobileScreenButton,
  },
  {
    title: "Solutions that fit",
    description:
      "The result is software that feels right for your organization and solves the problem clearly.",
    icon: faShieldHalved,
  },
];

const heroCapabilities = [
  "Websites",
  "Business Systems",
  "Mobile Apps",
  "Automation",
];

const services = [
  {
    title: "Website Development",
    description:
      "Modern, accessible sites and portals tailored for schools and organizations.",
    icon: faLaptopCode,
  },
  {
    title: "WhatsApp Chatbot",
    description:
      "Parent-teacher messaging and FAQs through reliable WhatsApp automation.",
    icon: faWhatsapp,
  },
  {
    title: "SEO Optimization",
    description:
      "Search-friendly content and performance tuning so your school is easy to find.",
    icon: faChartLine,
  },
  {
    title: "Website Maintenance & Management",
    description:
      "Updates, monitoring, backups, and support to keep your site secure and fast.",
    icon: faScrewdriverWrench,
  },
  {
    title: "School Google Workspace Training",
    description:
      "Hands-on Google Classroom and Workspace workshops for teachers and students.",
    icon: faChalkboardUser,
  },
  {
    title: "Custom Web & App Development",
    description:
      "Tailored apps, integrations, and automation built on modern stacks.",
    icon: faCubes,
  },
];

const benefits = [
  {
    title: "Flexible delivery",
    description: "We adapt to your calendar to minimize classroom disruption.",
    icon: faCalendarCheck,
  },
  {
    title: "Personalized programs",
    description: "Solutions and training tailored to each school’s needs and teams.",
    icon: faUserCheck,
  },
  {
    title: "Expert instructors",
    description: "Hands-on guidance from a senior engineer and a training-focused CEO.",
    icon: faChalkboardTeacher,
  },
  {
    title: "Reliable + secure",
    description: "Best practices for uptime, data protection, and long-term maintainability.",
    icon: faShieldHalved,
  },
];


const stats = [
  { icon: faUsers, label: "Clients Served", value: 5 },
  { icon: faUserTie, label: "Dedicated Experts", value: 2 },
  { icon: faChalkboardTeacher, label: "Workshops Delivered", value: 10 },
];

// --- STATS COMPONENT ---
function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    let animationFrame: number;
    const duration = 10000; // animation duration in ms
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const newCounts = stats.map((stat) => Math.ceil(stat.value * progress));
      setCounts(newCounts);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="flex gap-8 mt-6 lg:mt-0 lowerSection">
      {stats.map((stat, index) => (
        <div key={stat.label} className="flex flex-col items-start gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
            <FontAwesomeIcon icon={stat.icon} />
          </span>
          <p className="text-3xl font-bold text-gray-900">
            {counts[index]}
            {stat.label === "Clients Served" || stat.label === "Workshops Delivered" ? "+" : ""}
          </p>
          <p className="text-sm text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
export default function Home() {
  return (
    <Layout>
      <section className="relative mb-16 overflow-hidden full-bleed">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#061310_0%,#0d2c26_45%,#1e7e34_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(209,250,229,0.18),transparent_32%)]" />
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-white/6 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[rgba(255,215,0,0.12)] blur-3xl" />

        <div className="relative mx-auto grid min-h-[84vh] w-[95vw] max-w-7xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-24 lg:pt-36">
          <div className="text-white">
            <Animate className="flex max-w-3xl flex-col gap-6">
              <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                Authentic Software Solutions
              </span>
              <h1 className="text-4xl font-black leading-[1.02] sm:text-5xl lg:text-7xl">
                High-quality software that solves the real problem, not just the
                first request.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/82 sm:text-xl">
                We design websites, mobile apps, portals, and automation
                systems that fit how your organization actually works. If you
                need an authentic solution built with care, clarity, and quality,
                we are right here.
              </p>
            </Animate>

            <Animate
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
              delay={120}
            >
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-gold)] px-7 py-4 text-base font-semibold text-slate-950 shadow-[0_18px_40px_rgba(255,215,0,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(255,215,0,0.25)]"
              >
                Get a Quote
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/14"
              >
                See Portfolio
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center text-sm font-semibold text-white/84 underline-offset-4 transition hover:text-white hover:underline"
              >
                Explore all services
              </Link>
            </Animate>

            <Animate className="mt-8 flex flex-wrap gap-3" delay={180}>
              {heroCapabilities.map((capability) => (
                <span
                  key={capability}
                  className="rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm font-medium text-white/78"
                >
                  {capability}
                </span>
              ))}
            </Animate>
          </div>

          <Animate className="relative" delay={140}>
            <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/10 p-7 text-white shadow-[0_24px_60px_rgba(2,8,23,0.28)] backdrop-blur-xl sm:p-8">
              <div className="rounded-full border border-white/12 bg-slate-950/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                Tell us the problem. We will shape the solution.
              </div>
              <h2 className="mt-6 max-w-md text-3xl font-bold leading-tight sm:text-4xl">
                Software that looks good, works properly, and makes sense for
                the people using it.
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/76 sm:text-lg">
                We do not force generic templates onto your business. We build
                around your goals, your users, and the actual issue that needs
                to be solved.
              </p>

              <div className="mt-8 grid gap-4">
                {heroHighlights.map((highlight, index) => (
                  <Animate
                    key={highlight.title}
                    delay={index * 70}
                    className="rounded-[1.5rem] border border-white/10 bg-slate-950/28 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[var(--color-gold)]">
                        <FontAwesomeIcon icon={highlight.icon} className="text-lg" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {highlight.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/72">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </Animate>
                ))}
              </div>
            </div>
          </Animate>
        </div>
      </section>

 



<section className="mb-14 flex flex-col gap-8 pt-4">
  <Animate className="flex flex-col gap-2 text-center">
    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
      Services
    </span>
    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
      Solutions we build
    </h2>
    <p className="text-lg text-slate-700">
      Purpose-built software for schools, businesses, and growing organizations, backed by reliable support.
    </p>
  </Animate>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {services.map((service, index) => (
      <Animate key={service.title} delay={index * 60}>
        {/* Card wrapper */}
        <Link
          href="/services"
          className="group block h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-light text-lg text-green-600 transition-colors duration-300 group-hover:bg-[var(--color-light)] group-hover:text-green-700">
              <FontAwesomeIcon icon={service.icon} />
            </span>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[var(--color-gold)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-700">{service.description}</p>
            </div>
          </div>

          {/* Learn more */}
          <div className="mt-6 flex items-center justify-between text-sm font-semibold text-gold group-hover:text-[var(--color-gold)] transition-colors duration-300">
            <span>Learn more</span>
            <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
              →{/* Or use FontAwesome arrow icon */}
            </span>
          </div>
        </Link>
      </Animate>
    ))}
  </div>
</section>


<section className="mb-16 rounded-3xl bg-[#f1f7f1] px-4 py-10 sm:px-6 lg:px-10">
  <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Why choose us?</h2>
      <p className="max-w-2xl text-sm text-slate-700">
        Our commitment is to your outcomes: fast delivery, dedicated support, and training
        that meets your teams where they are.
      </p>
    </div>

    <Link
      href="/contact"
      className="btn btn-primary w-full max-w-[180px] sm:w-auto"
      aria-label="Join now"
    >
      Join now
    </Link>
  </div>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {benefits.map((benefit, index) => (
      <Animate key={benefit.title} delay={index * 60}>
        {/* Card wrapper with gradient + border */}
        <Link
          href="/services"
          className="group block h-full rounded-2xl p-6
            bg-gradient-to-br from-[#e0f7ea] via-[#daf3e1] to-[#e7f0e7]
            border border-green-300
            shadow-[0_8px_24px_rgba(0,0,0,0.05)]
            transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-lg text-green-600 shadow-sm transition-colors duration-300 group-hover:text-green-700">
              <FontAwesomeIcon icon={benefit.icon} />
            </span>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[var(--color-gold)]">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-slate-700">{benefit.description}</p>
            </div>
          </div>

          {/* Learn more + arrow */}
          <div className="mt-5 flex items-center justify-between text-sm font-semibold text-slate-800">
            <span className="flex items-center gap-2 group-hover:text-[var(--color-gold)] transition-colors duration-300">
              <span className="block h-6 w-1 rounded-full bg-green-600" />
              Learn more
            </span>
            <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </Link>
      </Animate>
    ))}
  </div>
</section>


<section className="mb-20 px-4 sm:px-6 lg:px-10">
  {/* TOP: TEXT + STATS */}
  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 mb-12">
    <div className="max-w-2xl">
      <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">
        About Our Company
      </span>

      <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
        Bridging the Tech Gap in Education <br />
        with Smart Web Solutions & Training
      </h2>

      <p className="mt-4 text-gray-600 text-base sm:text-lg">
        We empower schools and organizations with purpose-built technology solutions,
        hands-on training, and workshops to help students and teachers thrive in the digital world.
      </p>
    </div>

    {/* Stats */}
    {/* Stats */}
    <div className="flex gap-8 mt-6 lg:mt-0 lowerSection">
      <Stats />
  </div>
  </div>

  {/* BOTTOM GRID */}
  <div className="grid lg:grid-cols-2 gap-10 items-start">
    {/* LEFT: IMAGE */}
    <div className="relative rounded-3xl overflow-hidden shadow-lg group">
  <img
    src="/workshop-2.jpeg"
    alt="Ingenio Systems – Empowering education through technology"
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
    <p className="text-white text-lg sm:text-xl font-semibold leading-snug">
      Technical Training Workshop handled by the Founder Godfrey Wapemha <br />
      at Guinea Fowl High School.
    </p>
  </div>
</div>


    {/* RIGHT: CARDS */}
    <div className="grid gap-6">
  {/* Row 1: Two small cards */}
  <div className="grid md:grid-cols-2 gap-6">

    <Link
      href="/about"
      className="block rounded-2xl p-6 bg-gradient-to-tr from-[#E0F7FA]/80 to-[#B2F0EB]/40 border border-cyan-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <p className="text-lg font-semibold text-gray-900">Custom Web Development</p>
      <p className="mt-2 text-gray-600 text-sm">
        School websites, student portals, result systems & WhatsApp chatbots built fast and affordably.
      </p>
      <span className="mt-4 inline-block px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium bg-white hover:bg-gray-50 transition">
        See Projects
      </span>
    </Link>

    <Link
      href="/services"
      className="block rounded-2xl p-6 bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <p className="text-lg font-semibold text-gray-900">Hands-On Tech Training</p>
      <p className="mt-2 text-gray-600 text-sm">
        Google Classroom mastery & digital literacy workshops for teachers and students.
      </p>
      <span className="mt-4 inline-block px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition">
        View Workshops
      </span>
    </Link>

  </div>

  {/* Row 2: Full-width Mission card */}
  <Link
    href="/contact"
    className="block rounded-3xl p-6 bg-gradient-to-r from-[#FFD700]/20 to-[#E0F7FA]/50 border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    <p className="text-lg font-semibold text-gray-900">Our Mission</p>
    <p className="mt-2 text-gray-600 text-sm sm:text-base">
      A lean, remote team of two on a mission to make modern technology accessible to every school 
      and student in the country — closing the digital divide, one project and workshop at a time.
    </p>
    <span className="mt-4 inline-block px-5 py-2.5 rounded-lg bg-[#FFD700] text-white font-medium text-sm hover:opacity-90 transition">
      Get in Touch
    </span>
  </Link>
</div>

  </div>
</section>



<section className="cta-section mb-16 relative overflow-hidden rounded-3xl">
  {/* Background Gradient + Pattern */}
  <div 
    className="absolute inset-0 bg-gradient-to-br from-[var(--color-green-light)] via-white to-[var(--color-green-light)] opacity-70 rounded-3xl"
  ></div>
  
  {/* Subtle pattern overlay */}
  <div 
    className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjxkZWZzPjxwYXR0ZXJuIGlkPSdncmlkJyB3aWR0aD0nNjAwJyBoZWlnaHQ9JzYwMCcgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZSc+PGNpcmNsZSBjeD0nMzAwJyBjeT0nMzAwJyByPScxLjUnIGZpbGw9JyM3YjdmNzEnIG9wYWNpdHk9JzAuMScvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0ndXJsKCNncmlkKScvPjwvc3ZnPg==')]" 
  ></div>

  <Animate className="cta-card relative z-10 flex flex-col gap-6 p-10 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left rounded-3xl bg-white/90 backdrop-blur-sm border border-[var(--color-green-light)] shadow-2xl">
    
    {/* LEFT SIDE */}
    <div className="flex flex-col gap-3 max-w-xl">
      <span className="cta-badge inline-block px-4 py-2 bg-[var(--color-green)] text-white font-semibold rounded-full text-sm uppercase tracking-wide">
        Empower Your School Today
      </span>

      <h3 className="text-3xl font-extrabold text-[var(--color-text)] sm:text-4xl leading-tight">
        Build smarter systems and digital experiences that truly make an impact.
      </h3>

      <p className="text-[var(--color-muted)] text-lg leading-relaxed">
        From school portals to AI-powered tools—tell us your goals and get a response within one business day.
      </p>
    </div>

    {/* RIGHT BUTTONS */}
    <div className="flex flex-col gap-4 sm:flex-row sm:shrink-0">
      <Link 
        href="/contact" 
        className="cta-primary inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[var(--color-green)] to-[var(--color-green-light)] text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        Contact Us
      </Link>

      <Link 
        href="/services" 
        className="cta-secondary inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[var(--color-green)] text-[var(--color-green)] font-semibold text-lg rounded-full shadow-lg hover:bg-[var(--color-green-light)] hover:text-white transition-all duration-300"
      >
        View Services
      </Link>
    </div>
  </Animate>
</section>


    </Layout>
  );
}
