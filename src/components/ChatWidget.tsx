"use client";

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faTimes, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

// Simple in-memory "database" with company info (replace with real DB like SQLite/MongoDB in production)
const companyDB = {
  about: "Ingenio Systems is a Zimbabwean-led team passionate about bridging the digital divide in education through modern, affordable tech solutions like school websites, chatbots, and training.",
  services: "We offer school websites, WhatsApp chatbots, teacher training, and smart automation tools.",
  contact: "Hotline: +263 77 280 0899 | Email: sales@ingeniosys.co.zw | WhatsApp: +263 77 280 0899",
  vision: "To lead Zimbabwe’s educational digital transformation.",
  mission: "Deliver accessible, high-quality web solutions and training.",
  // Add more key-value pairs as needed
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); // For typing indicator
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Welcome message on open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ text: "Hello! How can we help transform your school today? Ask about our services, about us, or anything!", isUser: false }]);
    }
  }, [isOpen]);

  // Handle send message
  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { text: input, isUser: true }]);
    setInput("");
    setIsTyping(true);

    // Simulate retrieval from "DB" and response (replace with real AI/DB query)
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let response = "Thanks for your message! We'll get back to you soon.";
      
      // Query "DB" based on keywords
      if (lowerInput.includes("about") || lowerInput.includes("story")) {
        response = companyDB.about;
      } else if (lowerInput.includes("services")) {
        response = companyDB.services;
      } else if (lowerInput.includes("contact")) {
        response = companyDB.contact;
      } else if (lowerInput.includes("vision")) {
        response = companyDB.vision;
      } else if (lowerInput.includes("mission")) {
        response = companyDB.mission;
      }

      setMessages((prev) => [...prev, { text: response, isUser: false }]);
      setIsTyping(false);
    }, 1500); // Simulate typing delay
  };

  return (
    <>
      {/* Floating Bubble – Responsive positioning */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[var(--color-green)] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[var(--color-green)]/90 transition transform hover:scale-110"
      >
        <FontAwesomeIcon icon={faComments} className="text-2xl md:text-3xl" />
      </button>

      {/* Chat Window – Responsive: Full-screen on mobile */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm md:w-96 md:max-w-md lg:w-[400px] h-[80vh] max-h-[500px] md:h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[var(--color-green)] to-[#0F3A36] text-white p-3 md:p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-base md:text-lg">Ingenio Support</h3>
              <p className="text-xs md:text-sm opacity-90">Online • Reply in ~24h</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <FontAwesomeIcon icon={faTimes} className="text-lg md:text-xl" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 md:p-4 overflow-y-auto bg-gray-50 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 md:px-4 md:py-3 rounded-2xl ${
                    msg.isUser
                      ? "bg-[var(--color-green)] text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 md:p-4 border-t border-gray-200 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 md:py-3 rounded-full border border-gray-300 focus:border-[var(--color-green)] focus:outline-none transition text-sm md:text-base"
            />
            <button
              onClick={handleSend}
              className="ml-2 md:ml-3 w-10 h-10 md:w-12 md:h-12 bg-[var(--color-gold)] text-black rounded-full flex items-center justify-center hover:bg-yellow-400 transition"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="text-base md:text-lg" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}