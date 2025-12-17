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
    <section className="relative pt-32 pb-24 overflow-hidden full-bleed">
  {/* Full-width background layer */}
  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-green-light)]/30 via-white to-[var(--color-green-light)]/20">
    {/* Optional subtle abstract pattern for depth (SVG embedded, no external file) */}
    <div 
      className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjxkZWZzPjxwYXR0ZXJuIGlkPSdncmlkJyB3aWR0aD0nNjAwJyBoZWlnaHQ9JzYwMCcgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZSc+PGNpcmNsZSBjeD0nMzAwJyBjeT0nMzAwJyByPScxLjUnIGZpbGw9JyM3YjdmNzEnIG9wYWNpdHk9JzAuMScvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0ndXJsKCNncmlkKScvPjwvc3ZnPg==')]"
    ></div>
  </div>

  {/* Content remains centered */}
  <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center z-10">
    <Animate>
      <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)]">
        About Us
      </p>
      <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--color-text)] leading-tight">
        Our <span className="text-[var(--color-green)]">Story & Values</span>
      </h1>
      <p className="mt-8 text-xl md:text-2xl text-[var(--color-muted)] max-w-4xl mx-auto leading-relaxed">
        A Zimbabwean-led team passionate about bridging the digital divide in education through modern, affordable tech solutions.
      </p>
    </Animate>
  </div>
</section>

      {/* CORE VALUES SECTION – With smooth transition from hero */}
