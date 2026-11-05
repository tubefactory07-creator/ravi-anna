import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0712] text-[#F8F4E9] flex flex-col items-center justify-center p-6 text-center">
      <div className="p-4 rounded-2xl bg-[#170D1E] border border-white/10 mb-6">
        <ShieldAlert className="w-8 h-8 text-[#935073]" />
      </div>

      <span className="text-xs font-mono uppercase tracking-widest text-[#F6DBC0]">
        Error 404 • Signal Lost
      </span>

      <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#F8F4E9] mt-2 mb-4 tracking-tight">
        Architecture Not Found
      </h1>

      <p className="text-[#C7B8C4] max-w-md text-sm sm:text-base leading-relaxed mb-8">
        The coordinate or route you requested does not exist on this portfolio node. Return to the primary experience.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#935073] hover:bg-[#502D55] text-[#F8F4E9] text-sm font-semibold transition-colors shadow-lg shadow-[#935073]/25"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Portfolio</span>
      </Link>
    </div>
  );
}
