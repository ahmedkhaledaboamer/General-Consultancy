"use client";
import { motion } from 'framer-motion';
import {
  AwardIcon,
  EyeIcon,
  ShieldCheckIcon,
  LightbulbIcon,
  HandshakeIcon } from
'lucide-react';
const values = [
{
  title: 'الاحترافية',
  description: 'نلتزم بأعلى المعايير المهنية في كل ما نقدمه من خدمات.',
  icon: AwardIcon,
  color: 'from-sky-500 to-blue-600',
  image:
  '/imgs/A modern food industry investm/image_35.webp'
},
{
  title: 'الشفافية',
  description: 'نؤمن بالوضوح الكامل في التحليل والتوصيات والنتائج.',
  icon: EyeIcon,
  color: 'from-emerald-500 to-teal-600',
  image:
  '/imgs/A modern food processing plant/image_29.webp'
},
{
  title: 'الالتزام',
  description: 'نعتبر نجاح شركائنا جزءًا من مسؤوليتنا المهنية.',
  icon: ShieldCheckIcon,
  color: 'from-violet-500 to-purple-600',
  image:
  '/imgs/A modern healthcare advisory e/image_23.webp'
},
{
  title: 'الابتكار',
  description: 'نسعى دائمًا لتطوير حلول جديدة تدعم النمو المستدام.',
  icon: LightbulbIcon,
  color: 'from-magenta-500 to-pink-600',
  image:
  '/imgs/A modern healthcare consulting/image_15.webp'
},
{
  title: 'الشراكة',
  description: 'نبني علاقات طويلة المدى تقوم على الثقة والتعاون.',
  icon: HandshakeIcon,
  color: 'from-gold to-amber',
  image:
  '/imgs/A modern healthcare developmen/image_61.webp'
}];

export function ValuesSection() {
  return (
    <section className=" p-[5%]  bg-navy relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('/imgs/A modern healthcare environmen/image_15.webp')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>

      <div className=" relative z-10">
        <div className="text-center   mb-20">
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
            
            قيمنا ومبادئنا
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
            
            نؤمن بأن نجاح أي مشروع يعتمد على منظومة قيم واضحة تحكم طريقة العمل
            واتخاذ القرار.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {values.map((value, index) =>
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
              duration: 0.5,
              delay: index * 0.1
            }}
            className="relative rounded-3xl overflow-hidden shadow-2xl w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] group h-80 md:h-96 xl:h-120 2xl:h-144">
            
              {/* Background Image */}
              <img
              src={value.image}
              alt={value.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            

              {/* Colored Overlay */}
              <div
              className={`absolute inset-0 bg-gradient-to-t ${value.color} mix-blend-multiply opacity-80 group-hover:opacity-90 transition-opacity duration-300`}>
            </div>
              <div className="absolute inset-0 bg-navy/40"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center z-10">
                {/* Hexagonal Icon Container */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} rotate-45 rounded-xl opacity-50 blur-md`}>
                </div>
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-md rotate-45 rounded-xl border border-white/30 flex items-center justify-center">
                    <div className="-rotate-45">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-3 drop-shadow-md">
                  {value.title}
                </h3>
                <p className="text-slate-200 text-base md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed font-light drop-shadow-sm opacity-100 translate-y-0 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-300">
                  {value.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}