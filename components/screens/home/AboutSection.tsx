"use client";
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';
export function AboutSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Colorful Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-sky/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-magenta/5 to-orange/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      {/* Sidebar Accent Bar */}
      <div className="absolute top-1/4 right-0 w-2 h-64 bg-gradient-to-b from-gold via-orange to-magenta rounded-l-full hidden lg:block"></div>

      <div className=" p-[5%] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
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
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8
            }}
            className={`relative text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-8">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-gold to-orange"></span>
              <span className="text-sm md:text-base xl:text-lg 2xl:text-2xl font-bold text-navy tracking-wide">
                من نحن؟
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-black text-navy mb-8 leading-[1.2]">
              نبني منظومة متكاملة تساعد شركاءنا على{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky via-violet to-magenta">
                النمو بثقة وثبات
              </span>
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed relative">
              {/* Decorative line behind text */}
              <div className="absolute right-0 top-2 bottom-2 w-1 bg-gradient-to-b from-slate-200 to-transparent rounded-full -mr-6 hidden md:block"></div>

              <p className="font-medium text-navy text-xl xl:text-2xl 2xl:text-4xl">
                نحن كيان استشاري واستثماري يعمل على دعم المؤسسات والمستثمرين عبر
                منظومة متكاملة من الخبرات المتخصصة في مجالات الاستثمار وإدارة
                المشاريع والاستشارات الاستراتيجية.
              </p>
              <p className="font-medium text-navy text-sm md:text-lg xl:text-xl 2xl:text-2xl">
                انطلقت شركة الشيخ عبد العزيز بن عبد الله المعلا للاستشارات
                العامة برؤية واضحة تهدف إلى تمكين المستثمرين والجهات المؤسسية من
                تحويل الفرص إلى مشاريع ناجحة، وبناء هياكل تشغيلية قوية، وتطوير
                استثمارات قادرة على تحقيق قيمة مستدامة في السوق.
              </p>
              <p className="font-medium text-navy text-sm md:text-lg xl:text-xl 2xl:text-2xl">
                نعمل عبر شبكة من الخبرات متعددة التخصصات، تجمع بين التحليل
                الاقتصادي، والإدارة الاستراتيجية، وتطوير الأعمال، والاستشارات
                المتخصصة في قطاعات متنوعة تشمل الصناعة، والطاقة، والصحة،
                والتعليم، والسياحة، والتكنولوجيا، وغيرها من المجالات الحيوية.
              </p>

              <div className="mt-10 p-6 bg-gradient-to-br from-navy to-purple-deep rounded-2xl shadow-xl border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('/imgs/A professional workspace with/image_0.webp')] opacity-10 bg-cover bg-center mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <p className="relative z-10 font-bold text-white text-xl xl:text-2xl 2xl:text-3xl leading-relaxed">
                  نحن لا نعمل فقط على تقديم الحلول… بل نعمل على بناء منظومة
                  متكاملة تساعد شركاءنا على النمو بثقة وثبات.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Composition */}
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
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8
            }}
            className="relative h-[400px] md:h-[500px] lg:h-[700px] w-full">
            
            {/* Main Large Image */}
            <div className="absolute top-0 right-0 w-4/5 h-4/5 md:w-3/5 md:h-3/5 lg:w-4/5 lg:h-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <Image
                src="/imgs/A reflective workspace with mi/image_4.webp"
                alt="Business Meeting"
                className="w-full h-full object-cover"
                width={800}
                height={800}
                />
              
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent mix-blend-multiply"></div>
            </div>

            {/* Secondary Overlapping Image */}
            <div className="absolute bottom-0 left-0 w-3/5 h-2/5 md:w-2/5 md:h-2/5 lg:w-3/5 lg:h-3/5 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white z-20 transform -translate-y-10 translate-x-10">
              <Image
                src="/imgs/A responsive corporate operati/image_31.webp"
                alt="Partnership Handshake"
                className="w-full h-full object-cover"
                width={600}
                height={600}
                />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/30 to-transparent mix-blend-overlay"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-sky to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow z-0"></div>
            <div
              className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-tr from-orange to-magenta rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse-slow z-0"
              style={{
                animationDelay: '2s'
              }}>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 lg:top-1/2 lg:-left-8 lg:translate-x-0 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-white/50 z-30 animate-float">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald to-teal-500 flex items-center justify-center text-white shadow-inner">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    
                  </svg>
                </div>
                <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                  <p className="text-[.7rem] md:text-lg xl:text-xl 2xl:text-2xl text-slate-500 font-bold uppercase tracking-wider mb-1">
                    رؤية استراتيجية
                  </p>
                  <p className="text-[.8rem] md:text-lg xl:text-xl 2xl:text-2xl font-black text-navy">نمو مستدام</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}