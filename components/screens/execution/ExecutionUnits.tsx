"use client";
import {
  CompassIcon,
  SettingsIcon,
  ShieldIcon,
  MessageSquareIcon,
  BarChart3Icon,
  LightbulbIcon
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
export function ExecutionUnits() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('execution.executionUnits');
  const units = [
  {
    icon: <CompassIcon className="w-6 h-6 text-white" />,
    gradient: 'from-blue-600 to-blue-400',
    image:
    '/imgs/A customs consulting scene wit/image_9.webp'
  },
  {
    icon: <SettingsIcon className="w-6 h-6 text-white" />,
    gradient: 'from-indigo-600 to-indigo-400',
    image:
    '/imgs/A logistics consulting landsca/image_8.webp'
  },
  {
    icon: <ShieldIcon className="w-6 h-6 text-white" />,
    gradient: 'from-emerald-600 to-emerald-400',
    image:
    '/imgs/A supply chain consulting envi/image_29.webp'
  },
  {
    icon: <MessageSquareIcon className="w-6 h-6 text-white" />,
    gradient: 'from-amber-500 to-amber-400',
    image:
    '/imgs/A luminous office space with r/image_13.webp'
  },
  {
    icon: <BarChart3Icon className="w-6 h-6 text-white" />,
    gradient: 'from-purple-600 to-purple-400',
    image:
    '/imgs/A modern airy workspace with f/image_14.webp'
  },
  {
    icon: <LightbulbIcon className="w-6 h-6 text-white" />,
    gradient: 'from-rose-600 to-rose-400',
    image:
    '/imgs/A modern conceptual office wit/image_7.webp'
  }];

  return (
    <section className=" bg-white p-[5%]">
      <div className=" mx-auto">
        <div className="text-center mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {units.map((unit, index) =>
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group `}>
            
              {/* Image Header with Gradient Overlay */}
              <div className="h-48 md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] relative overflow-hidden">
                <Image
                src={unit.image}
                alt={t(`units.${index}.title`)}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                width={600}
                height={600}
              />
              
                <div
                className={`absolute inset-0 bg-gradient-to-t ${unit.gradient} opacity-60 mix-blend-multiply`}>
              </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                {/* Icon Badge */}
                <div
                className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 rounded-xl bg-gradient-to-br ${unit.gradient} flex items-center justify-center shadow-lg border-2 border-white/30`}>
                
                  {unit.icon}
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-3">
                  {t(`units.${index}.title`)}
                </h3>
                <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600">
                  {t(`units.${index}.description`)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}