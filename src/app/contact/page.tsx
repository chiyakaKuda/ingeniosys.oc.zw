"use client";

import { FormEvent, useState } from "react";
import Layout from "@/components/Layout";
import Animate from "@/components/Animate";

type FormStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>({ state: "idle" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ state: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error?.error || "Something went wrong.");
      }

      setStatus({
        state: "success",
        message: "Thanks for reaching out! We'll reply shortly.",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error instanceof Error
            ? error.message
            : "We couldn't send your message. Please try again.",
      });
    }
  };

  return (
    <Layout>
      <section className="flex flex-col gap-8">
        <Animate className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Contact
          </span>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Let us build something together
          </h1>
          <p className="max-w-3xl text-lg text-slate-700">
            Share a bit about your project or training needs—schools, portals,
            workshops, or chatbots—and we will respond within one business day.
          </p>
        </Animate>

        <Animate delay={80}>
          <form
            onSubmit={handleSubmit}
            className="accent-card flex flex-col gap-6 p-6 sm:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                Name
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  className="rounded-xl border border-slate-200 px-4 py-3 text-base shadow-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/60"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
                Email
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="rounded-xl border border-slate-200 px-4 py-3 text-base shadow-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/60"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-800">
              Message
              <textarea
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
                rows={5}
                className="rounded-xl border border-slate-200 px-4 py-3 text-base shadow-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/60"
                placeholder="Tell us about your goals"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="btn btn-primary w-full sm:w-auto"
                disabled={status.state === "submitting"}
              >
                {status.state === "submitting" ? "Sending..." : "Send message"}
              </button>
              {status.state === "success" && (
                <p className="text-sm font-medium text-green-700">
                  {status.message}
                </p>
              )}
              {status.state === "error" && (
                <p className="text-sm font-medium text-red-600">
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </Animate>
      </section>
    </Layout>
  );
}

