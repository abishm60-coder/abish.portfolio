import { motion } from 'framer-motion';
import { certifications } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

export default function Achievements() {
  const issuers = Array.from(new Set(certifications.map((c) => c.issuer)));

  return (
    <>
      <SectionHeading kicker="Credentials" title="Certifications" />

      <div className="gutter grid gap-5 sm:grid-cols-2 lg:grid-cols-4 [perspective:1400px]">
        {certifications.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
          >
            <Tilt max={6} className="group h-full rounded-2xl">
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#1a1824,#0d0b12_60%,#07070a)] p-6 ring-1 ring-white/10 transition duration-500 group-hover:-translate-y-1 group-hover:ring-crimson-2/50"
              >
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-2/70 to-transparent" />
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-crimson-2/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-crimson-2 ring-1 ring-crimson-2/30">
                      {c.issuer}
                    </span>
                    <span className="text-sm text-mist transition group-hover:text-bone">↗</span>
                  </div>
                  <h3 className="mt-5 font-sans text-base font-semibold leading-snug text-bone transition group-hover:text-white">
                    {c.name}
                  </h3>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-mist transition group-hover:text-bone">
                  <span>View Certificate</span>
                  <span>→</span>
                </div>
              </a>
            </Tilt>
          </motion.div>
        ))}
      </div>

      <div className="gutter mt-6 flex justify-end">
        <p className="text-xs text-smoke">Issued by {issuers.join(' · ')}</p>
      </div>
    </>
  );
}
