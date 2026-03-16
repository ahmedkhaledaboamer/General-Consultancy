"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-indigo-dark pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      {/* Background Collage */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
          style={{
            backgroundImage:
            'url("/imgs/A stunning clean energy landsc/image_61.webp")'
          }} />
        
        <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo-dark via-brand-purple/80 to-brand-rose/70 opacity-90" />
      </div>

      {/* Floating Image Cards */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 animate-float hidden lg:block z-0"
        initial={{
          opacity: 0,
          scale: 0.8
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1,
          delay: 0.2
        }}
        style={{
          transform: 'rotate(6deg)'
        }}>
        
        <Image
          src="/imgs/A stunning clean technology fa/image_10.webp"
          alt="Business Meeting"
          className="w-full h-full object-cover"
          width={800}
          height={800}
        />
        
        <div className="absolute inset-0 bg-brand-purple/20 mix-blend-overlay" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 w-72 h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 animate-float-reverse hidden lg:block z-0"
        initial={{
          opacity: 0,
          scale: 0.8
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1,
          delay: 0.4
        }}
        style={{
          transform: 'rotate(-8deg)'
        }}>
        
        <Image
          src="/imgs/A stunning coastal resort deve/image_42.webp"
          alt="Corporate Office"
          className="w-full h-full object-cover"
          width={800}
          height={800}
        />
        
        <div className="absolute inset-0 bg-brand-orange/20 mix-blend-overlay" />
      </motion.div>

      {/* Animated Geometric Shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 border-[1px] border-white/10 rounded-full animate-spin-slow z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border-[2px] border-brand-pink/20 rounded-full animate-spin-slow animation-delay-2000 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[100px] animate-pulse-slow z-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center mt-10">
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="inline-block mb-8">
          
          <div className="px-2 md:px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
            <span className="text-white/90 font-bold tracking-wide">
              الشيخ عبد العزيز بن عبد الله المعلا للاستشارات العامة
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-3xl md:text-5xl lg:text-7xl font-cairo font-bold mb-8 leading-tight drop-shadow-2xl"
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}>
          
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-pink-light to-brand-orange-light">
            هوية مؤسسية متينة…
          </span>
          <br className="hidden md:block" />
          <span className="text-white">تصنع الفرق في كل خطوة</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl text-white/90 mb-12 max-w-5xl mx-auto leading-relaxed drop-shadow-lg"
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}>
          
          في عالم سريع التغير، تبقى الهوية المؤسسية هي البوصلة التي توجه
          أعمالنا. لا نرى الهوية مجرد شعار أو تصميم، بل هي قيمنا، وعدنا، ونهجنا
          في العمل. نعمل على بناء ثقة متينة مع عملائنا وشركائنا من خلال
          الشفافية، الاحترافية، والنتائج الملموسة.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.6
          }}>
          
          <button className="cursor-pointer group relative inline-flex items-center justify-center px-10 py-5 text-sm md:text-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-brand-coral to-brand-orange font-cairo rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange overflow-hidden"
            onClick={() => {
              window.scrollTo({
                top: document.getElementById('about')?.offsetTop,
                behavior: 'smooth'
              });
            }}
          >
            <span className="relative z-10">
              اكتشف هويتنا المؤسسية وتأثيرها على شركائنا
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          </button>
        </motion.div>
      </div>

      {/* Bottom curved divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="waveGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="80%"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0%" stopColor="#ffb87a" stopOpacity="0.15" />
              <stop offset="15%" stopColor="#ffdbde" stopOpacity="0.15" />
              <stop offset="30%" stopColor="#ff85ad" stopOpacity="0.15" />
              <stop offset="45%" stopColor="#1fddff" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#6b66ff" stopOpacity="0.15" />
              <stop offset="80%" stopColor="#ffb58a" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ff85a7" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.2,192.39,101.3Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
    </section>);

}