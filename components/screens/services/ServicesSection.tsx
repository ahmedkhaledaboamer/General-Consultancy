"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { services } from '@/components/screens/services/services';
import { useLocale } from 'next-intl';
import Image from 'next/image';
const IconComponent = ({
  name,
  className



}: {name: string;className?: string;}) => {
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[name] || Icons.HelpCircle;
  return <Icon className={className} />;
};
const categoryColors = [
{
  bg: 'bg-amber-500',
  text: 'text-amber-500',
  border: 'border-amber-400',
  gradient: 'from-amber-400 to-amber-600',
  lightBg: 'bg-amber-50',
  ring: 'ring-amber-400/30'
},
{
  bg: 'bg-blue-500',
  text: 'text-blue-500',
  border: 'border-blue-400',
  gradient: 'from-blue-400 to-blue-600',
  lightBg: 'bg-blue-50',
  ring: 'ring-blue-400/30'
},
{
  bg: 'bg-rose-500',
  text: 'text-rose-500',
  border: 'border-rose-400',
  gradient: 'from-rose-400 to-rose-600',
  lightBg: 'bg-rose-50',
  ring: 'ring-rose-400/30'
},
{
  bg: 'bg-emerald-500',
  text: 'text-emerald-500',
  border: 'border-emerald-400',
  gradient: 'from-emerald-400 to-emerald-600',
  lightBg: 'bg-emerald-50',
  ring: 'ring-emerald-400/30'
},
{
  bg: 'bg-orange-500',
  text: 'text-orange-500',
  border: 'border-orange-400',
  gradient: 'from-orange-400 to-orange-600',
  lightBg: 'bg-orange-50',
  ring: 'ring-orange-400/30'
},
{
  bg: 'bg-cyan-500',
  text: 'text-cyan-500',
  border: 'border-cyan-400',
  gradient: 'from-cyan-400 to-cyan-600',
  lightBg: 'bg-cyan-50',
  ring: 'ring-cyan-400/30'
},
{
  bg: 'bg-purple-500',
  text: 'text-purple-500',
  border: 'border-purple-400',
  gradient: 'from-purple-400 to-purple-600',
  lightBg: 'bg-purple-50',
  ring: 'ring-purple-400/30'
},
{
  bg: 'bg-pink-500',
  text: 'text-pink-500',
  border: 'border-pink-400',
  gradient: 'from-pink-400 to-pink-600',
  lightBg: 'bg-pink-50',
  ring: 'ring-pink-400/30'
},
{
  bg: 'bg-indigo-500',
  text: 'text-indigo-500',
  border: 'border-indigo-400',
  gradient: 'from-indigo-400 to-indigo-600',
  lightBg: 'bg-indigo-50',
  ring: 'ring-indigo-400/30'
},
{
  bg: 'bg-yellow-500',
  text: 'text-yellow-500',
  border: 'border-yellow-400',
  gradient: 'from-yellow-400 to-yellow-600',
  lightBg: 'bg-yellow-50',
  ring: 'ring-yellow-400/30'
}];

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const displayedCategories = activeCategory ?
  services.filter((cat) => cat.id === activeCategory) :
  services;
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <section id="services" className="bg-gray-50 pb-24">
      {/* Hero Banner */}
      <div className="relative h-80 md:h-96 w-full mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imgs/A cuttingedge technology consu/image_42.webp"
            alt="مكتب حديث"
            className="w-full h-full object-cover"
            width={1400}
            height={800}
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/70 to-gray-50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto pt-10">
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
            
            <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-heading font-bold text-white mb-6 drop-shadow-lg">
              منظومة خدماتنا المتكاملة
            </h2>
            <p className="text-lg xl:text-xl 2xl:text-3xl text-gray-200 font-body leading-relaxed mx-auto">
              تعتمد خدماتنا على منهجية متكاملة تجمع بين الخبرة الاستشارية
              والرؤية الاستثمارية، مما يتيح للمؤسسات والمستثمرين الوصول إلى حلول
              عملية تدعم اتخاذ القرار وتحقق نتائج ملموسة.
            </p>
          </motion.div>
        </div>
      </div>

      <div className=" mx-auto px-[5%] -mt-10 relative z-20">
        {/* Filter Pills */}
        <div className="mb-16 overflow-x-auto hide-scrollbar pb-4">
          <div className="flex gap-3 min-w-max px-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`cursor-pointer px-6 py-3 rounded-full font-body font-medium transition-all shadow-sm text-sm md:text-base xl:text-lg 2xl:text-xl ${activeCategory === null ? 'bg-navy text-white shadow-md shadow-navy/20' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}>
              
              عرض الكل
            </button>
            {services.map((category, index) => {
              const colorTheme = categoryColors[index % categoryColors.length];
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full font-body font-medium transition-all shadow-sm text-sm md:text-base xl:text-lg 2xl:text-xl ${isActive ? `bg-gradient-to-r ${colorTheme.gradient} text-white shadow-md` : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}>
                  
                  <IconComponent
                    name={category.icon}
                    className={`w-4 h-4 md:w-6 md:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 ${isActive ? 'text-white' : colorTheme.text}`} />
                  
                  {category.name}
                </button>);

            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category) => {
              const originalIndex = services.findIndex(
                (c) => c.id === category.id
              );
              const colorTheme =
              categoryColors[originalIndex % categoryColors.length];
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                    y: 20
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                    y: -20
                  }}
                  transition={{
                    duration: 0.4
                  }}
                  className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden">
                  
                  {/* Category Header with Image */}
                  <div className="relative h-48 md:h-56 lg:h-64 2xl:h-72 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                    
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent`} />
                    
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${colorTheme.gradient}`} />
                    

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end gap-5">
                      <div
                        className={`w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 rounded-2xl bg-gradient-to-br ${colorTheme.gradient} flex items-center justify-center text-white shadow-xl flex-shrink-0 ring-4 ${colorTheme.ring}`}>
                        
                        <IconComponent
                          name={category.icon}
                          className="w-8 h-8" />
                        
                      </div>
                      <div>
                        <h3 className="text-sm md:text-3xl xl:text-4xl 2xl:text-5xl font-heading font-bold text-white drop-shadow-md">
                          {category.name}
                        </h3>
                        <p className="text-gray-300 font-body text-sm md:text-base xl:text-lg 2xl:text-xl mt-1">
                          {category.subServices.length} خدمة متخصصة
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sub-services Grid */}
                  <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.subServices.map((sub, idx) =>
                      <motion.div
                        key={idx}
                        whileHover={{
                          y: -6
                        }}
                        className="group rounded-xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300">
                        
                          {/* Sub-service Image */}
                          <div className="relative h-40 md:h-48 lg:h-72 2xl:h-120 overflow-hidden">
                            <Image
                              src={sub.image}
                              alt={sub.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              width={400}
                              height={400}
                            />
                          
                            <div
                            className={`absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity`} />
                          
                            <div
                            className={`absolute top-3 ${!isRTL ? 'left-3' : 'right-3'} w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-lg bg-gradient-to-br ${colorTheme.gradient} flex items-center justify-center text-white shadow-lg`}>
                            
                              <IconComponent
                              name={sub.icon}
                              className="w-5 h-5" />
                            
                            </div>
                          </div>

                          {/* Sub-service Content */}
                          <div
                          className={`p-5 md:p-6 xl:p-7 2xl:p-8 border-t-3 border-transparent group-hover:border-t-[3px]`}
                          style={{
                            borderTopColor: 'transparent'
                          }}>
                          
                            <div
                            className={`w-full h-0.5 bg-gradient-to-r ${colorTheme.gradient} mb-4 rounded-full opacity-40 group-hover:opacity-100 transition-opacity`} />
                          
                            <h4 className="text-base md:text-lg xl:text-xl 2xl:text-2xl font-heading font-bold text-navy mb-2 leading-snug">
                              {sub.name}
                            </h4>
                            <p className="text-gray-500 font-body text-sm md:text-base xl:text-lg 2xl:text-xl leading-relaxed line-clamp-3">
                              {sub.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>);

            })}
          </AnimatePresence>
        </div>
      </div>
    </section>);

}