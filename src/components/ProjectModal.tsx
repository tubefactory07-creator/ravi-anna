'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { projects, type Project } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE, Magnetic } from './fx';
import { ProjectArt } from './Poster';

const block = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
};

export default function ProjectModal({
  project,
  onClose,
  onSwitch,
}: {
  project: Project;
  onClose: () => void;
  onSwitch: (p: Project) => void;
}) {
  useScrollLock(true);
  const scroller = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
  }, [project.id]);

  const more = projects.filter((p) => p.id !== project.id);

  return (
    <motion.div className="fixed inset-0 z-[140]" role="dialog" aria-modal="true" aria-labelledby={`title-${project.id}-modal`}>
      <motion.div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <div ref={scroller} data-lenis-prevent className="absolute inset-0 overflow-y-auto overscroll-contain" onClick={onClose}>
        <motion.div
          className="relative mx-auto min-h-full max-w-5xl bg-[#11131A] shadow-2xl sm:my-10 sm:min-h-0 sm:rounded-2xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
        >
          {/* Billboard cover */}
          <div className="relative h-[52vh] min-h-[340px] overflow-hidden sm:rounded-t-2xl">
            <motion.div layoutId={`art-${project.id}`} className="absolute inset-0" transition={{ duration: 0.7, ease: EASE }}>
              <ProjectArt project={project} />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#11131A] via-[#11131A]/30 to-transparent" />
            <button
              ref={closeBtn}
              type="button"
              onClick={onClose}
              data-cursor="close"
              aria-label="Close project modal"
              className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-lg text-[#F5F5F7] backdrop-blur transition hover:bg-black"
            >
              ✕
            </button>
            <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-10">
              <motion.p
                className="mb-2 flex items-center gap-2 text-[11px] font-bold tracking-[0.34em] text-[#F5F5F7]/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="font-display text-xl tracking-normal text-[#E53E55]">R</span> ORIGINAL
              </motion.p>
              <motion.h2
                id={`title-${project.id}-modal`}
                layoutId={`title-${project.id}`}
                className="font-display text-[clamp(2.8rem,8vw,6rem)] leading-[0.86] tracking-wide text-[#F5F5F7]"
                transition={{ duration: 0.7, ease: EASE }}
              >
                {project.title}
              </motion.h2>
            </div>
          </div>

          <motion.div className="px-5 pb-12 sm:px-10" initial="hidden" animate="show" transition={{ staggerChildren: 0.08, delayChildren: 0.25 }}>
            <motion.div variants={block} className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#A5A7B1]">
              <span className="font-semibold text-[#10B981]">{project.year}</span>
              <span className="h-1 w-1 rounded-full bg-[#6B6D76]" />
              <span>{project.genre}</span>
            </motion.div>

            <motion.p variants={block} className="mt-4 max-w-3xl text-lg leading-relaxed text-[#F5F5F7] sm:text-xl">
              {project.logline}
            </motion.p>

            <motion.div variants={block} className="mt-6 flex flex-wrap gap-3">
              {project.live && (
                <Magnetic>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="play"
                    className="flex min-h-12 items-center gap-2 rounded-md bg-[#F5F5F7] px-6 text-[15px] font-bold text-[#08090C] transition hover:bg-white"
                  >
                    ▶ Live Demo ↗
                  </a>
                </Magnetic>
              )}
              {project.github && (
                <Magnetic>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="glass flex min-h-12 items-center gap-2 rounded-md px-6 text-[15px] font-semibold text-[#F5F5F7] transition hover:bg-white/15"
                  >
                    GitHub ↗
                  </a>
                </Magnetic>
              )}
            </motion.div>

            {/* Impact & Metrics */}
            <motion.section variants={block} className="mt-12">
              <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#E53E55]">Result / Impact</h3>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-3 lg:grid-cols-5">
                {project.metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    className="bg-[#08090C] p-4 sm:p-5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.07, duration: 0.5, ease: EASE }}
                  >
                    <p className="font-display text-4xl leading-none text-[#F5F5F7] sm:text-5xl" style={{ color: i === 0 ? project.palette.accent : undefined }}>
                      {m.value}
                    </p>
                    <p className="mt-2 text-xs leading-snug text-[#A5A7B1]">{m.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Contribution points & Tech stack */}
            <div className="mt-12 grid gap-10 lg:grid-cols-[3fr_2fr]">
              <motion.section variants={block}>
                <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#E53E55]">Architecture & Contribution</h3>
                <ul className="space-y-4">
                  {project.build.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-[#F5F5F7]/85">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: project.palette.accent }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.section>

              <motion.section variants={block}>
                <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#E53E55]">Key Highlights</h3>
                <ul className="space-y-3">
                  {project.features.map((f) => (
                    <li key={f} className="rounded-lg bg-black/30 p-3 text-sm text-[#F5F5F7]/80 ring-1 ring-white/10">
                      {f}
                    </li>
                  ))}
                </ul>

                <h3 className="mb-3 mt-8 text-[11px] font-bold uppercase tracking-[0.3em] text-[#E53E55]">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span key={t} className="glass rounded-full px-3 py-1 text-xs font-semibold text-[#F5F5F7]">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* More Productions */}
            {more.length > 0 && (
              <motion.section variants={block} className="mt-16 border-t border-white/10 pt-10">
                <h3 className="mb-6 font-display text-3xl tracking-wide text-[#F5F5F7]">More Productions</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {more.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => onSwitch(p)}
                      className="group relative aspect-[3/2] overflow-hidden rounded-xl ring-1 ring-white/10 transition hover:ring-[#E53E55]/60 text-left"
                    >
                      <ProjectArt project={p} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-3 flex flex-col justify-end">
                        <span className="font-display text-lg leading-tight text-[#F5F5F7] group-hover:text-white">{p.title}</span>
                        <span className="text-[10px] text-[#A5A7B1]">{p.year}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.section>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
