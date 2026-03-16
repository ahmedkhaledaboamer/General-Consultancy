"use client";
import { motion } from 'framer-motion';
import { EyeIcon, TargetIcon } from 'lucide-react';
import Image from 'next/image';
export function VisionMission() {
  return (
    <section className=" p-[5%]  relative overflow-hidden">
      {/* Full-width Background Image with Colorful Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/A strategic consulting environ/image_5.webp"
          alt="Skyscraper Architecture"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          />
        
        <div className="absolute inset-0 bg-gradient-to-br from-purple-deep/90 via-navy/95 to-sky/80 mix-blend-multiply"></div>
      </div>

      {/* Decorative Geometric Patterns */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg">
          
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse">
              
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5" />
              
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className=" px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
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
            className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            
            <span className="w-2 h-2 rounded-full bg-sky animate-pulse"></span>
            <span className="text-sm md:text-base xl:text-lg 2xl:text-2xl font-bold text-white tracking-widest uppercase">
              الأساس الاستراتيجي
            </span>
          </motion.div>

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
            transition={{
              delay: 0.1
            }}
            className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white mb-6 drop-shadow-lg">
            
            رسالتنا ورؤيتنا
          </motion.h2>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2
            }}
            className="w-32 h-1.5 bg-gradient-to-r from-sky via-violet to-magenta mx-auto rounded-full">
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 text-center">
          {/* Vision Card - Blue Tint */}
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
              duration: 0.6
            }}
            className="relative group">
            
            <div className="absolute inset-0 bg-gradient-to-br from-sky/40 to-blue-600/10 rounded-[2.5rem] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
            <div className="flex flex-col items-center justify-center relative h-full glass-colored bg-navy/40 rounded-[2.5rem] p-10 md:p-14 border-t-4 border-t-sky hover:bg-navy/50 transition-all duration-500 overflow-hidden">
              {/* Decorative corner shape */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-sky/20 rounded-full blur-2xl"></div>

              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky to-blue-600 flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <EyeIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-black text-white mb-6">رؤيتنا</h3>
              <p className="text-slate-200 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed font-light">
                أن نكون من الجهات الرائدة في تقديم الاستشارات الاستراتيجية
                وإدارة الاستثمارات في المنطقة، وأن نساهم في دعم المشاريع النوعية
                التي تسهم في تنمية الاقتصاد وتعزيز الابتكار والاستدامة.
              </p>
            </div>
          </motion.div>

          {/* Mission Card - Purple Tint */}
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
              duration: 0.6,
              delay: 0.2
            }}
            className="relative group">
            
            <div className="absolute inset-0 bg-gradient-to-br from-magenta/40 to-purple-deep/20 rounded-[2.5rem] blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
            <div className="flex flex-col items-center justify-center relative h-full glass-colored bg-navy/40 rounded-[2.5rem] p-10 md:p-14 border-t-4 border-t-magenta hover:bg-navy/50 transition-all duration-500 overflow-hidden">
              {/* Decorative corner shape */}
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-magenta/20 rounded-full blur-2xl"></div>

              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-magenta to-purple-600 flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                <TargetIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-black text-white mb-6">رسالتنا</h3>
              <p className="text-slate-200 text-xl xl:text-2xl 2xl:text-3xl leading-relaxed font-light">
                تقديم منظومة متكاملة من الخدمات الاستشارية والاستثمارية التي
                تمكّن المؤسسات والمستثمرين من اتخاذ قرارات دقيقة، وتطوير مشاريع
                ناجحة، وبناء نماذج أعمال قادرة على تحقيق النمو والتوسع في
                الأسواق المحلية والدولية.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}