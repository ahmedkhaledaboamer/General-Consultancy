"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
export function FinalCTA() {
  const locale = useLocale();
  return (
    <section
      id="contact"
      className="relative py-40 overflow-hidden bg-mesh-gradient animate-gradient-shift">
      
      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-[#372d6a] z-0" />

      {/* Floating Image Collage */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-10 start-10 w-48 h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 z-0 hidden lg:block">
        
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80"
          alt="Team"
          className="w-full h-full object-cover"
          width={300}
          height={300}
        />
        
      </motion.div>

      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, -15, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute bottom-10 end-10 w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white/30 z-0 hidden lg:block">
        
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80"
          alt="Building"
          className="w-full h-full object-cover"
          width={300}
          height={300}
        />
        
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-20 end-1/4 w-32 h-32 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 z-0 hidden lg:block">
        
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&q=80"
          alt="Collaboration"
          className="w-full h-full object-cover"
          width={300}
          height={300}
        />
        
      </motion.div>

      {/* Floating Colorful Shapes */}
      <motion.div
        animate={{
          y: [0, 50, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity
        }}
        className="absolute top-1/2 start-1/4 w-20 h-20 rounded-full bg-rose-500/50 blur-xl z-0" />
      
      <motion.div
        animate={{
          y: [0, -40, 0]
        }}
        transition={{
          duration: 11,
          repeat: Infinity
        }}
        className="absolute bottom-1/4 start-1/3 w-32 h-32 rounded-full bg-cyan-500/50 blur-xl z-0" />
      

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white/10 backdrop-blur-md p-12 md:p-20 rounded-[3rem] border border-white/20 shadow-2xl">
        <motion.h2
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
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight text-shadow-lg">
          
          إذا كنت تبحث عن شريك يمتلك الخبرة القيادية والقدرة التنفيذية لدعم
          مشاريعك واستثماراتك…
        </motion.h2>

        <motion.p
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
            delay: 0.1
          }}
          className="text-2xl text-white/95 mb-12 font-medium text-shadow-md">
          
          فإن فريقنا الإداري مستعد للعمل معك لتحقيق أهدافك.
          <br className="hidden md:block" />
          <span className="mt-4 block text-amber-300 font-bold">
            ودعنا نبدأ معًا رحلة بناء نجاح مستدام.
          </span>
        </motion.p>

        <motion.div
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
            delay: 0.2
          }}>
          
          <Link href={`/${locale}/execution`} className="relative group px-12 py-6 bg-white text-slate-900 font-extrabold text-2xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">تواصل معنا اليوم</span>
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 [mask-image:linear-gradient(white,white)] [mask-clip:padding-box,border-box] [-webkit-mask-composite:destination-out] [mask-composite:exclude]"></div>
            <div className="rounded-full absolute inset-0 bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Link>
        </motion.div>
      </div>
    </section>);

}