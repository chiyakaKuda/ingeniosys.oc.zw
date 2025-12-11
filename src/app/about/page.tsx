import Layout from "@/components/Layout";
import Animate from "@/components/Animate";

export default function AboutPage() {
  return (
    <Layout>
      <section className="flex flex-col gap-10">
        <Animate className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            About Ingenio Systems
          </span>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Small team. Big impact on education.
          </h1>
        </Animate>

        <Animate className="space-y-4 text-lg text-slate-700 leading-relaxed">
          <p>
            Ingenio Systems is a lean, remote-first startup focused on closing
            the digital divide for schools and institutions. We build modern web
            experiences and deliver practical training that meet real classroom
            needs—without the overhead or complexity.
          </p>
          <p>
            <strong>Mission:</strong> Provide accessible, high-quality web
            development and tech training that help educational institutions
            thrive in the modern digital landscape.
          </p>
          <p>
            <strong>Vision:</strong> A future where every school and student has
            reliable, modern tools and the skills to use them effectively,
            creating equal opportunities and innovation nationwide.
          </p>
        </Animate>

        <div className="grid gap-6 sm:grid-cols-2">
          <Animate className="accent-card p-6 sm:p-7" delay={60}>
            <h2 className="text-xl font-semibold text-slate-900">Core Values</h2>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>Accessibility: simple, affordable solutions for real needs.</li>
              <li>Impact-driven: measurable gains in literacy and efficiency.</li>
              <li>Agility: fast, personalized service from a small team.</li>
              <li>Innovation with purpose: lightweight, sustainable tech.</li>
              <li>Education first: technology that serves teachers and students.</li>
            </ul>
          </Animate>

          <Animate className="accent-card p-6 sm:p-7" delay={120}>
            <h2 className="text-xl font-semibold text-slate-900">Team</h2>
            <p className="mt-2 text-slate-700">
              A compact, highly skilled remote team of two:
            </p>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>CEO: strategy, client relationships, and training delivery.</li>
              <li>Lead full-stack developer: architecture, implementation, and technical training.</li>
            </ul>
            <p className="mt-3 text-slate-700">
              Our size keeps us close to clients and lets us ship quickly with
              quality.
            </p>
          </Animate>
        </div>
      </section>
    </Layout>
  );
}

