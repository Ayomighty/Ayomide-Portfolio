import ProjectPreview from '../components/ProjectPreview';
import { ExternalLink, ShoppingBag, Calendar, GraduationCap, Sparkles } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Stockroom E-Commerce Web App",
      category: "Full-Featured E-Commerce Store",
      description: "An exquisite e-commerce web application featuring product catalogs across Beauty, Fragrances, Furniture, and Home Decor, search filters, interactive cart drawer, user login/demo mode, and secure checkout workflows.",
      link: "https://e-commerce-tau-seven-93.vercel.app/",
      slug: "stockroom",
      kind: "shop",
      icon: <ShoppingBag className="w-6 h-6 text-emerald-400" />,
      tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
    },
    {
      title: "Styles Conference (Chicago Edition)",
      category: "Tech Conference Landing Page",
      description: "An immaculate, production-ready tech conference landing page featuring event schedules, speaker lineups, venue details, countdown timers, and registration modals.",
      link: "https://chicago-lyart.vercel.app/",
      slug: "styles-conference",
      kind: "conference",
      icon: <Calendar className="w-6 h-6 text-indigo-400" />,
      tagColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
    },
    {
      title: "El_tech Academy Full-Stack Bootcamp",
      category: "EdTech Learning Platform",
      description: "An immersive coding bootcamp and learning platform featuring 12 comprehensive modules, interactive code labs, student dashboards, and gamified badge tracking.",
      link: "https://bootcamp-livid-two.vercel.app/",
      slug: "el-tech-academy",
      kind: "bootcamp",
      icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
      tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/30"
    },
    {
      title: "Refined Twinzlove Products Storefront",
      category: "Retail Web Store",
      description: "Specialized skincare retail web deployment featuring curated product displays, location details in Ibadan, and customer support channels.",
      link: "https://twinzlove-ochre.vercel.app/",
      slug: "twinzlove",
      kind: "skincare",
      icon: <Sparkles className="w-6 h-6 text-pink-400" />,
      tagColor: "bg-pink-500/10 text-pink-400 border-pink-500/30"
    },
    {
      title: "Twinzlove Products Prototype",
      category: "Retail Web Store",
      description: "I felt like i should add this. This is twinz love prototype. This is what it looked like prior to refinement",
      link: "https://twinz-love.vercel.app/",
      slug: "twinzlove",
      kind: "skincare",
      icon: <Sparkles className="w-6 h-6 text-pink-400" />,
      tagColor: "bg-pink-500/10 text-pink-400 border-pink-500/30"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Featured Projects</h1>
        <p className="text-gray-400 text-lg">
          Explore my live production deployments. Click any project card to launch the live Vercel application in a new tab.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={project.slug} className="glass-card p-6 sm:p-8 rounded-3xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-6">
              <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`} className="block group-hover:scale-[1.02] transition-transform duration-500">
                <ProjectPreview slug={project.slug} kind={project.kind} url={project.link} />
              </a>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center">
                  {project.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${project.tagColor}`}>
                  {project.category}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800/80 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-mono">Frontend demo</span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-2"
              >
                Launch Live App <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}