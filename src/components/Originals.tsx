import { useRef } from 'react';
import { motion } from 'framer-motion';
import { profile, projects, type Project } from '../data/portfolio';
import { EASE, RevealText } from './fx';
import ProjectCard from './ProjectCard';
import { RailButtons } from './Rail';

/**
 * ORIGINALS — Heading & description on top, followed directly by project cards in a smooth horizontal rail.
 */
export default function Originals({ onOpen }: { onOpen: (p: Project) => void }) {
  const rail = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-hidden py-4 sm:py-6">
      <div className="gutter mb-6 sm:mb-8">
        <p className="mb-2 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-crimson-2">
          <span className="h-px w-8 bg-crimson-2" /> {projects.length} Originals · {projects[0].year}
        </p>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <RevealText as="h2" text="ORIGINALS" className="font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.88] text-bone" />
          <p className="max-w-md text-sm leading-relaxed text-mist sm:text-[15px]">
            Three web productions from the resume — an e-commerce platform, an agency website and a fitness landing page. Open any title for the full story.
          </p>
        </div>
      </div>

      <div className="group/rail relative">
        <motion.div
          ref={rail}
          className="rail gutter flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pt-2 sm:gap-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => onOpen(p)} />
          ))}
          <Outro />
        </motion.div>
        <RailButtons rail={rail} />
      </div>
    </div>
  );
}

function Outro() {
  return (
    <a
      href={profile.links.github}
      target="_blank"
      rel="noreferrer"
      data-cursor="link"
      className="group flex aspect-[3/4] min-h-[460px] w-[70vw] max-w-[300px] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/15 text-center transition hover:border-crimson-2/60 sm:min-h-0 sm:aspect-[16/12] sm:w-[44vw] sm:max-w-none lg:w-[26vw]"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 text-xl text-bone transition group-hover:scale-110 group-hover:border-crimson-2 group-hover:text-crimson-2 sm:h-16 sm:w-16 sm:text-2xl">↗</span>
      <span className="font-display text-2xl tracking-wide text-bone sm:text-3xl">More on GitHub</span>
      <span className="text-xs text-mist">{profile.links.github.replace('https://', '')}</span>
    </a>
  );
}
