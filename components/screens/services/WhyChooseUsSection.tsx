"use client";
import { motion } from 'framer-motion';
import {
  GlobeIcon,
  SettingsIcon,
  UsersIcon,
  LayersIcon,
  ShieldIcon,
  LightbulbIcon } from
'lucide-react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
const reasons = [
{
  title: 'خبرة متعددة القطاعات',
  description: 'نمتلك خبرات متنوعة تغطي مجالات اقتصادية واستثمارية متعددة.',
  icon: GlobeIcon,
  color: 'text-emerald-500',
  bgLight: 'bg-emerald-50',
  border: 'border-emerald-500',
  gradient: 'from-emerald-400 to-emerald-600'
},
{
  title: 'منهجية عمل احترافية',
  description: 'نعتمد على التحليل العلمي والخبرة العملية في تقديم حلولنا.',
  icon: SettingsIcon,
  color: 'text-blue-500',
  bgLight: 'bg-blue-50',
  border: 'border-blue-500',
  gradient: 'from-blue-400 to-blue-600'
},
{
  title: 'شبكة علاقات واسعة',
  description: 'نمتلك علاقات مهنية واسعة تدعم نجاح المشاريع وتطويرها.',
  icon: UsersIcon,
  color: 'text-amber-500',
  bgLight: 'bg-amber-50',
  border: 'border-amber-500',
  gradient: 'from-amber-400 to-amber-600'
},
{
  title: 'حلول متكاملة',
  description: 'نقدم منظومة خدمات شاملة بدلاً من حلول جزئية.',
  icon: LayersIcon,
  color: 'text-rose-500',
  bgLight: 'bg-rose-50',
  border: 'border-rose-500',
  gradient: 'from-rose-400 to-rose-600'
},
{
  title: 'التزام طويل المدى',
  description: 'نؤمن ببناء شراكات مستدامة تقوم على الثقة والنتائج.',
  icon: ShieldIcon,
  color: 'text-purple-500',
  bgLight: 'bg-purple-50',
  border: 'border-purple-500',
  gradient: 'from-purple-400 to-purple-600'
},
{
  title: 'الابتكار والتقنيات الحديثة',
  description: 'نستخدم أحدث التقنيات والأدوات الرقمية لتطوير حلول مبتكرة تدعم نمو الأعمال.',
  icon: LightbulbIcon,
  color: 'text-cyan-500',
  bgLight: 'bg-cyan-50',
  border: 'border-cyan-500',
  gradient: 'from-cyan-400 to-cyan-600'
}];

export function WhyChooseUsSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <section
      id="why-us"
      className="  bg-gradient-to-b from-white to-amber-50/30 overflow-hidden">
      
      <div className="mx-auto p-[5%]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Image Content (Left side visually in RTL) */}
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
            className="w-full lg:w-5/12 order-2 lg:order-1 relative">
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px] md:h-[700px] lg:h-[800px] 2xl:h-[900px]">
              <Image
                src="/imgs/A cuttingedge technology devel/image_8.webp"
                alt="Business Handshake"
                className="w-full h-full object-cover"
                width={800}
                height={800}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="w-16 h-1 bg-gold mb-6 rounded-full" />
                <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-heading font-bold mb-3">
                  شراكات استراتيجية
                </h3>
                <p className="font-body text-gray-200 text-sm md:text-base xl:text-lg 2xl:text-xl">
                  نبني علاقات طويلة الأمد قائمة على الثقة والشفافية والنجاح
                  المشترك.
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 md:w-40 md:h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56 bg-teal/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 md:w-48 md:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 bg-gold/20 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Text & Cards Content */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
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
              }}
              className={`mb-12 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              
              <h2 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-bold text-navy mb-6">
                لماذا تختارنا
              </h2>
              <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 font-body leading-relaxed">
                اختيار الشريك الاستشاري المناسب يمثل خطوة حاسمة في نجاح أي
                مشروع. نحن نتميز بمجموعة من العوامل التي تجعلنا الخيار الأمثل
                لشركائنا.
              </p>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) =>
              <motion.div
                key={index}
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
                }}
                transition={{
                  delay: index * 0.1
                }}
                className={`flex flex-col items-center  md:items-start justify-center relative p-6 rounded-2xl bg-white shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-300 group overflow-hidden ${index === reasons.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                
                  {/* Colored Left Border (RTL right side) */}
                  <div
                  className={`absolute top-0 right-0 w-1.5 h-full md:w-2 lg:w-3 2xl:w-4 bg-gradient-to-b ${reason.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />
                

                  <div
                  className={`w-14 h-14 md:w-16 md:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 rounded-xl ${reason.bgLight} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  
                    <reason.icon className={`w-7 h-7 md:w-8 md:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10 ${reason.color}`} />
                  </div>
                  <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-heading font-bold text-navy mb-3">
                    {reason.title}
                  </h3>
                  <p className={`text-gray-600 font-body text-sm md:text-base xl:text-lg 2xl:text-xl leading-relaxed text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
                    {reason.description}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}