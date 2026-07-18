'use client';
import { Briefcase, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "Engineers Hut",
    duration: "Aug 2024 – Present",
    type: "Full-Time",
    location: "India (Remote)",
    color: "#3b82f6",
    responsibilities: [
      "Designed and developed scalable backend services using Node.js & Express.js, handling 10,000+ requests/day.",
      "Implemented secure authentication flows including JWT, role-based access control (RBAC), and two-factor authentication (2FA).",
      "Integrated Firebase Cloud Messaging (FCM) for push notifications across web and mobile platforms.",
      "Integrated Razorpay payment gateway for seamless and secure online transactions.",
      "Designed complex relational schemas in MySQL and PostgreSQL using Sequelize and Prisma ORMs.",
      "Built and optimized MongoDB collections with Mongoose for NoSQL data management.",
      "Developed reusable, accessible React.js component libraries following atomic design principles.",
      "Collaborated with cross-functional teams (designers, PMs) using Agile/Scrum methodology.",
      "Implemented Redis caching strategies that reduced average API response time by ~40%.",
      "Delivered features for 4+ client-facing products including food delivery, music streaming, and analytics platforms.",
    ],
    tech: ["Node.js", "Express.js", "React.js", "Next.js", "NestJS", "MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase", "Razorpay", "TypeScript"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in animate-delay-100">
          <p className="section-label mb-3">Career</p>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 flex items-center justify-center gap-4">
            <Briefcase className="w-10 h-10 text-blue-500 animate-float" style={{ animationDuration: '4s' }} />
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative flex gap-8 md:gap-0 mb-12 opacity-0 animate-fade-in animate-delay-200">

              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-8 z-10">
                <div className="w-5 h-5 rounded-full bg-blue-500 border-4 border-[#040408] animate-pulse-glow" />
                <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" style={{ animationDuration: '2s' }} />
              </div>

              {/* Card — full width on mobile, left-offset on desktop */}
              <div className="ml-14 md:ml-0 md:w-[calc(50%-2rem)] md:ml-auto glass-card gradient-border p-8 hover:-translate-y-2 transition-transform duration-300">

                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-2xl font-extrabold text-white">{exp.role}</h3>
                    <div className="text-blue-400 font-semibold text-lg mt-1">{exp.company}</div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                      {exp.type}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-400">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                  <span>📍</span> {exp.location}
                </div>

                {/* Responsibilities */}
                <div className="space-y-3 mb-6">
                  {exp.responsibilities.map((r, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0 group-hover:text-emerald-400 transition-colors" />
                      <p className="text-gray-400 text-sm leading-relaxed">{r}</p>
                    </div>
                  ))}
                </div>

                {/* Tech stack chips */}
                <div className="border-t border-white/10 pt-5">
                  <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span key={t} className="code-chip px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* "Future" node */}
          <div className="relative flex justify-start md:justify-center opacity-0 animate-fade-in animate-delay-600">
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-3 z-10">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-emerald-500 border-4 border-[#040408]" />
            </div>
            <div className="ml-14 md:ml-0 px-6 py-3 rounded-xl bg-white/3 border border-dashed border-white/20 text-gray-500 text-sm italic">
              🌟 Open to exciting new opportunities — let&apos;s build something amazing!
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
