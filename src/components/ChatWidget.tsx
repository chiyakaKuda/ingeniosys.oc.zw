"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faPaperPlane,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

type ChatMessage = {
  text: string;
  isUser: boolean;
};

const companyDB = {
  about:
    "Ingenio Systems is a Zimbabwean software company building websites, mobile apps, portals, automation, and digital systems for schools, businesses, and growing teams.",
  services:
    "We build custom websites, mobile apps, business software, chatbots, portals, automation tools, and training support.",
  contact:
    "Hotline: +263 77 280 0899 | Email: sales@ingeniosys.co.zw | WhatsApp: +263 77 280 0899",
  vision:
    "To build practical software that helps organizations operate better and grow faster.",
  mission:
    "Deliver accessible, high-quality software, mobile experiences, and digital support.",
};

const initialMessage: ChatMessage = {
  text: "Hello! Tell us what you want to build. We can help with websites, mobile apps, portals, automation, and custom software.",
  isUser: false,
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [isOpen, isTyping, messages]);

  const handleSend = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
      return;
    }

    setMessages((prev) => [...prev, { text: trimmedInput, isUser: true }]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      const lowerInput = trimmedInput.toLowerCase();
      let response = "Thanks for your message. We will get back to you soon.";

      if (lowerInput.includes("about") || lowerInput.includes("story")) {
        response = companyDB.about;
      } else if (lowerInput.includes("services")) {
        response = companyDB.services;
      } else if (
        lowerInput.includes("contact") ||
        lowerInput.includes("email") ||
        lowerInput.includes("phone")
      ) {
        response = companyDB.contact;
      } else if (lowerInput.includes("vision")) {
        response = companyDB.vision;
      } else if (lowerInput.includes("mission")) {
        response = companyDB.mission;
      }

      setMessages((prev) => [...prev, { text: response, isUser: false }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        onClick={() => setIsOpen((current) => !current)}
        className="fixed bottom-24 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-green)] text-white shadow-2xl transition hover:bg-[var(--color-green)]/90 hover:scale-110 md:bottom-6 md:right-6 md:h-16 md:w-16"
      >
        <FontAwesomeIcon icon={faComments} className="text-2xl md:text-3xl" />
      </button>

      {isOpen && (
        <div className="fixed bottom-40 right-4 z-[60] flex h-[80vh] max-h-[500px] w-[90vw] max-w-sm flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl md:bottom-24 md:right-6 md:h-[500px] md:w-96 md:max-w-md lg:w-[400px]">
          <div className="flex items-center justify-between bg-gradient-to-r from-[var(--color-green)] to-[#0F3A36] p-3 text-white md:p-4">
            <div>
              <h3 className="text-base font-bold md:text-lg">Ingenio Support</h3>
              <p className="text-xs opacity-90 md:text-sm">
                Online • Reply in about 24h
              </p>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
              className="text-white transition hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faTimes} className="text-lg md:text-xl" />
            </button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-3 md:p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.isUser ? "user" : "bot"}-${index}`}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 md:px-4 md:py-3 ${
                    message.isUser
                      ? "bg-[var(--color-green)] text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-gray-200 px-4 py-3 text-gray-800">
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 delay-150" />
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 delay-300" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center border-t border-gray-200 p-3 md:p-4">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => event.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm transition focus:border-[var(--color-green)] focus:outline-none md:py-3 md:text-base"
            />
            <button
              type="button"
              onClick={handleSend}
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gold)] text-black transition hover:bg-yellow-400 md:ml-3 md:h-12 md:w-12"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="text-base md:text-lg" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
