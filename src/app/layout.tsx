import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ingenio Systems",
  description:
    "Ingenio Systems is an innovative technology company powered by INGENIO GREEN, building AI-driven ERP systems, healthcare bots, school platforms, websites, and green manufacturing solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
