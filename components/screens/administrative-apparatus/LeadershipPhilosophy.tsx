"use client";
import { motion } from 'framer-motion';
import { CompassIcon, BriefcaseIcon, UsersIcon } from 'lucide-react';
export function LeadershipPhilosophy() {
  return (
    <section
      id="philosophy"
      className="py-32 bg-gradient-to-b from-amber-50 via-rose-50 to-purple-50 relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 start-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -start-40 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -end-40 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
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
              once: true,
              margin: '-100px'
            }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">
            
            فلسفة القيادة
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
              once: true,
              margin: '-100px'
            }}
            transition={{
              delay: 0.1
            }}
            className="text-xl text-slate-700 leading-relaxed font-medium">
            
            نؤمن أن القيادة الحقيقية لا تقتصر على اتخاذ القرار، بل تشمل القدرة
            على بناء فرق عمل قوية، وتوجيه الموارد بفعالية، وتحقيق التوازن بين
            الرؤية الاستراتيجية والتنفيذ العملي. تعتمد فلسفة القيادة في شركتنا
            على ثلاثة محاور رئيسية:
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Pillar 1 */}
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
            className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_30px_60px_rgba(147,51,234,0.2)] hover:-translate-y-3 transition-all duration-500 group flex flex-col h-full">
            
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80"
                alt="الرؤية الواضحة"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-600/50 to-pink-500/30 mix-blend-multiply"></div>
              <div className="absolute bottom-4 start-4 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                <CompassIcon className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col bg-gradient-to-b from-white to-purple-50/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors">
                الرؤية الواضحة
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed flex-1">
                قيادة العمل برؤية استراتيجية تواكب التحولات الاقتصادية وتستشرف
                فرص المستقبل.
              </p>
            </div>
          </motion.div>

          {/* Pillar 2 */}
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
            className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_30px_60px_rgba(14,165,233,0.2)] hover:-translate-y-3 transition-all duration-500 group flex flex-col h-full">
            
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
                alt="الإدارة الاحترافية"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-600/50 to-cyan-500/30 mix-blend-multiply"></div>
              <div className="absolute bottom-4 start-4 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                <BriefcaseIcon className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col bg-gradient-to-b from-white to-blue-50/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                الإدارة الاحترافية
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed flex-1">
                تطبيق أفضل الممارسات الإدارية لضمان كفاءة الأداء وتحقيق الأهداف
                المؤسسية.
              </p>
            </div>
          </motion.div>

          {/* Pillar 3 */}
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
            className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_30px_60px_rgba(245,158,11,0.2)] hover:-translate-y-3 transition-all duration-500 group flex flex-col h-full">
            
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="العمل التكاملي"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-600/50 to-yellow-500/30 mix-blend-multiply"></div>
              <div className="absolute bottom-4 start-4 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                <UsersIcon className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col bg-gradient-to-b from-white to-orange-50/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                العمل التكاملي
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed flex-1">
                تعزيز التعاون بين مختلف الإدارات لضمان تقديم خدمات متكاملة تحقق
                أفضل النتائج.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}