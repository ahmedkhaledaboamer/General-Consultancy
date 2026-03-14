"use client";
import { motion } from 'framer-motion';
import { CheckCircle2Icon, LayersIcon } from 'lucide-react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
const offerings = [
{
  text: 'إدارة الاستثمارات وتطوير المحافظ',
  color: 'from-sky-400 to-blue-600'
},
{
  text: 'إعداد الدراسات الاقتصادية والجدوى',
  color: 'from-emerald-400 to-teal-600'
},
{
  text: 'تطوير المشاريع وإدارة التنفيذ',
  color: 'from-violet-400 to-purple-600'
},
{
  text: 'الاستشارات الاستراتيجية والإدارية',
  color: 'from-magenta-400 to-pink-600'
},
{
  text: 'الاستشارات المصرفية والمالية',
  color: 'from-orange-400 to-red-500'
},
{
  text: 'تطوير الأعمال وبناء نماذج النمو',
  color: 'from-gold to-amber'
},
{
  text: 'الاستشارات القطاعية المتخصصة',
  color: 'from-cyan-400 to-blue-500'
},
{
  text: 'دعم التوسع في الأسواق المحلية والدولية',
  color: 'from-rose-400 to-red-600'
}];

export function WhatWeOffer() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <section className=" p-[5%]  bg-white overflow-hidden relative">
      <div className="  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className={`flex flex-col justify-center items-center text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-magenta to-orange flex items-center justify-center shadow-lg">
                <LayersIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-black text-navy">
                ماذا نقدّم؟
              </h2>
            </div>

            <p className="text-xl xl:text-2xl 2xl:text-3xl text-slate-600 mb-10 font-light leading-relaxed">
              نقدّم منظومة متكاملة من الحلول التي تساعد شركاءنا على تحويل الرؤية
              إلى واقع، والطموح إلى مشاريع ناجحة. تشمل خدماتنا:
            </p>

            {/* Colorful Pills/Tags Layout */}
            <div className="flex flex-wrap gap-3 mb-12">
              {offerings.map((offer, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.9
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.05
                }}
                className="w-full md:w-fit flex items-center bg-slate-50 border border-slate-100 rounded-full py-2.5 px-5 shadow-sm hover:shadow-md transition-shadow group">
                
                  <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${offer.color} ${isRTL ? 'ml-3' : 'mr-3'} group-hover:scale-150 transition-transform`}>
                </div>
                  <span className="text-sm md:text-base xl:text-lg 2xl:text-xl font-bold text-navy">
                    {offer.text}
                  </span>
                </motion.div>
              )}
            </div>

            <div className="bg-gradient-to-r from-navy to-purple-deep rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-sky/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="flex items-center gap-6 relative z-10">
                <div className="text-7xl md:text-8xl xl:text-9xl 2xl:text-10xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gold to-amber opacity-90">
                  8
                </div>
                <div className="w-1 h-16 bg-white/20 rounded-full"></div>
                <p className="font-medium text-base md:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed">
                  خدمات رئيسية متكاملة ترتكز على التحليل العميق والخبرة المتخصصة
                  لبناء حلول عملية قابلة للتنفيذ.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="relative h-[700px] md:h-[800px] xl:h-[900px] 2xl:h-[1000px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
            
            <Image
              src="/imgs/A modern hospital interior wit/image_12.webp"
              alt="Consulting Services Work"
              className="w-full h-full object-cover"
              width={800}
              height={800}
              />
            
            {/* Vibrant Overlay Gradients */}
            <div className="absolute inset-0 bg-gradient-to-tr from-magenta/40 via-transparent to-sky/40 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>

            {/* Floating Info Box */}
            <div className="absolute bottom-10 right-10 left-10 glass-colored bg-white/10 p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald to-teal-500 flex items-center justify-center">
                  <CheckCircle2Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-bold text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
                  نحول الرؤية إلى واقع ملموس
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}