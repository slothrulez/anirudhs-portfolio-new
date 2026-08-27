import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ScriptVariant {
  text: string;
  lang: string;
  nativeLang: string;
  fontClass: string;
}

const scriptVariants: ScriptVariant[] = [
  {
    text: 'Anirudh',
    lang: 'English',
    nativeLang: 'English',
    fontClass: 'font-script-en text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-none italic',
  },
  {
    text: 'അനിരുദ്ധ്',
    lang: 'Malayalam',
    nativeLang: 'മലയാളം',
    fontClass: 'font-script-ml text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-normal text-white leading-none italic',
  },
  {
    text: 'அனிருத்',
    lang: 'Tamil',
    nativeLang: 'தமிழ்',
    fontClass: 'font-script-ta text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-normal text-white leading-none italic',
  },
  {
    text: 'ಅನಿರುದ್ಧ',
    lang: 'Kannada',
    nativeLang: 'ಕನ್ನಡ',
    fontClass: 'font-script-kn text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-normal text-white leading-none italic',
  },
  {
    text: 'अनिरुद्ध',
    lang: 'Hindi',
    nativeLang: 'हिन्दी',
    fontClass: 'font-script-hi text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-normal text-white leading-none italic',
  },
];

function getGraphemes(text: string): string[] {
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
    return Array.from(segmenter.segment(text), (s) => s.segment);
  }
  return Array.from(text);
}

export function MultilingualHeadline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % scriptVariants.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % scriptVariants.length);
  };

  const currentVariant = scriptVariants[currentIndex];
  const graphemes = getGraphemes(currentVariant.text);

  return (
    <div className="min-h-[3.75rem] xs:min-h-[4.5rem] sm:min-h-[5.5rem] md:min-h-[6.5rem] lg:min-h-[7.25rem] flex items-center">
      <h1
        className="relative inline-flex items-baseline sm:items-center gap-2.5 sm:gap-4 cursor-pointer select-none overflow-visible flex-wrap sm:flex-nowrap"
        onClick={goToNext}
        title="Click to cycle language"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={`stagger-${currentVariant.text}`}
            className={`inline-flex items-center select-none ${currentVariant.fontClass}`}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {graphemes.map((char, index) => (
              <motion.span
                key={`${currentVariant.text}-${index}-${char}`}
                variants={{
                  hidden: { opacity: 0, y: 22, filter: 'blur(8px)', rotateX: 45 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    rotateX: 0,
                    transition: {
                      duration: 0.55,
                      delay: index * 0.045,
                      ease: [0.215, 0.61, 0.355, 1],
                    },
                  },
                  exit: {
                    opacity: 0,
                    y: -18,
                    filter: 'blur(6px)',
                    rotateX: -30,
                    transition: {
                      duration: 0.4,
                      delay: index * 0.02,
                      ease: [0.55, 0.055, 0.675, 0.19],
                    },
                  },
                }}
                className="inline-block origin-bottom"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>

        {/* Synchronized Minimal Language Tag */}
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={currentVariant.lang}
            initial={{ opacity: 0, y: 6, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -6, filter: 'blur(4px)' }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-xs font-mono text-zinc-500 font-normal self-center tracking-tight shrink-0"
          >
            [{currentVariant.nativeLang}]
          </motion.span>
        </AnimatePresence>
      </h1>
    </div>
  );
}
