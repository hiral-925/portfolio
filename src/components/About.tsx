'use client';
import { SiReact, SiNextdotjs, SiNodedotjs, SiNestjs, SiExpress, SiTypescript, SiRedux, SiMongodb, SiMysql, SiPostgresql, SiPrisma, SiSocketdotio, SiRedis, SiFirebase, SiRazorpay, SiSequelize, SiJavascript, SiDocker } from "react-icons/si";
import { useState } from "react";

const skills = [
  { name: "React.js", Icon: SiReact, color: "#61DAFB", level: 90, category: "Frontend" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff", level: 85, category: "Frontend" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", level: 85, category: "Frontend" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", level: 92, category: "Frontend" },
  { name: "Redux", Icon: SiRedux, color: "#764ABC", level: 80, category: "Frontend" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933", level: 88, category: "Backend" },
  { name: "Express.js", Icon: SiExpress, color: "#ffffff", level: 88, category: "Backend" },
  { name: "NestJS", Icon: SiNestjs, color: "#E0234E", level: 80, category: "Backend" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248", level: 85, category: "Database" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1", level: 82, category: "Database" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1", level: 78, category: "Database" },
  { name: "Prisma", Icon: SiPrisma, color: "#ffffff", level: 75, category: "Database" },
  { name: "Sequelize", Icon: SiSequelize, color: "#52B0E7", level: 78, category: "Database" },
  { name: "Redis", Icon: SiRedis, color: "#DC382D", level: 72, category: "DevOps" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED", level: 65, category: "DevOps" },
  { name: "Socket.io", Icon: SiSocketdotio, color: "#ffffff", level: 78, category: "Backend" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28", level: 80, category: "Backend" },
  { name: "Razorpay", Icon: SiRazorpay, color: "#3395FF", level: 82, category: "Backend" },
];

const categories = ["All", "Frontend", "Backend", "Database", "DevOps"];

const highlights = [
  { icon: "🔧", title: "API Architecture", desc: "Designed 20+ RESTful APIs with role-based access control, JWT auth, 2FA, and rate limiting." },
  { icon: "🧱", title: "Database Mastery", desc: "Expert in MongoDB, MySQL, PostgreSQL schema design, query optimization, and ORM usage (Mongoose, Prisma, TypeORM)." },
  { icon: "⚡", title: "Performance Focus", desc: "Implemented Redis caching, lazy loading, and code splitting to achieve sub-200ms API response times." },
  { icon: "🎨", title: "Clean UI Components", desc: "Built 50+ reusable React/Next.js components following atomic design principles for scalable frontends." },
];

export default function About() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? skills : skills.filter(s => s.category === activeCategory);

  return (
    <section id="about" className="py-28 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] rounded-full bg-violet-600/8 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-20 opacity-0 animate-fade-in animate-delay-100">
          <p className="section-label mb-3">Who I Am</p>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mb-8" />
        </div>

        {/* ── Bio + Highlights ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Bio text */}
          <div className="opacity-0 animate-fade-in-left animate-delay-200 space-y-6">
            <div className="glass-card gradient-border p-8">
              <h3 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
                <span className="text-3xl">👨‍💻</span> My Story
              </h3>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I&apos;m <span className="text-white font-semibold">Hiral Thummar</span>, a passionate MERN Stack Developer currently building enterprise-grade products at <span className="text-blue-400 font-semibold">Engineers Hut</span>. I graduated with a BCA from <span className="text-emerald-400 font-medium">Bhakta Kavi Narsinh Mehta University</span> in 2024.
                </p>
                <p>
                  My journey started with a deep curiosity for how the web works — from the browser all the way to the database. Today I architect <span className="text-violet-300 font-medium">scalable REST APIs</span>, design <span className="text-blue-300 font-medium">complex multi-database schemas</span>, and craft <span className="text-emerald-300 font-medium">performant React UIs</span> that power real-world applications.
                </p>
                <p>
                  I believe great software is built on three pillars: <span className="text-white font-medium">clean architecture</span>, <span className="text-white font-medium">rigorous testing</span>, and <span className="text-white font-medium">empathy for the end user</span>. I write code that future developers will thank you for.
                </p>
                <p>
                  When I&apos;m not coding, I&apos;m exploring new backend patterns, contributing to open-source, or leveling up my system design knowledge.
                </p>
              </div>
            </div>

            {/* Education card */}
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-xl shrink-0">🎓</div>
              <div>
                <div className="text-white font-bold text-lg">Bachelor of Computer Applications</div>
                <div className="text-blue-400 font-medium">Bhakta Kavi Narsinh Mehta University</div>
                <div className="text-gray-500 text-sm mt-1">Graduated 2024 · Junagadh, Gujarat</div>
              </div>
            </div>

            {/* What I do chips */}
            <div className="flex flex-wrap gap-2">
              {['REST API Design', 'Microservices', 'Auth Systems', 'Database Design', 'Real-time Apps', 'Payment Integration', 'Data Visualization', 'Performance Tuning'].map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-blue-500/40 hover:text-blue-300 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights grid */}
          <div className="opacity-0 animate-fade-in-right animate-delay-300 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div key={h.title} className={`glass-card gradient-border p-6 flex flex-col gap-3 opacity-0 animate-scale-in hover:-translate-y-2 transition-transform duration-300`} style={{ animationDelay: `${300 + i * 100}ms` }}>
                <span className="text-4xl">{h.icon}</span>
                <h4 className="text-white font-bold text-lg">{h.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Skills section ── */}
        <div className="opacity-0 animate-fade-in animate-delay-400">
          <div className="text-center mb-10">
            <p className="section-label mb-2">My Arsenal</p>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">Technical Skills</h3>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filtered.map((skill, i) => (
              <div
                key={skill.name}
                className="skill-card glass-card p-4 flex flex-col items-center gap-3 cursor-default transition-all duration-300 group"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <skill.Icon className="w-9 h-9 transition-transform duration-300 group-hover:scale-125" style={{ color: skill.color }} />
                <span className="font-semibold text-gray-300 text-sm tracking-wide text-center leading-tight">{skill.name}</span>
                {/* Progress bar */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bar-fill"
                    style={{
                      '--fill-width': `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}90, ${skill.color})`,
                    } as React.CSSProperties}
                  />
                </div>
                <span className="text-xs text-gray-600">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
