"use client";
import { motion } from 'framer-motion';
import { SearchIcon, MapIcon, AwardIcon, RefreshCwIcon } from 'lucide-react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
export function QualityStandards() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <section className="  bg-gradient-to-br from-cyan-50 to-teal-50 relative overflow-hidden">
      {/* Floating Decorative Dots */}
      <motion.div
        animate={{
          y: [0, -20, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity
        }}
        className="absolute top-20 start-20 w-8 h-8 rounded-full bg-rose-400/50 blur-sm" />
      
      <motion.div
        animate={{
          y: [0, 30, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity
        }}
        className="absolute bottom-20 end-20 w-12 h-12 rounded-full bg-purple-400/50 blur-sm" />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity
        }}
        className="absolute top-1/2 start-1/2 w-16 h-16 rounded-full bg-amber-400/30 blur-md" />
      

      <div className="mx-auto p-[5%] relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Large Image Side */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                rotate: -3
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8
              }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/30 to-purple-500/30 mix-blend-overlay z-10"></div>
              <Image
                src="/imgs/A vibrant tech startup managem/image_46.webp"
                alt="Data Analytics"
                className="w-full h-full object-cover" 
                width={800}
                height={800}
                />
              
            </motion.div>
          </div>

          {/* Content Side */}
          <div className={`w-full lg:w-7/12 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
            <motion.h2
              initial={{
                opacity: 0,
                x: 30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              
              معايير الجودة
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                x: 30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.1
              }}
              className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-slate-700 leading-relaxed font-medium mb-12">
              
              نحرص على تطبيق أعلى معايير الجودة في جميع خدماتنا وعملياتنا لضمان
              تحقيق أفضل النتائج لشركائنا. تعتمد منظومة الجودة لدينا على أسس
              متينة.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Standard 1 */}
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
                  duration: 0.5,
                  delay: 0.2
                }}
                className="bg-white rounded-3xl p-8 shadow-xl border-s-8 border-purple-500 hover:-translate-y-2 transition-transform duration-300">
                
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                  <SearchIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-slate-900 mb-3">
                  التحليل الدقيق
                </h3>
                <p className="text-slate-600 text-lg md:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed">
                  دراسة المشاريع والفرص الاستثمارية بشكل علمي ومنهجي.
                </p>
              </motion.div>

              {/* Standard 2 */}
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
                  duration: 0.5,
                  delay: 0.3
                }}
                className="bg-white rounded-3xl p-8 shadow-xl border-s-8 border-blue-500 hover:-translate-y-2 transition-transform duration-300 sm:mt-12">
                
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center mb-6 shadow-lg">
                  <MapIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-slate-900 mb-3">
                  التخطيط الفعّال
                </h3>
                <p className="text-slate-600 text-lg md:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed">
                  وضع خطط عمل واضحة وقابلة للتنفيذ.
                </p>
              </motion.div>

              {/* Standard 3 */}
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
                  duration: 0.5,
                  delay: 0.4
                }}
                className="bg-white rounded-3xl p-8 shadow-xl border-s-8 border-teal-500 hover:-translate-y-2 transition-transform duration-300">
                
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center mb-6 shadow-lg">
                  <AwardIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-slate-900 mb-3">
                  الالتزام بالمعايير المهنية
                </h3>
                <p className="text-slate-600 text-lg md:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed">
                  تطبيق أفضل الممارسات العالمية في مجالات الاستشارات وإدارة
                  المشاريع.
                </p>
              </motion.div>

              {/* Standard 4 */}
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
                  duration: 0.5,
                  delay: 0.5
                }}
                className="bg-white rounded-3xl p-8 shadow-xl border-s-8 border-pink-500 hover:-translate-y-2 transition-transform duration-300 sm:mt-12">
                
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center mb-6 shadow-lg">
                  <RefreshCwIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-slate-900 mb-3">
                  التحسين المستمر
                </h3>
                <p className="text-slate-600 text-lg md:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed">
                  مراجعة الأداء بشكل دوري والعمل على تطوير العمليات والخدمات.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}