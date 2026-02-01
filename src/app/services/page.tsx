"use client";

import { useState } from 'react';
import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PricingSection from '@/components/PricingSection';
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
  faChartSimple,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { 
  faShieldAlt, faRocket, faHandHoldingUsd, faUsersCog, faClock, faHeart, faTools, faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';

const services = [
  { title: "School Websites & Portals", desc: "Beautiful, fast and mobile-friendly platforms.", icon: faDesktop, color: "from-emerald-500 to-teal-600" },
  { title: "Student Result Portals", desc: "Secure online access to results and report cards.", icon: faGraduationCap, color: "from-blue-500 to-indigo-600" },
  { title: "WhatsApp Chatbots", desc: "Automated responses for admissions, fees & attendance.", icon: faCommentDots, color: "from-green-500 to-emerald-600" },
  { title: "Full-Stack Applications", desc: "Custom-built school software systems.", icon: faLaptopCode, color: "from-purple-500 to-violet-600" },
  { title: "Google Classroom Training", desc: "Hands-on workshops for teachers & students.", icon: faChalkboardTeacher, color: "from-orange-500 to-red-600" },
  { title: "Tech Literacy Workshops", desc: "Internet skills, Google tools, digital safety.", icon: faBookOpen, color: "from-cyan-500 to-blue-600" },
  { title: "AI & Chatbot Integrations", desc: "Smart assistants for websites & WhatsApp.", icon: faRobot, color: "from-pink-500 to-rose-600" },
  { title: "Maintenance & Support", desc: "Backups, updates & monitoring.", icon: faHeadset, color: "from-amber-500 to-yellow-600" },
];

const benefits = [
  { 
    title: "Tailored for Zimbabwe", 
    desc: "Solutions designed specifically for local schools, internet speeds, and budgets.", 
    icon: faMapMarkerAlt 
  },
  { 
    title: "Fast & Reliable", 
    desc: "Lightning-fast performance and rock-solid uptime, even on slower connections.", 
    icon: faRocket 
  },
  { 
    title: "Affordable Pricing", 
    desc: "Genuinely low-cost plans with no hidden fees — built for school budgets.", 
    icon: faHandHoldingUsd 
  },
  { 
    title: "Local Support", 
    desc: "Zimbabwe-based team available to help you every step of the way.", 
    icon: faUsersCog 
  },
  { 
    title: "Secure & Private", 
    desc: "Top-tier security to protect student data and school information.", 
    icon: faShieldAlt 
  },
  { 
    title: "Easy to Use", 
    desc: "Intuitive interfaces that teachers and admins love — no steep learning curve.", 
    icon: faClock 
  },
  { 
    title: "Ongoing Updates", 
    desc: "Regular improvements and new features at no extra cost.", 
    icon: faTools 
  },
  { 
    title: "Trusted by Schools", 
    desc: "Proudly serving schools across Zimbabwe with proven results.", 
    icon: faHeart 
  },
];

export default function Services() {
 
  return (
    <Layout>
      {/* HERO */}
      <section
        className="relative pt-32 pb-24 overflow-hidden bg-cover bg-center bg-no-repeat full-bleed"
        style={{
          backgroundImage: `url('https://as2.ftcdn.net/jpg/04/55/00/69/1000_F_455006943_HibECoeNB3Ysv7RSJ2lCCmONrsIqr3mi.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center z-10">
          <Animate>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              Our <span className="text-[var(--color-gold)]">Services</span>
            </h1>
          </Animate>

          <Animate delay={200}>
            <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Digital solutions crafted specifically for Zimbabwean schools — fast, secure, and genuinely affordable.
            </p>
          </Animate>

          <Animate delay={400}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-[var(--color-green)] text-white rounded-full font-semibold text-lg shadow-lg hover:bg-green-800 transition-all transform hover:scale-105"
              >
                Explore Our Services
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[var(--color-gold)] text-[var(--color-text)] rounded-full font-semibold text-lg shadow-lg hover:bg-yellow-500 transition-all transform hover:scale-105"
              >
                Get a Quote
              </Link>
            </div>
          </Animate>
        </div>
      </section>

      {/* SERVICES GRID - ENHANCED CARDS */}
      <section id="services" className="py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-green)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Section Heading */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] tracking-tight">
              Tailored Digital Solutions for Zimbabwean Schools
            </h2>
            <p className="mt-6 text-xl text-[var(--color-muted)] max-w-3xl mx-auto">
              From modern websites to teacher training and smart automation — we build tools that save time and empower education.
            </p>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((s, i) => (
              <Animate key={s.title} delay={i * 80}>
                <div className="group relative h-full">
                  {/* Animated gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.color} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:scale-105`}></div>
                  
                  {/* Main card */}
                  <div className="relative bg-white rounded-3xl p-8 lg:p-10 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 flex flex-col h-full overflow-hidden">
                    {/* Decorative corner accent */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-all duration-500`}></div>
                    
                    {/* Icon with dynamic gradient background */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center bg-gradient-to-br ${s.color} shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                        <FontAwesomeIcon
                          icon={s.icon}
                          className="text-4xl text-white drop-shadow-md"
                        />
                      </div>
                      {/* Pulse effect on hover */}
                      <div className={`absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-30 blur-md animate-pulse`}></div>
                    </div>

                    {/* Title with gradient on hover */}
                    <h3 className={`text-2xl lg:text-2xl font-bold text-[var(--color-text)] mb-4 text-center transition-all duration-300 group-hover:bg-gradient-to-r group-hover:${s.color} group-hover:bg-clip-text group-hover:text-transparent`}>
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--color-muted)] leading-relaxed text-base lg:text-lg flex-grow text-center mb-6">
                      {s.desc}
                    </p>

                    {/* Divider line with gradient */}
                    <div className={`h-1 w-0 group-hover:w-full mx-auto bg-gradient-to-r ${s.color} rounded-full transition-all duration-500 mb-6`}></div>

                    {/* Learn More button - slides up on hover */}
                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <Link
                        href={`/services/${s.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                        className={`inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r ${s.color} text-white rounded-xl font-semibold text-base shadow-md hover:shadow-xl transition-all transform hover:scale-105`}
                      >
                        Learn More
                        <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>

                    {/* Subtle decorative glow element */}
                    <div className={`absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-br ${s.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-24 lg:py-32 relative overflow-hidden bg-[var(--color-green-light)] full-bleed">
        {/* Subtle abstract background pattern */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green-light)] via-transparent to-[var(--color-green-light)]" />
          <svg className="absolute bottom-0 left-0 w-full h-64" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="var(--color-green)" opacity="0.2" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Heading */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] tracking-tight">
              Why Choose Ingenio Systems?
            </h2>
            <p className="mt-6 text-xl text-[var(--color-muted)] max-w-3xl mx-auto">
              We're not just another tech company — we're your partner in making education simpler, smarter, and more affordable in Zimbabwe.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 xl:gap-12">
            {benefits.map((b, i) => (
              <Animate key={b.title} delay={i * 80}>
                <div className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:border-[var(--color-gold)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 bg-[var(--color-green-light)] group-hover:bg-[var(--color-green)]">
                    <FontAwesomeIcon
                      icon={b.icon}
                      className="text-3xl text-[var(--color-text)] group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[var(--color-text)] mb-4 text-center group-hover:text-[var(--color-green)] transition-colors">
                    {b.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--color-muted)] leading-relaxed text-lg flex-grow text-center">
                    {b.desc}
                  </p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <PricingSection/>

      {/* FINAL CTA */}
      <section className="py-24 lg:py-32 bg-[var(--color-text)] text-white full-bleed overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="relative z-10">
              <Animate delay={0}>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                  Ready to Transform<br />
                  <span className="text-[var(--color-gold)]">Your School?</span>
                </h2>
              </Animate>

              <Animate delay={150}>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 max-w-2xl">
                  Websites, portals, chatbots, training — all tailored specifically for Zimbabwean schools with fast, secure, and genuinely affordable solutions.
                </p>
              </Animate>

              {/* Buttons */}
              <Animate delay={300}>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center px-10 py-5 bg-[var(--color-gold)] text-[var(--color-text)] font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Start Your Project
                    <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center px-10 py-5 bg-transparent border-4 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-[var(--color-text)] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    Book a Free Consultation
                    <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </Link>
                </div>
              </Animate>
            </div>

            {/* Image with Rounded Corners */}
            <div className="relative">
              <Animate delay={450}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-full">
                  <img
                    src="https://thumbs.dreamstime.com/b/teacher-students-computer-norton-zimbabwe-november-primary-school-using-laptop-as-teaching-aid-classroom-118618197.jpg"
                    alt="Zimbabwean primary school teacher helping students use a laptop in the classroom – Norton, Zimbabwe"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-text)]/80 via-transparent to-transparent" />
                </div>
              </Animate>

              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-gold)]/10 rounded-full blur-3xl hidden lg:block" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-[var(--color-green)]/10 rounded-full blur-3xl hidden lg:block" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}