"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faGraduationCap,
  faCommentDots,
  faLaptopCode,
  faChalkboardTeacher,
  faBookOpen,
  faRobot,
  faHeadset,
  faUsers,
  faRocket,
  faShieldAlt,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  { title: "School Websites & Portals",        desc: "Beautiful, fast, mobile-friendly websites with parent & admin dashboards.", icon: faDesktop },
  { title: "Student Result Portals",          desc: "Secure online access to results, report cards and academic records.", icon: faGraduationCap },
  { title: "WhatsApp Chatbots",               desc: "Automated messaging for admissions, fees, attendance & parent alerts.", icon: faCommentDots },
  { title: "Full-Stack Applications",         desc: "Custom systems — e-learning, library, fee payment, attendance & more.", icon: faLaptopCode },
  { title: "Google Classroom Training",       desc: "Certified hands-on workshops for teachers and students.", icon: faChalkboardTeacher },
  { title: "Tech Literacy Workshops",         desc: "Digital skills, Google Workspace mastery, internet safety & productivity.", icon: faBookOpen },
  { title: "AI & Chatbot Integrations",       desc: "Smart AI assistants on website & WhatsApp for guidance & automation.", icon: faRobot },
  { title: "Maintenance & Support",           desc: "Updates, backups, security monitoring & instant support.", icon: faHeadset },
];

const benefits = [
  { title: "Built for Schools",      desc: "Every solution designed specifically for education — never generic templates.", icon: faUsers },
  { title: "Fast Delivery",          desc: "Most projects completed in 2–4 weeks with clear timelines.", icon: faRocket },
  { title: "Secure & Reliable",      desc: "SSL encryption, daily backups, data protection & 99.9% uptime.", icon: faShieldAlt },
  { title: "Measurable Impact",      desc: "We track parent engagement, teacher adoption and student outcomes.", icon: faChartSimple },
];

export default function Services() {
  return (
    <Layout>
      {/* HERO */}
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <Animate>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-text)] leading-tight">
              Our Services
            </h1>
            <p className="mt-6 text-xl text-[var(--color-muted)] max-w-3xl mx-auto">
              Everything your school needs to go fully digital — websites, portals, chatbots,
              and hands-on tech training — built fast and affordably.
            </p>
          </Animate>

          <Animate delay={200}>
            <div className="mt-10">
              <Link
                href="#services"
                className="inline-block px-8 py-4 bg-[var(--color-text)] text-white rounded-full font-semibold hover:bg-[#0f172a]/90 transition shadow-lg"
              >
                Explore the services
              </Link>
            </div>
          </Animate>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <Animate key={service.title} delay={i * 80}>
                <div className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 bg-[var(--color-light)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-text)] transition">
                    <FontAwesomeIcon
                      icon={service.icon}
                      className="text-2xl text-[var(--color-text)] group-hover:text-white transition"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-muted)] leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="mt-6">
                    <span className="text-[var(--color-text)] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      View more <span className="text-lg">→</span>
                    </span>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-[var(--color-light)]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)]">
              Why Choose Ingenio Systems?
            </h2>
            <p className="mt-4 text-xl text-[var(--color-muted)] max-w-3xl mx-auto">
              Small team. Direct access to the founders. Real results for schools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((benefit, i) => (
              <Animate key={benefit.title} delay={i * 100}>
                <div className={`rounded-3xl p-8 text-center shadow-md border border-gray-100 ${
                  i % 2 === 0 ? "bg-[var(--color-text)] text-white" : "bg-white"
                }`}>
                  <div className={`w-16 h-16 mx-auto rounded-2xl mb-6 flex items-center justify-center ${
                    i % 2 === 0 ? "	bg-white/20" : "bg-[var(--color-light)]"
                  }`}>
                    <FontAwesomeIcon
                      icon={benefit.icon}
                      className={`text-2xl ${i % 2 === 0 ? "text-white" : "text-[var(--color-text)]"}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {benefit.title}
                  </h3>
                  <p className={i % 2 === 0 ? "text-white/90" : "text-[var(--color-muted)]"}>
                    {benefit.desc}
                  </p>
                  {i % 2 === 0 && (
                    <button className="mt-6 px-6 py-3 bg-white text-[var(--color-text)] rounded-full font-semibold hover:bg-gray-100 transition">
                      Get Started
                    </button>
                  )}
                </div>
              </Animate>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[var(--color-text)] text-white rounded-full font-semibold hover:bg-[#0f172a]/90 transition shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[var(--color-text)] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Ready to Transform Your School?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let’s build your website, chatbot or training program — fast, affordable,
                and perfectly tailored for your school.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="px-10 py-5 bg-[var(--color-gold)] text-black font-bold rounded-full hover:bg-yellow-400 transition text-lg"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/contact"
                  className="px-10 py-5 border-4 border-white font-bold rounded-full hover:bg-white/10 transition text-lg"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80"
                alt="Students using technology"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}