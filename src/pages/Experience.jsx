import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Professional Experience</h1>
        <p className="text-gray-400 text-lg">
          1 to 2 years of practical experience building responsive web apps.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 relative">
        {/* Experience Item 1 */}
        <div className="glass-card p-8 rounded-3xl border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600"></div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-800">
            <div>
              <h3 className="text-2xl font-bold text-white">Frontend & Full-Stack Developer(In training)</h3>
              <p className="text-indigo-400 font-medium">Freelance & Personal Ventures</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-800 w-fit">
              <Calendar className="w-4 h-4 text-indigo-400" /> 2024 – Present (1–2 Years)
            </div>
          </div>

          <div className="pt-6 space-y-4 text-gray-300">
            <p className="leading-relaxed">
              Designed and deployed multiple fully functional production web applications on Vercel, including the Stockroom E-Commerce store, tech conference landing pages, and interactive coding bootcamp academies.
            </p>
            <div className="space-y-2 text-sm pt-2">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Developed responsive user interfaces using HTML, CSS, TailwindCSS, and React.js.</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Implemented state management, interactive cart drawers, product filters, and client-side routing.</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Integrated secure contact channels, WhatsApp connectivity, and dynamic data rendering.</div>
            </div>
          </div>
        </div>

        {/* Experience Item 2 */}
        <div className="glass-card p-8 rounded-3xl border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-purple-600"></div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-800">
            <div>
              <h3 className="text-2xl font-bold text-white">Web Development Trainee</h3>
              <p className="text-purple-400 font-medium">Larva Tech Academy, Ibadan</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-800 w-fit">
              <MapPin className="w-4 h-4 text-purple-400" /> New Bodija, Ibadan
            </div>
          </div>

          <div className="pt-6 space-y-4 text-gray-300">
            <p className="leading-relaxed">
              Underwent rigorous professional training at 5 Akinsehinwa Street, New Bodija, Ibadan, mastering core frontend architectures and transitioning into full-stack backend development.
            </p>
            <div className="space-y-2 text-sm pt-2">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Built complex grid layouts and responsive web components.</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Practiced industry-standard debugging and git version control workflows.</div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="glass-card p-8 rounded-3xl border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-800">
            <div>
              <h3 className="text-2xl font-bold text-white">Computer Science and Education</h3>
              <p className="text-emerald-400 font-medium">Osun State University, Ipetu-Ijesa campus</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-800 w-fit">
              <MapPin className="w-4 h-4 text-emerald-400" /> Ipetu-Ijesa, Osun State
            </div>
          </div>
          <p className="pt-6 text-gray-300 leading-relaxed">Computer Science and Education undergraduate, studying alongside my web development work. I have completed both my SIWES placements (SIWES I and II), applying what I learn in class to real projects.</p>
        </div>
      </div>
    </div>
  );
}