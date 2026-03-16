"use client";
import { motion } from 'framer-motion';
import {
  ClipboardListIcon,
  LinkIcon,
  EyeIcon,
  TrendingUpIcon
} from 'lucide-react';
import Image from 'next/image';

type ProcessStepCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  borderColorClass: string;
  shadowColorClass: string;
  badgeBgClass: string;
  badgeNumber: string;
  titleColorClass: string;
  delay: number;
  containerClassName?: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function ProcessStepCard({
  title,
  description,
  imageSrc,
  imageAlt,
  borderColorClass,
  shadowColorClass,
  badgeBgClass,
  badgeNumber,
  titleColorClass,
  delay,
  containerClassName,
  Icon
}: ProcessStepCardProps) {
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
      className={`flex flex-col items-center text-center group ${containerClassName ?? ''}`}>
      <div
        className={`w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 rounded-full border-4 ${borderColorClass} p-1 mb-8 ${shadowColorClass} group-hover:scale-110 transition-transform duration-500 relative bg-slate-900`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover rounded-full opacity-70 group-hover:opacity-100 transition-opacity"
          width={200}
          height={200}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-10 h-10 text-white drop-shadow-lg" />
        </div>
        <span
          className={`absolute -top-2 -end-2 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 rounded-full ${badgeBgClass} text-white flex items-center justify-center font-bold text-lg shadow-lg border-2 border-white`}>
          {badgeNumber}
        </span>
      </div>
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl shadow-xl w-full">
        <h3
          className={`text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-3 ${titleColorClass}`}>
          {title}
        </h3>
        <p className="text-white/80 text-base md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

const processSteps: ProcessStepCardProps[] = [
  {
    title: 'التخطيط الاستراتيجي',
    description:
      'وضع الخطط والرؤى التي توجه عمل الشركة على المدى القصير والطويل.',
    imageSrc: '/imgs/A strategic startup environmen/image_72.webp',
    imageAlt: 'التخطيط',
    borderColorClass: 'border-purple-400',
    shadowColorClass: 'shadow-[0_0_30px_rgba(168,85,247,0.5)]',
    badgeBgClass: 'bg-purple-500',
    badgeNumber: '1',
    titleColorClass: 'text-purple-300',
    delay: 0.1,
    containerClassName: '',
    Icon: ClipboardListIcon
  },
  {
    title: 'التنسيق المؤسسي',
    description:
      'التعاون بين الإدارات المختلفة لضمان تنفيذ المشاريع والخدمات بكفاءة.',
    imageSrc: '/imgs/A vibrant startup incubator wi/image_29.webp',
    imageAlt: 'التنسيق',
    borderColorClass: 'border-blue-400',
    shadowColorClass: 'shadow-[0_0_30px_rgba(59,130,246,0.5)]',
    badgeBgClass: 'bg-blue-500',
    badgeNumber: '2',
    titleColorClass: 'text-blue-300',
    delay: 0.2,
    containerClassName: 'md:mt-16',
    Icon: LinkIcon
  },
  {
    title: 'الإشراف والمتابعة',
    description:
      'متابعة تنفيذ الخطط والبرامج لضمان تحقيق الأهداف المحددة.',
    imageSrc: '/imgs/A vibrant tech startup acceler/image_37.webp',
    imageAlt: 'الإشراف',
    borderColorClass: 'border-teal-400',
    shadowColorClass: 'shadow-[0_0_30px_rgba(20,184,166,0.5)]',
    badgeBgClass: 'bg-teal-500',
    badgeNumber: '3',
    titleColorClass: 'text-teal-300',
    delay: 0.3,
    containerClassName: '',
    Icon: EyeIcon
  },
  {
    title: 'التقييم والتطوير',
    description:
      'تقييم الأداء بشكل مستمر والعمل على تحسين العمليات والخدمات.',
    imageSrc: '/imgs/A vibrant tech startup develop/image_2.webp',
    imageAlt: 'التقييم',
    borderColorClass: 'border-pink-400',
    shadowColorClass: 'shadow-[0_0_30px_rgba(244,114,182,0.5)]',
    badgeBgClass: 'bg-pink-500',
    badgeNumber: '4',
    titleColorClass: 'text-pink-300',
    delay: 0.4,
    containerClassName: 'md:mt-16',
    Icon: TrendingUpIcon
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="  relative overflow-hidden text-white">
      {/* Background Image and Vibrant Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/A strategic startup advisory r/image_56.webp"
          alt="Growth Charts"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-800/90 to-fuchsia-900/95 mix-blend-multiply" />
      </div>

      <div className=" mx-auto p-[5%] relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
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
            className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold mb-8 text-shadow-lg">
            كيف يعمل الجهاز الإداري؟
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
            className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-white/90 leading-relaxed font-medium text-shadow-md">
            يعتمد الجهاز الإداري في الشركة على منظومة عمل متكاملة تضمن التنسيق
            بين مختلف الإدارات لتحقيق أفضل النتائج. تمر عملية العمل عبر مجموعة
            من المراحل الأساسية:
          </motion.p>
        </div>

        <div className="relative">
          {/* Rainbow Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 start-0 w-full h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 -translate-y-1/2 z-0 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step) => (
              <ProcessStepCard key={step.badgeNumber} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}