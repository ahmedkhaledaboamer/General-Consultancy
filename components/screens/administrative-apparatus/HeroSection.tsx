"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-mesh-gradient animate-gradient-shift">
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-900/40 z-0" />

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 45, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/4 start-10 w-32 h-32 bg-rose-500/40 rounded-3xl blur-xl z-0" />
      
      <motion.div
        animate={{
          y: [0, 50, 0],
          rotate: [0, -30, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute bottom-1/4 end-1/3 w-48 h-48 bg-blue-500/40 rounded-full blur-xl z-0" />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/3 end-10 w-40 h-40 bg-amber-500/40 rounded-full blur-xl z-0" />
      

        <div className="relative z-10 mx-auto px-[5%] w-full py-22">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content (Right side in RTL) */}
          <div className="w-full lg:w-1/2 text-center lg:text-start">
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}>
              
              <span className="inline-block py-2 px-6 rounded-full bg-white/20 border border-white/30 text-white font-bold mb-8 backdrop-blur-md shadow-lg">
                الجهاز الإداري
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.4
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight text-shadow-lg">
              
              قيادة مؤسسية تصنع القرار… <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-purple-300 drop-shadow-md">
                وتوجّه مسارات النجاح.
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.6
              }}
              className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed text-shadow-md font-medium mx-auto lg:mx-0">
              
              يعتمد نجاح أي مؤسسة على قوة منظومتها القيادية وقدرتها على تحويل
              الرؤية إلى نتائج ملموسة. وفي شركة الشيخ عبد العزيز بن عبد الله
              المعلا للاستشارات العامة يقوم الجهاز الإداري على نخبة من القيادات
              والخبرات المتخصصة التي تعمل بتناغم لتحقيق أهداف الشركة وشركائها.
              <br />
              <br />
              نحن لا ندير الأعمال فحسب… بل نقود منظومة متكاملة تدعم الاستثمار،
              وتطوّر المشاريع، وتحقق النمو المستدام.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.8
              }}>
              
              <Link
                href="#executives"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full text-white bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 hover:from-rose-400 hover:via-purple-400 hover:to-blue-400 shadow-2xl hover:shadow-[0_20px_50px_rgba(225,29,72,0.5)] hover:-translate-y-2 transition-all duration-300 animate-gradient-shift">
                
                تعرف على فريقنا
              </Link>
            </motion.div>
          </div>

          {/* Image Collage (Left side in RTL) */}
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] hidden md:block">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -5
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: -5
              }}
              transition={{
                duration: 1,
                delay: 0.4
              }}
              className="absolute top-0 start-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 z-10"
              style={{
                animation: 'parallax-float 6s ease-in-out infinite'
              }}>
              
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Corporate Building"
                className="w-full h-full object-cover"
                width={800}
                height={800}
              />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/40 to-transparent mix-blend-overlay"></div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: 5
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 5
              }}
              transition={{
                duration: 1,
                delay: 0.6
              }}
              className="absolute bottom-0 end-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 z-20"
              style={{
                animation: 'parallax-float 8s ease-in-out infinite reverse'
              }}>
              
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Business Meeting"
                className="w-full h-full object-cover"
                width={800}
                height={800}
              />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/40 to-transparent mix-blend-overlay"></div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -10
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: -10
              }}
              transition={{
                duration: 1,
                delay: 0.8
              }}
              className="absolute top-1/4 end-10 w-1/2 h-1/2 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 z-30"
              style={{
                animation: 'parallax-float 7s ease-in-out infinite 1s'
              }}>
              
              <Image 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Modern Office"
                className="w-full h-full object-cover"
                width={800}
                height={800}
              />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/40 to-transparent mix-blend-overlay"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}