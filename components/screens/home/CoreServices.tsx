 "use client";
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUpIcon,
  LandmarkIcon,
  CompassIcon,
  HeartPulseIcon,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

const serviceIcons = [TrendingUpIcon, LandmarkIcon, CompassIcon, HeartPulseIcon];

export function CoreServices() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isMounted] = useState(typeof window !== 'undefined');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('home.coreServices');

  const services = t.raw('services') as {
    title: string;
    description: string;
    items: string[];
  }[];

  const servicesWithMeta = services.map((service, index) => ({
    ...service,
    icon: serviceIcons[index],
    image:
      index === 0
        ? '/imgs/A dynamic industry ecosystem s/image_5.webp'
        : index === 1
        ? '/imgs/A multidisciplinary industry l/image_17.webp'
        : index === 2
        ? '/imgs/An industrial investment conce/image_10.webp'
        : '/imgs/A strong modern corporate work/image_2.webp',
    gradient:
      index === 0
        ? 'from-sky-500 to-blue-600'
        : index === 1
        ? 'from-emerald-400 to-teal-600'
        : index === 2
        ? 'from-violet-500 to-purple-700'
        : 'from-rose-400 to-pink-600',
  }));

  const activeService =
    expandedIndex !== null ? servicesWithMeta[expandedIndex] : null;
  const ActiveIcon = activeService?.icon;

  return (
    <section id="services" className=" p-[5%]  bg-slate-50 relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-[800px] h-[800px] bg-gradient-to-b from-sky/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-64 w-[600px] h-[600px] bg-gradient-to-t from-violet/5 to-transparent rounded-full blur-3xl"></div>
      </div>

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
            <h2 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black text-navy mb-6">
              {t('sectionTitlePart1')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-violet">
                {t('sectionTitlePart2')}
              </span>
            </h2>
            <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-slate-600 font-light">
              {t('sectionDescription')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {servicesWithMeta.map((service, index) => {
            const isExpanded = expandedIndex === index;
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
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
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group border border-slate-100">
                {/* Header Image Area */}
                <div className="relative h-48 md:h-52 xl:h-60 2xl:h-120 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    width={800}
                    height={800}
                    />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>

                  {/* Icon floating on image */}
                  <div
                    className={`absolute bottom-10 right-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg transform translate-y-1/2 group-hover:-translate-y-1 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 pt-12 flex-1 flex flex-col relative">
                  {/* Colored Left Border Accent */}
                  <div
                    className={`absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b ${service.gradient}`}>
                  </div>

                  <h3 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-navy mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 text-lg md:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed">
                    {service.description}
                  </p>

                  {/* Details Trigger */}
                  <div className="mt-auto ">
                    <button
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                      className="cursor-pointer flex items-center justify-between w-full py-3 border-t border-slate-100 text-navy font-bold hover:text-sky transition-colors">
                      <span>{t('detailsLabel')}</span>
                    </button>
                  </div>
                </div>
              </motion.div>);

          })}
        </div>

        {/* Overlay details panel rendered via portal so it always sits above all sections */}
        {isMounted &&
          createPortal(
            <AnimatePresence>
              {expandedIndex !== null && activeService && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-sm"
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  <motion.div
                    initial={{ y: 40, opacity: 0, scale: 0.98 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 40, opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="relative w-[90%] max-w-4xl max-h-[80vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                  >
                    {/* Close button */}
                    <button
                      onClick={() => setExpandedIndex(null)}
                      className="cursor-pointer absolute top-4 left-4 z-10 rounded-full bg-white/80 px-3 py-1 text-sm md:text-base xl:text-lg 2xl:text-2xl font-medium text-slate-700 shadow hover:bg-white"
                    >
                      {t('modalClose')}
                    </button>

                    {/* Header image */}
                    <div className="relative h-40 md:h-52 overflow-hidden">
                      <Image
                        src={activeService.image}
                        alt={activeService.title}
                        className="w-full h-full object-cover"
                        width={800}
                        height={800}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                      <div className={`absolute bottom-5 ${isRTL ? 'right-6' : 'left-6'} flex items-center gap-3 text-white`}>
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${activeService.gradient} flex items-center justify-center shadow-lg`}
                        >
                          {ActiveIcon && (
                            <ActiveIcon className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
                            {activeService.title}
                          </h3>
                          <p className="text-sm md:text-base xl:text-lg 2xl:text-xl text-slate-100/80">
                            {t('modalDetailsSubtitle')}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col gap-4 overflow-hidden">
                      <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                        {activeService.description}
                      </p>

                      <div className="mt-2 flex-1 overflow-auto pr-1">
                        <ul className="space-y-3">
                          {activeService.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start text-sm md:text-base xl:text-lg 2xl:text-xl text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-100"
                            >
                              <span
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeService.gradient} mt-2  ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0 shadow-sm text-sm md:text-base xl:text-lg 2xl:text-xl`}
                              ></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>,
            document.body
          )}
      </div>
    </section>);

}