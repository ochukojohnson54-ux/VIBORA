import Link from "next/link";
import { Brand } from "@/components/brand";
import { Home, Image, Video, Clapperboard, Palette, Music2, Users, Settings, LogOut, UserRound } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

const links = [
  ["/dashboard","Dashboard",Home],["/studio/image","Image Studio",Image],["/studio/video","Video Lab",Video],
  ["/studio/movie","Movie Studio",Clapperboard],["/studio/design","Design Lab",Palette],
  ["/studio/audio","Music & Audio",Music2],["/community","Community",Users],["/profile","My Profile",UserRound],["/settings","Settings",Settings]
] as const;

export async function AppShell({ children }: { children: React.ReactNode }) {
  let email = "Guest workspace"; let signedIn = false;
  try { const supabase = await createClient(); const {data} = await supabase.auth.getUser(); if(data.user){email=data.user.email ?? "VIBORA creator";signedIn=true;} } catch {}
  return <div className="shell min-h-screen md:flex"><aside className="hidden w-64 shrink-0 border-r border-white/10 bg-[#0c0c16] p-5 md:flex md:flex-col"><Brand/><p className="mb-3 mt-10 px-3 text-[10px] font-bold tracking-[.2em] text-zinc-600">WORKSPACE</p><nav className="space-y-1">{links.map(([href,label,Icon])=><Link key={href} href={href} className="sidebar-link"><Icon size={17}/>{label}</Link>)}</nav><div className="mt-auto rounded-xl border border-white/10 p-3"><p className="truncate text-xs font-semibold">{email}</p><p className="mt-1 text-[10px] text-zinc-500">{signedIn?"VIBORA creator account":"Preview mode"}</p><form action="/auth/signout" method="post"><button className="mt-3 flex items-center gap-2 text-xs text-zinc-400"><LogOut size={14}/> Sign out</button></form></div></aside><div className="min-w-0 flex-1"><header className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-8"><div className="md:hidden"><Brand small/></div><p className="hidden text-sm text-zinc-400 md:block">Your creative universe</p><div className="flex items-center gap-3"><span className="hidden max-w-48 truncate text-xs text-zinc-400 sm:block">{email}</span><Link href="/profile" className="grid h-9 w-9 place-items-center rounded-full bg-violet-500/20 text-sm font-bold text-violet-200">V</Link></div></header><main className="mx-auto max-w-6xl p-5 pb-24 md:p-8">{children}</main><nav className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-5 border-t border-white/10 bg-[#0b0b14]/95 px-1 py-2 backdrop-blur md:hidden">{links.slice(0,5).map(([href,label,Icon])=><Link key={href} href={href} className="flex flex-col items-center gap-1 py-1 text-[10px] text-zinc-400"><Icon size={18}/>{label.replace(" Studio","")}</Link>)}</nav></div></div>;
}