'use client';
import React, { useState } from "react";
import { Mail, MapPin, Send, MessageCircle } from "lucide-react";

const LinkedinIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "hiralthummar07@gmail.com",
    href: "mailto:hiralthummar07@gmail.com",
    color: "#3b82f6",
  },
  {
    icon: <LinkedinIcon />,
    label: "LinkedIn",
    value: "linkedin.com/in/hiral-thummar",
    href: "https://linkedin.com/in/hiral-thummar-585643297/",
    color: "#0A66C2",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Gujarat, India 🇮🇳",
    href: null,
    color: "#10b981",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const nameRef    = React.useRef<HTMLInputElement>(null);
  const emailRef   = React.useRef<HTMLInputElement>(null);
  const subjectRef = React.useRef<HTMLInputElement>(null);
  const msgRef     = React.useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    nameRef.current?.value,
          email:   emailRef.current?.value,
          subject: subjectRef.current?.value,
          message: msgRef.current?.value,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send.');
      setStatus('sent');
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-28 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="absolute top-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-emerald-600/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in animate-delay-100">
          <p className="section-label mb-3">Contact</p>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Let&apos;s <span className="text-gradient">Work Together</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            I&apos;m currently open to freelance projects, full-time roles, and exciting collaborations. Got an idea? Let&apos;s build it! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left column — contact info */}
          <div className="lg:col-span-2 space-y-6 opacity-0 animate-fade-in-left animate-delay-200">

            <div className="glass-card gradient-border p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Get in Touch</h3>
                  <p className="text-gray-500 text-sm">I reply within 24 hours</p>
                </div>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="group">
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors shrink-0"
                          style={{ background: `${info.color}15`, color: info.color }}>
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">{info.label}</p>
                          <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-3 rounded-xl">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 shrink-0"
                          style={{ background: `${info.color}15`, color: info.color }}>
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">{info.label}</p>
                          <p className="text-gray-300 text-sm font-medium">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Availability status */}
            <div className="glass-card p-5 flex items-center gap-4">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-emerald-400" />
                <div className="absolute inset-0 rounded-full bg-emerald-400/50 animate-ping" />
              </div>
              <div>
                <p className="text-white font-semibold">Available Now</p>
                <p className="text-gray-500 text-sm">Open to full-time & freelance opportunities</p>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-3 opacity-0 animate-fade-in-right animate-delay-300">
            <div className="glass-card gradient-border p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Send className="w-5 h-5 text-blue-400" />
                Send a Message
              </h3>

              {status === 'sent' ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🎉</div>
                  <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400">Thanks for reaching out! I&apos;ll get back to you within 24 hours. Check your inbox for a confirmation email too.</p>
                  <button onClick={() => setStatus('idle')} className="mt-6 px-6 py-2 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:text-white hover:bg-white/15 transition-all text-sm">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        ref={nameRef}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 transition-all text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        ref={emailRef}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 transition-all text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      ref={subjectRef}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 transition-all text-sm"
                      placeholder="Project Inquiry / Collaboration / Job Opportunity"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Message</label>
                    <textarea
                      id="message"
                      ref={msgRef}
                      rows={5}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 transition-all resize-none text-sm"
                      placeholder="Tell me about your project, timeline, and what you're looking for..."
                    />
                  </div>

                  {/* Error message */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                      <span>⚠️</span> {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full btn-shimmer text-white font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
