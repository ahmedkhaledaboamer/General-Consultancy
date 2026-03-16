"use client";
import {
  InboxIcon,
  MapPinIcon,
  PlayCircleIcon,
  RefreshCcwIcon,
  FlagIcon
} from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
export function FileJourney() {
  const t = useTranslations('execution.fileJourney');
  const phases = [
  {
    icon: <InboxIcon className="w-6 h-6" />,
    color: 'bg-blue-500',
    image:
    '/imgs/A modern corporate operations/image_3.webp'
  },
  {
    icon: <MapPinIcon className="w-6 h-6" />,
    color: 'bg-indigo-500',
    image:
    '/imgs/A modern editorial office envi/image_29.webp'
  },
  {
    icon: <PlayCircleIcon className="w-6 h-6" />,
    color: 'bg-purple-500',
    image:
    '/imgs/A modern editorial workspace w/image_2.webp'
  },
  {
    icon: <RefreshCcwIcon className="w-6 h-6" />,
    color: 'bg-pink-500',
    image:
    '/imgs/A modern editorialstyle office/image_14.webp'
  },
  {
    icon: <FlagIcon className="w-6 h-6" />,
    color: 'bg-emerald-500',
    image:
    '/imgs/A modern office with layered g/image_16.webp'
  }];

  return (
    <section className=" relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/A polished editorial office wi/image_9.webp"
          alt={t('title')}
          className="w-full h-full object-cover opacity-5"
          width={1920}
          height={1920}
        />
        
      </div>

      <div className=" mx-auto p-[5%] relative z-10">
        <div className="text-center mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 right-0 left-0 h-1 bg-gradient-to-l from-blue-500 via-purple-500 to-emerald-500 rounded-full opacity-30"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {phases.map((phase, index) =>
            <div
              key={index}
              className="flex flex-col items-center text-center group">
              
                {/* Phase Image */}
                <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                  <Image
                  src={phase.image}
                  alt={t(`phases.${index}.title`)}
                  className="w-full h-full object-cover"
                  width={300}
                  height={300}
                />
                
                  <div
                  className={`absolute inset-0 ${phase.color} opacity-30`}>
                </div>
                </div>

                <div
                className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 rounded-xl ${phase.color} text-white flex items-center justify-center shadow-lg mb-4 transform transition-transform duration-300 group-hover:rotate-6 relative`}>
                
                  {phase.icon}
                  {/* Mobile connecting line */}
                  {index !== phases.length - 1 &&
                <div className="lg:hidden absolute top-full right-1/2 w-0.5 h-8 bg-gray-200 translate-x-1/2"></div>
                }
                </div>
                <h3 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-bold text-gray-900 mb-2">
                  {t(`phases.${index}.title`)}
                </h3>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
                  {t(`phases.${index}.description`)}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}