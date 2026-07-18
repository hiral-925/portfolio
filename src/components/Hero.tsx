'use client';
import { ArrowRight, Mail, Download, Code2, Layers, Server, Database } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = [
  'MERN Stack Developer',
  'Node.js Backend Specialist',
  'NestJS Expert',
  'Full Stack Engineer',
  'API Architect',
];

const stats = [
  { value: '1+', label: 'Years Experience', icon: '🚀' },
  { value: '10+', label: 'Projects Delivered', icon: '📦' },
  { value: '5+', label: 'Tech Stacks', icon: '⚡' },
  { value: '∞', label: 'Lines of Code', icon: '💻' },
];

const floatingTags = [
  { label: 'NestJS',     x: '76%', y: '10%', delay: '0s',   color: '#E0234E' },
  { label: 'MongoDB',    x: '82%', y: '24%', delay: '0.5s', color: '#47A248' },
  { label: 'Node.js',    x: '74%', y: '38%', delay: '1.0s', color: '#339933' },
  { label: 'React.js',   x: '82%', y: '52%', delay: '1.5s', color: '#61DAFB' },
  { label: 'TypeScript', x: '74%', y: '66%', delay: '0.3s', color: '#3178C6' },
  { label: 'Next.js',    x: '80%', y: '80%', delay: '0.8s', color: '#ffffff' },
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      }, 65);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      }, 35);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 sm:px-12 lg:px-24 pt-24">

      {/* ── Background blobs ── */}
      <div className="absolute top-[-15%] left-[-10%] w-[55%] h-[55%] rounded-full bg-blue-600/15 blur-[140px] pointer-events-none animate-float" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-violet-600/15 blur-[130px] pointer-events-none animate-float" style={{ animationDuration: '11s', animationDelay: '2s' }} />
      <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] rounded-full bg-emerald-600/10 blur-[100px] pointer-events-none animate-float" style={{ animationDuration: '14s', animationDelay: '1s' }} />

      {/* ── Floating tech tags (desktop) ── */}
      {floatingTags.map((tag) => (
        <div
          key={tag.label}
          className="absolute hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold animate-float pointer-events-none z-0"
          style={{ left: tag.x, top: tag.y, animationDelay: tag.delay, animationDuration: '5s', color: tag.color, borderColor: `${tag.color}40` }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: tag.color }} />
          {tag.label}
        </div>
      ))}

      {/* ── Grid overlay ── */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* ── Main content ── */}
      <div className="z-10 max-w-5xl relative">

        {/* Badge */}
        <div className="opacity-0 animate-fade-in animate-delay-100 mb-6 inline-flex items-center gap-2">
          <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for hire
          </span>
        </div>

        {/* Greeting */}
        <p className="opacity-0 animate-fade-in animate-delay-200 text-gray-400 font-medium mb-3 text-lg">
          Hi there 👋, I&apos;m
        </p>

        {/* Name */}
        <h1 className="opacity-0 animate-fade-in animate-delay-300 text-6xl md:text-8xl font-extrabold tracking-tight mb-4 leading-[1.05]">
          <span className="animate-gradient-text">Hiral</span>{' '}
          <span className="text-white">Thummar</span>
        </h1>

        {/* Typewriter role */}
        <h2 className="opacity-0 animate-fade-in animate-delay-400 text-2xl md:text-4xl font-bold text-gray-200 mb-6 h-12 flex items-center">
          <span className="text-blue-400">&lt;</span>
          <span className="mx-2 text-gradient">{displayed}</span>
          <span className="text-blue-400 animate-[blink_0.9s_step-end_infinite]">|</span>
          <span className="text-blue-400">/&gt;</span>
        </h2>

        {/* Description */}
        <p className="opacity-0 animate-fade-in animate-delay-500 text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
          I specialize in <span className="text-green-400 font-bold">Node.js</span> &amp; <span className="text-red-400 font-bold">NestJS</span> backend development — building <span className="text-blue-300 font-semibold">scalable REST APIs</span>, <span className="text-violet-300 font-semibold">microservice architectures</span>, and <span className="text-emerald-300 font-semibold">complex database systems</span>. Also skilled in React &amp; Next.js for full-stack delivery.
        </p>

        {/* Tech icons row */}
        <div className="opacity-0 animate-fade-in animate-delay-600 flex items-center gap-3 mb-10 flex-wrap">
          {[
            { icon: <Server className="w-4 h-4" />, label: 'Node.js',  color: '#339933' },
            { icon: <Code2  className="w-4 h-4" />, label: 'NestJS',   color: '#E0234E' },
            { icon: <Database className="w-4 h-4" />, label: 'MongoDB', color: '#47A248' },
            { icon: <Layers className="w-4 h-4" />, label: 'Next.js',  color: '#fff' },
          ].map(t => (
            <span key={t.label} className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-sm font-medium code-chip" style={{ color: t.color }}>
              {t.icon} {t.label}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="opacity-0 animate-fade-in animate-delay-700 flex flex-wrap gap-4 items-center mb-16">
          <a href="#projects" className="group btn-shimmer flex items-center gap-2 text-white px-7 py-3.5 rounded-full font-semibold shadow-lg">
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform animate-bounce-x" />
          </a>
          <a href="#contact" className="group flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-white/20 hover:border-blue-500/60 hover:bg-white/5 transition-all duration-300 text-white">
            <Mail className="w-4 h-4 text-blue-400" />
            Let's Talk
          </a>

          <a href="https://linkedin.com/in/hiral-thummar-585643297/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/40 transition-all">
            <svg className="w-5 h-5 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
        </div>

        {/* Stats row */}
        <div className="opacity-0 animate-fade-in animate-delay-800 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
          {stats.map((s, i) => (
            <div key={s.label} className={`glass-card p-4 text-center opacity-0 animate-scale-in`} style={{ animationDelay: `${800 + i * 100}ms` }}>
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-2xl font-extrabold text-gradient">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in animate-delay-1000">
        <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-blue-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
