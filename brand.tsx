import Link from "next/link";
import { Orbit } from "lucide-react";

export function Brand({ small = false }: { small?: boolean }) {
  return <Link href="/" className="flex items-center gap-2 font-bold tracking-[.18em]">
    <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-600/20 text-violet-300"><Orbit size={21}/></span>
    <span className={small ? "text-lg" : "text-xl"}>VIBORA</span>
  </Link>;
}