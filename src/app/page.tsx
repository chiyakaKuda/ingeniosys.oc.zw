"use client";
import { useEffect, useState } from "react";
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
  faUserTie,
  faUsers,
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
