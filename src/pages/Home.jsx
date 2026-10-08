import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectPreview from '../components/ProjectPreview';
import { ArrowRight, Code, Award, Cpu, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-24 py-10">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-600/15 border border-indigo-500/30 text-indigo-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-4 h-4" /> Frontend developer, backend in training
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
            Websites and stores that load fast, look sharp, and work on every phone.
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
            Hello, I am <strong className="text-white">Oyebade Ayomide Adeleke</strong>. A professional web developer with 1 to 2 years of hands-on experience building lightning-fast React applications, e-commerce stores, Custom Websites and Web Apps, and responsive web platforms. Trained at Larva Tech Academy in New Bodija, Ibadan.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/projects"
              className="px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 transition-all flex items-center gap-2 group"
            >
              Explore My Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-xl font-semibold text-gray-300 glass-card hover:text-white hover:border-gray-600 transition-all"
            >
              Get in Touch
            </Link>
          </div>

          <div className="pt-6 grid grid-cols-3 gap-6 border-t border-gray-800 text-gray-400 text-sm">
            <div>
              <p className="text-2xl font-bold text-white">1–2+</p>
              <p className="text-xs">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">4+</p>
              <p className="text-xs">Live deployments</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">Node.js</p>
              <p className="text-xs">Backend in training</p>
            </div>
          </div>
        </motion.div>

        {/* Hero portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 relative max-w-md mx-auto w-full"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500/40 via-fuchsia-500/20 to-amber-300/30 blur-2xl" />
          <div className="relative rounded-[2rem] p-1.5 bg-gradient-to-br from-white/30 via-white/5 to-indigo-400/40">
            <img
              src="/images/hero.webp"
              alt="Oyebade Ayomide Adeleke at his desk with code open on the monitor"
              width="1000" height="1000" fetchPriority="high"
              className="rounded-[1.7rem] w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="glass-card absolute -top-4 right-2 sm:-right-6 rounded-full px-4 py-2 text-xs flex items-center gap-2 shadow-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            Available for freelance
          </div>
          <div className="glass-card absolute -bottom-6 left-2 sm:-left-8 rounded-2xl px-4 py-3 font-mono text-xs text-gray-200 shadow-2xl">
            <span className="text-purple-400">const</span> stack = [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Node"</span>];
          </div>
        </motion.div>
      </section>

            {/* Tech marquee */}
      <div className="overflow-hidden border-y border-white/5 py-5" aria-hidden="true">
        <div className="marquee flex w-max gap-12 animate-marquee text-2xl font-bold text-white/25">
          {[...Array(2)].flatMap((_, k) => ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express', 'Vercel', 'Git', 'Framer Motion'].map((s) => <span key={s + k}>{s}</span>))}
        </div>
      </div>

      {/* Selected work */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10 gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected work</h2>
          <Link to="/projects" className="text-sm text-indigo-300 hover:text-white transition-colors flex items-center gap-1">All projects <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            ['stockroom', 'shop', 'https://e-commerce-tau-seven-93.vercel.app/', 'Stockroom store'],
            ['styles-conference', 'conference', 'https://chicago-lyart.vercel.app/', 'Styles Conference'],
            ['el-tech-academy', 'bootcamp', 'https://bootcamp-livid-two.vercel.app/', 'El_tech Academy'],
          ].map(([slug, kind, url, name]) => (
            <a key={slug} href={url} target="_blank" rel="noopener noreferrer" className="group space-y-4 block">
              <div className="group-hover:-translate-y-2 transition-transform duration-500"><ProjectPreview slug={slug} kind={kind} url={url} /></div>
              <p className="text-white font-semibold group-hover:text-indigo-300 transition-colors">{name}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Highlights / Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-white">Why Work With Me?</h2>
          <p className="text-gray-400">
            Backed by rigorous training at Larva Tech Academy and real-world project deployments, I deliver secure, scalable, and visually breathtaking web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mb-6">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Modern React & UI</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Specialized in crafting dynamic component hierarchies, responsive layouts using Tailwind CSS, and buttery-smooth user interactions.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Full-Stack Capability</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Equipped with frontend mastery and advanced backend training (Node.js, Express, Databases) to build end-to-end web applications.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Larva Tech Trained</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trained at Larva Tech Academy in New Bodija, Ibadan, adhering to strict coding standards, performance audits, and security best practices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}