<section className="relative full-bleed py-20 bg-gradient-to-b from-white to-[var(--color-green-light)]/20">
  {/* Subtle connecting gradient overlay for seamless transition from hero */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-[var(--color-green-light)]/30 pointer-events-none"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
    {/* Heading with "Our Story" integration */}
    <Animate className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] mb-6">
        Our Core Values
      </h2>
      <p className="text-xl text-[var(--color-muted)] max-w-4xl mx-auto leading-relaxed mb-8">
        Guiding every project we deliver for Zimbabwean schools.
      </p>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-[var(--color-text)] font-medium italic">
          Our story began with a simple belief: every Zimbabwean school deserves modern, reliable digital tools — no matter how remote or under-resourced. Founded by Godfrey and Kuda, two passionate locals who saw the gap in affordable tech for education, Ingenio Systems was born to make high-quality websites, chatbots, and training accessible to all.
        </p>
        <p className="mt-4 text-lg text-[var(--color-muted)]">
          Today, we remain a small, remote team committed to closing the digital divide, one school at a time — delivering innovation with heart and precision.
        </p>
      </div>
    </Animate>

    {/* Core Values Cards – Vibrant & Consistent */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
      {[
        { icon: faShieldAlt, label: "Reliability", desc: "We deliver on time, every time." },
        { icon: faCog, label: "Efficiency", desc: "Smart solutions that save time and resources." },
        { icon: faBullseye, label: "Precision", desc: "Pixel-perfect, bug-free work." },
        { icon: faLightbulb, label: "Innovation", desc: "Fresh ideas for modern education." },
      ].map((value, i) => (
        <Animate key={value.label} delay={i * 100}>
          <div className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:border-[var(--color-green)] transition-all duration-400 flex flex-col items-center h-full">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-[var(--color-green-light)] to-[var(--color-green)]/20 group-hover:from-[var(--color-green)] group-hover:to-[var(--color-green)] group-hover:scale-110 transition-all duration-400">
              <FontAwesomeIcon icon={value.icon} className="text-4xl text-[var(--color-green)] group-hover:text-white transition-colors" />
            </div>
            <p className="text-2xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-green)] transition-colors mb-3">
              {value.label}
            </p>
            <p className="text-base text-[var(--color-muted)] text-center">
              {value.desc}
            </p>
          </div>
        </Animate>
      ))}
    </div>
  </div>
</section>

  {/* VISION & MISSION SECTION – Enhanced with subtle background transition & depth */}
{/* VISION & MISSION SECTION – Equal height cards */}
<section className="relative full-bleed py-20 overflow-hidden">
  {/* Full-width subtle background for immersion */}
  <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-green-light)]/20 to-white/80">
    {/* Light wave pattern overlay */}
    <div 
      className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPjxkZWZzPjxwYXR0ZXJuIGlkPSd3YXZlJyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZSc+PHBhdGggZD0nTTAsMTAwIEMyMCwxMjAgNDAsODAgNjAsMTAwIEM4MCwxMjAgMTAwLDgwIDEyMCwxMDAgQzE0MCwxMjAgMTYwLDgwIDE4MCwxMDAgQzIwMCwxMjAgMjAwLDAgMjAwLDAgLDAsMCBaJyBmaWxsPSM3YjdmNzEnIG9wYWNpdHk9JzAuMScvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0ndXJsKCN3YXZlKScvPjwvc3ZnPg==')]"
    ></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
      {/* Vision Card */}
      <Animate delay={100}>
        <div className="group bg-white/95 backdrop-blur-sm rounded-3xl p-10 border border-gray-100 shadow-xl hover:shadow-2xl hover:border-[var(--color-gold)] transition-all duration-400 flex flex-col h-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-[var(--color-gold)]/10 group-hover:bg-[var(--color-gold)] transition-colors duration-300">
              <FontAwesomeIcon icon={faEye} className="text-4xl text-[var(--color-gold)] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] group-hover:text-[var(--color-gold)] transition-colors duration-300">
              Vision
            </h3>
          </div>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed flex-grow">
            To become the leading force in Zimbabwe’s educational digital transformation — ensuring every school, no matter how remote, has a professional online presence and every teacher and student masters modern technology tools.
          </p>
        </div>
      </Animate>

      {/* Mission Card */}
      <Animate delay={200}>
        <div className="group bg-white/95 backdrop-blur-sm rounded-3xl p-10 border border-gray-100 shadow-xl hover:shadow-2xl hover:border-[var(--color-green)] transition-all duration-400 flex flex-col h-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-[#0F3A36]/10 group-hover:bg-[#0F3A36] transition-colors duration-300">
              <FontAwesomeIcon icon={faRocket} className="text-4xl text-[#0F3A36] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--color-text)] group-hover:text-[#0F3A36] transition-colors duration-300">
              Mission
            </h3>
          </div>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed flex-grow">
            To provide accessible, high-quality web solutions, smart automation, and hands-on training that make technology simple, affordable, and truly impactful for Zimbabwe’s education sector.
          </p>
        </div>
      </Animate>
    </div>
  </div>
