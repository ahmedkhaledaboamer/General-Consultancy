"use client";
import { motion } from 'framer-motion';
import { CompassIcon, BriefcaseIcon, UsersIcon } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type LeadershipPillarCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  gradientOverlayClass: string;
  cardShadowClass: string;
  contentBgClass: string;
  delay: number;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function LeadershipPillarCard({
  title,
  description,
  imageSrc,
  imageAlt,
  gradientOverlayClass,
  cardShadowClass,
  contentBgClass,
  delay,
  Icon
}: LeadershipPillarCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40
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
        duration: 0.6,
        delay
      }}
      className={`bg-white rounded-3xl overflow-hidden shadow-2xl ${cardShadowClass} hover:-translate-y-3 transition-all duration-500 group flex flex-col h-full`}>
      <div className="relative h-64 md:h-72 lg:h-80 2xl:h-96 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          width={600}
          height={600}
        />
        <div className={`absolute inset-0 ${gradientOverlayClass}`}></div>
        <div className="absolute bottom-4 start-4 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className={`p-8 flex-1 flex flex-col ${contentBgClass}`}>
        <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors">
          {title}
        </h3>
        <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-slate-600 leading-relaxed flex-1">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

const leadershipPillars = [
  {
    key: '0',
    imageSrc: '/imgs/A corporate organizational con/image_17.webp',
    gradientOverlayClass:
      'bg-gradient-to-t from-purple-900/90 via-purple-600/50 to-pink-500/30 mix-blend-multiply',
    cardShadowClass: 'hover:shadow-[0_30px_60px_rgba(147,51,234,0.2)]',
    contentBgClass: 'bg-gradient-to-b from-white to-purple-50/50',
    delay: 0.1,
    Icon: CompassIcon
  },
  {
    key: '1',
    imageSrc: '/imgs/A dynamic corporate workspace/image_17.webp',
    gradientOverlayClass:
      'bg-gradient-to-t from-blue-900/90 via-blue-600/50 to-cyan-500/30 mix-blend-multiply',
    cardShadowClass: 'hover:shadow-[0_30px_60px_rgba(14,165,233,0.2)]',
    contentBgClass: 'bg-gradient-to-b from-white to-blue-50/50',
    delay: 0.2,
    Icon: BriefcaseIcon
  },
  {
    key: '2',
    imageSrc: '/imgs/A futuristic business environm/image_1.webp',
    gradientOverlayClass:
      'bg-gradient-to-t from-orange-900/90 via-orange-600/50 to-yellow-500/30 mix-blend-multiply',
    cardShadowClass: 'hover:shadow-[0_30px_60px_rgba(245,158,11,0.2)]',
    contentBgClass: 'bg-gradient-to-b from-white to-orange-50/50',
    delay: 0.3,
    Icon: UsersIcon
  }
];

export function LeadershipPhilosophy() {
  const t = useTranslations('administrativeApparatus.leadershipPhilosophy');

  return (
    <section
      id="philosophy"
      className=" bg-gradient-to-b from-amber-50 via-rose-50 to-purple-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 start-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -start-40 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -end-40 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className=" mx-auto p-[5%] relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-20">
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
              once: true,
              margin: '-100px'
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
              once: true,
              margin: '-100px'
            }}
            transition={{
              delay: 0.1
            }}
            className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-slate-700 leading-relaxed font-medium">
            {t('intro')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {leadershipPillars.map((pillar) => (
            <LeadershipPillarCard
              key={pillar.key}
              title={t(`pillars.${pillar.key}.title`)}
              description={t(`pillars.${pillar.key}.description`)}
              imageSrc={pillar.imageSrc}
              imageAlt={t(`pillars.${pillar.key}.imageAlt`)}
              gradientOverlayClass={pillar.gradientOverlayClass}
              cardShadowClass={pillar.cardShadowClass}
              contentBgClass={pillar.contentBgClass}
              delay={pillar.delay}
              Icon={pillar.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}