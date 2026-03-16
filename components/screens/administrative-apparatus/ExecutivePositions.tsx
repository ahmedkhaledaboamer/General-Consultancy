"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type ExecutiveCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  cardClassName: string;
  delay: number;
};

function ExecutiveCard({
  title,
  description,
  imageSrc,
  imageAlt,
  cardClassName,
  delay
}: ExecutiveCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.5,
        delay
      }}
      className={cardClassName}>
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
          width={400}
          height={400}
        />
      </div>
      <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-4">
        {title}
      </h3>
      <p className="text-white/90 leading-relaxed text-base md:text-lg xl:text-xl 2xl:text-2xl">
        {description}
      </p>
    </motion.div>
  );
}

const executiveCards = [
  {
    key: '0',
    imageSrc: '/imgs/A hotel consulting environment/image_12.webp',
    cardClassName:
      'bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 pt-20 shadow-2xl hover:shadow-[0_20px_50px_rgba(79,70,229,0.4)] hover:-translate-y-2 transition-all duration-300 relative text-white text-center',
    delay: 0.1
  },
  {
    key: '1',
    imageSrc: '/imgs/A tourism and entertainment co/image_33.webp',
    cardClassName:
      'bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-8 pt-20 shadow-2xl hover:shadow-[0_20px_50px_rgba(6,182,212,0.4)] hover:-translate-y-2 transition-all duration-300 relative text-white text-center lg:translate-y-12',
    delay: 0.2
  },
  {
    key: '2',
    imageSrc: '/imgs/A tourism consulting environme/image_11.webp',
    cardClassName:
      'bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl p-8 pt-20 shadow-2xl hover:shadow-[0_20px_50px_rgba(16,185,129,0.4)] hover:-translate-y-2 transition-all duration-300 relative text-white text-center',
    delay: 0.3
  },
  {
    key: '3',
    imageSrc: '/imgs/A tourism development concept/image_7.webp',
    cardClassName:
      'bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-8 pt-20 shadow-2xl hover:shadow-[0_20px_50px_rgba(225,29,72,0.4)] hover:-translate-y-2 transition-all duration-300 relative text-white text-center',
    delay: 0.1
  },
  {
    key: '4',
    imageSrc: '/imgs/A bright workspace with floati/image_24.webp',
    cardClassName:
      'bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 pt-20 shadow-2xl hover:shadow-[0_20px_50px_rgba(245,158,11,0.4)] hover:-translate-y-2 transition-all duration-300 relative text-white text-center lg:translate-y-12',
    delay: 0.2
  },
  {
    key: '5',
    imageSrc: '/imgs/A conceptual corporate environ/image_8.webp',
    cardClassName:
      'bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-8 pt-20 shadow-2xl hover:shadow-[0_20px_50px_rgba(139,92,246,0.4)] hover:-translate-y-2 transition-all duration-300 relative text-white text-center',
    delay: 0.3
  },
  {
    key: '6',
    imageSrc: '/imgs/A conceptual corporate knowled/image_6.webp',
    cardClassName:
      'bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-8 pt-20 shadow-2xl hover:shadow-[0_20px_50px_rgba(14,165,233,0.4)] hover:-translate-y-2 transition-all duration-300 relative text-white text-center',
    delay: 0.1
  },
  {
    key: '7',
    imageSrc: '/imgs/A conceptual corporate workflo/image_14.webp',
    cardClassName:
      'bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-3xl p-8 pt-20 shadow-2xl hover:shadow-[0_20px_50px_rgba(217,70,239,0.4)] hover:-translate-y-2 transition-all duration-300 relative text-white text-center lg:translate-y-12',
    delay: 0.2
  },
  {
    key: '8',
    imageSrc: '/imgs/A conceptual modern office wit/image_18.webp',
    cardClassName:
      'bg-gradient-to-br from-lime-500 to-green-600 rounded-3xl p-8 pt-20 shadow-2xl hover:shadow-[0_20px_50px_rgba(132,204,22,0.4)] hover:-translate-y-2 transition-all duration-300 relative text-white text-center',
    delay: 0.3
  }
];

export function ExecutivePositions() {
  const t = useTranslations('administrativeApparatus.executivePositions');

  return (
    <section
      id="executives"
      className="  bg-slate-100 relative overflow-hidden">
      {/* Hero-style banner image for section */}
      <div className="absolute top-0 start-0 w-full h-[500px] z-0">
        <Image
          src="/imgs/A conceptual office compositio/image_0.webp"
          alt="Conference Room"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-100"></div>
      </div>

      <div className=" mx-auto p-[5%] relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-32 pt-10">
          <motion.h2
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-white mb-8 text-shadow-lg">
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-white/90 leading-relaxed font-medium text-shadow-md">
            {t('intro')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 mt-10">
          {executiveCards.map((card) => (
            <ExecutiveCard
              key={card.key}
              title={t(`cards.${card.key}.title`)}
              description={t(`cards.${card.key}.description`)}
              imageSrc={card.imageSrc}
              imageAlt={t(`cards.${card.key}.imageAlt`)}
              cardClassName={card.cardClassName}
              delay={card.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}