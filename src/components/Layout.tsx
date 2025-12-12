import Image from "next/image";
import Link from "next/link";
import React from "react";
import ResponsiveNav from "@/components/ResponsiveNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
            <span className="text-lg">Ingenio Systems</span>
          </Link>
          <ResponsiveNav items={navigation} />
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto w-[95vw] max-w-7xl px-4 pb-12 pt-0 sm:px-6 sm:pb-14 sm:pt-0 lg:px-10">
          {children}
        </div>
      </main>

      <footer className="footer-wrapper">
  <div className="footer-content">
    
    {/* LEFT SIDE */}
    <div className="footer-left">
      <h4 className="footer-brand">Ingenio Systems</h4>
      <p className="footer-tagline">
        Building modern, inclusive digital experiences for schools and businesses.
      </p>
      <p className="footer-copy">© {year} Ingenio Systems. All rights reserved.</p>
    </div>

    {/* RIGHT SIDE — QUICK LINKS */}
    <div className="footer-links">
      <div>
        <h5 className="footer-heading">Company</h5>
        <ul>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h5 className="footer-heading">Resources</h5>
        <ul>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/careers">Careers</Link></li>
        </ul>
      </div>

      <div>
  <h5 className="footer-heading">Connect</h5>
  <ul className="flex flex-col gap-2">
    <li>
      <a href="#">
        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
        LinkedIn
      </a>
    </li>
    <li>
      <a href="#">
        <FontAwesomeIcon icon={faTwitter} className="mr-2" />
        Twitter / X
      </a>
    </li>
    <li>
      <a href="#">
        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
        Email Support
      </a>
    </li>
  </ul>
</div>

    </div>

  </div>
</footer>

    </div>
  );
}

