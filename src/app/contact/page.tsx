"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faClock,
  faEnvelope,
  faMessage,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

  const handleFieldChange =
    (field: keyof ContactFormState) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setFormData((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json().catch(() => null)) as
        | { success?: boolean; error?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          result?.error || "Unable to send your message right now.",
        );
      }

      setStatus("success");
      setFeedback("Your message has been sent. We will get back to you shortly.");
      setFormData(initialFormState);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now.",
      );
    }
  };

  return (
    <Layout>
      <section className="relative overflow-hidden full-bleed">
        <div className="absolute inset-0">
          <Image
            src="/team/tech.jpg"
            alt="Ingenio Systems contact page background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(7,17,28,0.92)_0%,rgba(15,58,54,0.84)_48%,rgba(25,167,186,0.56)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_34%)]" />

        <div className="relative mx-auto grid min-h-[100svh] w-[95vw] max-w-7xl items-center gap-10 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:pb-24 lg:pt-36">
          <div className="max-w-3xl text-white">
            <Animate className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                Contact
              </span>
              <h1 className="text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl">
                Tell us what you need to build, automate, or manufacture
                better.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
                If you need AI ERP, Pharma-Bot, Dental Clinic Bot, a school
                platform, website, automation flow, or INGENIO GREEN
                manufacturing support, send the brief and we will shape the
                right next step.
              </p>
            </Animate>

            <Animate
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
              delay={100}
            >
              <Link
                href="#contact-form"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-gold)] px-7 py-4 text-base font-semibold text-[var(--color-text)] transition duration-300 hover:-translate-y-0.5"
              >
                Send a Message
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
              <Link
                href="https://wa.me/263772800899"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/18 bg-white/10 px-7 py-4 text-base font-semibold text-white transition duration-300 hover:bg-white/14"
              >
                Message on WhatsApp
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
            </Animate>
          </div>

          <Animate delay={160}>
            <div className="rounded-[32px] border border-white/12 bg-white/10 p-6 text-white shadow-[0_24px_60px_rgba(7,17,28,0.22)] backdrop-blur-md sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                Reach us directly
              </p>
              <div className="mt-8 grid gap-4">
                <a
                  href="tel:+263772800899"
                  className="rounded-[24px] border border-white/10 bg-black/10 px-5 py-4 transition duration-300 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/12 text-[var(--color-gold)]">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">
                        Phone
                      </p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        +263 77 280 0899
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/263772800899"
                  className="rounded-[24px] border border-white/10 bg-black/10 px-5 py-4 transition duration-300 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/12 text-[var(--color-gold)]">
                      <FontAwesomeIcon icon={faMessage} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">
                        WhatsApp
                      </p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        Fast replies for project enquiries
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:sale@ingeniosys.co.zw"
                  className="rounded-[24px] border border-white/10 bg-black/10 px-5 py-4 transition duration-300 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/12 text-[var(--color-gold)]">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">
                        Email
                      </p>
                      <p className="mt-1 break-all text-lg font-semibold text-white">
                        sale@ingeniosys.co.zw
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-8 rounded-[24px] border border-white/10 bg-black/10 px-5 py-4">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/12 text-[var(--color-gold)]">
                    <FontAwesomeIcon icon={faClock} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/72">
                      Response time
                    </p>
                    <p className="mt-1 text-base leading-7 text-white/80">
                      Most enquiries get a reply within one business day.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/263772800899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/12"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                  WhatsApp
                </a>
                <a
                  href="https://facebook.com/ingeniosystems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/12"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                  Facebook
                </a>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      <section
        id="contact-form"
        className="scroll-mt-32 py-20 sm:py-24 lg:py-28"
      >
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <Animate>
            <div className="rounded-[32px] border border-[rgba(30,126,52,0.14)] bg-white p-6 shadow-[0_24px_60px_rgba(15,58,54,0.06)] sm:p-8">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
                Send a Brief
              </span>
              <h2 className="mt-3 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
                Give us the essentials and we will respond properly
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                Tell us what you want to build, what sector it serves, who the
                users are, and what kind of timeline you have in mind.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleFieldChange("name")}
                    className="w-full rounded-full border border-[rgba(30,126,52,0.16)] bg-white px-5 py-4 text-[var(--color-text)] outline-none transition duration-300 focus:border-[var(--color-green)]"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    value={formData.email}
                    onChange={handleFieldChange("email")}
                    className="w-full rounded-full border border-[rgba(30,126,52,0.16)] bg-white px-5 py-4 text-[var(--color-text)] outline-none transition duration-300 focus:border-[var(--color-green)]"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Phone or WhatsApp number"
                  value={formData.phone}
                  onChange={handleFieldChange("phone")}
                  className="w-full rounded-full border border-[rgba(30,126,52,0.16)] bg-white px-5 py-4 text-[var(--color-text)] outline-none transition duration-300 focus:border-[var(--color-green)]"
                />

                <textarea
                  placeholder="Tell us what you need built or improved"
                  rows={7}
                  required
                  value={formData.message}
                  onChange={handleFieldChange("message")}
                  className="w-full resize-none rounded-[28px] border border-[rgba(30,126,52,0.16)] bg-white px-5 py-4 text-[var(--color-text)] outline-none transition duration-300 focus:border-[var(--color-green)]"
                />

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-green)] px-7 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#16642a] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="text-sm" />
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>

                {feedback ? (
                  <p
                    aria-live="polite"
                    className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                      status === "success"
                        ? "bg-[var(--color-light)] text-[var(--color-green)]"
                        : "bg-[rgba(255,215,0,0.14)] text-[var(--color-text)]"
                    }`}
                  >
                    {feedback}
                  </p>
                ) : null}
              </form>
            </div>
          </Animate>

          <Animate delay={120}>
            <div className="grid gap-6">
              <div className="rounded-[32px] bg-[linear-gradient(135deg,#0F3A36_0%,var(--color-green)_100%)] p-8 text-white shadow-[0_28px_70px_rgba(15,58,54,0.16)]">
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                  What to include
                </span>
                <h3 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
                  The better the brief, the faster the response
                </h3>
                <div className="mt-6 grid gap-4">
                  {[
                    "What you need built, automated, or manufactured",
                    "Who will use it and what they need to do",
                    "Any rough deadline or launch target",
                    "Links to the current site, product, logos, or references",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[24px] border border-white/10 bg-white/8 px-5 py-4 text-sm leading-7 text-white/78"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-[rgba(30,126,52,0.14)] bg-[var(--color-light)] p-8 shadow-[0_18px_45px_rgba(15,58,54,0.04)]">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
                  Direct options
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--color-text)]">
                  Prefer to skip the form?
                </h3>
                <p className="mt-3 text-base leading-8 text-[var(--color-muted)]">
                  You can call, email, or message us directly if that is faster
                  for your workflow.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="tel:+263772800899"
                    className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-text)] transition duration-300 hover:text-[var(--color-green)]"
                  >
                    <FontAwesomeIcon icon={faPhone} className="text-[var(--color-green)]" />
                    +263 77 280 0899
                  </a>
                  <a
                    href="mailto:sale@ingeniosys.co.zw"
                    className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-text)] transition duration-300 hover:text-[var(--color-green)]"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="text-[var(--color-green)]" />
                    sale@ingeniosys.co.zw
                  </a>
                  <a
                    href="https://wa.me/263772800899"
                    className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-text)] transition duration-300 hover:text-[var(--color-green)]"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-[var(--color-green)]" />
                    WhatsApp chat
                  </a>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>
    </Layout>
  );
}
