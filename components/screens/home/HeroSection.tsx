"use client";
import { motion } from 'framer-motion';
import {
  ChevronDownIcon,
  TrendingUpIcon,
  BriefcaseIcon,
  AwardIcon } from
'lucide-react';
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy">
      
      {/* Background Image & Dramatic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
          alt="Dubai Skyline Night"
          className="w-full h-full object-cover object-center" />
        
        <div className="absolute inset-0 bg-hero-gradient"></div>
      </div>

      {/* Floating Decorative Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-deep/40 to-magenta/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }} />
        
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-tr from-sky/30 to-emerald/20 rounded-full blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 60, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut'
          }} />
        
        <div className="absolute top-1/3 left-1/3 w-32 h-32 border border-gold/20 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border border-sky/20 rotate-45 animate-float-delayed"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20 flex-grow flex flex-col justify-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1,
            ease: 'easeOut'
          }}
          className="max-w-5xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-colored bg-white/5 border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
            <span className="text-sm font-medium text-slate-200 tracking-wider">
              رؤية استراتيجية للمستقبل
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 drop-shadow-2xl">
            نصوغ مسارات الاستثمار… <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber to-orange drop-shadow-none">
              ونبني قراراتٍ تصنع المستقبل.
            </span>
          </h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.4,
              duration: 0.8
            }}
            className="text-xl md:text-2xl text-slate-200 mb-6 leading-relaxed max-w-3xl mx-auto font-light">
            
            في عالم اقتصادي تتغير فيه المعادلات بسرعة، وتتصاعد فيه التحديات أمام
            المستثمرين وصناع القرار، يصبح امتلاك الرؤية الواضحة والمنهجية
            الدقيقة أمرًا لا يمكن الاستغناء عنه.
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.6,
              duration: 0.8
            }}
            className="text-lg text-slate-400 mb-12 leading-relaxed hidden md:block max-w-4xl mx-auto">
            
            تعمل شركة الشيخ عبد العزيز بن عبد الله المعلا للاستشارات العامة على
            بناء منظومة متكاملة من الاستشارات الاستراتيجية وإدارة الاستثمارات
            وتطوير المشاريع، لنمنح المؤسسات والمستثمرين القدرة على اتخاذ قرارات
            واثقة، وإدارة مشاريعهم بكفاءة، وفتح آفاق نمو مستدام في مختلف
            القطاعات الاقتصادية.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.8,
              duration: 0.8
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6">
            
            <a
              href="#services"
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-gold via-orange to-amber text-navy font-bold text-xl rounded-full hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all transform hover:-translate-y-1 relative overflow-hidden group">
              
              <span className="relative z-10">استكشف خدماتنا</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xl rounded-full hover:bg-white/20 transition-all transform hover:-translate-y-1">
              
              تعرف علينا
            </a>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: 1
            }}
            className="text-white/60 font-medium mt-8 text-lg">
            
            نحن لا نقدّم استشارة فحسب… نحن نصنع مسارًا واضحًا للنمو، ونبني
            شراكات تُثمر نتائج حقيقية.
          </motion.p>
        </motion.div>
      </div>

      {/* Stats Row at Bottom */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 1.2,
          duration: 0.8
        }}
        className="relative z-20 w-full bg-gradient-to-t from-navy to-transparent pt-10 pb-6">
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 md:gap-8 divide-x divide-x-reverse divide-white/10">
            <div className="text-center px-4">
              <div className="flex justify-center mb-2">
                <BriefcaseIcon className="w-6 h-6 text-gold" />
              </div>
              <p className="text-2xl md:text-4xl font-bold text-white mb-1">
                +500
              </p>
              <p className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">
                مشروع
              </p>
            </div>
            <div className="text-center px-4">
              <div className="flex justify-center mb-2">
                <TrendingUpIcon className="w-6 h-6 text-sky" />
              </div>
              <p className="text-2xl md:text-4xl font-bold text-white mb-1">
                +50
              </p>
              <p className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">
                قطاع
              </p>
            </div>
            <div className="text-center px-4">
              <div className="flex justify-center mb-2">
                <AwardIcon className="w-6 h-6 text-magenta" />
              </div>
              <p className="text-2xl md:text-4xl font-bold text-white mb-1">
                +15
              </p>
              <p className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">
                سنة خبرة
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>);

}