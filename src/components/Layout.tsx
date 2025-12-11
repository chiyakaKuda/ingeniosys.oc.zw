import Image from "next/image";
import Link from "next/link";
import React from "react";
import ResponsiveNav from "@/components/ResponsiveNav";

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

      <footer className="border-t border-slate-200 bg-light">
        <div className="mx-auto flex w-[95vw] max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-slate-700 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <span>&copy; {year} Ingenio Systems. All rights reserved.</span>
          <span className="text-muted">Built for modern, inclusive web experiences.</span>
        </div>
      </footer>
    </div>
  );
}

