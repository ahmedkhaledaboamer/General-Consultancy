"use client";
import { motion } from 'framer-motion';
import {
  TargetIcon,
  BarChartIcon,
  MessageCircleIcon,
  RocketIcon,
  CompassIcon
} from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type SuccessStepCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  phaseLabel: string;
  phaseColorClass: string;
  isRightAligned: boolean;
  iconGradientClass: string;
  iconShadowClass: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function SuccessStepCard({
  title,
  description,
  imageSrc,
  imageAlt,
  phaseLabel,
  phaseColorClass,
  isRightAligned,
  iconGradientClass,
  iconShadowClass,
  Icon
}: SuccessStepCardProps) {
  const containerAlignmentClass = isRightAligned
    ? 'md:justify-end md:ps-16 md:text-start'
    : 'md:justify-start md:pe-16 md:text-end';

  const contentLayoutClass = isRightAligned
    ? 'flex flex-col sm:flex-row'
    : 'flex flex-col sm:flex-row-reverse';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      className={`relative flex flex-col md:flex-row items-start md:items-center group min-h-[4rem] md:min-h-0 ${containerAlignmentClass}`}>
      <div
        className={`absolute -start-5 md:start-6 w-14 h-14 md:w-16 md:h-16 -translate-x-1/2 md:left-1/2 md:start-auto md:-translate-x-1/2 ${iconGradientClass} rounded-full flex items-center justify-center z-10 ${iconShadowClass} border-4 border-white group-hover:scale-110 transition-transform top-3 md:top-0`}>
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
      </div>
      <div className="w-full ms-0 md:w-1/2 md:max-w-[calc(50%-3rem)] text-center min-w-0">
        <div
          className={`bg-white/10 backdrop-blur-lg border border-white/20 p-5 sm:p-8 rounded-2xl md:rounded-3xl hover:bg-white/20 transition-colors shadow-2xl ${contentLayoutClass} gap-4 sm:gap-6 items-center`}>
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 rounded-xl md:rounded-2xl overflow-hidden shrink-0 shadow-lg border-2 border-white/30">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
              width={96}
              height={96}
            />
          </div>
          <div className="min-w-0">
            <span
              className={`${phaseColorClass} font-bold text-sm md:text-lg xl:text-xl 2xl:text-2xl mb-1 md:mb-2 block`}>
              {phaseLabel}
            </span>
            <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-2 md:mb-3">
              {title}
            </h3>
            <p className="text-white/80 text-sm md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed break-words">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const successSteps = [
  {
    key: '0',
    imageSrc: '/imgs/A futuristic renewable energy/image_13.webp',
    imageAlt: 'تحديد الأهداف',
    phaseColorClass: 'text-purple-300',
    isRightAligned: false,
    iconGradientClass: 'bg-gradient-to-br from-purple-400 to-indigo-600',
    iconShadowClass: 'shadow-[0_0_20px_rgba(168,85,247,0.6)]',
    Icon: TargetIcon
  },
  {
    key: '1',
    imageSrc: '/imgs/A futuristic office scene with/image_12.webp',
    imageAlt: 'تحليل الفرص',
    phaseColorClass: 'text-blue-300',
    isRightAligned: true,
    iconGradientClass: 'bg-gradient-to-br from-blue-400 to-cyan-600',
    iconShadowClass: 'shadow-[0_0_20px_rgba(59,130,246,0.6)]',
    Icon: BarChartIcon
  },
  {
    key: '2',
    imageSrc: '/imgs/A longterm business relationsh/image_36.webp',
    imageAlt: 'تطوير الاستراتيجية',
    phaseColorClass: 'text-teal-300',
    isRightAligned: false,
    iconGradientClass: 'bg-gradient-to-br from-teal-400 to-emerald-600',
    iconShadowClass: 'shadow-[0_0_20px_rgba(20,184,166,0.6)]',
    Icon: MessageCircleIcon
  },
  {
    key: '3',
    imageSrc: '/imgs/A luminous conceptual office s/image_1.webp',
    imageAlt: 'التنفيذ',
    phaseColorClass: 'text-pink-300',
    isRightAligned: true,
    iconGradientClass: 'bg-gradient-to-br from-rose-400 to-pink-600',
    iconShadowClass: 'shadow-[0_0_20px_rgba(244,114,182,0.6)]',
    Icon: RocketIcon
  },
  {
    key: '4',
    imageSrc: '/imgs/A luminous editorial workspace/image_16.webp',
    imageAlt: 'النمو المستدام',
    phaseColorClass: 'text-amber-300',
    isRightAligned: false,
    iconGradientClass: 'bg-gradient-to-br from-amber-400 to-orange-600',
    iconShadowClass: 'shadow-[0_0_20px_rgba(245,158,11,0.6)]',
    Icon: CompassIcon
  }
];

export function SuccessRoadmap() {
  const t = useTranslations('administrativeApparatus.successRoadmap');

  return (
    <section className=" relative overflow-hidden text-white">
      {/* Blurred background image and gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/A luminous modern office with/image_5.webp"
          alt="City at Night"
          className="w-full h-full object-cover blur-[2px] scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/95 via-blue-900/90 to-cyan-900/95 mix-blend-multiply" />
      </div>

      <div className="mx-auto p-[5%] relative z-10">
        <div className="text-center mb-12 md:mb-24">
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
            className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-4 md:mb-8 text-shadow-lg">
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
            className="text-base md:text-xl xl:text-2xl 2xl:text-3xl text-white/90 leading-relaxed font-medium text-shadow-md mx-auto">
            {t('intro')}
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical gradient line: start-aligned on mobile, centered on desktop */}
          <div
            className="absolute top-0 bottom-0 start-8 md:start-6 w-2 md:start-auto md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-purple-500 via-rose-500 to-amber-500 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            aria-hidden
          />

          <div className="space-y-10 md:space-y-16">
            {successSteps.map((step) => (
              <SuccessStepCard
                key={step.key}
                title={t(`steps.${step.key}.title`)}
                description={t(`steps.${step.key}.description`)}
                imageSrc={step.imageSrc}
                imageAlt={t(`steps.${step.key}.imageAlt`)}
                phaseLabel={t(`steps.${step.key}.phaseLabel`)}
                phaseColorClass={step.phaseColorClass}
                isRightAligned={step.isRightAligned}
                iconGradientClass={step.iconGradientClass}
                iconShadowClass={step.iconShadowClass}
                Icon={step.Icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}