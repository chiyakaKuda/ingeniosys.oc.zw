"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faComments,
  faEnvelope,
  faHeadset,
  faPaperPlane,
  faQuestionCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

type ChatMessage = {
  text: string;
  isUser: boolean;
};

type SupportView = "home" | "chat" | "human";

type SupportFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const companyDB = {
  about:
    "Ingenio Systems is a Zimbabwean software company building websites, mobile apps, portals, automation, and digital systems for schools, businesses, and growing teams.",
  services:
    "We build custom websites, mobile apps, business software, chatbots, portals, automation tools, and long-term support for digital products.",
  contact:
    "Hotline: +263 77 280 0899 | Email: sales@ingeniosys.co.zw | WhatsApp: +263 77 280 0899",
  pricing:
    "We provide guide pricing for websites, systems, mobile apps, automation, and support. If you want an exact quote, tell us the scope and timeline.",
  portfolio:
    "Our portfolio includes Fleet-Eye Tracking Systems, Invoicee, kchiyaka.com, and the Guinea Fowl High School website and portal experience.",
  support:
    "For direct support, use WhatsApp for the fastest response or send a message here and we will route it to the right person.",
};

const initialMessage: ChatMessage = {
  text: "Hello. What do you need help with today? You can ask about services, pricing, portfolio, contact details, or request direct support.",
  isUser: false,
};

const initialFormState: SupportFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const quickTopics = ["Services", "Pricing", "Portfolio", "Contact", "Support"];

function resolveResponse(input: string) {
  const lowerInput = input.toLowerCase();

  if (lowerInput.includes("about") || lowerInput.includes("story")) {
    return companyDB.about;
  }

  if (lowerInput.includes("service")) {
    return companyDB.services;
  }

  if (
    lowerInput.includes("price") ||
    lowerInput.includes("pricing") ||
    lowerInput.includes("quote")
  ) {
    return companyDB.pricing;
  }

  if (
    lowerInput.includes("portfolio") ||
    lowerInput.includes("project") ||
    lowerInput.includes("work")
  ) {
    return companyDB.portfolio;
  }

  if (
    lowerInput.includes("contact") ||
    lowerInput.includes("email") ||
    lowerInput.includes("phone") ||
    lowerInput.includes("whatsapp")
  ) {
    return companyDB.contact;
  }

  if (
    lowerInput.includes("help") ||
    lowerInput.includes("support") ||
    lowerInput.includes("issue")
  ) {
    return companyDB.support;
  }

  return "Thanks for your message. If you need a direct reply, open the support form or use WhatsApp and we will take it from there.";
}

