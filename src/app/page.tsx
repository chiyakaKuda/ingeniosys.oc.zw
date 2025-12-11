"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
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
    title: "Web Development",
    description:
      "Professional school websites, portals, results systems, and chatbots focused on performance and ease.",
    href: "/services",
  },
  {
    title: "Tech Training",
    description:
      "Hands-on Google Classroom and digital literacy workshops designed for educators and students.",
    href: "/services",
  },
  {
    title: "Integration & Support",
    description:
      "API integrations, automation, and ongoing support that keep your tools reliable and secure.",
    href: "/services",
  },
];

const benefits = [
  {
    title: "Education-first",
    description: "Built for schools and institutions with real classroom needs in mind.",
  },
  {
    title: "Agile & personal",
    description: "Direct access to the two-person team—no handoffs, faster delivery.",
  },
  {
    title: "Affordable impact",
    description: "Solutions priced for educational budgets without sacrificing quality.",
  },
  {
    title: "Modern stack",
    description: "Next.js, accessibility-first design, and performance baked in.",
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
                className="flex min-h-[80vh] items-center justify-center bg-cover bg-center lg:min-h-[90vh]"
                style={{ backgroundImage: slide.background }}
              >
                <div className="flex w-full max-w-5xl flex-col gap-6 rounded-3xl bg-black/40 p-8 text-center text-white backdrop-blur-sm sm:p-12 lg:p-14">
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

      <section className="mb-16 flex flex-col gap-8">
        <Animate className="flex flex-col gap-2 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Services
          </span>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Built for education, ready for growth
          </h2>
          <p className="text-lg text-slate-700">
            Lightweight, modern solutions and training that make schools more effective.
          </p>
        </Animate>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Animate key={service.title} delay={index * 60}>
              <article className="accent-card h-full p-6">
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-slate-700">{service.description}</p>
                <Link href={service.href} className="mt-4 inline-flex items-center text-gold font-semibold">
                  Learn more →
                </Link>
              </article>
            </Animate>
          ))}
        </div>
      </section>

      <section className="mb-16 flex flex-col gap-8">
        <Animate className="flex flex-col gap-2 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Why choose us
          </span>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Small, focused, and built for impact
          </h2>
        </Animate>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Animate key={benefit.title} delay={index * 60}>
              <article className="accent-card h-full p-5">
                <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-2 text-slate-700">{benefit.description}</p>
              </article>
            </Animate>
          ))}
        </div>
      </section>

      <section className="mb-16 grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <Animate className="flex flex-col gap-4">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            About Ingenio Systems
          </span>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Bridging the tech gap through purposeful innovation
          </h2>
          <p className="text-lg text-slate-700">
            We are a remote-first, two-person team dedicated to delivering
            education-focused web platforms and practical training. Our mission
            is to close the digital divide so every school and student can access
            reliable, modern tools and the skills to use them effectively.
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-800">
            <span className="rounded-full bg-light px-3 py-2">Remote team of two</span>
            <span className="rounded-full bg-light px-3 py-2">Education-first</span>
            <span className="rounded-full bg-light px-3 py-2">Fast & personal</span>
          </div>
        </Animate>
        <Animate delay={80} className="accent-card p-6">
          <div className="rounded-2xl bg-gradient-to-br from-[var(--color-light)] via-white to-white p-6 shadow-inner">
            <p className="text-lg font-semibold text-slate-900">Mission</p>
            <p className="mt-2 text-slate-700">
              Provide accessible, high-quality web development and tech training that help
              educational institutions thrive in the modern digital landscape.
            </p>
            <div className="mt-4 h-px bg-slate-200" />
            <p className="mt-4 text-lg font-semibold text-slate-900">Vision</p>
            <p className="mt-2 text-slate-700">
              A future where every school and student has reliable, modern tools and the
              skills to use them effectively, creating equal opportunities nationwide.
            </p>
          </div>
        </Animate>
      </section>

      <section className="mb-12">
        <Animate className="accent-card flex flex-col gap-4 p-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Ready to transform your school?
            </span>
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Let’s build modern tools and training that make a difference.
            </h3>
            <p className="text-slate-700">
              Tell us about your goals—web platforms, portals, chatbots, or workshops—and we’ll
              respond within one business day.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:shrink-0">
            <Link href="/contact" className="btn btn-primary">
              Contact us
            </Link>
            <Link href="/services" className="btn btn-secondary">
              View services
            </Link>
          </div>
        </Animate>
      </section>
    </Layout>
  );
}
