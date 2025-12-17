"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate real form handler (e.g., Formspree, EmailJS, or Next.js API route)
    alert("Thank you! Your message has been sent. We'll reply within 24 hours.");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      {/* HERO – Consistent style */}
      <section className="relative full-bleed pt-32 pb-24 overflow-hidden bg-gradient-to-br from-[var(--color-green-light)]/30 via-white to-[var(--color-green-light)]/20">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center z-10">
          <Animate>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)]">
              Contact Us
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--color-text)] leading-tight">
              Get in <span className="text-[var(--color-green)]">Touch</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-[var(--color-muted)] max-w-4xl mx-auto leading-relaxed">
              Ready to launch your school website, chatbot, or training program? We're just a message away — replies within 24 hours.
            </p>
          </Animate>
        </div>
      </section>

      {/* MAIN CONTACT SECTION – Matching vibrant cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT: Contact Form – Card style */}
            <Animate delay={100}>
              <div className="group bg-white rounded-3xl p-10 border border-gray-100 shadow-xl hover:shadow-2xl hover:border-[var(--color-green)] transition-all duration-400">
                <h2 className="text-3xl font-extrabold text-[var(--color-text)] mb-8">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-5 py-4 rounded-full border border-gray-300 focus:border-[var(--color-green)] focus:outline-none transition"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-5 py-4 rounded-full border border-gray-300 focus:border-[var(--color-green)] focus:outline-none transition"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-full border border-gray-300 focus:border-[var(--color-green)] focus:outline-none transition"
                  />

                  <div className="relative">
                    <span className="absolute left-5 top-4 text-gray-500">+263</span>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-20 pr-5 py-4 rounded-full border border-gray-300 focus:border-[var(--color-green)] focus:outline-none transition"
                    />
                  </div>

                  <textarea
                    placeholder="Your Message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-3xl border border-gray-300 focus:border-[var(--color-green)] focus:outline-none transition resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full py-5 bg-gradient-to-r from-[var(--color-green)] to-[#0F3A36] text-white font-bold rounded-full hover:from-[#0F3A36] hover:to-[var(--color-green)] transition shadow-lg text-lg hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </Animate>

            {/* RIGHT: Contact Info – Dark card with hover effects */}
            <Animate delay={200}>
              <div className=" bg-gradient-to-br from-[#0F3A36] to-[var(--color-green)] text-white rounded-3xl p-10 shadow-2xl group hover:shadow-3xl transition-all duration-500 border border-transparent hover:border-[var(--color-gold)]/30">
                <h3 className="text-3xl font-extrabold mb-8">
                  Hi! We're Here to Help
                </h3>

                <div className="space-y-8">
                  <div className="bg-white/10 rounded-2xl p-6 transition-colors hover:bg-white/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faPhone} className="text-xl" />
                      </div>
                      <div>
                        <p className="text-sm opacity-90">Hotline</p>
                        <p className="text-xl font-semibold">+263 77 280 0899</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-6 transition-colors hover:bg-white/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faCommentDots} className="text-xl" />
                      </div>
                      <div>
                        <p className="text-sm opacity-90">SMS / WhatsApp</p>
                        <p className="text-xl font-semibold">+263 77 280 0899</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-6 transition-colors hover:bg-white/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                      </div>
                      <div>
                        <p className="text-sm opacity-90">Email</p>
                        <p className="text-xl font-semibold break-all">sales@ingeniosys.co.zw</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/20">
                  <p className="text-lg font-semibold mb-4">Connect with Us</p>
                  <div className="flex gap-5">
                    <a
                      href="https://facebook.com/ingeniosystems"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-green)] transition"
                    >
                      <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
                    </a>
                    <a
                      href="https://instagram.com/ingeniosystems"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-green)] transition"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                    </a>
                    <a
                      href="https://linkedin.com/company/ingeniosystems"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-green)] transition"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
                    </a>
                    <a
                      href="https://twitter.com/ingeniosystems"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-green)] transition"
                    >
                      <FontAwesomeIcon icon={faXTwitter} className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* FINAL CTA – Full rounded, consistent style */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0F3A36] to-[var(--color-green)] text-white rounded-3xl">
        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <Animate>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
              Let’s Build Something Great Together
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether it’s a school website, WhatsApp bot, or training program — we’re ready when you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="https://wa.me/263772800899"
                className="px-12 py-5 bg-[var(--color-gold)] text-black font-bold rounded-full hover:bg-yellow-400 transition text-xl shadow-xl hover:scale-105"
              >
                Message on WhatsApp
              </Link>
              <Link
                href="tel:+263772800899"
                className="px-12 py-5 border-4 border-white font-bold rounded-full hover:bg-white/10 transition text-xl hover:scale-105"
              >
                Call Us Now
              </Link>
            </div>
          </Animate>
        </div>
      </section>
    </Layout>
  );
}