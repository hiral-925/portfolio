'use client';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // Determine active section
      const sections = ['about', 'experience', 'projects', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          return;
        }
      }
      setActive('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">

      {/* ── Navbar ── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#040408]/90 backdrop-blur-xl border-b border-white/8 py-3 shadow-xl shadow-black/30' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">

          {/* Logo */}
          <a href="#" className="flex items-center group" onClick={() => setMenuOpen(false)}>
            <img
              src="/images/logo/hiralthummar.png"
              alt="Hiral Thummar"
              className="h-10 md:h-12 w-auto object-contain transition-all group-hover:opacity-80"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === link.href.slice(1)
                    ? 'text-white bg-white/10 border border-white/15'
                    : 'text-gray-400 hover:text-white hover:bg-white/8'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 btn-shimmer px-6 py-2 rounded-full text-sm font-bold text-white shadow-lg"
            >
              Hire Me 🚀
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(m => !m)}
            aria-label="Toggle menu"
          >
            <div className={`w-5 flex flex-col gap-1.5 transition-all`}>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-64' : 'max-h-0'}`}>
          <div className="px-6 py-4 space-y-2 border-t border-white/8 bg-[#040408]/95 backdrop-blur-xl">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/8 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block btn-shimmer text-white text-center font-bold py-2.5 rounded-xl text-sm mt-2"
            >
              Hire Me 🚀
            </a>
          </div>
        </div>
      </nav>

      {/* ── Page sections ── */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* ── Footer ── */}
      <footer className="py-10 border-t border-white/8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-600">
            © {new Date().getFullYear()} <span className="text-gray-400 font-medium">Hiral Thummar</span>. Built with Next.js & ❤️
          </p>
          <div className="flex items-center gap-3 text-gray-600">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for hire
            </span>
            <span>·</span>
            <a href="mailto:hiralthummar07@gmail.com" className="hover:text-blue-400 transition-colors">
              hiralthummar07@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
