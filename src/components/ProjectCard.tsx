import { motion } from 'framer-motion';
import type { Project } from '../data/portfolio';
import { EASE, Tilt } from './fx';
import { ProjectArt } from './Poster';

export default function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  return (
    <motion.article
      className="w-[82vw] max-w-[340px] shrink-0 snap-start sm:w-[62vw] sm:max-w-md lg:w-[46vw] xl:w-[42vw]"
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px -10% 0px 0px' }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: EASE }}
    >
      <Tilt max={5} className="group rounded-2xl">
        <div
          role="button"
          tabIndex={0}
          data-cursor="view"
          onClick={onOpen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpen();
            }
          }}
          aria-label={`Open ${project.title}`}
          className="focus-ring relative min-h-[460px] aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-white/10 transition duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] group-hover:ring-white/25 sm:min-h-0 sm:aspect-[16/12] lg:aspect-auto lg:h-[66vh]"
        >
          <motion.div layoutId={`art-${project.id}`} className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 transition-transform duration-[1.4s] ease-[var(--ease-cine)] group-hover:scale-[1.07]">
              <ProjectArt project={project} />
            </div>
          </motion.div>

          <div className="absolute left-3.5 top-3.5 z-10 flex items-center gap-1.5 sm:left-7 sm:top-7 sm:gap-2">
            <span className="font-display text-base leading-none text-crimson-2 sm:text-xl">S</span>
            <span className="text-[9px] font-bold tracking-[0.3em] text-bone/80 sm:text-[10px] sm:tracking-[0.34em]">ORIGINAL</span>
          </div>
          <span className="absolute right-3.5 top-3.5 z-10 rounded border border-white/30 px-1.5 py-px text-[9px] font-bold text-bone sm:right-7 sm:top-7 sm:text-[10px]">{project.year}</span>

          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-3.5 pt-16 sm:p-7 sm:pt-20 [transform:translateZ(40px)]">
            <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-mist sm:mb-2 sm:text-[11px] sm:tracking-[0.24em]">{project.genre}</p>
            <motion.h3 layoutId={`title-${project.id}`} className="font-display text-[clamp(1.75rem,4.5vw,4.6rem)] leading-[0.92] tracking-wide text-bone">
              {project.title}
            </motion.h3>
            <p className="mt-1 line-clamp-2 max-w-md text-xs leading-relaxed text-bone/80 sm:mt-3 sm:line-clamp-none sm:text-[15px]">{project.logline}</p>
            <div className="mt-2 flex flex-wrap gap-1 sm:mt-4 sm:gap-1.5">
              {project.stack.map((t) => (
                <span key={t} className="rounded-full bg-white/[0.08] px-2 py-0.5 text-[10px] font-medium text-bone/90 backdrop-blur sm:px-2.5 sm:py-1 sm:text-[11px]">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-3.5 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-3">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  onClick={(e) => e.stopPropagation()}
                  className="flex min-h-9 items-center gap-1.5 rounded-md bg-bone px-3.5 text-xs font-bold text-ink transition hover:bg-white sm:min-h-11 sm:gap-2 sm:px-5 sm:text-sm"
                >
                  ▶ View Project
                </a>
              ) : (
                <span className="flex min-h-9 items-center gap-1.5 rounded-md bg-bone px-3.5 text-xs font-bold text-ink transition group-hover:bg-white sm:min-h-11 sm:gap-2 sm:px-5 sm:text-sm">
                  ▶ View Project
                </span>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  onClick={(e) => e.stopPropagation()}
                  className="flex min-h-9 items-center gap-1.5 rounded-md border border-white/25 bg-black/40 px-3 text-xs font-semibold text-bone backdrop-blur transition hover:border-bone sm:min-h-11 sm:gap-2 sm:px-4 sm:text-sm"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.article>
  );
}
