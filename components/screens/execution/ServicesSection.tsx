"use client";
import {
  LayoutIcon,
  CogIcon,
  FolderKanbanIcon,
  GaugeIcon
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
export function ServicesSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('execution.services');
  const services = [
  {
    icon: <LayoutIcon className="w-10 h-10 text-blue-600" />,
    color: 'blue'
  },
  {
    icon: <CogIcon className="w-10 h-10 text-purple-600" />,
    color: 'purple'
  },
  {
    icon: <FolderKanbanIcon className="w-10 h-10 text-emerald-600" />,
    color: 'emerald'
  },
  {
    icon: <GaugeIcon className="w-10 h-10 text-amber-600" />,
    color: 'amber'
  }];

  return (
    <section id="services" className="p-[5%] bg-white relative">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className={`w-full lg:w-1/3 text-center ${!isRTL ? 'md:text-left' : 'md:text-right'}`}>
            <h2 className={`text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-6 leading-tight `}>
              {t('titleMain')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {t('titleHighlight')}
              </span>
            </h2>
            <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 mb-8 leading-relaxed">
              {t('description')}
            </p>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/imgs/A conceptual corporate executi/image_28.webp"
                alt={t('imageAlt')}
                className="w-full h-64 md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] object-cover"
                width={800}
                height={800}
              />
              
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) =>
              <div
                key={index}
                className={`flex flex-col items-center justify-center md:items-start bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-${service.color}-300 transition-all duration-300 group`}>
                
                  <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-${service.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-${service.color}-100 transition-all duration-300`}>
                  
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {t(`items.${index}.title`)}
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}