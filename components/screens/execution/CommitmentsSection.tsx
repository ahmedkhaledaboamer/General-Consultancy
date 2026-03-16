"use client";
import { ClockIcon, ActivityIcon, WrenchIcon, FileTextIcon } from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
export function CommitmentsSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('execution.commitments');
  const commitments = [
  {
    icon: <ClockIcon className="w-8 h-8 text-blue-500" />,
    image:
    '/imgs/A collaborative conceptual wor/image_27.webp'
  },
  {
    icon: <ActivityIcon className="w-8 h-8 text-purple-500" />,
    image:
    '/imgs/A collaborative task distribut/image_7.webp'
  },
  {
    icon: <WrenchIcon className="w-8 h-8 text-emerald-500" />,
    image:
    '/imgs/A conceptual collaboration eco/image_18.webp'
  },
  {
    icon: <FileTextIcon className="w-8 h-8 text-amber-500" />,
    image:
    '/imgs/A longterm growth support scen/image_31.webp'
  }];

  return (
    <section className="p-[5%] bg-gray-50">
      <div className=" mx-auto">
        <div className="text-center mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, index) =>
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group overflow-hidden">
            
              {/* Card Image */}
              <div className="h-40 md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden relative">
                <Image
                src={item.image}
                alt={t(`items.${index}.title`)}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                width={400}
                height={400}
              />
              
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                <div className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md`}>
                  {item.icon}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-3">
                  {t(`items.${index}.title`)}
                </h3>
                <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600">
                  {t(`items.${index}.description`)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}