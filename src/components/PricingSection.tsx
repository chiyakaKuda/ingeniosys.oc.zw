// src/components/PricingSection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";

// Use your exact Animate component path
import Animate from "@/components/Animate";

// Top 5 services as tabs
import { 
    faDesktop, 
    faGraduationCap, 
    faCommentDots, 
    faLaptopCode, 
    faHeadset 
  } from '@fortawesome/free-solid-svg-icons';
  
const pricingTabs = [
  { id: "websites", label: "School Websites", icon: faDesktop },
  { id: "results", label: "Result Portals", icon: faGraduationCap },
  { id: "chatbots", label: "WhatsApp Bots", icon: faCommentDots },
  { id: "fullstack", label: "Custom Apps", icon: faLaptopCode },
  { id: "support", label: "Support Plans", icon: faHeadset },
];

// Updated pricing data with realistic Zimbabwe school pricing
const pricingData: Record<string, any[]> = {
  websites: [
    { 
      title: "Starter", 
      price: "$250", 
      desc: "Perfect for small schools going digital.", 
      featured: false, 
      gradient: "from-blue-500 to-cyan-600",
      features: [
        "5-page responsive website", 
        "Mobile-optimized design", 
        "Contact & enquiry forms", 
        "1 year hosting included", 
        "Basic SEO setup",
        "Social media integration"
      ] 
    },
    { 
      title: "Professional", 
      price: "$600", 
      desc: "Complete branded website for growing schools.", 
      featured: true, 
      gradient: "from-emerald-500 to-teal-600",
      features: [
        "Everything in Starter", 
        "Custom professional design", 
        "News & events section", 
        "Photo & video galleries",
        "Parent resources area", 
        "Google Analytics",
        "Priority email support",
        "Monthly backups"
      ] 
    },
    { 
      title: "Premium", 
      price: "$1,000", 
      desc: "Advanced website with portal features.", 
      featured: false, 
      gradient: "from-purple-500 to-violet-600",
      features: [
        "Everything in Professional", 
        "Parent/student login portal", 
        "Online application forms",
        "Payment gateway integration", 
        "Custom functionality",
        "Staff directory",
        "Newsletter system",
        "Dedicated project manager"
      ] 
    },
  ],
  results: [
    { 
      title: "Basic", 
      price: "$500", 
      desc: "Secure online results access for students.", 
      featured: false, 
      gradient: "from-orange-500 to-red-600",
      features: [
        "Secure student login system", 
        "View & download results", 
        "PDF report cards", 
        "Mobile-friendly access",
        "Password recovery",
        "Basic admin panel"
      ] 
    },
    { 
      title: "Advanced", 
      price: "$750", 
      desc: "Full-featured result management system.", 
      featured: true, 
      gradient: "from-pink-500 to-rose-600",
      features: [
        "Everything in Basic", 
        "Parent SMS/email notifications", 
        "Bulk results upload (CSV/Excel)", 
        "Analytics & reports dashboard",
        "Grade tracking over time",
        "Custom school branding", 
        "Multi-term support",
        "Teacher result entry portal"
      ] 
    },
    { 
      title: "Enterprise", 
      price: "$1,000", 
      desc: "Complete academic management solution.", 
      featured: false, 
      gradient: "from-indigo-500 to-blue-600",
      features: [
        "Everything in Advanced",
        "API integration with school systems", 
        "Multi-school/campus support", 
        "Advanced security & encryption",
        "Attendance integration",
        "Custom workflows",
        "Detailed audit logs",
        "Priority support & training"
      ] 
    },
  ],
  chatbots: [
    { 
      title: "Essentials", 
      price: "$150", 
      desc: "Automated WhatsApp responses 24/7.", 
      featured: false, 
      gradient: "from-green-500 to-emerald-600",
      features: [
        "20 predefined responses", 
        "Admissions information", 
        "Fee structure & payments", 
        "School hours & location",
        "Basic analytics dashboard",
        "Setup & configuration"
      ] 
    },
    { 
      title: "Smart Bot", 
      price: "$300", 
      desc: "Intelligent chatbot with integrations.", 
      featured: true, 
      gradient: "from-teal-500 to-cyan-600",
      features: [
        "Everything in Essentials",
        "Unlimited custom responses", 
        "Results portal integration", 
        "Payment reminders & alerts",
        "Attendance status queries", 
        "Live agent handover",
        "Advanced analytics",
        "Monthly optimization"
      ] 
    },
    { 
      title: "AI Assistant", 
      price: "$500", 
      desc: "Advanced AI-powered school assistant.", 
      featured: false, 
      gradient: "from-violet-500 to-purple-600",
      features: [
        "Everything in Smart Bot",
        "Natural language AI understanding", 
        "Multi-language support (English, Shona, Ndebele)", 
        "Full system integration",
        "Custom AI training for your school",
        "Voice message support",
        "Chatbot analytics & insights",
        "Dedicated support manager"
      ] 
    },
  ],
  fullstack: [
    { 
      title: "Core Module", 
      price: "$500", 
      desc: "Single custom application module.", 
      featured: false, 
      gradient: "from-amber-500 to-orange-600",
      features: [
        "One core functional module", 
        "Admin dashboard", 
        "User role management", 
        "Mobile responsive",
        "Data export features",
        "3 months support included"
      ] 
    },
    { 
      title: "Complete System", 
      price: "$750", 
      desc: "Full school management solution.", 
      featured: true, 
      gradient: "from-red-500 to-pink-600",
      features: [
        "Everything in Core Module",
        "Multiple integrated modules", 
        "Student & teacher portals", 
        "Advanced reporting tools",
        "Attendance management",
        "Fee management",
        "SMS/Email notifications", 
        "6 months support & updates"
      ] 
    },
    { 
      title: "Enterprise Suite", 
      price: "$1,000", 
      desc: "Comprehensive custom-built platform.", 
      featured: false, 
      gradient: "from-blue-500 to-indigo-600",
      features: [
        "Everything in Complete System",
        "Fully customized to your needs",
        "On-premise or cloud deployment", 
        "API for third-party integrations",
        "Mobile apps (iOS & Android)",
        "Advanced security & backups",
        "Staff training included", 
        "12 months priority support"
      ] 
    },
  ],
  support: [
    { 
      title: "Basic Care", 
      price: "$30", 
      recurring: "/month",
      desc: "Essential maintenance for your website.", 
      featured: false, 
      gradient: "from-slate-500 to-gray-600",
      features: [
        "Monthly website backups", 
        "Security updates & patches", 
        "Uptime monitoring (99% SLA)", 
        "Email support (48hr response)",
        "Performance checks",
        "SSL certificate management"
      ] 
    },
    { 
      title: "Priority Care", 
      price: "$60", 
      recurring: "/month",
      desc: "Comprehensive maintenance & support.", 
      featured: true, 
      gradient: "from-emerald-500 to-green-600",
      features: [
        "Everything in Basic Care",
        "Weekly automated backups", 
        "Priority email & phone support (24hr)", 
        "Performance optimization",
        "Content updates (2 hours/month)",
        "Monthly analytics reports", 
        "Plugin & CMS updates",
        "Security scans"
      ] 
    },
    { 
      title: "Dedicated Partner", 
      price: "$90", 
      recurring: "/month",
      desc: "Your complete tech support team.", 
      featured: false, 
      gradient: "from-blue-500 to-cyan-600",
      features: [
        "Everything in Priority Care",
        "Daily backups with redundancy",
        "Dedicated support manager", 
        "24/7 emergency monitoring",
        "Proactive issue prevention",
        "Content updates (5 hours/month)", 
        "Custom development hours included",
        "Quarterly strategy reviews"
      ] 
    },
  ],
};

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("websites");
  const currentPricing = pricingData[activeTab];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-green)]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <Animate>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text)] tracking-tight">
              Clear & Honest Pricing
            </h2>
          </Animate>
          <Animate delay={100}>
            <p className="mt-6 text-xl text-[var(--color-muted)] max-w-3xl mx-auto">
              One-time project fees (except support plans) — no hidden costs, no surprises. Built for Zimbabwean school budgets.
            </p>
          </Animate>
        </div>
    
        {/* Enhanced Tabs with Icons */}
        <Animate delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-16 md:mb-20">
            {pricingTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-base lg:text-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1
                  ${activeTab === tab.id
                    ? "bg-gradient-to-r from-[var(--color-green)] to-[var(--color-green)]/80 text-white scale-105"
                    : "bg-white text-[var(--color-text)] hover:bg-gray-50 border-2 border-gray-200"
                  }
                `}
              >
                {/* Icon */}
                <FontAwesomeIcon 
                  icon={tab.icon} 
                  className={`text-xl transition-transform ${activeTab === tab.id ? "text-white scale-110" : "text-[var(--color-green)]"}`}
                />
                <span className="hidden sm:inline">{tab.label}</span>
    
                {/* Active indicator glow */}
                {activeTab === tab.id && (
                  <span className="absolute inset-0 rounded-2xl ring-4 ring-[var(--color-green)]/30 animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </Animate>
    
        {/* Animated Pricing Cards Container */}
        <div className="relative">
          <Animate key={activeTab} delay={0}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {currentPricing.map((plan, i) => (
                <Animate key={plan.title} delay={(i + 1) * 100}>
                  <div className="group relative h-full">
                    {/* Animated gradient glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 ${plan.featured ? 'scale-105' : ''}`}></div>
                    
                    {/* Main card */}
                    <div
                      className={`relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full transform group-hover:-translate-y-2 ${
                        plan.featured
                          ? "border-4 border-[var(--color-gold)] ring-4 ring-[var(--color-gold)]/20 scale-105"
                          : "border-2 border-gray-200"
                      }`}
                    >
                      {/* Featured badge */}
                      {plan.featured && (
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gradient-to-r from-[var(--color-gold)] to-yellow-500 text-[var(--color-text)] px-6 py-2 rounded-full text-sm font-bold shadow-xl">
                          <FontAwesomeIcon icon={faStar} className="text-white" />
                          Most Popular
                        </div>
                      )}
    
                      {/* Gradient corner accent */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-all duration-500`}></div>
    
                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-text)] mb-4">{plan.title}</h3>
                      
                      {/* Price */}
                      <div className="mb-6">
                        <span className={`text-5xl lg:text-6xl font-extrabold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                          {plan.price}
                        </span>
                        {plan.recurring && (
                          <span className="text-lg text-[var(--color-muted)]">{plan.recurring}</span>
                        )}
                        {!plan.recurring && activeTab !== "support" && (
                          <span className="block text-sm text-[var(--color-muted)] mt-2">One-time project fee</span>
                        )}
                      </div>
    
                      {/* Description */}
                      <p className="text-[var(--color-muted)] text-base lg:text-lg mb-8 min-h-[60px]">{plan.desc}</p>
    
                      {/* Divider with gradient */}
                      <div className={`h-1 w-full bg-gradient-to-r ${plan.gradient} rounded-full mb-8 opacity-20`}></div>
    
                      {/* Features list */}
                      <ul className="space-y-4 mb-10 flex-grow">
                        {plan.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start group/item">
                            <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 shadow-md`}>
                              <FontAwesomeIcon icon={faCheckCircle} className="text-white text-sm" />
                            </div>
                            <span className="text-[var(--color-text)] text-base leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
    
                      {/* CTA Button */}
                      <Link
                        href="/contact"
                        className={`mt-auto py-4 px-8 text-center rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-2xl transform hover:scale-105 bg-gradient-to-r ${plan.gradient} text-white`}
                      >
                        {activeTab === "support" ? "Subscribe Now" : "Start Project"}
                      </Link>
    
                      {/* Bottom glow effect */}
                      <div className={`absolute -bottom-16 -right-16 w-40 h-40 bg-gradient-to-br ${plan.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}></div>
                    </div>
                  </div>
                </Animate>
              ))}
            </div>
          </Animate>
        </div>

        {/* Additional info */}
        <Animate delay={400}>
          <div className="mt-16 text-center">
            <p className="text-[var(--color-muted)] text-lg mb-6">
              All prices are in USD. Custom requirements? We'll work with your budget.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 text-[var(--color-green)] font-semibold text-lg hover:gap-3 transition-all"
            >
              Need a custom quote? Contact us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Animate>
      </div>
    </section>
  );
}