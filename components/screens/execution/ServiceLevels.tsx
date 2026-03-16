"use client";
import {
  StarIcon,
  ZapIcon,
  CrownIcon,
  DiamondIcon,
  CheckIcon
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
export function ServiceLevels() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('execution.serviceLevels');
  const levels = [
  {
    key: 'basic',
    icon: <StarIcon className="w-8 h-8 text-orange-500" />,
    color: 'orange',
    popular: false,
    featureCount: 3
  },
  {
    key: 'advanced',
    icon: <ZapIcon className="w-8 h-8 text-slate-500" />,
    color: 'slate',
    popular: false,
    featureCount: 4

  },
  {
    key: 'full',
    icon: <CrownIcon className="w-8 h-8 text-amber-500" />,
    color: 'amber',
    popular: true,
    featureCount: 5

  },
  {
    key: 'vip',
    icon: <DiamondIcon className="w-8 h-8 text-purple-500" />,
    color: 'purple',
    popular: false,
    featureCount: 6

  }];

  const getColorClasses = (color: string, popular: boolean) => {
    const baseClasses =
    'bg-white border rounded-3xl p-8 transition-all duration-300 relative flex flex-col';
    if (popular) {
      return `${baseClasses} border-amber-400 shadow-2xl shadow-amber-500/20 scale-100 md:scale-105 z-10`;
    }
    return `${baseClasses} border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-2`;
  };
  return (
    <section id="service-levels" className=" bg-gray-50 px-[5%] py-[2%]">
      <div className=" mx-auto">
        {/* Image Banner Header */}
        <div className="relative rounded-3xl overflow-hidden mb-16 h-56 md:h-72 lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
          <Image
            src="/imgs/A professional office setup wi/image_6.webp"
            alt={t('title')}
            className="w-full h-full object-cover"
            width={1200}
            height={1200}
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/80 to-purple-900/90"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4">
              {t('title')}
            </h2>
            <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-blue-100">
              {t('subtitle')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {levels.map((level, index) =>
          <div
            key={index}
            className={getColorClasses(level.color, level.popular)}>
            
              {level.popular &&
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-4 py-1 rounded-full text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold shadow-md whitespace-nowrap">
                  {t('popularBadge')}
                </div>
            }

              <div className="mb-6 flex justify-center">
                <div className={`p-4 rounded-2xl md:rounded-3xl lg:rounded-4xl xl:rounded-5xl 2xl:rounded-6xl bg-${level.color}-50`}>
                  {level.icon}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center text-gray-900 mb-4">
                {t(`levels.${level.key}.title`)}
              </h3>
              <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 text-center mb-8 min-h-[80px]">
                {t(`levels.${level.key}.description`)}
              </p>

              <div className="flex-grow">
                <ul className="space-y-4">
                  {Array.from({ length: level.featureCount }).map((_, fIndex) =>
                <li key={fIndex} className="flex items-start">
                      <CheckIcon
                    className={`w-5 h-5 ${!isRTL ? 'mr-3' : 'ml-3'} flex-shrink-0 text-${level.color}-500`} />
                  
                      <span className="text-gray-700 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                        {t(`levels.${level.key}.features.${fIndex}`)}
                      </span>
                    </li>
                )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}