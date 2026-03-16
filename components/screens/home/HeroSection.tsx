"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('home.hero');

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy">
      
      {/* Background Image & Dramatic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/dubai_downtown/dubai_downtown.webp"
          alt="Dubai Skyline Night"
          className="w-full h-full object-cover object-center" 
          width={1920}
          height={1080}
          />
        
        <div className="absolute inset-0 bg-black/60"></div>
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
      <div className="relative z-10 p-[5%]  text-center   flex-grow flex flex-col justify-center">
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
          className=" ">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-colored bg-white/5 border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
            <span className="text-sm md:text-base xl:text-lg 2xl:text-2xl font-medium text-slate-200 tracking-wider">
              {t('badge')}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white leading-[1.1] mb-8 drop-shadow-2xl">
            {t('titleLine1')} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber to-orange drop-shadow-none">
              {t('titleLine2')}
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
            className="text-xl xl:text-2xl 2xl:text-4xl text-slate-200 mb-6 leading-relaxed font-light">
            {t('descriptionMain')}
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
            className="text-lg md:text-xl 2xl:text-2xl text-slate-300 mb-12 leading-relaxed hidden md:block">
            {t('descriptionSecondary')}
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
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-gold via-orange to-amber text-navy font-bold text-xl 2xl:text-3xl rounded-full hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all transform hover:-translate-y-1 relative overflow-hidden group">
              
              <span className="relative z-10">{t('ctaExploreServices')}</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xl 2xl:text-3xl rounded-full hover:bg-white/20 transition-all transform hover:-translate-y-1">
              {t('ctaLearnMore')}
            </a>
          </motion.div>
        </motion.div>
      </div>

      
    </section>);

}