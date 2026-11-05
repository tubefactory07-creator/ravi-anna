'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications, education, experience, profile, projects } from '../data/portfolio';
import { EASE, Magnetic, SectionHeading } from './fx';

/** THE FULL STORY — a designed screenplay resume preview plus view / download actions. */
export default function ResumeSection({ onView }: { onView: () => void }) {
  return (
    <>
      <SectionHeading kicker="The screenplay" title="The Full Story" />
      <div className="gutter grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ transformPerspective: 1600 }}
        >
          <CollapsibleSheet />
        </motion.div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-serif text-3xl italic leading-tight text-[#F8F4E9]">Every episode, on one page.</p>
          <p className="mt-3 text-sm leading-relaxed text-[#C7B8C4]">
            Experience, distributed architectures, {projects.length} Originals, squad leadership, and {certifications.length} verified certifications — view it here or take a copy with you.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Magnetic className="w-full">
              <button
                type="button"
                data-cursor="view"
                onClick={onView}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#F8F4E9] px-6 text-[15px] font-bold text-[#0D0712] transition hover:bg-[#F6DBC0]"
              >
                ▶ View Resume
              </button>
            </Magnetic>
            <Magnetic className="w-full">
              <a
                href={profile.resumePdf}
                download="Ravi_Rajan_Resume.pdf"
                data-cursor="link"
                className="glass flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-6 text-[15px] font-semibold text-[#F8F4E9] transition hover:bg-white/15"
              >
                ⤓ Download Resume
              </a>
            </Magnetic>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10 text-center">
            {[
              { v: '10+', k: 'Yrs Craft' },
              { v: String(projects.length), k: 'Originals' },
              { v: String(certifications.length), k: 'Certs' },
            ].map((s) => (
              <div key={s.k} className="bg-[#170D1E] px-2 py-4">
                <dd className="font-display text-3xl leading-none text-[#F8F4E9]">{s.v}</dd>
                <dt className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7E6B7B]">{s.k}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}

/** On mobile the sheet starts as a teaser; desktop shows it in full. */
function CollapsibleSheet() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className={`overflow-hidden transition-[max-height] duration-700 ease-[var(--ease-cine)] md:max-h-none ${open ? 'max-h-[5000px]' : 'max-h-[560px]'}`}>
        <ResumeSheet />
      </div>
      {!open && (
        <div className="absolute inset-x-0 bottom-0 flex h-48 items-end justify-center rounded-b-2xl bg-gradient-to-t from-[#0D0712] via-[#0D0712]/85 to-transparent pb-4 md:hidden">
          <button type="button" onClick={() => setOpen(true)} className="glass min-h-11 rounded-full px-5 text-sm font-semibold text-[#F8F4E9]">
            Read the full story ↓
          </button>
        </div>
      )}
    </div>
  );
}

function H({ children }: { children: string }) {
  return <h4 className="mb-3 mt-7 border-b border-white/10 pb-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#B2668F] first:mt-0">{children}</h4>;
}

export function ResumeSheet() {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#170D1E,#0D0712)] p-6 ring-1 ring-white/10 sm:p-10">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#935073]/70 to-transparent" />
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <p className="text-[10px] font-bold tracking-[0.34em] text-[#7E6B7B]">STARRING</p>
          <h3 className="mt-1 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[0.9] tracking-wide text-[#F8F4E9]">{profile.fullName}</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#F6DBC0]">{profile.role}</p>
        </div>
        <div className="text-xs leading-relaxed text-[#C7B8C4] sm:text-right">
          <a href={`mailto:${profile.email}`} className="block hover:text-[#F8F4E9]">
            {profile.email}
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#F8F4E9]">
            LinkedIn ↗
          </a>
          {' · '}
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-[#F8F4E9]">
            GitHub ↗
          </a>
        </div>
      </header>

      <div className="grid gap-x-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <H>Work Experience</H>
          {experience.map((x) => (
            <div key={x.company} className="mb-6">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-[#F8F4E9]">
                  {x.company}
                </p>
                <p className="text-xs text-[#7E6B7B]">{x.period}</p>
              </div>
              <p className="text-xs font-medium text-[#B2668F]">{x.role}</p>
              <ul className="mt-2.5 space-y-2">
                {x.points.map((p) => (
                  <li key={p} className="flex gap-2 text-xs leading-relaxed text-[#C7B8C4]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#B2668F]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <H>Featured Productions</H>
          {projects.map((p) => (
            <div key={p.id} className="mb-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#F8F4E9]">{p.title}</p>
                <span className="text-[10px] font-bold text-[#F6DBC0]">{p.year}</span>
              </div>
              <p className="text-xs text-[#C7B8C4]">{p.logline}</p>
              <p className="mt-1 text-[11px] text-[#7E6B7B]">{p.stack.join(' · ')}</p>
            </div>
          ))}
        </div>

        <div>
          <H>Education</H>
          {education.map((e) => (
            <div key={e.school} className="mb-4">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-[#F8F4E9]">{e.school}</p>
                <p className="text-xs text-[#7E6B7B]">{e.period}</p>
              </div>
              <p className="text-xs text-[#C7B8C4]">
                {e.degree} · <span className="text-[#F8F4E9]/80">{e.score}</span>
              </p>
            </div>
          ))}

          <H>Verified Credentials</H>
          <ul className="space-y-2">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-baseline justify-between gap-2 text-xs">
                <span className="text-[#F8F4E9]/80">{c.name}</span>
                <span className="shrink-0 text-[10px] font-bold text-[#B2668F]">{c.issuer}</span>
              </li>
            ))}
          </ul>

          <H>Key Achievements</H>
          <ul className="space-y-2">
            {achievements.map((a) => (
              <li key={a.id} className="text-xs text-[#C7B8C4]">
                <span className="font-semibold text-[#F8F4E9]">{a.title}</span> — {a.detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
