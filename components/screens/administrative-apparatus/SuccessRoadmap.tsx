"use client";
import { motion } from 'framer-motion';
import {
  TargetIcon,
  BarChartIcon,
  GitBranchIcon,
  RocketIcon,
  SproutIcon } from
'lucide-react';
export function SuccessRoadmap() {
  return (
    <section className="py-32 relative overflow-hidden text-white">
      {/* Rich Background Image and Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80"
          alt="City at Night"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/95 via-blue-900/90 to-cyan-900/95 mix-blend-multiply" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
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
            className="text-4xl md:text-5xl font-extrabold mb-8 text-shadow-lg">
            
            خارطة طريق النجاح
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
            className="text-xl text-white/90 leading-relaxed font-medium text-shadow-md max-w-3xl mx-auto">
            
            نعتمد في عملنا على خارطة طريق واضحة تساعد شركاءنا على تحقيق النجاح
            في مشاريعهم واستثماراتهم.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 start-8 md:start-1/2 w-2 bg-gradient-to-b from-purple-500 via-rose-500 to-amber-500 md:-translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]" />

          <div className="space-y-16">
            {/* Step 1 */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              className="relative flex flex-col md:flex-row items-start md:items-center group">
              
              <div className="absolute start-8 md:start-1/2 w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(168,85,247,0.6)] border-4 border-white group-hover:scale-110 transition-transform">
                <TargetIcon className="w-7 h-7 text-white" />
              </div>
              <div className="ms-24 md:ms-0 md:w-1/2 md:pe-20 text-start md:text-end">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-colors shadow-2xl flex flex-col md:flex-row md:flex-row-reverse gap-6 items-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border-2 border-white/30 hidden sm:block">
                    <img
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&q=80"
                      alt="تحديد الأهداف"
                      className="w-full h-full object-cover" />
                    
                  </div>
                  <div>
                    <span className="text-purple-300 font-bold text-lg mb-2 block">
                      المرحلة الأولى
                    </span>
                    <h3 className="text-2xl font-bold mb-3">تحديد الأهداف</h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                      فهم رؤية العميل وتحديد الأهداف الاستراتيجية للمشروع.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              className="relative flex flex-col md:flex-row-reverse items-start md:items-center group">
              
              <div className="absolute start-8 md:start-1/2 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(59,130,246,0.6)] border-4 border-white group-hover:scale-110 transition-transform">
                <BarChartIcon className="w-7 h-7 text-white" />
              </div>
              <div className="ms-24 md:ms-0 md:w-1/2 md:ps-20 text-start">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-colors shadow-2xl flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border-2 border-white/30 hidden sm:block">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80"
                      alt="تحليل الفرص"
                      className="w-full h-full object-cover" />
                    
                  </div>
                  <div>
                    <span className="text-blue-300 font-bold text-lg mb-2 block">
                      المرحلة الثانية
                    </span>
                    <h3 className="text-2xl font-bold mb-3">تحليل الفرص</h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                      دراسة السوق وتحديد الفرص الاستثمارية المتاحة.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              className="relative flex flex-col md:flex-row items-start md:items-center group">
              
              <div className="absolute start-8 md:start-1/2 w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(20,184,166,0.6)] border-4 border-white group-hover:scale-110 transition-transform">
                <GitBranchIcon className="w-7 h-7 text-white" />
              </div>
              <div className="ms-24 md:ms-0 md:w-1/2 md:pe-20 text-start md:text-end">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-colors shadow-2xl flex flex-col md:flex-row md:flex-row-reverse gap-6 items-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border-2 border-white/30 hidden sm:block">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&q=80"
                      alt="تطوير الاستراتيجية"
                      className="w-full h-full object-cover" />
                    
                  </div>
                  <div>
                    <span className="text-teal-300 font-bold text-lg mb-2 block">
                      المرحلة الثالثة
                    </span>
                    <h3 className="text-2xl font-bold mb-3">
                      تطوير الاستراتيجية
                    </h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                      بناء خطة عمل متكاملة لتحقيق الأهداف.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              className="relative flex flex-col md:flex-row-reverse items-start md:items-center group">
              
              <div className="absolute start-8 md:start-1/2 w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(244,114,182,0.6)] border-4 border-white group-hover:scale-110 transition-transform">
                <RocketIcon className="w-7 h-7 text-white" />
              </div>
              <div className="ms-24 md:ms-0 md:w-1/2 md:ps-20 text-start">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-colors shadow-2xl flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border-2 border-white/30 hidden sm:block">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80"
                      alt="التنفيذ"
                      className="w-full h-full object-cover" />
                    
                  </div>
                  <div>
                    <span className="text-pink-300 font-bold text-lg mb-2 block">
                      المرحلة الرابعة
                    </span>
                    <h3 className="text-2xl font-bold mb-3">التنفيذ</h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                      تطبيق الخطط والبرامج وفق أفضل الممارسات.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              className="relative flex flex-col md:flex-row items-start md:items-center group">
              
              <div className="absolute start-8 md:start-1/2 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(245,158,11,0.6)] border-4 border-white group-hover:scale-110 transition-transform">
                <SproutIcon className="w-7 h-7 text-white" />
              </div>
              <div className="ms-24 md:ms-0 md:w-1/2 md:pe-20 text-start md:text-end">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-colors shadow-2xl flex flex-col md:flex-row md:flex-row-reverse gap-6 items-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border-2 border-white/30 hidden sm:block">
                    <img
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=80"
                      alt="النمو المستدام"
                      className="w-full h-full object-cover" />
                    
                  </div>
                  <div>
                    <span className="text-amber-300 font-bold text-lg mb-2 block">
                      المرحلة الخامسة
                    </span>
                    <h3 className="text-2xl font-bold mb-3">النمو المستدام</h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                      دعم المشاريع في مراحل التوسع والتطوير المستقبلي.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}