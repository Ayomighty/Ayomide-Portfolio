import { Layout, Server, Wrench } from 'lucide-react';

const groups = [
  { title: 'Frontend', icon: Layout, tone: 'text-indigo-300 bg-indigo-500/15 border-indigo-400/30', items: [['React.js', 'Strong'], ['JavaScript (ES6+)', 'Strong'], ['Tailwind CSS', 'Strong'], ['HTML5 and CSS3', 'Strong'], ['React Router', 'Strong'], ['Framer Motion', 'Working']] },
  { title: 'Backend (in training)', icon: Server, tone: 'text-fuchsia-300 bg-fuchsia-500/15 border-fuchsia-400/30', items: [['Node.js and Express', 'Learning'], ['REST APIs', 'Learning'], ['Databases', 'Learning'], ['Authentication', 'Learning']] },
  { title: 'Tools', icon: Wrench, tone: 'text-emerald-300 bg-emerald-500/15 border-emerald-400/30', items: [['Git and GitHub', 'Strong'], ['Vercel deployment', 'Strong'], ['VS Code and DevTools', 'Strong'], ['Responsive design', 'Strong']] },
];
const dot = { Strong: 'bg-emerald-400', Working: 'bg-amber-300', Learning: 'bg-sky-400' };

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">What I work with</h1>
        <p className="text-gray-400 text-lg">Levels are my own honest read: strong means I ship with it, learning means I'm still building projects with it.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {groups.map(({ title, icon: Icon, tone, items }) => (
          <section key={title} className="glass-card rounded-3xl p-8 space-y-6">
            <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${tone}`}><Icon className="w-6 h-6" /></div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <ul className="space-y-3">
              {items.map(([name, level]) => (
                <li key={name} className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3 text-sm hover:bg-white/[0.07] transition-colors">
                  <span className="text-gray-200 font-medium">{name}</span>
                  <span className="flex items-center gap-2 text-xs text-gray-400"><i className={`w-2 h-2 rounded-full ${dot[level]}`} />{level}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
