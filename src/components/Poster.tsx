'use client';

import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated key art for thumbnails — layered gradients, volumetric light, and architectural motifs.
 * Every card is art-directed from its unique palette.
 */
export function PosterBackdrop({
  palette,
  children,
  className = '',
}: {
  palette: Palette;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]"
      />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0D0712]/90 via-[#0D0712]/15 to-transparent" />
    </div>
  );
}

/** Motif architectural illustrations for each Original. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />

        {/* stream motif: AetherScale event streaming pipeline */}
        {project.motif === 'stream' && (
          <g fill="none" stroke={a}>
            {/* Ring Buffer & Queues */}
            <circle cx="280" cy="110" r="64" strokeWidth="2" strokeDasharray="6 6" strokeOpacity="0.75" />
            <circle cx="280" cy="110" r="44" strokeWidth="2.5" strokeOpacity="0.9" />
            <circle cx="280" cy="110" r="24" strokeWidth="1.5" strokeOpacity="0.5" />
            {/* Pipeline arrows */}
            <path d="M160 110 h60" strokeWidth="3" strokeLinecap="round" />
            <path d="M344 110 h50" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 4" />
            {/* Data packets */}
            <circle cx="280" cy="66" r="6" fill={a} />
            <circle cx="324" cy="110" r="6" fill={a} />
            <circle cx="280" cy="154" r="6" fill={a} />
            <circle cx="236" cy="110" r="6" fill={a} />
            {/* Partition lanes */}
            {[0, 1, 2, 3].map((i) => (
              <line key={i} x1="170" x2="380" y1={190 + i * 16} y2={190 + i * 16} strokeWidth="2" strokeOpacity={0.25 + i * 0.15} />
            ))}
          </g>
        )}

        {/* agents motif: Nexus AI Studio multi-agent DAG */}
        {project.motif === 'agents' && (
          <g fill="none" stroke={a}>
            {/* Central orchestrator node */}
            <rect x="240" y="60" width="70" height="40" rx="8" strokeWidth="2" strokeOpacity="0.9" fill={a} fillOpacity="0.2" />
            <line x1="275" y1="100" x2="210" y2="150" strokeWidth="2" strokeOpacity="0.7" />
            <line x1="275" y1="100" x2="275" y2="150" strokeWidth="2" strokeOpacity="0.7" />
            <line x1="275" y1="100" x2="340" y2="150" strokeWidth="2" strokeOpacity="0.7" />
            {/* Subagent nodes */}
            <circle cx="210" cy="170" r="18" strokeWidth="2" fill={a} fillOpacity="0.3" />
            <circle cx="275" cy="170" r="18" strokeWidth="2" fill={a} fillOpacity="0.3" />
            <circle cx="340" cy="170" r="18" strokeWidth="2" fill={a} fillOpacity="0.3" />
            {/* Synthesis node */}
            <line x1="210" y1="190" x2="275" y2="230" strokeWidth="2" strokeOpacity="0.6" strokeDasharray="4 4" />
            <line x1="275" y1="190" x2="275" y2="230" strokeWidth="2" strokeOpacity="0.8" />
            <line x1="340" y1="190" x2="275" y2="230" strokeWidth="2" strokeOpacity="0.6" strokeDasharray="4 4" />
            <rect x="245" y="230" width="60" height="30" rx="6" strokeWidth="2" strokeOpacity="0.8" />
          </g>
        )}

        {/* edge motif: Hyperion Commerce distributed edge platform */}
        {project.motif === 'edge' && (
          <g fill="none" stroke={a}>
            {/* Global edge mesh */}
            {[0, 1, 2].map((r) =>
              [0, 1, 2, 3].map((c) => (
                <rect
                  key={`${r}-${c}`}
                  x={190 + c * 44}
                  y={60 + r * 44}
                  width="32"
                  height="32"
                  rx="6"
                  strokeWidth="1.6"
                  strokeOpacity={0.25 + ((r + c) % 3) * 0.25}
                  fill={(r + c) % 3 === 0 ? a : 'none'}
                  fillOpacity="0.25"
                />
              )),
            )}
            <path d="M170 210 h210" strokeWidth="2" strokeOpacity="0.8" />
            <path d="M170 226 h210" strokeWidth="1" strokeOpacity="0.4" />
            <path d="M170 242 h210" strokeWidth="1" strokeOpacity="0.2" />
          </g>
        )}

        {/* telemetry motif: Chronos Analytics financial time-series */}
        {project.motif === 'telemetry' && (
          <g fill="none" stroke={a}>
            {/* Candlesticks & Depth Curves */}
            <path d="M170 190 Q 220 90, 270 140 T 370 70" strokeWidth="3" strokeOpacity="0.9" />
            <path d="M170 220 Q 230 160, 290 190 T 380 130" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="6 4" />
            {/* L2 Order Book bars */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <line key={i} x1={200 + i * 24} x2={200 + i * 24} y1={120 + (i % 3) * 15} y2={180 + (i % 2) * 20} strokeWidth="4" strokeLinecap="round" strokeOpacity={0.4 + (i % 3) * 0.2} />
            ))}
          </g>
        )}

        {/* vector motif: PulseDB Vector Core */}
        {project.motif === 'vector' && (
          <g fill="none" stroke={a}>
            <circle cx="280" cy="130" r="70" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="10 6" />
            <circle cx="280" cy="130" r="45" strokeWidth="2" strokeOpacity="0.7" />
            <circle cx="280" cy="130" r="20" strokeWidth="2.5" strokeOpacity="0.9" />
            {/* High-dimensional clusters */}
            <line x1="280" y1="130" x2="330" y2="80" strokeWidth="2" strokeOpacity="0.7" />
            <line x1="280" y1="130" x2="230" y2="90" strokeWidth="2" strokeOpacity="0.7" />
            <line x1="280" y1="130" x2="310" y2="185" strokeWidth="2" strokeOpacity="0.7" />
            <line x1="280" y1="130" x2="235" y2="175" strokeWidth="2" strokeOpacity="0.7" />
            <circle cx="330" cy="80" r="5" fill={a} />
            <circle cx="230" cy="90" r="5" fill={a} />
            <circle cx="310" cy="185" r="5" fill={a} />
            <circle cx="235" cy="175" r="5" fill={a} />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Streaming series brand mark used in the navbar, opening sequence and cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-[#935073] via-[#733B58] to-[#502D55] shadow-[0_0_15px_rgba(147,80,115,0.55)]">
        <img src="/assets/r-glyph.png" alt="R" className="h-[18px] w-auto object-contain drop-shadow" />
      </span>
      <span className="font-sans text-[0.68em] font-bold tracking-[0.38em] text-[#F6DBC0]">SERIES</span>
    </span>
  );
}
