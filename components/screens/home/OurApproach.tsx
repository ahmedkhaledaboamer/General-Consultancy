 "use client";
import { motion } from 'framer-motion';
import {
  SearchIcon,
  MapIcon,
  PenToolIcon,
  PlayCircleIcon,
  RefreshCwIcon,
} from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

const approachMeta = [
  {
    icon: SearchIcon,
    color: 'from-sky-400 to-blue-600',
    image: '/imgs/A welcoming corporate gateway/image_19.webp',
  },
  {
    icon: MapIcon,
    color: 'from-emerald-400 to-teal-600',
    image: '/imgs/A welcoming corporate gateway/image_2.webp',
  },
  {
    icon: PenToolIcon,
    color: 'from-violet-400 to-purple-600',
    image: '/imgs/An elegant corporate setting w/image_3.webp',
  },
  {
    icon: PlayCircleIcon,
    color: 'from-magenta-400 to-pink-600',
    image: '/imgs/An innovative office scene wit/image_19.webp',
  },
  {
    icon: RefreshCwIcon,
    color: 'from-gold to-amber',
    image: '/imgs/A sustainable growth concept w/image_30.webp',
  },
];

export function OurApproach() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('home.ourApproach');

  const items = (t.raw('items') as string[]).map((text, index) => ({
    text,
    icon: approachMeta[index].icon,
    color: approachMeta[index].color,
    image: approachMeta[index].image,
  }));

  return (
    <section className=" p-[5%]  bg-slate-50 relative overflow-hidden">
      <div className=" relative z-10">
        <div className="text-center   mb-24">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-black text-navy mb-6">
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
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
            className="text-xl xl:text-2xl 2xl:text-3xl text-slate-600 font-light">
            {t('description')}
          </motion.p>
        </div>

        <div className="relative">
          {/* Colorful Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-2 bg-gradient-to-l from-sky via-magenta to-gold rounded-full -translate-y-1/2 z-0 opacity-30"></div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4 relative z-10">
            {items.map((item, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="relative flex flex-col items-center w-full lg:w-1/5 group">
              
                {/* Image Card */}
                <div className="w-full md:w-40 xl:w-48 2xl:w-60 h-40 md:h-48 xl:h-52 2xl:h-60 rounded-3xl overflow-hidden shadow-xl mb-6 relative border-4 border-white transform group-hover:-translate-y-4 transition-transform duration-500">
                  <Image
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  width={160}
                  height={160}
                  />
                
                  <div
                  className={`absolute inset-0 bg-gradient-to-t ${item.color} mix-blend-multiply opacity-60 group-hover:opacity-20 transition-opacity duration-500`}>
                </div>

                  {/* Floating Icon */}
                  <div
                  className={`absolute bottom-2 ${!isRTL ? 'left-2' :   'right-2'} w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg border-2 border-white`}>
                  
                    <item.icon className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 2xl:text-2xl text-white" />
                  </div>
                </div>

                <span className="font-bold text-navy text-lg xl:text-xl 2xl:text-2xl text-center mt-2">
                  {item.text}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}