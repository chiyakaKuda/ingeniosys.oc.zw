"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faCommentDots} from "@fortawesome/free-solid-svg-icons";
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
    // Connect to your form handler (e.g. Formspree, EmailJS, or API route)
    alert("Thank you! Your message has been sent. We'll reply within 24 hours.");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <div className="bg-white min-h-screen">

        {/* HERO */}
        <section className="pt-32 pb-20 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <Animate>
              <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--color-text)]">
                Contact Us
              </h1>
              <p className="mt-6 text-xl text-[var(--color-muted)] max-w-2xl mx-auto">
                Have a project in mind? Need a school website, chatbot, or training session?
                <br />We reply to every message within 24 hours.
              </p>
            </Animate>
          </div>
        </section>

        {/* MAIN CONTACT SECTION */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* LEFT: Contact Form */}
              <Animate delay={100}>
                <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                  <h2 className="text-2xl font-bold text-[var(--color-text)] mb-8">
                    Send us a message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="First Name"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-5 py-4 rounded-full border border-gray-300 focus:border-[#0F3A36] focus:outline-none transition"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-5 py-4 rounded-full border border-gray-300 focus:border-[#0F3A36] focus:outline-none transition"
                      />
                    </div>

                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-full border border-gray-300 focus:border-[#0F3A36] focus:outline-none transition"
                    />

                    <div className="relative">
                      <span className="absolute left-5 top-4 text-gray-500">+263</span>
                      <input
                        type="tel"
                        placeholder="Enter your contact number"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-20 pr-5 py-4 rounded-full border border-gray-300 focus:border-[#0F3A36] focus:outline-none transition"
                      />
                    </div>

                    <textarea
                      placeholder="Enter your message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-4 rounded-3xl border border-gray-300 focus:border-[#0F3A36] focus:outline-none transition resize-none"
                    />

                    <button
                      type="submit"
                      className="w-full py-5 bg-[#0F3A36] text-white font-bold rounded-full hover:bg-[#0F3A36]/90 transition shadow-lg text-lg"
                    >
                      Send a Message
                    </button>
                  </form>
                </div>
              </Animate>

              {/* RIGHT: Contact Info Card */}
              <Animate delay={300}>
                <div className="bg-[#0F3A36] text-white rounded-3xl p-10 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-8">Hi! We are always here to help you.</h3>

                  <div className="space-y-8">
                    <div className="bg-white/10 rounded-2xl p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div>
                          <p className="text-sm opacity-90">Hotline</p>
                          <p className="text-xl font-semibold">+263 77 280 0899</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-2xl p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <FontAwesomeIcon icon={faCommentDots} />
                        </div>
                        <div>
                          <p className="text-sm opacity-90">SMS / WhatsApp</p>
                          <p className="text-xl font-semibold">+263 77 280 0899</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-2xl p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div>
                          <p className="text-sm opacity-90">Email</p>
                          <p className="text-xl font-semibold break-all">sales@ingeniosys.co.zw</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-white/20">
  <p className="text-lg font-semibold mb-4">Connect with us</p>
  <div className="flex gap-5">
    {/* Facebook */}
    <a
      href="https://facebook.com/ingeniosystems"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
    >
      <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
    </a>

    {/* Instagram */}
    <a
      href="https://instagram.com/ingeniosystems"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
    >
      <FontAwesomeIcon icon={faInstagram} className="text-xl" />
    </a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com/company/ingeniosystems"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
    >
      <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
    </a>

    {/* Twitter / X */}
    <a
      href="https://twitter.com/ingeniosystems"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
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

        {/* FINAL CTA */}
        <section className="py-24 bg-[#0F3A36] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <Animate>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
                Let’s Build Something Great Together
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Whether it’s a school website, WhatsApp bot, or training program — 
                we’re ready when you are.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="https://wa.me/263772800899"
                  className="px-12 py-5 bg-[var(--color-gold)] text-black font-bold rounded-full hover:bg-yellow-400 transition text-lg shadow-xl"
                >
                  Message on WhatsApp
                </Link>
                <Link
                  href="tel:+263772800899"
                  className="px-12 py-5 border-4 border-white font-bold rounded-full hover:bg-white/10 transition text-lg"
                >
                  Call Us Now
                </Link>
              </div>
            </Animate>
          </div>
        </section>
      </div>
    </Layout>
  );
}