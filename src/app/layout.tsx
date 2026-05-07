import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
  display: "swap",
});

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
      <body className={`${raleway.className} ${raleway.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
