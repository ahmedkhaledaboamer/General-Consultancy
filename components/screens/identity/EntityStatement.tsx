"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLocale } from 'next-intl';
export function EntityStatement() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="relative   bg-gradient-to-br from-brand-indigo-dark via-brand-purple-dark to-brand-indigo overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-brand-pink rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="mx-auto p-[5%] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Creative Image Collage */}
          <motion.div
            className="relative h-[600px] w-full"
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
              duration: 0.8
            }}>
            
            {/* Main large image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 md:w-4/5 lg:w-5/6 xl:w-6/7 2xl:w-7/8 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 z-10">
              <div className="absolute inset-0 bg-brand-indigo/20 mix-blend-overlay z-10" />
              <Image
                src="/imgs/A luxurious medical tourism fa/image_31.webp"
                alt="Modern Architecture"
                className="w-full h-full object-cover"
                width={800}
                height={800}
              />
              
            </div>

            {/* Top right overlapping image */}
            <motion.div
              className="absolute top-0 right-0 w-1/2 h-1/2 rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-pink z-20"
              animate={{
                y: [-10, 10, -10]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}>
              
              <Image
                src="/imgs/A modern Islamic finance cente/image_66.webp"
                alt="Leadership"
                className="w-full h-full object-cover"
                width={800}
                height={800}
              />
              
            </motion.div>

            {/* Bottom left overlapping image */}
            <motion.div
              className="absolute bottom-0 left-0 w-2/5 h-2/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-teal z-20"
              animate={{
                y: [10, -10, 10]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}>
              
              <Image
                src="/imgs/A modern manufacturing investm/image_32.webp"
                alt="Partnership"
                className="w-full h-full object-cover"
                width={800}
                height={800}
              />
              
            </motion.div>
          </motion.div>

          {/* Text Content */}
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
              duration: 0.8,
              delay: 0.2
            }}
            
            className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
            
            <h2 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-cairo font-bold text-white mb-8 drop-shadow-lg">
              بيان الكيان
            </h2>
            <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-white/90 leading-relaxed mb-12">
              نحن كيان مؤسسي رائد في مجال الاستشارات العامة والاستثمارية،
              ملتزمون بتحويل الرؤية إلى واقع ملموس. نقدم حلولًا متكاملة، تجمع
              بين{' '}
              <span className="font-bold text-brand-yellow px-2 py-1 md:px-3 md:py-2  bg-brand-yellow/20 rounded-lg">
                التحليل الاستراتيجي
              </span>
              ،{' '}
              <span className="font-bold text-brand-coral px-2 py-1 md:px-3 md:py-2  bg-brand-coral/20 rounded-lg">
                التنفيذ المتميز
              </span>
              ، و
              <span className="font-bold text-brand-teal px-2 py-1 md:px-3 md:py-2  bg-brand-teal/20 rounded-lg">
                إدارة المخاطر
              </span>
              ، لنضمن نتائج قابلة للقياس وموثوقة. نحن أكثر من مجرد شركة
              استشارات؛ نحن شريك نجاح طويل الأمد لكل عميل.
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

}