import { Zap } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "AI-CFO Analytics Dashboard",
    description: "Enterprise data analytics platform generating automated yearly/monthly business intelligence reports. Integrated Claude AI agent for deep data analysis, natural language querying, and insight generation. Built interactive dashboards for Budget vs Actual, Revenue summary, and Operational KPIs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tech: ["React.js", "Node.js", "Claude AI", "MongoDB", "Chart.js", "REST APIs"],
    live: "#",
    badge: "AI-Powered",
    badgeColor: "violet",
    highlights: ["Claude AI integration", "Dynamic report generation", "Real-time KPI dashboards"],
  },
  {
    title: "Deardabba – Food Delivery",
    description: "Scalable food delivery backend system similar to Zomato. Implemented multi-role architecture (Admin, Restaurant, Rider, Customer), real-time order tracking via Socket.io, Razorpay payment gateway integration, OTP verification, and complex relational schemas using Sequelize ORM.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    tech: ["Node.js", "Express.js", "MySQL", "Sequelize", "Razorpay", "Socket.io", "JWT"],
    live: "#",
    badge: "Full Stack",
    badgeColor: "blue",
    highlights: ["Multi-role RBAC", "Real-time order tracking", "Payment gateway"],
  },
  {
    title: "Jor Shor – Music Platform",
    description: "Spotify-inspired music streaming backend. Features include song management, playlist CRUD, social mood-based posts, user following system, and streaming URL management. Built with a clean modular NestJS architecture using TypeORM and PostgreSQL.",
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=800",
    tech: ["NestJS", "TypeORM", "PostgreSQL", "TypeScript", "JWT", "Multer"],
    live: "#",
    badge: "Backend",
    badgeColor: "emerald",
    highlights: ["Modular NestJS architecture", "Streaming management", "Social features"],
  },
  {
    title: "Royalty Report System",
    description: "Full-stack music royalty management and financial reporting platform. Automated royalty calculation engine, revenue breakdown by song/artist, data visualization dashboards, and exportable financial reports. Built with React.js frontend and NestJS backend.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tech: ["React.js", "NestJS", "MongoDB", "Mongoose", "Chart.js", "TypeScript"],
    live: "#",
    badge: "Full Stack",
    badgeColor: "blue",
    highlights: ["Automated royalty engine", "Financial visualization", "Report export"],
  },
  {
    title: "Temple Booking Platform",
    description: "Online temple service management backend with role-based access for Admin, Priest, and Devotees. Features include ticket booking, live darshan scheduling, recorded video delivery, puja booking, donation processing, and Razorpay payment integration.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/An_aerial_view_of_Madurai_city_from_atop_of_Meenakshi_Amman_temple.jpg/960px-An_aerial_view_of_Madurai_city_from_atop_of_Meenakshi_Amman_temple.jpg",
    tech: ["Node.js", "Express.js", "MySQL", "JWT", "Razorpay", "REST APIs"],
    live: "#",
    badge: "Backend",
    badgeColor: "emerald",
    highlights: ["Live darshan scheduling", "Role-based access", "Secure payments"],
  },
  {
    title: "Blue Collar Service App",
    description: "Workforce marketplace backend connecting service providers with customers. Features include service listings, availability scheduling, provider-customer interaction modules, wallet & transaction systems, real-time notifications via Firebase FCM, and reviews/ratings.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800",
    tech: ["Node.js", "MySQL", "Sequelize", "Firebase FCM", "JWT", "REST APIs"],
    live: "#",
    badge: "Marketplace",
    badgeColor: "orange",
    highlights: ["Wallet system", "Firebase notifications", "Scheduling engine"],
  },
];

const badgeColors: Record<string, string> = {
  violet: "bg-violet-500/15 border-violet-500/30 text-violet-400",
  blue: "bg-blue-500/15 border-blue-500/30 text-blue-400",
  emerald: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
  orange: "bg-orange-500/15 border-orange-500/30 text-orange-400",
};

export default function Projects() {

  return (
    <section id="projects" className="py-28 px-6 sm:px-12 lg:px-24 relative overflow-hidden bg-white/[0.01]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute top-[30%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-600/8 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in animate-delay-100">
          <p className="section-label mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto">A selection of real-world products I&apos;ve built — from food delivery systems to AI-powered dashboards.</p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden flex flex-col opacity-0 animate-fade-in group relative"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden border-b border-white/10 shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#040408] via-transparent to-transparent z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${badgeColors[project.badgeColor]}`}>
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col z-10">
                <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-blue-300 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5">
                  {project.highlights.map(h => (
                    <div key={h} className="flex items-center gap-2 text-xs text-gray-500">
                      <Zap className="w-3 h-3 text-yellow-400 shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="code-chip px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-blue-300 text-xs font-medium hover:border-blue-500/40 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
