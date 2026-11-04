import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#090A0D] text-[#F5F5F7] flex flex-col items-center justify-center p-6 text-center">
      <div className="p-4 rounded-2xl bg-[#191C23] border border-white/10 mb-6">
        <ShieldAlert className="w-8 h-8 text-[#C43D4D]" />
      </div>

      <span className="text-xs font-mono uppercase tracking-widest text-[#C43D4D]">
        Error 404 • Signal Lost
      </span>

      <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white mt-2 mb-4 tracking-tight">
        Architecture Not Found
      </h1>

      <p className="text-[#A4A7B0] max-w-md text-sm sm:text-base leading-relaxed mb-8">
        The coordinate or route you requested does not exist on this portfolio node. Return to the primary experience.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C43D4D] hover:bg-[#8F2637] text-white text-sm font-semibold transition-colors shadow-lg shadow-[#C43D4D]/25"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Portfolio</span>
      </Link>
    </div>
  );
}
