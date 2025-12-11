import Layout from "@/components/Layout";
import Animate from "@/components/Animate";

const services = [
  {
    title: "Web Development Services",
    description:
      "Custom platforms that help schools operate efficiently and engage students and parents.",
    items: [
      "Professional school websites and full-stack web apps",
      "Student portals and secure results management systems",
      "WhatsApp and chatbot integrations for parent-teacher comms",
      "Performance, security, and ease-of-use baked in",
    ],
  },
  {
    title: "Tech Training & Workshops",
    description:
      "Hands-on sessions that build digital confidence for teachers, students, and admins.",
    items: [
      "Google Classroom mastery workshops",
      "Technology literacy for school environments",
      "Programs tailored to bridge the country’s tech gap",
      "Practical, remote-friendly delivery",
    ],
  },
  {
    title: "Why Choose Us",
    description:
      "Small team, direct access, and pricing designed for educational budgets.",
    items: [
      "Personalized service from the founders—no middle layers",
      "Agile delivery with clear communication",
      "Local impact focus on education challenges",
      "Modern, lightweight stacks for reliability and speed",
    ],
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      <section className="flex flex-col gap-10">
        <Animate className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Our Services
          </span>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Solutions built for education, designed for impact
          </h1>
          <p className="max-w-3xl text-lg text-slate-700">
            We craft affordable, high-impact technology for schools and
            institutions, pairing modern web builds with practical training that
            closes the digital divide.
          </p>
        </Animate>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <Animate key={service.title} delay={index * 80}>
              <article className="accent-card p-6 sm:p-7 h-full">
                <h2 className="text-2xl font-semibold text-slate-900">
                  {service.title}
                </h2>
                <p className="mt-2 text-slate-700">{service.description}</p>
                <ul className="mt-4 space-y-2 text-slate-700">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="mt-1 h-2 w-2 rounded-full"
                        style={{ backgroundColor: "var(--color-gold)" }}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Animate>
          ))}
        </div>
      </section>
    </Layout>
  );
}

