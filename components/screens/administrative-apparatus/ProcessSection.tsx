"use client";
import { motion } from 'framer-motion';
import {
  ClipboardListIcon,
  LinkIcon,
  EyeIcon,
  TrendingUpIcon } from
'lucide-react';
export function ProcessSection() {
  return (
    <section id="process" className="py-32 relative overflow-hidden text-white">
      {/* Background Image and Vibrant Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
          alt="Growth Charts"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-800/90 to-fuchsia-900/95 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
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
            
            كيف يعمل الجهاز الإداري؟
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
            className="text-xl text-white/90 leading-relaxed font-medium text-shadow-md">
            
            يعتمد الجهاز الإداري في الشركة على منظومة عمل متكاملة تضمن التنسيق
            بين مختلف الإدارات لتحقيق أفضل النتائج. تمر عملية العمل عبر مجموعة
            من المراحل الأساسية:
          </motion.p>
        </div>

        <div className="relative">
          {/* Rainbow Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 start-0 w-full h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 -translate-y-1/2 z-0 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
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
              transition={{
                duration: 0.6,
                delay: 0.1
              }}
              className="flex flex-col items-center text-center group">
              
              <div className="w-32 h-32 rounded-full border-4 border-purple-400 p-1 mb-8 shadow-[0_0_30px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-transform duration-500 relative bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&q=80"
                  alt="التخطيط"
                  className="w-full h-full object-cover rounded-full opacity-70 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <ClipboardListIcon className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
                <span className="absolute -top-2 -end-2 w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-lg shadow-lg border-2 border-white">
                  1
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl shadow-xl w-full">
                <h3 className="text-2xl font-bold mb-3 text-purple-300">
                  التخطيط الاستراتيجي
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  وضع الخطط والرؤى التي توجه عمل الشركة على المدى القصير
                  والطويل.
                </p>
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
              transition={{
                duration: 0.6,
                delay: 0.2
              }}
              className="flex flex-col items-center text-center group md:mt-16">
              
              <div className="w-32 h-32 rounded-full border-4 border-blue-400 p-1 mb-8 shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform duration-500 relative bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&q=80"
                  alt="التنسيق"
                  className="w-full h-full object-cover rounded-full opacity-70 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <LinkIcon className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
                <span className="absolute -top-2 -end-2 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-lg border-2 border-white">
                  2
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl shadow-xl w-full">
                <h3 className="text-2xl font-bold mb-3 text-blue-300">
                  التنسيق المؤسسي
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  التعاون بين الإدارات المختلفة لضمان تنفيذ المشاريع والخدمات
                  بكفاءة.
                </p>
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
              transition={{
                duration: 0.6,
                delay: 0.3
              }}
              className="flex flex-col items-center text-center group">
              
              <div className="w-32 h-32 rounded-full border-4 border-teal-400 p-1 mb-8 shadow-[0_0_30px_rgba(20,184,166,0.5)] group-hover:scale-110 transition-transform duration-500 relative bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80"
                  alt="الإشراف"
                  className="w-full h-full object-cover rounded-full opacity-70 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <EyeIcon className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
                <span className="absolute -top-2 -end-2 w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-lg shadow-lg border-2 border-white">
                  3
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl shadow-xl w-full">
                <h3 className="text-2xl font-bold mb-3 text-teal-300">
                  الإشراف والمتابعة
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  متابعة تنفيذ الخطط والبرامج لضمان تحقيق الأهداف المحددة.
                </p>
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
              transition={{
                duration: 0.6,
                delay: 0.4
              }}
              className="flex flex-col items-center text-center group md:mt-16">
              
              <div className="w-32 h-32 rounded-full border-4 border-pink-400 p-1 mb-8 shadow-[0_0_30px_rgba(244,114,182,0.5)] group-hover:scale-110 transition-transform duration-500 relative bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80"
                  alt="التقييم"
                  className="w-full h-full object-cover rounded-full opacity-70 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrendingUpIcon className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
                <span className="absolute -top-2 -end-2 w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-lg shadow-lg border-2 border-white">
                  4
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-3xl shadow-xl w-full">
                <h3 className="text-2xl font-bold mb-3 text-pink-300">
                  التقييم والتطوير
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  تقييم الأداء بشكل مستمر والعمل على تحسين العمليات والخدمات.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}