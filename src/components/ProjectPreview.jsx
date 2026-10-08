const Bar = ({ w = 'w-full', c = 'bg-white/20', h = 'h-1.5' }) => <div className={`${h} ${w} ${c} rounded-full`} />;

const mocks = {
  shop: (
    <div className="grid grid-cols-3 gap-2 p-3">
      {['from-rose-400 to-orange-300', 'from-sky-400 to-indigo-400', 'from-emerald-400 to-teal-300', 'from-amber-300 to-yellow-200', 'from-fuchsia-400 to-pink-300', 'from-violet-400 to-purple-300'].map((g, i) => (
        <div key={i} className="space-y-1.5">
          <div className={`aspect-square rounded-lg bg-gradient-to-br ${g}`} />
          <Bar w="w-3/4" /><Bar w="w-1/3" c="bg-emerald-400/70" />
        </div>
      ))}
    </div>
  ),
  conference: (
    <div className="p-4 space-y-3">
      <Bar w="w-2/3" h="h-3" c="bg-indigo-300/70" /><Bar w="w-1/2" h="h-3" c="bg-indigo-300/40" />
      <div className="grid grid-cols-4 gap-2 pt-2">
        {['12', '08', '45', '30'].map((n) => (
          <div key={n} className="rounded-lg bg-indigo-500/20 border border-indigo-400/30 py-2 text-center text-sm font-bold text-indigo-200">{n}</div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 pt-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400" /><Bar w="w-12" /></div>
        ))}
      </div>
    </div>
  ),
  bootcamp: (
    <div className="flex h-full">
      <div className="w-1/4 p-2 space-y-2 border-r border-white/10 bg-white/5">
        {[0, 1, 2, 3, 4, 5].map((i) => <Bar key={i} w={i % 2 ? 'w-3/4' : 'w-full'} />)}
      </div>
      <div className="flex-1 p-3 space-y-2.5">
        {[['w-1/3', 'bg-purple-400/70'], ['w-2/3', 'bg-emerald-300/60'], ['w-1/2', 'bg-amber-300/60'], ['w-3/4', 'bg-sky-300/60'], ['w-1/4', 'bg-purple-400/70'], ['w-3/5', 'bg-emerald-300/60']].map(([w, c], i) => (
          <div key={i} className={i % 3 === 1 ? 'pl-4' : ''}><Bar w={w} c={c} /></div>
        ))}
      </div>
    </div>
  ),
  skincare: (
    <div className="flex h-full items-center gap-4 p-4 bg-gradient-to-br from-pink-500/20 to-rose-300/10">
      <div className="w-2/5 aspect-[3/4] rounded-[40%] bg-gradient-to-br from-pink-300 to-rose-400 shadow-xl" />
      <div className="flex-1 space-y-2">
        <Bar h="h-3" w="w-3/4" c="bg-pink-200/70" /><Bar /><Bar w="w-2/3" />
        <div className="mt-3 h-6 w-20 rounded-full bg-pink-400" />
      </div>
    </div>
  ),
};

export default function ProjectPreview({ slug, kind, url }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0c0c14] shadow-2xl">
      <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border-b border-white/10">
        <span className="flex gap-1.5"><i className="w-2 h-2 rounded-full bg-red-400/80" /><i className="w-2 h-2 rounded-full bg-yellow-400/80" /><i className="w-2 h-2 rounded-full bg-emerald-400/80" /></span>
        <span className="mx-auto text-[10px] text-gray-400 truncate">{url.replace('https://', '').replace(/\/$/, '')}</span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        {mocks[kind]}
        {/* Real screenshot overrides the mock when public/projects/<slug>.png exists */}
        <img
          src={`/projects/${slug}.png`} alt={`Screenshot of ${slug}`} loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
          className="absolute inset-0 w-full h-full object-cover object-top bg-[#0c0c14]"
        />
      </div>
    </div>
  );
}