export default function ChatWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<SupportView>("home");
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [formState, setFormState] = useState<SupportFormState>(initialFormState);
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formFeedback, setFormFeedback] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || view !== "chat") {
      return;
    }

    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [isOpen, view, isTyping, messages]);

  const handleSend = (topic?: string) => {
    const nextMessage = topic ?? input.trim();

    if (!nextMessage) {
      return;
    }

    setMessages((prev) => [...prev, { text: nextMessage, isUser: true }]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: resolveResponse(nextMessage), isUser: false },
      ]);
      setIsTyping(false);
    }, 900);
  };

  const handleFieldChange =
    (field: keyof SupportFormState) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setFormState((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  const handleSupportSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setFormStatus("submitting");
    setFormFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          message: `[Support widget enquiry from ${pathname}]\n\n${formState.message}`,
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { success?: boolean; error?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          result?.error || "Unable to send your support request right now.",
        );
      }

      setFormStatus("success");
      setFormFeedback("Your support request has been sent. We will follow up shortly.");
      setFormState(initialFormState);
    } catch (error) {
      setFormStatus("error");
      setFormFeedback(
        error instanceof Error
          ? error.message
          : "Unable to send your support request right now.",
      );
    }
  };

  const titleByView: Record<SupportView, string> = {
    home: "Ingenio Support",
    chat: "Quick Help",
    human: "Message Support",
  };

  const subtitleByView: Record<SupportView, string> = {
    home: "Choose the fastest way to reach us",
    chat: "Ask a question and get an instant answer",
    human: "Send your brief to a real person",
  };

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Close support" : "Open support"}
        onClick={() => setIsOpen((current) => !current)}
        className="fixed bottom-24 right-4 z-[60] inline-flex h-14 w-14 items-center justify-center gap-3 rounded-full bg-[var(--color-green)] px-0 text-white shadow-2xl transition duration-300 hover:bg-[var(--color-green)]/90 hover:scale-[1.03] md:bottom-6 md:right-6 md:h-16 md:w-auto md:px-5"
      >
        <FontAwesomeIcon icon={faComments} className="text-2xl md:text-[1.6rem]" />
        <span className="hidden whitespace-nowrap text-sm font-semibold tracking-[0.02em] md:inline">
          {isOpen ? "Close Support" : "Ingenio Support"}
        </span>
      </button>

      {isOpen ? (
        <div className="fixed bottom-40 right-4 z-[60] flex h-[80vh] max-h-[560px] w-[90vw] max-w-sm flex-col overflow-hidden rounded-3xl border border-[rgba(30,126,52,0.14)] bg-white shadow-2xl md:bottom-24 md:right-6 md:h-[560px] md:w-96 md:max-w-md lg:w-[410px]">
          <div className="flex items-center justify-between bg-gradient-to-r from-[var(--color-green)] to-[#0F3A36] p-4 text-white">
            <div className="flex items-center gap-3">
              {view !== "home" ? (
                <button
                  type="button"
                  aria-label="Back to support home"
                  onClick={() => setView("home")}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12 transition hover:bg-white/18"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
                </button>
              ) : null}
              <div>
                <h3 className="text-base font-bold md:text-lg">{titleByView[view]}</h3>
                <p className="text-xs opacity-90 md:text-sm">{subtitleByView[view]}</p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close support"
              onClick={() => setIsOpen(false)}
              className="text-white transition hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faTimes} className="text-lg md:text-xl" />
            </button>
          </div>

          {view === "home" ? (
            <div className="flex-1 overflow-y-auto bg-white p-4 md:p-5">
              <div className="rounded-[28px] bg-[var(--color-light)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-green)]">
                  Support Hub
                </p>
                <h4 className="mt-3 text-2xl font-bold text-[var(--color-text)]">
                  Fast answers when you need them
                </h4>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  Use quick help for instant answers, WhatsApp for the fastest direct
                  response, or send a support brief if you want us to follow up
                  properly.
                </p>
              </div>

              <div className="mt-4 grid gap-3">
                <a
                  href="https://wa.me/263772800899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-[24px] border border-[rgba(30,126,52,0.14)] bg-white px-4 py-4 transition duration-300 hover:border-[var(--color-gold)]/40 hover:bg-[var(--color-light)]"
                >
                  <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-light)] text-[var(--color-green)]">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-[var(--color-text)]">
                      WhatsApp support
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">
                      Fastest way to reach us directly about a project or issue.
                    </p>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => setView("chat")}
                  className="flex items-start gap-4 rounded-[24px] border border-[rgba(30,126,52,0.14)] bg-white px-4 py-4 text-left transition duration-300 hover:border-[var(--color-gold)]/40 hover:bg-[var(--color-light)]"
                >
                  <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-light)] text-[var(--color-green)]">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-[var(--color-text)]">
                      Quick help
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">
                      Ask about services, pricing, contact details, or portfolio work.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setView("human")}
                  className="flex items-start gap-4 rounded-[24px] border border-[rgba(30,126,52,0.14)] bg-white px-4 py-4 text-left transition duration-300 hover:border-[var(--color-gold)]/40 hover:bg-[var(--color-light)]"
                >
                  <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-light)] text-[var(--color-green)]">
                    <FontAwesomeIcon icon={faHeadset} />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-[var(--color-text)]">
                      Human support
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">
                      Send your brief and we will route it to the right person.
                    </p>
                  </div>
                </button>
              </div>

              <div className="mt-5 rounded-[24px] bg-[#0F3A36] p-4 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">
                  Direct contact
                </p>
                <div className="mt-3 space-y-2 text-sm leading-7 text-white/80">
                  <p>
                    <span className="font-semibold text-white">Phone:</span> +263 77
                    280 0899
                  </p>
                  <p>
                    <span className="font-semibold text-white">Email:</span>{" "}
                    sales@ingeniosys.co.zw
                  </p>
                </div>

                <div className="mt-4 flex gap-3">
                  <a
                    href="https://wa.me/263772800899"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/16"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                    WhatsApp
                  </a>
                  <a
                    href="https://facebook.com/ingeniosystems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/16"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                    Facebook
                  </a>
                </div>
              </div>

              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-green)] transition duration-300 hover:gap-4"
                >
                  Open full contact page
                  <FontAwesomeIcon icon={faArrowLeft} className="rotate-180 text-xs" />
                </Link>
              </div>
            </div>
          ) : null}

          {view === "chat" ? (
            <>
              <div className="border-b border-gray-100 bg-white px-4 py-3">
                <div className="flex flex-wrap gap-2">
                  {quickTopics.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => handleSend(topic)}
                      className="rounded-full border border-[rgba(30,126,52,0.14)] bg-[var(--color-light)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-green)] transition hover:border-[var(--color-gold)]/40 hover:bg-white"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-3 md:p-4">
                {messages.map((message, index) => (
                  <div
                    key={`${message.isUser ? "user" : "bot"}-${index}`}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[82%] rounded-2xl px-3 py-2 md:px-4 md:py-3 ${
                        message.isUser
                          ? "bg-[var(--color-green)] text-white"
                          : "bg-white text-[var(--color-text)] shadow-sm"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}

                {isTyping ? (
                  <div className="flex justify-start">
                    <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                      <div className="flex space-x-2">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                        <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 delay-150" />
                        <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 delay-300" />
                      </div>
                    </div>
                  </div>
                ) : null}

                <div ref={messagesEndRef} />
              </div>

              <div className="border-t border-gray-200 bg-white p-3 md:p-4">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={(event) => event.key === "Enter" && handleSend()}
                    placeholder="Ask about services, pricing, or support..."
                    className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm transition focus:border-[var(--color-green)] focus:outline-none md:py-3 md:text-base"
                  />
                  <button
                    type="button"
                    onClick={() => handleSend()}
                    className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gold)] text-black transition hover:bg-yellow-400 md:ml-3 md:h-12 md:w-12"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="text-base md:text-lg" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setView("human")}
                  className="mt-3 text-sm font-semibold text-[var(--color-green)] transition hover:text-[#16642a]"
                >
                  Need a real person instead?
                </button>
              </div>
            </>
          ) : null}

          {view === "human" ? (
            <div className="flex-1 overflow-y-auto bg-white p-4 md:p-5">
              <div className="rounded-[28px] bg-[var(--color-light)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-green)]">
                  Human support
                </p>
                <h4 className="mt-3 text-2xl font-bold text-[var(--color-text)]">
                  Send the brief
                </h4>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  This sends directly through the site so we can follow up with the
                  right context.
                </p>
              </div>

              <form onSubmit={handleSupportSubmit} className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formState.name}
                  onChange={handleFieldChange("name")}
                  className="w-full rounded-full border border-[rgba(30,126,52,0.16)] bg-white px-4 py-3 text-sm outline-none transition duration-300 focus:border-[var(--color-green)] md:text-base"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={formState.email}
                  onChange={handleFieldChange("email")}
                  className="w-full rounded-full border border-[rgba(30,126,52,0.16)] bg-white px-4 py-3 text-sm outline-none transition duration-300 focus:border-[var(--color-green)] md:text-base"
                />
                <input
                  type="tel"
                  placeholder="Phone or WhatsApp number"
                  value={formState.phone}
                  onChange={handleFieldChange("phone")}
                  className="w-full rounded-full border border-[rgba(30,126,52,0.16)] bg-white px-4 py-3 text-sm outline-none transition duration-300 focus:border-[var(--color-green)] md:text-base"
                />
                <textarea
                  rows={6}
                  placeholder="What do you need help with?"
                  required
                  value={formState.message}
                  onChange={handleFieldChange("message")}
                  className="w-full resize-none rounded-[24px] border border-[rgba(30,126,52,0.16)] bg-white px-4 py-3 text-sm outline-none transition duration-300 focus:border-[var(--color-green)] md:text-base"
                />

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-green)] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#16642a] disabled:cursor-not-allowed disabled:opacity-70 md:text-base"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
                  {formStatus === "submitting"
                    ? "Sending..."
                    : "Send support request"}
                </button>

                {formFeedback ? (
                  <p
                    aria-live="polite"
                    className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                      formStatus === "success"
                        ? "bg-[var(--color-light)] text-[var(--color-green)]"
                        : "bg-[rgba(255,215,0,0.14)] text-[var(--color-text)]"
                    }`}
                  >
                    {formFeedback}
                  </p>
                ) : null}
              </form>

              <div className="mt-5 border-t border-gray-100 pt-4">
                <p className="text-sm leading-7 text-[var(--color-muted)]">
                  Prefer direct contact instead?
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/263772800899"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-light)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:bg-white"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-[var(--color-green)]" />
                    WhatsApp
                  </a>
                  <a
                    href="mailto:sales@ingeniosys.co.zw"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-light)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:bg-white"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="text-[var(--color-green)]" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
