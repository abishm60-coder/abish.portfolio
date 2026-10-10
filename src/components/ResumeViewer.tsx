import { motion } from 'framer-motion';
import { certifications, profile, projects } from '../data/portfolio';
import { EASE, Magnetic, SectionHeading } from './fx';

/** THE FULL STORY — a designed resume hub with view and download actions. */
export default function ResumeSection({ onView }: { onView: () => void }) {
  return (
    <>
      <SectionHeading kicker="The screenplay" title="The Full Story" />
      <div className="gutter flex justify-center py-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#121218,#0c0c11)] p-8 text-center ring-1 ring-white/10 sm:p-12"
        >
          <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-2/70 to-transparent" />
          <p className="font-serif text-3xl italic leading-tight text-bone sm:text-4xl">Every episode, on one page.</p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mist">
            Education, experience, projects, skills and certifications — view the official resume or download a copy directly.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Magnetic>
              <button
                type="button"
                data-cursor="view"
                onClick={onView}
                className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-bone px-8 text-[15px] font-bold text-ink transition hover:bg-white"
              >
                ▶ View Resume
              </button>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.resumePdf}
                download="Abish_Resume.pdf"
                data-cursor="link"
                className="glass flex min-h-12 items-center justify-center gap-2 rounded-md px-8 text-[15px] font-semibold text-bone transition hover:bg-white/15"
              >
                ⤓ Download Resume
              </a>
            </Magnetic>
          </div>
          <dl className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10 text-center">
            {[
              { v: 'B.Tech', k: 'Degree' },
              { v: String(projects.length), k: 'Originals' },
              { v: String(certifications.length), k: 'Certs' },
            ].map((s) => (
              <div key={s.k} className="bg-ink-2 px-2 py-4">
                <dd className="font-display text-3xl leading-none text-bone">{s.v}</dd>
                <dt className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">{s.k}</dt>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </>
  );
}
