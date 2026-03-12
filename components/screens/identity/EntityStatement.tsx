"use client";
import { motion } from 'framer-motion';
export function EntityStatement() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-brand-indigo-dark via-brand-purple-dark to-brand-indigo overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-brand-pink rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 z-10">
              <div className="absolute inset-0 bg-brand-indigo/20 mix-blend-overlay z-10" />
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80"
                alt="Modern Architecture"
                className="w-full h-full object-cover" />
              
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
              
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
                alt="Leadership"
                className="w-full h-full object-cover" />
              
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
              
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80"
                alt="Partnership"
                className="w-full h-full object-cover" />
              
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
            }}>
            
            <h2 className="text-4xl md:text-6xl font-cairo font-bold text-white mb-8 drop-shadow-lg">
              بيان الكيان
            </h2>
            <p className="text-2xl text-white/90 leading-relaxed font-tajawal mb-12">
              نحن كيان مؤسسي رائد في مجال الاستشارات العامة والاستثمارية،
              ملتزمون بتحويل الرؤية إلى واقع ملموس. نقدم حلولًا متكاملة، تجمع
              بين{' '}
              <span className="font-bold text-brand-yellow px-2 py-1 bg-brand-yellow/20 rounded-lg">
                التحليل الاستراتيجي
              </span>
              ،{' '}
              <span className="font-bold text-brand-coral px-2 py-1 bg-brand-coral/20 rounded-lg">
                التنفيذ المتميز
              </span>
              ، و
              <span className="font-bold text-brand-teal px-2 py-1 bg-brand-teal/20 rounded-lg">
                إدارة المخاطر
              </span>
              ، لنضمن نتائج قابلة للقياس وموثوقة. نحن أكثر من مجرد شركة
              استشارات؛ نحن شريك نجاح طويل الأمد لكل عميل.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
                <div className="text-3xl font-cairo font-bold text-brand-yellow mb-1">
                  +500
                </div>
                <div className="text-white/80 font-tajawal text-sm">
                  مشروع ناجح
                </div>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
                <div className="text-3xl font-cairo font-bold text-brand-coral mb-1">
                  +200
                </div>
                <div className="text-white/80 font-tajawal text-sm">
                  شريك استراتيجي
                </div>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center">
                <div className="text-3xl font-cairo font-bold text-brand-teal mb-1">
                  +15
                </div>
                <div className="text-white/80 font-tajawal text-sm">
                  سنة خبرة
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}