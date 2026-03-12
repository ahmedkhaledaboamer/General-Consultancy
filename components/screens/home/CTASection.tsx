"use client";
import { motion } from 'framer-motion';
export function CTASection() {
  return (
    <section id="contact" className=" p-[5%]  relative overflow-hidden">
      {/* Dramatic Sunset Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Dramatic Sunset"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-purple-deep/80 to-transparent mix-blend-multiply"></div>
      </div>

      {/* Floating Decorative Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gold/40 rounded-full blur-3xl mix-blend-screen"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }} />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-magenta/40 rounded-full blur-3xl mix-blend-screen"
          animate={{
            x: [0, -70, 0],
            y: [0, 60, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }} />
        
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-sky/30 rounded-full blur-3xl mix-blend-screen"
          animate={{
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }} />
        
      </div>

      <div className="  relative z-10 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          className="glass-colored bg-navy/40 p-12 md:p-16 rounded-[3rem] border border-white/20 shadow-2xl">
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-lg">
            ابدأ اليوم خطوة جديدة نحو <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-orange to-magenta">
              تطوير أعمالك واستثماراتك.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-200 mb-4 leading-relaxed font-light">
            فريقنا مستعد لدراسة احتياجاتك وتقديم الحلول التي تساعدك على تحقيق
            أهدافك بثقة ووضوح.
          </p>
          <p className="text-lg text-slate-300 mb-12 font-light">
            تواصل معنا الآن ودعنا نعمل معًا لبناء مسار استثماري أكثر قوة
            واستدامة.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className="relative overflow-hidden bg-gradient-to-r from-gold via-orange to-magenta text-white font-black text-2xl py-6 px-16 rounded-full shadow-[0_0_40px_rgba(249,115,22,0.5)] hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] transition-all group">
            
            <span className="relative z-10">تواصل معنا</span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>);

}