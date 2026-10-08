import { MapPin, Phone, Mail, ShieldCheck, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800/80 pt-16 pb-12 mt-20 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand & Trust */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-white tracking-wide">Oyebade Ayomide Adeleke</span>
          </div>
          <p className="text-gray-400 leading-relaxed text-xs">
            Professional Frontend & Full-Stack Web Developer. Trained at Larva Tech Academy, New Bodija, Ibadan. Dedicated to building immaculate, high-performance web solutions with top-tier security and responsiveness.
          </p>
          <div className="flex items-center gap-2 text-emerald-400 font-medium text-xs bg-emerald-950/40 border border-emerald-500/30 px-3 py-2 rounded-lg w-fit">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Open to freelance work and internships
          </div>
        </div>

        {/* Academy & Location */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-base tracking-wider uppercase">Training & Location</h4>
          <div className="space-y-3 text-gray-300">
            <p className="font-medium text-indigo-300">Larva Tech Academy</p>
            <p className="flex items-start gap-2 text-xs leading-relaxed">
              <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              5 Akinsehinwa Street, off Favos Bus stop, beside Adis hotel, New Bodija, Ibadan 200212, Oyo State, Nigeria.
            </p>
            <div className="pt-2 space-y-1 text-xs text-gray-400">
              <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-indigo-400" /> +234 816 248 7439 / +234 807 627 4297</p>
              <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-indigo-400" /> ayomideoyebade884@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Connect & Socials */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-base tracking-wider uppercase">Connect & Socials</h4>
          <div className="flex flex-wrap gap-2 text-xs">
            <a href="https://wa.me/2348162487439" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg bg-gray-900 border border-gray-800 hover:border-indigo-500 text-gray-300 hover:text-white transition-all">
              WhatsApp (+2348162487439)
            </a>
            <a href="https://snapchat.com/add/shinigam.i" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg bg-gray-900 border border-gray-800 hover:border-indigo-500 text-gray-300 hover:text-white transition-all">
              Snapchat (@shinigam.i)
            </a>
            <a href="https://tiktok.com/@h.o.l.l.y_g.h.o.s.t" target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg bg-gray-900 border border-gray-800 hover:border-indigo-500 text-gray-300 hover:text-white transition-all">
              TikTok (@h.o.l.l.y_g.h.o.s.t)
            </a>
            <a href="mailto:ayomideoyebade884@gmail.com" className="px-3 py-2 rounded-lg bg-gray-900 border border-gray-800 hover:border-indigo-500 text-gray-300 hover:text-white transition-all">
              Gmail
            </a>
          </div>
          <p className="text-xs text-gray-500 pt-2">
            Available for remote contracts, freelance development, and full-stack engineering roles.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-900 py-6 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Oyebade Ayomide Adeleke. All rights reserved. Built with React.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}