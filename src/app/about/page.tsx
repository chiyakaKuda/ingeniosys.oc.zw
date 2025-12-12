"use client";

import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faCog,
  faBullseye,
  faLightbulb,
  faEye,
  faRocket,
  faCommentDots,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  return (
    <Layout>
      {/* ENTIRE PAGE: Pure White Background */}
      <div className="bg-white min-h-screen">

        {/* HERO – Vision, Values & Intro */}
        <section className="pt-32 pb-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <Animate>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
                About Us
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-[var(--color-text)] leading-tight">
                Unveiling Our Identity,<br className="hidden sm:block" /> Vision and Values
              </h1>
              <p className="mt-6 text-lg text-[var(--color-muted)] max-w-3xl mx-auto leading-relaxed">
                We’re passionate about digital transformation in education. As a remote Zimbabwean 
                software company, we empower schools with modern websites, smart chatbots, and 
                practical tech training — closing the digital divide one institution at a time.
              </p>
            </Animate>

            {/* Core Values – Dark Green Bar */}
            <Animate delay={300}>
              <div className="mt-16">
                <div className="bg-[#0F3A36] rounded-full py-14 px-10 shadow-2xl inline-block">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-white">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                        <FontAwesomeIcon icon={faShieldAlt} className="text-2xl" />
                      </div>
                      <p className="font-semibold text-lg">Reliability</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                        <FontAwesomeIcon icon={faCog} className="text-2xl" />
                      </div>
                      <p className="font-semibold text-lg">Efficiency</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                        <FontAwesomeIcon icon={faBullseye} className="text-2xl" />
                      </div>
                      <p className="font-semibold text-lg">Precision</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                        <FontAwesomeIcon icon={faLightbulb} className="text-2xl" />
                      </div>
                      <p className="font-semibold text-lg">Innovation</p>
                    </div>
                  </div>
                </div>
              </div>
            </Animate>

            {/* Vision & Mission */}
            <Animate delay={600}>
              <div className="mt-24 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center">
                      <FontAwesomeIcon icon={faEye} className="text-2xl text-[var(--color-gold)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-text)]">Vision</h3>
                  </div>
                  <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                    To be the leading force in Zimbabwe’s educational digital transformation — 
                    ensuring every school has a professional online presence and every teacher 
                    and student masters modern technology tools.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#0F3A36]/10 flex items-center justify-center">
                      <FontAwesomeIcon icon={faRocket} className="text-2xl text-[#0F3A36]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-text)]">Mission</h3>
                  </div>
                  <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                    To deliver accessible, high-quality web solutions and hands-on training 
                    that empower schools — making technology simple, affordable, and impactful 
                    for Zimbabwe’s education sector.
                  </p>
                </div>
              </div>
            </Animate>
          </div>
        </section>

        {/* TEAM SECTION – On Scroll Animation */}
        <section className="py-28">
          <div className="max-w-6xl mx-auto px-6">
            <Animate className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)]">
                Meet Your Team
              </h2>
              <p className="mt-4 text-xl text-[var(--color-muted)] max-w-2xl mx-auto">
                Two passionate experts. Zero middlemen. Direct access from day one.
              </p>
            </Animate>

            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              {/* Godfrey */}
              <Animate delay={100}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="relative overflow-hidden h-96">
                    <Image
                      src="/team/godfrey.jpeg"
                      alt="Godfrey Wapemha – CEO & Founder"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-[var(--color-text)]">Godfrey Wapemha</h3>
                    <p className="text-[var(--color-gold)] font-semibold text-lg mt-1">
                      CEO, Founder & Technical Trainer
                    </p>
                    <p className="text-[var(--color-muted)] mt-4 max-w-xs mx-auto">
                      Strategy, client partnerships, and hands-on training delivery across Zimbabwe.
                    </p>
                    <div className="flex justify-center gap-4 mt-6">
                      <a href="mailto:director@ingeniosys.co.zw" className="w-10 h-10 rounded-full bg-[var(--color-light)] flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-black transition">
                        <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
                      </a>
                      <a href="https://wa.me/263785015243" className="w-10 h-10 rounded-full bg-[var(--color-light)] flex items-center justify-center hover:bg-green-500 hover:text-white transition">
                        <FontAwesomeIcon icon={faCommentDots} className="text-sm" />
                      </a>
                    </div>
                    <p className="mt-4 text-sm text-[var(--color-muted)]">+263 78 501 5243</p>
                  </div>
                </div>
              </Animate>

              {/* Kuda */}
              <Animate delay={200}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="relative overflow-hidden h-96">
                    <Image
                      src="/team/kuda.jpg"
                      alt="Kudakwashe Chiyaka – Lead Software Engineer"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-[var(--color-text)]">Kudakwashe Chiyaka</h3>
                    <p className="text-[var(--color-gold)] font-semibold text-lg mt-1">
                      Lead Software Engineer
                    </p>
                    <p className="text-[var(--color-muted)] mt-4 max-w-xs mx-auto">
                      Full-stack architect behind every pixel-perfect website, portal, and WhatsApp bot.
                    </p>
                    <div className="flex justify-center gap-4 mt-6">
                      <a href="mailto:kudachiyaka@ingeniosys.co.zw" className="w-10 h-10 rounded-full bg-[var(--color-light)] flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-black transition">
                        <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
                      </a>
                      <a href="https://wa.me/263718083975" className="w-10 h-10 rounded-full bg-[var(--color-light)] flex items-center justify-center hover:bg-green-500 hover:text-white transition">
                        <FontAwesomeIcon icon={faCommentDots} className="text-sm" />
                      </a>
                    </div>
                    <p className="mt-4 text-sm text-[var(--color-muted)]">
                      +263 71 808 3975 / +263 77 899 7850
                    </p>
                  </div>
                </div>
              </Animate>
            </div>

            <div className="text-center mt-20">
              <p className="text-lg font-medium text-[var(--color-text)]">
                Ingenio Systems • Remote Zimbabwean Software Company
              </p>
              <p className="text-[var(--color-muted)] mt-2">
                Sales: <a href="mailto:sales@ingeniosys.co.zw" className="underline hover:text-[var(--color-gold)]">sales@ingeniosys.co.zw</a> • 
                WhatsApp: <a href="https://wa.me/263772800899" className="underline hover:text-[var(--color-gold)]">+263 77 280 0899</a>
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA – Dark Green */}
        <section className="py-28 bg-[#0F3A36] text-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <Animate>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
                Ready to Transform Your School?
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                Work directly with Godfrey and Kuda — no delays, no middlemen, just fast, 
                affordable, world-class digital solutions built for Zimbabwean schools.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="px-12 py-5 bg-[var(--color-gold)] text-black font-bold rounded-full hover:bg-yellow-400 transition text-lg shadow-xl"
                >
                  Start Your Project
                </Link>
                <Link
                  href="https://wa.me/263772800899"
                  className="px-12 py-5 border-4 border-white font-bold rounded-full hover:bg-white/10 transition text-lg"
                >
                  Message Us on WhatsApp
                </Link>
              </div>
            </Animate>
          </div>
        </section>
      </div>
    </Layout>
  );
}