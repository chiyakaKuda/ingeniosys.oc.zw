import Image from "next/image";
import Layout from "@/components/Layout";

export default function HomeExperience() {
  return (
    <Layout>
      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="group relative mb-16 flex min-h-screen flex-col overflow-hidden full-bleed bg-[var(--hero-dark)] text-[var(--hero-text)]"
      >
        <div className="absolute inset-0 hero-image-layer">
          <Image
            src="/hero-whatsapp.jpg"
            alt="Customer chatting with an Ingenio Systems AI assistant on WhatsApp"
            fill
            priority
            sizes="100vw"
            className="hero-cinematic-image object-cover object-[72%_46%]"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,16,12,0.96)_0%,rgba(4,16,12,0.86)_38%,rgba(4,16,12,0.38)_68%,rgba(4,16,12,0.58)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(0deg,var(--hero-dark)_0%,rgba(4,16,12,0)_100%)]" />
      </section>
    </Layout>
  );
}
