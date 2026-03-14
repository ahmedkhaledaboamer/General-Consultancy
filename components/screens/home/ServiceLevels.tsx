"use client";
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { useLocale } from 'next-intl';
const levels = [
{
  title: 'المستوى الاستشاري',
  description: 'تقديم الدراسات والتحليلات والتوصيات الاستراتيجية.',
  isPremium: false,
  color: 'from-sky-400 to-blue-600',
  features: ['تحليل السوق', 'دراسات الجدوى', 'توصيات استراتيجية']
},
{
  title: 'المستوى التنفيذي',
  description: 'دعم تنفيذ المشاريع وإدارة العمليات المرتبطة بها.',
  isPremium: false,
  color: 'from-emerald-400 to-teal-600',
  features: ['إدارة المشاريع', 'الإشراف التنفيذي', 'تحسين العمليات']
},
{
  title: 'المستوى الاستراتيجي المتقدم',
  description: 'تقديم حلول متكاملة تشمل التخطيط والتنفيذ والمتابعة.',
  isPremium: false,
  color: 'from-violet-400 to-purple-600',
  features: ['تخطيط شامل', 'تنفيذ متكامل', 'متابعة وتقييم']
},
{
  title: 'المستوى الخاص',
  description:
  'خدمات استشارية مصممة خصيصًا للمستثمرين والمؤسسات ذات المشاريع الكبرى.',
  isPremium: true,
  color: 'from-gold to-amber',
  features: ['حلول مخصصة', 'أولوية التنفيذ', 'استشارات مستمرة']
}];

export function ServiceLevels() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <section className=" p-[5%]  relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/imgs/A modern food industry facilit/image_54.webp"
          alt="Luxury Office"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-navy/95 mix-blend-multiply"></div>
      </div>

      <div className="  relative z-10">
        <div className="text-center  mb-20">
          <motion.h2
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
            className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white mb-6">
            
            مستويات الخدمة
          </motion.h2>
          <motion.p
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
              delay: 0.1
            }}
            className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-slate-300 font-light">
            
            نقدم خدماتنا عبر مستويات متعددة تلبي احتياجات مختلف الشركاء.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {levels.map((level, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}
            className={`relative rounded-3xl p-8 flex flex-col h-full overflow-hidden group ${level.isPremium ? 'glass-colored bg-white/10 transform lg:-translate-y-6 shadow-[0_0_40px_rgba(200,164,92,0.2)]' : 'bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors'}`}>
            
              {/* Premium Animated Border */}
              {level.isPremium &&
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-gold/80 via-amber/70 to-orange/60 [mask-composite:exclude] [mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] p-[2px] opacity-70 transition-opacity duration-500"></div>
            }

              {/* Accent Top Bar */}
              <div
              className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${level.color}`}>
            </div>

              {level.isPremium &&
            <div className={`absolute top-6 ${isRTL ? 'right-6' : 'left-6'} bg-gradient-to-r from-gold to-amber text-navy text-xs md:text-sm xl:text-base 2xl:text-lg font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg`}>
                  VIP
                </div>
            }

              <h3
              className={`text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-black mb-4 mt-4 ${level.isPremium ? 'text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber' : 'text-white'}`}>
              
                {level.title}
              </h3>

              <p className="text-slate-300 text-sm md:text-base xl:text-lg 2xl:text-xl mb-8 leading-relaxed font-light flex-1">
                {level.description}
              </p>

              <ul className="space-y-4 mt-auto pt-6 border-t border-white/10">
                {level.features.map((feature, i) =>
              <li
                key={i}
                className="flex items-center text-sm md:text-base xl:text-lg 2xl:text-3xl text-slate-200">
                
                    <div
                  className={`w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'} flex-shrink-0`}>
                  
                      <CheckIcon className="w-3 h-3 md:w-4 md:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-white" />
                    </div>
                    {feature}
                  </li>
              )}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}