</section>
      {/* TEAM SECTION – Updated cards to match services */}
      <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <Animate className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)]">
        Meet the Team
      </h2>
      <p className="mt-6 text-xl text-[var(--color-muted)] max-w-3xl mx-auto">
        Just two dedicated experts — direct, no middlemen, fast results.
      </p>
    </Animate>

    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
      {/* Godfrey */}
      <Animate delay={100}>
        <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 relative">
          <div className="relative h-96 overflow-hidden">
            <Image
              src="/team/godfrey.jpeg"
              alt="Godfrey Wapemha – CEO & Founder"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            {/* Overlay on hover with qualifications */}
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-white text-center px-8">
                <p className="text-2xl font-bold mb-4">Qualifications</p>
                <p className="text-lg leading-relaxed">
                  Bachelor of Technology in Engineering<br />
                  Harare Institute of Technology
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
          <div className="p-10 text-center">
            <h3 className="text-3xl font-bold text-[var(--color-text)]">Godfrey Wapemha</h3>
            <p className="text-xl font-semibold text-[var(--color-gold)] mt-2">
              CEO, Founder & Technical Trainer
            </p>
            <p className="text-lg text-[var(--color-muted)] mt-6 max-w-xs mx-auto">
              Strategy, partnerships, and hands-on training across Zimbabwe.
            </p>
            <div className="flex justify-center gap-6 mt-8">
              <a href="mailto:director@ingeniosys.co.zw" className="w-12 h-12 rounded-full bg-[var(--color-light)] flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-black transition">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              </a>
              <a href="https://wa.me/263785015243" className="w-12 h-12 rounded-full bg-[var(--color-light)] flex items-center justify-center hover:bg-green-500 hover:text-white transition">
                <FontAwesomeIcon icon={faCommentDots} className="text-xl" />
              </a>
            </div>
            <p className="mt-6 text-base text-[var(--color-muted)]">+263 78 501 5243</p>
          </div>
        </div>
      </Animate>

      {/* Kuda */}
      <Animate delay={200}>
        <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 relative">
          <div className="relative h-96 overflow-hidden">
            <Image
              src="/team/kuda.jpg"
              alt="Kudakwashe Chiyaka – Lead Software Engineer"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            {/* Overlay on hover with qualifications */}
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-white text-center px-8">
                <p className="text-2xl font-bold mb-4">Qualifications</p>
                <p className="text-lg leading-relaxed">
                  Bachelor of Technology in Computer Science<br />
                  Harare Institute of Technology
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
          <div className="p-10 text-center">
            <h3 className="text-3xl font-bold text-[var(--color-text)]">Kudakwashe Chiyaka</h3>
            <p className="text-xl font-semibold text-[var(--color-gold)] mt-2">
              Lead Software Engineer
            </p>
            <p className="text-lg text-[var(--color-muted)] mt-6 max-w-xs mx-auto">
              Full-stack architect crafting pixel-perfect websites, portals, and bots.
            </p>
            <div className="flex justify-center gap-6 mt-8">
              <a href="mailto:kudachiyaka@ingeniosys.co.zw" className="w-12 h-12 rounded-full bg-[var(--color-light)] flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-black transition">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              </a>
              <a href="https://wa.me/263718083975" className="w-12 h-12 rounded-full bg-[var(--color-light)] flex items-center justify-center hover:bg-green-500 hover:text-white transition">
                <FontAwesomeIcon icon={faCommentDots} className="text-xl" />
              </a>
            </div>
            <p className="mt-6 text-base text-[var(--color-muted)]">
              +263 71 808 3975 / +263 77 899 7850
            </p>
          </div>
        </div>
      </Animate>
    </div>

    <div className="text-center mt-20">
      <p className="text-2xl font-medium text-[var(--color-text)]">
        Ingenio Systems • Remote Zimbabwean Software Company
      </p>
      <p className="text-xl text-[var(--color-muted)] mt-4">
        Sales: <a href="mailto:sales@ingeniosys.co.zw" className="underline hover:text-[var(--color-gold)]">sales@ingeniosys.co.zw</a> • 
        WhatsApp: <a href="https://wa.me/263772800899" className="underline hover:text-[var(--color-gold)]">+263 77 280 0899</a>
      </p>
    </div>
  </div>
</section>

      {/* FINAL CTA – Matching previous CTA style */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0F3A36] to-[var(--color-green)] text-white rounded-3xl">
  {/* Optional subtle overlay for depth */}
  <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>

  <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
    <Animate>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
        Ready to Transform Your School?
      </h2>
      <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
        Work directly with Godfrey and Kuda — fast, affordable, world-class digital solutions built for Zimbabwean schools.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link
          href="/contact"
          className="px-10 py-5 bg-[var(--color-gold)] text-black font-bold rounded-full hover:bg-yellow-400 transition text-xl shadow-xl hover:scale-105"
        >
          Start Your Project
        </Link>
        <Link
          href="https://wa.me/263772800899"
          className="px-10 py-5 border-4 border-white font-bold rounded-full hover:bg-white/10 transition text-xl hover:scale-105"
        >
          Message Us on WhatsApp
        </Link>
      </div>
    </Animate>
  </div>
</section>
    </Layout>
  );
}