// src/components/PricingSection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// Use your exact Animate component path
import Animate from "@/components/Animate";  // ← Adjust if path is different (e.g., '@/components/Animate')

// Top 5 services as tabs
import { 
    faDesktop, 
    faGraduationCap, 
    faCommentDots, 
    faLaptopCode, 
    faHeadset 
  } from '@fortawesome/free-solid-svg-icons';
  
  const pricingTabs = [
    { id: "websites", label: "School Websites & Portals", icon: faDesktop },
    { id: "results", label: "Student Result Portals", icon: faGraduationCap },
    { id: "chatbots", label: "WhatsApp Chatbots", icon: faCommentDots },
    { id: "fullstack", label: "Full-Stack Applications", icon: faLaptopCode },
    { id: "support", label: "Maintenance & Support", icon: faHeadset },
  ];

// Pricing data (same as before)
const pricingData: Record<string, any[]> = {
  websites: [
    { title: "Basic", price: "$29", desc: "Perfect for small schools starting online.", featured: false, features: ["5-page website", "Mobile responsive", "Contact form", "1 year hosting", "Basic SEO"] },
    { title: "Pro", price: "$59", desc: "Modern, branded site with advanced features.", featured: true, features: ["Custom design", "News & gallery", "Parent login area", "Events calendar", "Priority support"] },
    { title: "Enterprise", price: "Custom", desc: "Full custom portal with integrations.", featured: false, features: ["Everything in Pro", "Student/parent portal", "Payment integration", "Custom features", "Dedicated manager"] },
  ],
  results: [
    { title: "Basic", price: "$19", desc: "Simple secure result access.", featured: false, features: ["Secure login", "View results", "Download reports", "Mobile access"] },
    { title: "Pro", price: "$39", desc: "Advanced result management.", featured: true, features: ["Everything in Basic", "Parent notifications", "Analytics dashboard", "Bulk upload", "Custom branding"] },
    { title: "Enterprise", price: "Custom", desc: "Full integration with school systems.", featured: false, features: ["API integration", "Multi-school support", "Advanced security", "Audit logs"] },
  ],
  chatbots: [
    { title: "Basic", price: "$15", desc: "Automated replies for common queries.", featured: false, features: ["10 predefined responses", "Admissions & fees info", "Working hours reply", "Basic analytics"] },
    { title: "Pro", price: "$35", desc: "Smart chatbot with integrations.", featured: true, features: ["Unlimited responses", "Connect to results portal", "Payment reminders", "Attendance queries", "Live handover"] },
    { title: "Enterprise", price: "Custom", desc: "AI-powered assistant.", featured: false, features: ["Natural language AI", "Multi-language support", "Full integration", "Custom training"] },
  ],
  fullstack: [
    { title: "Starter", price: "$99", desc: "Custom module for specific needs.", featured: false, features: ["One core module", "Admin dashboard", "Basic user roles", "3 months support"] },
    { title: "Professional", price: "$199", desc: "Complete school management system.", featured: true, features: ["Multiple modules", "Student/teacher portals", "Reporting tools", "Mobile app ready"] },
    { title: "Enterprise", price: "Custom", desc: "Full custom solution.", featured: false, features: ["All features", "On-premise option", "Custom integrations", "Training included"] },
  ],
  support: [
    { title: "Basic", price: "$19", desc: "Essential maintenance.", featured: false, features: ["Monthly backups", "Security updates", "Email support", "Uptime monitoring"] },
    { title: "Pro", price: "$49", desc: "Full peace of mind.", featured: true, features: ["Everything in Basic", "Weekly backups", "Performance optimization", "Priority phone support", "Monthly reports"] },
    { title: "Dedicated", price: "Custom", desc: "Your own tech partner.", featured: false, features: ["Dedicated manager", "24/7 monitoring", "Proactive fixes", "Custom development hours"] },
  ],
};

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("websites");
  const currentPricing = pricingData[activeTab];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-[var(--color-white)]">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] tracking-tight">
          Transparent & Affordable Pricing
        </h2>
        <p className="mt-6 text-xl text-[var(--color-muted)] max-w-3xl mx-auto">
          Simple, flexible plans designed for Zimbabwean schools — no hidden fees, includes setup and support.
        </p>
      </div>
  
      {/* Tabs with Icons */}
      <div className="flex flex-wrap justify-center gap-6 mb-16 md:mb-20">
        {pricingTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg
              ${activeTab === tab.id
                ? "bg-[var(--color-green)] text-white shadow-xl"
                : "bg-gray-100 text-[var(--color-text)] hover:bg-[var(--color-light)]"
              }
            `}
          >
            {/* Icon */}
            <FontAwesomeIcon 
              icon={tab.icon} 
              className={`text-xl ${activeTab === tab.id ? "text-white" : "text-[var(--color-green)]"}`}
            />
            <span>{tab.label}</span>
  
            {/* Subtle glow on active */}
            {activeTab === tab.id && (
              <span className="absolute inset-0 rounded-2xl ring-4 ring-[var(--color-green)]/20 -z-10" />
            )}
          </button>
        ))}
      </div>
  
      {/* Animated Pricing Cards Container */}
      <div className="relative">
        <Animate key={activeTab} delay={0} className="animate-fade-slide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {currentPricing.map((plan, i) => (
              <Animate key={plan.title} delay={(i + 1) * 150}>
                <div
                  className={`group relative bg-white rounded-3xl p-8 border-2 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full ${
                    plan.featured
                      ? "border-[var(--color-gold)] ring-4 ring-[var(--color-gold)]/20 lg:scale-105"
                      : "border-gray-200"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-gold)] text-[var(--color-text)] px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  )}
  
                  <h3 className="text-2xl font-bold text-[var(--color-text)] mb-3">{plan.title}</h3>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-extrabold text-[var(--color-green)]">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-xl text-[var(--color-muted)]"> /month</span>
                    )}
                  </div>
  
                  <p className="text-[var(--color-muted)] text-lg mb-8 flex-grow">{plan.desc}</p>
  
                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-[var(--color-green)] text-xl mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-[var(--color-text)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
  
                  <Link
                    href="/contact"
                    className={`mt-auto py-4 px-8 text-center rounded-full font-bold text-lg transition-all shadow-lg ${
                      plan.featured
                        ? "bg-[var(--color-green)] text-white hover:bg-green-800"
                        : "bg-[var(--color-gold)] text-[var(--color-text)] hover:bg-yellow-600"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </Animate>
            ))}
          </div>
        </Animate>
      </div>
    </div>
  </section>
  );
}