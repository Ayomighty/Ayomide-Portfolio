import { MapPin, GraduationCap, ShieldCheck, Phone, Mail, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">About Me</h1>
        <p className="text-gray-400 text-lg">
          Get to know Oyebade Ayomide Adeleke. Background, training academy, and professional philosophy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-card p-8 rounded-3xl border border-gray-800 space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-indigo-400" /> Professional Background
            </h3>
            <p className="text-gray-300 leading-relaxed">
              My name is <strong className="text-white">Oyebade Ayomide Adeleke</strong>. I am a dedicated frontend web developer(Backend in training) with 1 to 2 years of intensive coding experience. 
            </p>
            <p className="text-gray-300 leading-relaxed">
              I completed my professional tech training at <strong className="text-white">Larva Tech Academy</strong>, located at <span className="text-indigo-300">5 Akinsehinwa Street, off Favos Bus stop, beside Adis hotel, New Bodija, Ibadan 200212, Oyo State</span>. This rigorous training grounded me in modern web architecture, clean code principles, and advanced JavaScript frameworks.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I am also a Computer Science and Education student at Osun State University, Ipetu-Ijesa campus. Currently, I am in the final stages of my advanced backend training, allowing me to architect seamless full-stack applications from database design to responsive frontend interfaces.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-gray-800 space-y-4">
            <h4 className="text-xl font-bold text-white">Contact</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-900/50 border border-gray-800">
                <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500">Primary Phone / WhatsApp</p>
                  <p className="font-semibold text-white">+234 816 248 7439</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-900/50 border border-gray-800">
                <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500">Alternative Phone</p>
                  <p className="font-semibold text-white">+234 807 627 4297</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-900/50 border border-gray-800 sm:col-span-2">
                <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500">Email Address</p>
                  <p className="font-semibold text-white">ayomideoyebade884@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academy & Credential Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/20 blur-2xl" />
            <img src="/images/about.webp" alt="Oyebade Ayomide Adeleke in a striped shirt" width="900" height="1200" loading="lazy" className="relative rounded-3xl w-full aspect-[4/5] object-cover object-top border border-white/10" />
            <img src="/images/about-alt.webp" alt="Ayomide in traditional wear at his desk" width="600" height="600" loading="lazy" className="absolute -bottom-5 -right-3 w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-[#07070d] shadow-2xl" />
          </div>
          <div className="glass-card p-8 rounded-3xl border border-indigo-500/30 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-2xl"></div>
            
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Larva Tech Academy</h4>
                <p className="text-xs text-indigo-400">Training academy</p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-gray-300 border-t border-gray-800 pt-4">
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>5 Akinsehinwa Street, off Favos Bus stop, beside Adis hotel, New Bodija, Ibadan 200212, Oyo State.</span>
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Core Training Modules</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-4 h-4 text-emerald-400" /> Advanced HTML5 & CSS3 Semantics</div>
                <div className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-4 h-4 text-emerald-400" /> TailwindCSS & Responsive Design</div>
                <div className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-4 h-4 text-emerald-400" /> Modern JavaScript (ES6+ & DOM)</div>
                <div className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-4 h-4 text-emerald-400" /> React.js Component Architecture</div>
                <div className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-4 h-4 text-emerald-400" /> Backend Development & APIs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}