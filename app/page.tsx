import Link from "next/link";
import { ArrowRight, WandSparkles, Video, Image as ImageIcon, Clapperboard, Palette, Music2, Users, Sparkles, ShieldCheck } from "lucide-react";
import { Brand } from "@/components/brand";
import { FeatureCard } from "@/components/feature-card";

export default function Home() {
  return <main className="shell">
    <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
      <Brand/><nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
        <a href="#studios">Studios</a><a href="#community">Community</a><a href="#plans">Plans</a>
      </nav>
      <div className="flex gap-2"><Link className="btn-secondary" href="/login">Log in</Link><Link className="btn-primary" href="/signup">Get started <ArrowRight size={16}/></Link></div>
    </header>

    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:pb-28 lg:pt-24">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-semibold text-violet-200"><Sparkles size={14}/> YOUR ALL-IN-ONE CREATIVE UNIVERSE</div>
        <h1 className="max-w-3xl font-[Space_Grotesk] text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">Imagine it.<br/><span className="gradient-text">Create it.</span><br/>Share it.</h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400">One destination for AI images, videos, cinematic storytelling, design and entertainment. Bring your ideas to life with VIBORA.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Link href="/signup" className="btn-primary">Start creating <ArrowRight size={17}/></Link><Link href="/dashboard" className="btn-secondary">Explore workspace</Link></div>
        <div className="mt-10 flex flex-wrap gap-5 text-xs text-zinc-500"><span className="flex items-center gap-2"><ShieldCheck size={15}/> Your creative workspace</span><span className="flex items-center gap-2"><WandSparkles size={15}/> Multiple creative studios</span></div>
      </div>
      <div className="relative">
        <div className="absolute -inset-5 rounded-[35px] bg-violet-600/15 blur-3xl"/>
        <div className="glass relative overflow-hidden rounded-3xl p-5 shadow-2xl shadow-violet-950/40">
          <div className="mb-5 flex items-center justify-between"><div><p className="text-xs text-zinc-500">VIBORA WORKSPACE</p><h2 className="mt-1 text-lg font-semibold">Your next big idea starts here</h2></div><span className="rounded-lg bg-violet-500/15 p-2 text-violet-300"><WandSparkles/></span></div>
          <div className="grid grid-cols-2 gap-3">
            {[["Image Studio","Create stunning visuals","▧"],["Video Lab","Turn ideas into motion","▶"],["Movie Studio","Build cinematic stories","▣"],["Design Lab","Posters, flyers and more","✳"]].map(([t,d,i])=><div key={t} className="rounded-2xl border border-white/10 bg-white/[.035] p-4"><div className="mb-7 text-2xl text-violet-300">{i}</div><h3 className="text-sm font-semibold">{t}</h3><p className="mt-1 text-xs text-zinc-500">{d}</p></div>)}
          </div>
          <div className="mt-3 rounded-2xl border border-violet-400/20 bg-violet-500/[.08] p-4"><div className="flex items-center gap-2 text-sm font-semibold"><Sparkles size={16} className="text-violet-300"/> VIBORA AI Assistant</div><p className="mt-2 text-xs leading-5 text-zinc-400">Describe your idea and get help choosing a creative direction.</p></div>
        </div>
      </div>
    </section>

    <section id="studios" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-bold tracking-[.2em] text-violet-300">CREATE WITHOUT LIMITS</p><h2 className="mt-3 text-3xl font-bold">Explore the studios</h2><p className="mt-2 text-sm text-zinc-400">A dedicated space for every kind of creativity.</p></div><Link href="/dashboard" className="text-sm text-violet-300">Open workspace →</Link></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard title="AI Image Studio" description="Create original images from text prompts and visual ideas." href="/studio/image" icon={ImageIcon} tag="Create"/>
        <FeatureCard title="AI Video Lab" description="Plan text-to-video and image-to-video creations." href="/studio/video" icon={Video} tag="Create"/>
        <FeatureCard title="Movie Studio" description="Organize stories, scenes, characters and production notes." href="/studio/movie" icon={Clapperboard}/>
        <FeatureCard title="Design Lab" description="Plan posters, thumbnails, flyers and brand graphics." href="/studio/design" icon={Palette}/>
        <FeatureCard title="Music & Audio" description="Organize sound ideas, voiceovers and music projects." href="/studio/audio" icon={Music2}/>
        <FeatureCard title="Creator Community" description="Discover creator work and share your own productions." href="/community" icon={Users}/>
      </div>
    </section>

    <section id="community" className="mx-auto max-w-7xl px-5 py-12 lg:px-8"><div className="card flex flex-col justify-between gap-6 p-8 md:flex-row md:items-center"><div><p className="text-xs font-bold tracking-[.2em] text-violet-300">MORE THAN A TOOL</p><h2 className="mt-3 text-2xl font-bold">Create, connect and get discovered.</h2><p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">VIBORA brings creative tools and entertainment discovery into one growing community.</p></div><Link href="/signup" className="btn-primary shrink-0">Join VIBORA <ArrowRight size={16}/></Link></div></section>
    <section id="plans" className="mx-auto max-w-7xl px-5 py-12 lg:px-8"><h2 className="text-2xl font-bold">Start free. Grow when you're ready.</h2><p className="mt-2 text-sm text-zinc-400">Membership and paid credits will be activated after payment integration is configured.</p><div className="mt-6 grid gap-4 md:grid-cols-2"><div className="card p-6"><h3 className="font-semibold">Free</h3><p className="mt-2 text-3xl font-bold">₦0</p><p className="mt-2 text-sm text-zinc-400">Explore the platform and manage creative projects.</p></div><div className="card border-violet-400/40 p-6"><h3 className="font-semibold">VIBORA Plus</h3><p className="mt-2 text-3xl font-bold">Flexible</p><p className="mt-2 text-sm text-zinc-400">Expanded usage and premium tools, once subscriptions are connected.</p></div></div></section>
    <footer className="border-t border-white/10 px-5 py-8 text-center text-xs text-zinc-500">© {new Date().getFullYear()} VIBORA. Where creators and entertainment meet.</footer>
  </main>;
}
