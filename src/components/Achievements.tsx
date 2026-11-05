'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';
import { RailButtons } from './Rail';

function Laurel({ side }: { side: 'l' | 'r' }) {
  return (
    <svg viewBox="0 0 30 64" className={`h-14 w-auto text-[#F6DBC0] ${side === 'r' ? '-scale-x-100' : ''}`} aria-hidden>
      <path d="M26 62C10 52 4 36 8 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {[10, 18, 26, 34, 42, 50].map((y, i) => (
        <ellipse
          key={y}
          cx={i < 2 ? 9 : 8 + i * 1.6}
          cy={y}
          rx="5"
          ry="2.2"
          fill="currentColor"
          opacity="0.85"
          transform={`rotate(-40 ${8 + i * 1.6} ${y})`}
        />
      ))}
    </svg>
  );
}

export default function Achievements() {
  const rail = useRef<HTMLDivElement>(null);
  const issuers = Array.from(new Set(certifications.map((c) => c.issuer)));

  return (
    <>
      <SectionHeading kicker="Awards season" title="Top Moments" />

      {/* Gold Laurel Wreath Award Posters */}
      <div className="gutter grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 [perspective:1400px]">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 50, rotateX: 18 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
          >
            <Tilt max={8} className="group h-full rounded-2xl">
              <article className="relative flex h-full min-h-[340px] flex-col items-center overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#3d2146,#1e1124_60%,#0D0712)] px-5 pb-6 pt-8 text-center ring-1 ring-[#F6DBC0]/20 transition duration-500 group-hover:ring-[#F6DBC0]/60">
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F6DBC0]/70 to-transparent" />
                <div
                  aria-hidden
                  className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#F6DBC0]/10 blur-3xl transition duration-700 group-hover:bg-[#F6DBC0]/25"
                />
                <div className="relative flex items-center gap-1">
                  <Laurel side="l" />
                  <div className="px-1">
                    <p className="text-[9px] font-bold uppercase leading-tight tracking-[0.24em] text-[#F6DBC0]">{a.laurel}</p>
                  </div>
                  <Laurel side="r" />
                </div>
                <h3 className="relative mt-6 font-display text-[2.1rem] leading-[0.92] tracking-wide text-[#F8F4E9]">{a.title}</h3>
                <p className="relative mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F6DBC0]">{a.org}</p>
                <p className="relative mt-4 text-[13px] leading-relaxed text-[#F8F4E9]/70">{a.detail}</p>
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="relative mt-auto inline-flex min-h-10 items-center gap-1 pt-5 text-xs font-semibold tracking-wide text-[#F8F4E9] underline decoration-[#F6DBC0]/60 underline-offset-4 hover:decoration-[#F6DBC0]"
                  >
                    View Credential ↗
                  </a>
                )}
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Verified Certifications Rail */}
      <div className="mt-16">
        <div className="gutter mb-2 flex flex-wrap items-end justify-between gap-2">
          <h3 className="font-sans text-lg font-semibold text-[#F8F4E9] sm:text-2xl">
            Certified <span className="text-[#C7B8C4]">· {certifications.length} Credentials</span>
          </h3>
          <p className="text-xs text-[#7E6B7B]">{issuers.join(' · ')}</p>
        </div>
        <div className="group/rail relative">
          <div ref={rail} className="rail gutter flex snap-x gap-3 overflow-x-auto py-5">
            {certifications.map((c, i) => (
              <motion.a
                key={c.name}
                href={c.link}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="group relative flex w-[240px] shrink-0 snap-start flex-col justify-between rounded-xl bg-[#170D1E] p-4 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-white/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.04, ease: EASE }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B2668F]">{c.issuer}</span>
                  <span className="text-sm text-[#7E6B7B] transition group-hover:text-[#F8F4E9]">↗</span>
                </div>
                <p className="mt-6 text-sm font-medium leading-snug text-[#F8F4E9]">{c.name}</p>
              </motion.a>
            ))}
          </div>
          <RailButtons rail={rail} />
        </div>
      </div>
    </>
  );
}
