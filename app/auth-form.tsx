"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Brand } from "@/components/brand";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const [email,setEmail] = useState(""); const [password,setPassword] = useState("");
  const [name,setName] = useState(""); const [message,setMessage] = useState(""); const [busy,setBusy] = useState(false);
  const router = useRouter();
  async function submit(e: React.FormEvent) {
    e.preventDefault(); setBusy(true); setMessage("");
    try {
      const supabase = createClient();
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({ email, password, options: { data: { full_name: name } } });
        if (error) throw error;
        setMessage("Account request received. Check your email to confirm your account, then log in.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.push("/dashboard"); router.refresh();
      }
    } catch (err) { setMessage(err instanceof Error ? err.message : "Something went wrong."); }
    finally { setBusy(false); }
  }
  return <main className="shell grid min-h-screen place-items-center px-5 py-10"><div className="w-full max-w-md"><div className="mb-8 flex justify-center"><Brand/></div><div className="card p-7 sm:p-9"><p className="text-xs font-bold tracking-[.2em] text-violet-300">WELCOME TO VIBORA</p><h1 className="mt-3 text-3xl font-bold">{mode === "login" ? "Welcome back" : "Create your account"}</h1><p className="mt-2 text-sm text-zinc-400">{mode === "login" ? "Sign in to continue to your creative workspace." : "Join the creative universe and start building."}</p>
  <form onSubmit={submit} className="mt-7 space-y-4">{mode === "signup" && <label className="block text-sm">Full name<input className="field mt-2" value={name} onChange={e=>setName(e.target.value)} required autoComplete="name"/></label>}<label className="block text-sm">Email address<input className="field mt-2" type="email" value={email} onChange={e=>setEmail(e.target.value)} required autoComplete="email"/></label><label className="block text-sm">Password<input className="field mt-2" type="password" minLength={8} value={password} onChange={e=>setPassword(e.target.value)} required autoComplete={mode==="login"?"current-password":"new-password"}/></label><button disabled={busy} className="btn-primary w-full disabled:opacity-50">{busy ? "Please wait…" : mode==="login" ? "Log in" : "Create account"}</button></form>
  {message && <p role="status" className="mt-4 rounded-xl border border-violet-400/20 bg-violet-400/10 p-3 text-sm text-violet-100">{message}</p>}
  <p className="mt-6 text-center text-sm text-zinc-400">{mode==="login" ? "New to VIBORA? " : "Already have an account? "}<Link className="font-semibold text-violet-300" href={mode==="login"?"/signup":"/login"}>{mode==="login"?"Create an account":"Log in"}</Link></p></div><p className="mt-6 text-center text-xs text-zinc-600">By continuing, you agree to use VIBORA responsibly.</p></div></main>;
}
