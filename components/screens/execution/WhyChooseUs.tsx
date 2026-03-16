"use client";
import {
  TrendingUpIcon,
  AwardIcon,
  ClipboardCheckIcon,
  PuzzleIcon,
  EyeIcon
} from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
export function WhyChooseUs() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('execution.whyChooseUs');
  const reasons = [
  {
    icon: <AwardIcon className="w-8 h-8 text-blue-600" />,
    bgColor: 'bg-blue-100'
  },
  {
    icon: <ClipboardCheckIcon className="w-8 h-8 text-emerald-600" />,
    bgColor: 'bg-emerald-100'
  },
  {
    icon: <TrendingUpIcon className="w-8 h-8 text-purple-600" />,
    bgColor: 'bg-purple-100'
  },
  {
    icon: <PuzzleIcon className="w-8 h-8 text-amber-600" />,
    bgColor: 'bg-amber-100'
  },
  {
    icon: <EyeIcon className="w-8 h-8 text-rose-600" />,
    bgColor: 'bg-rose-100'
  }];

  return (
    <section className=" bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/A conceptual execution roadmap/image_4.webp"
          alt={t('title')}
          className="w-full h-full object-cover opacity-15"
          width={1920}
          height={1920}
        />
        
      </div>
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage:
          'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className=" mx-auto p-[5%] relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Side */}
          <div className="w-full lg:w-2/5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
              <Image
                src="/imgs/A conceptual governance and co/image_3.webp"
                alt={t('title')}
                className="w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] object-cover"
                width={800}
                height={800}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
            </div>
            {/* Decorative blob */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-3/5">
            <div className={`text-center ${!isRTL ? 'md:text-left' : 'md:text-right'} mb-12`}>
              <h2 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4">
                {t('title')}
              </h2>
              <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-blue-200">
                {t('subtitle')}
              </p>
            </div>

            <div className="space-y-4">
              {reasons.map((reason, index) =>
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-all duration-300 group flex items-center gap-5">
                
                  <div
                  className={`${reason.bgColor} w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 2xl:w-22 2xl:h-22 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-1 text-white">
                      {t(`reasons.${index}.title`)}
                    </h3>
                    <p className="text-blue-100">
                      {t(`reasons.${index}.description`)}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}