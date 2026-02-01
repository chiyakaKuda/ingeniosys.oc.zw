import Image from "next/image";
import Link from "next/link";
import React from "react";
import ResponsiveNav from "@/components/ResponsiveNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ChatWidget from "@/components/ChatWidget";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="flex min-h-screen flex-col bg-[var(--color-white)] text-slate-900">
        {/* Enhanced Header/Navbar */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
          <div className="relative mx-auto flex w-[95vw] max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Ingenio Systems logo"
                width={56}
                height={56}
                className="h-14 w-14 object-contain transition-transform group-hover:scale-105"
                priority
              />
              <span className="text-lg font-bold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-green)]">
                Ingenio Systems
              </span>
            </Link>
            <ResponsiveNav items={navigation} />
          </div>
        </header>

        <main className="flex-1">
          <div className="mx-auto w-[95vw] max-w-7xl px-4 pb-12 pt-0 sm:px-6 sm:pb-14 sm:pt-0 lg:px-10">
            {children}
          </div>
        </main>

        {/* Improved Footer */}
        <footer className="bg-gradient-to-br from-[var(--color-green-light)]/30 to-white text-[var(--color-text-light)] border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {/* Brand Section */}
              <div className="flex flex-col items-start md:col-span-1">
                <div className="flex items-center gap-4 mb-6">
                  <Link href="/" className="group">
                    <img
                      src="/logo.png"
                      alt="Ingenio Systems Logo"
                      className="h-12 w-auto transition-transform group-hover:scale-105"
                    />
                  </Link>
                  <h4 className="text-2xl font-bold text-[var(--color-text)]">
                    Ingenio Systems
                  </h4>
                </div>
                <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">
                  Building modern, inclusive digital experiences for schools and businesses.
                </p>
                <p className="text-[var(--color-text-muted)] text-sm">
                  © {year} Ingenio Systems. All rights reserved.
                </p>
              </div>

              {/* Quick Links Section */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
                {/* Company */}
                <div>
                  <h5 className="text-lg font-semibold mb-4 text-[var(--color-text)]">
                    Company
                  </h5>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        href="/about" 
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-green)] hover:underline transition-all inline-block"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/services" 
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-green)] hover:underline transition-all inline-block"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact" 
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-green)] hover:underline transition-all inline-block"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Connect */}
                <div>
                  <h5 className="text-lg font-semibold mb-4 text-[var(--color-text)]">
                    Connect
                  </h5>
                  <ul className="space-y-3">
                    <li>
                      <a 
                        href="https://www.linkedin.com/company/ingenio-systems" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-green)] transition-all group"
                      >
                        <FontAwesomeIcon 
                          icon={faLinkedin} 
                          className="mr-3 text-xl group-hover:scale-110 transition-transform" 
                        />
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://twitter.com/ingeniosystems" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-green)] transition-all group"
                      >
                        <FontAwesomeIcon 
                          icon={faTwitter} 
                          className="mr-3 text-xl group-hover:scale-110 transition-transform" 
                        />
                        Twitter / X
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.facebook.com/ingeniosystems" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-green)] transition-all group"
                      >
                        <FontAwesomeIcon 
                          icon={faFacebook} 
                          className="mr-3 text-xl group-hover:scale-110 transition-transform" 
                        />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a 
                        href="mailto:support@ingeniosystems.co.zw" 
                        className="flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-green)] transition-all group"
                      >
                        <FontAwesomeIcon 
                          icon={faEnvelope} 
                          className="mr-3 text-xl group-hover:scale-110 transition-transform" 
                        />
                        Email Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <ChatWidget />
      </div>
    </>
  );
}