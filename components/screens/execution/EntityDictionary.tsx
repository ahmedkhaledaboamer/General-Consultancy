"use client";
import {
  BookOpenIcon,
  MapIcon,
  ShieldCheckIcon,
  LayersIcon
} from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
export function EntityDictionary() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('execution.entityDictionary');
  const dictionaryItems = [
    {
      icon: <LayersIcon className="w-8 h-8 text-blue-500" />,
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-50',
      image: '/imgs/A healthcare consulting enviro/image_23.webp'
    },
    {
      icon: <MapIcon className="w-8 h-8 text-purple-500" />,
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-50',
      image: '/imgs/A healthcare planning environm/image_24.webp'
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-emerald-500" />,
      borderColor: 'border-emerald-500',
      bgColor: 'bg-emerald-50',
      image: '/imgs/A hospital management consulti/image_3.webp'
    },
    {
      icon: <BookOpenIcon className="w-8 h-8 text-amber-500" />,
      borderColor: 'border-amber-500',
      bgColor: 'bg-amber-50',
      image: '/imgs/A hospitality management consu/image_32.webp'
    }
  ];

  return (
    <section className=" bg-gradient-to-b from-gray-50 to-white p-[5%]">
      <div className=" mx-auto">
        <div className="flex flex-col items-center justify-center relative rounded-3xl overflow-hidden mb-16 h-64 md:h-80 lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
          <Image
            src="/imgs/A modern healthcare developmen/image_8.webp"
            alt={t('title')}
            className="w-full h-full object-cover"
            width={1200}
            height={1200}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
          <div className="absolute text-center p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3">
              {t('title')}
            </h2>
            <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-200">
              {t('subtitle')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dictionaryItems.map((item, index) =>
          <div
            key={index}
            className={`bg-white rounded-2xl md:rounded-3xl lg:rounded-4xl xl:rounded-5xl 2xl:rounded-6xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 ${item.borderColor} relative overflow-hidden group`}>
            
              <div className="h-40 md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden relative">
                <Image
                src={item.image}
                alt={t(`items.${index}.title`)}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                width={400}
                height={400}
              />
              
                <div
                className={`absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent`}>
              </div>
                <div
                className={`absolute top-4 ${!isRTL ? 'left-4' : 'right-4'} w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 rounded-xl ${item.bgColor} flex items-center justify-center shadow-md backdrop-blur-sm`}>
                
                  {item.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-3">
                  {t(`items.${index}.title`)}
                </h3>
                <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 leading-relaxed">
                  {t(`items.${index}.description`)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}