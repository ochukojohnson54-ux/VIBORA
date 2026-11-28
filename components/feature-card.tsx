import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

export function FeatureCard({ title, description, href, icon: Icon, tag }: {
  title: string; description: string; href: string; icon: LucideIcon; tag?: string;
}) {
  return <Link href={href} className="card group block p-5 transition hover:-translate-y-1 hover:border-violet-400/40">
    <div className="mb-5 flex items-center justify-between">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-500/15 text-violet-300"><Icon size={22}/></span>
      {tag && <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-200">{tag}</span>}
      <ArrowUpRight className="text-zinc-500 transition group-hover:text-violet-300" size={18}/>
    </div>
    <h3 className="mb-2 font-semibold">{title}</h3>
    <p className="text-sm leading-6 text-zinc-400">{description}</p>
  </Link>;
}
