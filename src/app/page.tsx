"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faChartLine,
  faScrewdriverWrench,
  faChalkboardUser,
  faCubes,
  faCalendarCheck,
  faUserCheck,
  faChalkboardTeacher,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const slides = [
  {
    title: "Modern web solutions for schools",
    subtitle: "Student portals, chatbots, and results systems tailored to education.",
    ctaPrimary: { href: "/services", label: "Explore services" },
    ctaSecondary: { href: "/contact", label: "Talk to us" },
    background:
      "linear-gradient(135deg, rgba(0, 156, 173, 0.72), rgba(0, 0, 0, 0.45)), url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80')",
  },
  {
    title: "Hands-on tech training",
    subtitle: "Google Classroom workshops that empower teachers and students.",
    ctaPrimary: { href: "/services", label: "See training" },
    ctaSecondary: { href: "/contact", label: "Book a session" },
    background:
      "linear-gradient(135deg, rgba(255, 215, 0, 0.68), rgba(15, 23, 42, 0.55)), url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=80')",
  },
  {
    title: "Bridging the tech gap nationwide",
    subtitle: "Affordable digital transformation designed for local impact.",
    ctaPrimary: { href: "/services", label: "Our approach" },
    ctaSecondary: { href: "/contact", label: "Start a project" },
    background:
      "linear-gradient(135deg, rgba(0, 156, 173, 0.7), rgba(255, 215, 0, 0.55)), url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80&sat=-30')",
  },
  {
    title: "Small team, big impact",
    subtitle: "Direct access to the founders for fast, personal delivery.",
    ctaPrimary: { href: "/services", label: "Work with us" },
    ctaSecondary: { href: "/contact", label: "Contact" },
    background:
      "linear-gradient(135deg, rgba(15, 23, 42, 0.7), rgba(0, 156, 173, 0.55)), url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80')",
  },
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

export default function Home() {
  return (
    <Layout>
      <section className="relative mb-16 overflow-hidden border border-slate-200 shadow-sm full-bleed">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          speed={800}
          className="hero-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.title}>
              <div
                className="group flex min-h-[80vh] items-center justify-center bg-cover bg-center lg:min-h-[90vh]"
                style={{ backgroundImage: slide.background }}
              >
                <div className="hero-overlay flex w-full max-w-5xl flex-col gap-6 rounded-3xl bg-black/40 p-8 text-center text-white backdrop-blur-sm transition duration-300 sm:p-12 lg:p-14">
                  <Animate className="flex flex-col gap-4">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                      Ingenio Systems
                    </span>
                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                      {slide.title}
                    </h1>
                    <p className="text-lg leading-relaxed text-slate-100">
                      {slide.subtitle}
                    </p>
                  </Animate>
                  <Animate className="flex flex-col gap-3 sm:flex-row sm:justify-center" delay={120}>
                    <Link href={slide.ctaPrimary.href} className="btn btn-primary">
                      {slide.ctaPrimary.label}
                    </Link>
                    <Link href={slide.ctaSecondary.href} className="btn btn-secondary">
                      {slide.ctaSecondary.label}
                    </Link>
                  </Animate>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="mb-14 flex flex-col gap-8 pt-4">
        <Animate className="flex flex-col gap-2 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Services
          </span>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Services we provide
          </h2>
          <p className="text-lg text-slate-700">
            Purpose-built solutions for schools and organizations, backed by reliable support.
          </p>
        </Animate>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Animate key={service.title} delay={index * 60}>
              <article className="accent-card h-full p-5 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-light text-lg text-slate-900">
                    <FontAwesomeIcon icon={service.icon} />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-700">{service.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm font-semibold text-gold">
                  <span>Learn more</span>
                  <span aria-hidden>→</span>
                </div>
              </article>
            </Animate>
          ))}
        </div>
      </section>

      <section className="mb-16 rounded-3xl bg-[#f1f7f1] px-4 py-10 sm:px-6 lg:px-10 ">
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Animate key={benefit.title} delay={index * 60}>
              <article className="flex h-full flex-col rounded-2xl bg-[#e7f0e7] p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg text-slate-900 shadow-sm">
                    <FontAwesomeIcon icon={benefit.icon} />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-slate-900">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-slate-700">{benefit.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm font-semibold text-slate-800">
                  <span className="flex items-center gap-2">
                    <span className="block h-6 w-1 rounded-full bg-[#6bd66b]" />
                    Learn more
                  </span>
                  <span aria-hidden className="text-slate-900">
                    →
                  </span>
                </div>
              </article>
            </Animate>
          ))}
        </div>
      </section>

      <section className="mb-20">

