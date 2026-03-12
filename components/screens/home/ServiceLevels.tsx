"use client";
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
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
  return (
    <section className=" p-[5%]  relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&q=80"
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
            className="text-4xl md:text-5xl font-black text-white mb-6">
            
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
            className="text-xl text-slate-300 font-light">
            
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
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-gold via-amber to-orange [mask-composite:exclude] [mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] p-[2px] opacity-70 group-hover:opacity-100 transition-opacity"></div>
            }

              {/* Accent Top Bar */}
              <div
              className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${level.color}`}>
            </div>

              {level.isPremium &&
            <div className="absolute top-6 left-6 bg-gradient-to-r from-gold to-amber text-navy text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  VIP
                </div>
            }

              <h3
              className={`text-2xl font-black mb-4 mt-4 ${level.isPremium ? 'text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber' : 'text-white'}`}>
              
                {level.title}
              </h3>

              <p className="text-slate-300 mb-8 leading-relaxed font-light flex-1">
                {level.description}
              </p>

              <ul className="space-y-4 mt-auto pt-6 border-t border-white/10">
                {level.features.map((feature, i) =>
              <li
                key={i}
                className="flex items-center text-sm text-slate-200">
                
                    <div
                  className={`w-5 h-5 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center ml-3 flex-shrink-0`}>
                  
                      <CheckIcon className="w-3 h-3 text-white" />
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