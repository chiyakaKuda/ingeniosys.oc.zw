import Image from "next/image";
import Link from "next/link";
import React from "react";
import ResponsiveNav from "@/components/ResponsiveNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Head from "next/head"; // Add this import

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
      <Head>
        {/* Tidio Live Chat Script – Replace YOUR_TIDIO_PUBLIC_KEY with your actual key */}
        <script src="//code.tidio.co/f4jaytrnoukf8wfyhtisg4snaacq5z93.js" async></script>
      </Head>

      <div className="flex min-h-screen flex-col bg-[var(--color-white)] text-slate-900">
        <header className="border-b border-slate-200 bg-light">
          <div className="relative mx-auto flex w-[95vw] max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
            <Link href="/" className="flex items-center gap-3 font-semibold text-slate-900">
              <Image
                src="/logo.png"
                alt="Ingenio Systems logo"
                width={56}
                height={56}
                className="h-14 w-14 p-0 object-contain"
                priority
              />
              <span className="text-lg font-bold text-[var(--color-text)]"> Ingenio Systems </span>
            </Link>
            <ResponsiveNav items={navigation} />
          </div>
        </header>

        <main className="flex-1">
          <div className="mx-auto w-[95vw] max-w-7xl px-4 pb-12 pt-0 sm:px-6 sm:pb-14 sm:pt-0 lg:px-10">
            {children}
          </div>
        </main>

        <footer className="bg-gradient-to-br from-[var(--color-green-light)]/30 to-white text-[var(--color-text-light)] -mt-1">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              <div className="flex flex-col items-start">
                {/* Logo + Brand Name */}
                <div className="flex items-center gap-4 mb-6">
                  <Link href="/">
                    <img
                      src="/logo.png"
                      alt="Ingenio Systems Logo"
                      className="h-12 w-auto"
                    />
                  </Link>
                  <h4 className="text-2xl font-bold drop-shadow-md">Ingenio Systems</h4>
                </div>
                <p className="text-[var(--color-text-muted)] mb-4 leading-relaxed">
                  Building modern, inclusive digital experiences for schools and businesses.
                </p>
                <p className="text-[var(--color-text-muted)] text-sm">
                  © {year} Ingenio Systems. All rights reserved.
                </p>
              </div>

              {/* RIGHT SIDE – Quick Links */}
              <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
                {/* Company */}
                <div>
                  <h5 className="text-lg font-semibold mb-4 drop-shadow-sm">Company</h5>
                  <ul className="space-y-3">
                    <li><Link href="/about" className="hover:text-[var(--color-green)] hover:underline transition-all">About Us</Link></li>
                    <li><Link href="/services" className="hover:text-[var(--color-green)] hover:underline transition-all">Services</Link></li>
                    <li><Link href="/contact" className="hover:text-[var(--color-green)] hover:underline transition-all">Contact</Link></li>
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h5 className="text-lg font-semibold mb-4 drop-shadow-sm">Resources</h5>
                  <ul className="space-y-3">
                    <li><Link href="/blog" className="hover:text-[var(--color-green)] hover:underline transition-all">Blog</Link></li>
                    <li><Link href="/projects" className="hover:text-[var(--color-green)] hover:underline transition-all">Projects</Link></li>
                    <li><Link href="/careers" className="hover:text-[var(--color-green)] hover:underline transition-all">Careers</Link></li>
                  </ul>
                </div>

                {/* Connect */}
                <div>
                  <h5 className="text-lg font-semibold mb-4 drop-shadow-sm">Connect</h5>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <a href="https://www.linkedin.com/company/ingenio-systems" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[var(--color-green)] transition-all">
                        <FontAwesomeIcon icon={faLinkedin} className="mr-3 text-xl" />
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/ingeniosystems" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[var(--color-green)] transition-all">
                        <FontAwesomeIcon icon={faTwitter} className="mr-3 text-xl" />
                        Twitter / X
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/ingeniosystems" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[var(--color-green)] transition-all">
                        <FontAwesomeIcon icon={faFacebook} className="mr-3 text-xl" />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="mailto:support@ingeniosystems.co.zw" className="flex items-center hover:text-[var(--color-green)] transition-all">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-xl" />
                        Email Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}