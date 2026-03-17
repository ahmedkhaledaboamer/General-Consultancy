 "use client";
import { motion } from 'framer-motion';
import {
  FactoryIcon,
  SproutIcon,
  PlaneIcon,
  ZapIcon,
  HeartIcon,
  GraduationCapIcon,
  TrophyIcon,
  ShoppingBagIcon,
  CpuIcon,
} from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

const sectorIcons = [
  FactoryIcon,
  SproutIcon,
  PlaneIcon,
  ZapIcon,
  HeartIcon,
  GraduationCapIcon,
  TrophyIcon,
  ShoppingBagIcon,
  CpuIcon,
];

export function SectorServices() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('home.sectorServices');

  const sectorsData = t.raw('sectors') as {
    title: string;
    items: string[];
  }[];

  const sectors = sectorsData.map((sector, index) => ({
    ...sector,
    icon: sectorIcons[index],
    image:
      index === 0
        ? '/imgs/A business development strateg/image_41.webp'
        : index === 1
        ? '/imgs/A conceptual strategic plannin/image_5.webp'
        : index === 2
        ? '/imgs/A corporate analytics environm/image_38.webp'
        : index === 3
        ? '/imgs/A flexible strategy adaptation/image_41.webp'
        : index === 4
        ? '/imgs/A futuristic strategic outlook/image_2.webp'
        : index === 5
        ? '/imgs/A modern advisory strategy des/image_11.webp'
        : index === 6
        ? '/imgs/A modern operational strategy/image_4.webp'
        : index === 7
        ? '/imgs/A modern strategic planning en/image_9.webp'
        : '/imgs/A multidisciplinary strategic/image_7.webp',
    overlay:
      index === 0
        ? 'from-blue-900/90 to-blue-600/80'
        : index === 1
        ? 'from-emerald-900/90 to-emerald-600/80'
        : index === 2
        ? 'from-orange-900/90 to-orange-500/80'
        : index === 3
        ? 'from-yellow-900/90 to-amber-500/80'
        : index === 4
        ? 'from-rose-900/90 to-rose-500/80'
        : index === 5
        ? 'from-purple-900/90 to-purple-600/80'
        : index === 6
        ? 'from-red-900/90 to-red-600/80'
        : index === 7
        ? 'from-teal-900/90 to-teal-500/80'
        : 'from-indigo-900/90 to-indigo-600/80',
    colSpan:
      index === 0 || index === 5
        ? 'md:col-span-2 lg:col-span-2'
        : index === 3 
        ? 'md:col-span-2 lg:col-span-1'
        : index === 6
        ? 'md:col-span-1 lg:col-span-1'
        : index === 7
        ? 'md:col-span-1 lg:col-span-2'
        : 'md:col-span-1 lg:col-span-1',
  }));

  return (
    <section id="sectors" className=" p-[5%]  bg-navy relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 bg-[url('/imgs/A planning phase environment w/image_37.webp')] bg-cover bg-center mix-blend-screen"></div>

      <div className=" relative z-10">
        <div className="text-center   mb-20">
          <motion.div
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
            }}>
            <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white mb-6">
              {t('titlePrefix')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-sky">
                {t('titleHighlight')}
              </span>
            </h2>
            <p className="text-xl xl:text-2xl 2xl:text-3xl text-slate-300 font-light">
              {t('description')}
            </p>
          </motion.div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px] md:auto-rows-[400px] xl:auto-rows-[500px] 2xl:auto-rows-[600px]">
          {sectors.map((sector, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.95
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
              delay: index * 0.05
            }}
            className={`relative rounded-3xl  overflow-hidden group shadow-2xl ${sector.colSpan}`}>
            
              {/* Background Image */}
              <Image
                src={sector.image}
                alt={sector.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                width={800}
                height={800}
                />
            

              {/* Colored Gradient Overlay */}
              <div
              className={`absolute inset-0 bg-gradient-to-br ${sector.overlay} mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80`}>
            </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 transform group-hover:-translate-y-2 transition-transform duration-300 border border-white/30 shadow-lg">
                  <sector.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white mb-4 drop-shadow-md">
                  {sector.title}
                </h3>

                {/* Mobile & Tablet: visible by default, Desktop (lg+): on hover */}
                <div className="overflow-hidden h-auto lg:h-0 lg:group-hover:h-auto transition-all duration-500 ease-in-out mt-2">
                  <ul className="space-y-2 pt-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {sector.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm md:text-base xl:text-lg 2xl:text-xl text-white/90 font-medium"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-white mt-1.5 text-sm md:text-base xl:text-lg 2xl:text-xl ${
                            isRTL ? 'ml-2' : 'mr-2'
                          } flex-shrink-0 shadow-[0_0_5px_rgba(255,255,255,0.8)]`}
                        ></span>
                        <span className="drop-shadow-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}