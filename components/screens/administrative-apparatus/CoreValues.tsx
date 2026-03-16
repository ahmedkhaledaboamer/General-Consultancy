"use client";
import { motion } from 'framer-motion';
import {
  StarIcon,
  ShieldCheckIcon,
  LightbulbIcon,
  HeartIcon,
  HandshakeIcon,
  Gem
} from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type CoreValueCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  gradientClassName: string;
  delay: number;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function CoreValueCard({
  title,
  description,
  imageSrc,
  imageAlt,
  gradientClassName,
  delay,
  Icon
}: CoreValueCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9
      }}
      whileInView={{
        opacity: 1,
        scale: 1
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.5,
        delay
      }}
      className="relative h-80 md:h-96 lg:h-108 xl:h-120 2xl:h-132 rounded-3xl overflow-hidden shadow-2xl group hover:-translate-y-2 transition-all duration-500">
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        width={600}
        height={600}
      />
      <div className={`absolute inset-0 ${gradientClassName}`}></div>
      <div className="text-center absolute inset-0 p-8 flex flex-col justify-center items-center text-white z-10">
        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30 shadow-lg group-hover:-translate-y-2 transition-transform">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3">
          {title}
        </h3>
        <p className="text-white/90 text-lg md:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

const coreValues = [
  {
    key: '0',
    imageSrc: '/imgs/A real estate finance environm/image_1.webp',
    gradientClassName:
      'bg-gradient-to-t from-purple-900 via-purple-800/80 to-purple-500/40 mix-blend-multiply',
    delay: 0.1,
    Icon: StarIcon
  },
  {
    key: '1',
    imageSrc: '/imgs/A bright conceptual office wit/image_3.webp',
    gradientClassName:
      'bg-gradient-to-t from-blue-900 via-blue-800/80 to-cyan-500/40 mix-blend-multiply',
    delay: 0.2,
    Icon: ShieldCheckIcon
  },
  {
    key: '2',
    imageSrc: '/imgs/A bright corporate workspace w/image_8.webp',
    gradientClassName:
      'bg-gradient-to-t from-pink-900 via-rose-800/80 to-pink-500/40 mix-blend-multiply',
    delay: 0.3,
    Icon: LightbulbIcon
  },
  {
    key: '3',
    imageSrc: '/imgs/A bright modern office with ab/image_20.webp',
    gradientClassName:
      'bg-gradient-to-t from-teal-900 via-teal-800/80 to-emerald-500/40 mix-blend-multiply',
    delay: 0.4,
    Icon: HeartIcon
  },
  {
    key: '4',
    imageSrc: '/imgs/A bright polished office envir/image_11.webp',
    gradientClassName:
      'bg-gradient-to-t from-orange-900 via-orange-800/80 to-amber-500/40 mix-blend-multiply',
    delay: 0.5,
    Icon: HandshakeIcon
  },
  {
    key: '5',
    imageSrc: '/imgs/A bright polished workspace wi/image_15.webp',
    gradientClassName:
      'bg-gradient-to-t from-orange-900 via-orange-800/80 to-amber-500/40 mix-blend-multiply',
    delay: 0.5,
    Icon: Gem
  }
];

export function CoreValues() {
  const t = useTranslations('administrativeApparatus.coreValues');

  return (
    <section
      id="values"
      className=" bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50 relative">
      <div className=" mx-auto p-[5%]">
        <div className="text-center max-w-4xl mx-auto mb-20">
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
            className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-slate-900 mb-8">
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
            className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-slate-700 leading-relaxed font-medium">
            {t('intro')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {coreValues.map((value) => (
            <CoreValueCard
              key={value.key}
              title={t(`values.${value.key}.title`)}
              description={t(`values.${value.key}.description`)}
              imageSrc={value.imageSrc}
              imageAlt={t(`values.${value.key}.imageAlt`)}
              gradientClassName={value.gradientClassName}
              delay={value.delay}
              Icon={value.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}