{/* TOP: TEXT + STATS */}
<div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-10">
  <div className="max-w-2xl">
    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
      About Our Company
    </span>

    <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">
      Bridging the Tech Gap in Education <br />
      with Smart Web Solutions & Training
    </h2>
  </div>

  {/* Stats – realistic for a 2-person startup */}
  <div className="flex gap-10 pt-2 shrink-0 lowerSection">
    <div>
      <p className="text-2xl font-bold text-gray-900">5+</p>
      <p className="text-sm text-gray-500">Clients Served</p>
    </div>
    <div>
      <p className="text-2xl font-bold text-gray-900">2</p>
      <p className="text-sm text-gray-500">Dedicated Experts</p>
    </div>
    <div>
      <p className="text-2xl font-bold text-gray-900">10+</p>
      <p className="text-sm text-gray-500">Workshops Delivered</p>
    </div>
  </div>
</div>

{/* BOTTOM GRID */}
<div className="grid lg:grid-cols-2 gap-8">

  {/* LEFT: IMAGE (replace with your team photo or abstract tech/education image) */}
  <div className="rounded-2xl overflow-hidden shadow-lg">
    <img
      src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=80'" 
      alt="Ingenio Systems – Empowering education through technology"
      className="w-full h-full object-cover"
    />
  </div>

  {/* RIGHT: CARDS */}
  <div className="grid gap-6">

    {/* Row 1: Two cards side by side */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-2xl p-6 bg-[#E0F7FA] border border-cyan-100 shadow-sm">
        <p className="text-lg font-semibold text-gray-900">Custom Web Development</p>
        <p className="mt-2 text-gray-600 text-sm">
          School websites, student portals, result systems & WhatsApp chatbots built fast and affordably.
        </p>
        <button className="mt-4 px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition">
          See Projects
        </button>
      </div>

      <div className="rounded-2xl p-6 bg-white border border-gray-200 shadow-sm">
        <p className="text-lg font-semibold text-gray-900">Hands-On Tech Training</p>
        <p className="mt-2 text-gray-600 text-sm">
          Google Classroom mastery & digital literacy workshops for teachers and students.
        </p>
        <button className="mt-4 px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 transition">
          View Workshops
        </button>
      </div>
    </div>

    {/* Row 2: Full-width Mission card */}
    <div className="rounded-2xl p-6 bg-gradient-to-r from-[#FFD700]/10 to-[#E0F7FA]/50 border border-gray-200 shadow-sm">
      <p className="text-lg font-semibold text-gray-900">Our Mission</p>
      <p className="mt-2 text-gray-600 text-sm">
        A lean, remote team of two on a mission to make modern technology accessible to every school 
        and student in the country — closing the digital divide, one project and workshop at a time.
      </p>
      <button className="mt-4 px-5 py-2.5 rounded-lg bg-[#FFD700] text-white font-medium text-sm hover:opacity-90 transition">
        Get in Touch
      </button>
    </div>
  </div>
</div>
</section>




<section className="cta-section mb-16">
  <Animate className="cta-card flex flex-col gap-6 p-10 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
    
    {/* LEFT SIDE */}
    <div className="flex flex-col gap-3 max-w-xl">
      <span className="cta-badge">
        Empower Your School Today
      </span>

      <h3 className="text-3xl font-extrabold text-[var(--color-text)] sm:text-4xl leading-tight">
        Build smarter systems and digital experiences that truly make an impact.
      </h3>

      <p className="text-[var(--color-muted)] text-lg">
        From school portals to AI-powered tools—tell us your goals and get a response
        within one business day.
      </p>
    </div>

    {/* RIGHT BUTTONS */}
    <div className="flex flex-col gap-4 sm:flex-row sm:shrink-0">
      <Link href="/contact" className="cta-primary">
        Contact Us
      </Link>

      <Link href="/services" className="cta-secondary">
        View Services
      </Link>
    </div>

  </Animate>
</section>


    </Layout>
  );
}
