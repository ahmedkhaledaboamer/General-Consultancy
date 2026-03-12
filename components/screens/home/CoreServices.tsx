 "use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUpIcon,
  LandmarkIcon,
  CompassIcon,
  HeartPulseIcon,
  ChevronDownIcon } from
'lucide-react';
const services = [
{
  title: 'خدمات إدارة الاستثمار',
  description:
  'نقدم منظومة متكاملة لإدارة الاستثمارات وتطوير المحافظ الاستثمارية بما يحقق عوائد مستدامة ويعزز القيمة الاقتصادية للمشاريع.',
  icon: TrendingUpIcon,
  image:
  'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
  color: 'sky',
  gradient: 'from-sky-500 to-blue-600',
  items: [
  'إدارة المحافظ الاستثمارية',
  'إدارة الاستثمارات الخاصة',
  'إنشاء وإدارة أندية الاستثمار',
  'دعم شركات رأس المال الاستثماري',
  'تطوير استراتيجيات الاستثمار طويلة المدى',
  'تحليل المخاطر الاستثمارية',
  'إعادة هيكلة المحافظ الاستثمارية',
  'تقييم الفرص الاستثمارية الجديدة']

},
{
  title: 'الاستشارات المالية والمصرفية',
  description:
  'نقدم خدمات استشارية متخصصة في المجال المالي والمصرفي تساعد المؤسسات والمستثمرين على بناء هياكل مالية قوية.',
  icon: LandmarkIcon,
  image:
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
  color: 'emerald',
  gradient: 'from-emerald-400 to-teal-600',
  items: [
  'الاستشارات المصرفية',
  'هيكلة التمويل',
  'إعداد الخطط المالية',
  'تقييم الاستثمارات',
  'الاستشارات المتعلقة بالرهن العقاري',
  'إعداد نماذج التمويل والاستثمار']

},
{
  title: 'الاستشارات الاستراتيجية والإدارية',
  description:
  'نساعد المؤسسات على تطوير استراتيجيات فعالة تحقق النمو والاستدامة في الأسواق التنافسية.',
  icon: CompassIcon,
  image:
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
  color: 'violet',
  gradient: 'from-violet-500 to-purple-700',
  items: [
  'إعداد الخطط الاستراتيجية',
  'تطوير نماذج الأعمال',
  'إعادة الهيكلة الإدارية',
  'دراسات السوق',
  'تطوير استراتيجيات التوسع',
  'إعداد الدراسات والتحليلات الإدارية']

},
{
  title: 'الاستشارات الصحية المتخصصة',
  description:
  'نقدم خدمات استشارية متقدمة في القطاع الصحي لدعم المؤسسات الصحية في تطوير خدماتها وتحسين كفاءتها التشغيلية.',
  icon: HeartPulseIcon,
  image:
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
  color: 'rose',
  gradient: 'from-rose-400 to-pink-600',
  items: [
  'استشارات إدارة المنشآت الصحية',
  'التخطيط الصحي',
  'تطوير الخدمات الصحية',
  'استشارات السلامة والصحة المهنية',
  'استشارات الصحة ونمط الحياة',
  'تطوير برامج الصحة المؤسسية']

}];

export function CoreServices() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  return (
    <section id="services" className="py-32 bg-slate-50 relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-[800px] h-[800px] bg-gradient-to-b from-sky/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-64 w-[600px] h-[600px] bg-gradient-to-t from-violet/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}>
            
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6">
              خدماتنا{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-violet">
                الأساسية
              </span>
            </h2>
            <p className="text-xl text-slate-600 font-light">
              نعمل عبر مجموعة واسعة من المجالات الاستشارية والاستثمارية التي
              تمكّن المؤسسات من تحقيق أهدافها وتعزيز قدرتها التنافسية.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
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
                  delay: index * 0.1
                }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group border border-slate-100">
                
                {/* Header Image Area */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent`}>
                  </div>

                  {/* Icon floating on image */}
                  <div
                    className={`absolute bottom-4 right-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg transform translate-y-1/2 group-hover:-translate-y-1 transition-transform duration-300`}>
                    
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 pt-12 flex-1 flex flex-col relative">
                  {/* Colored Left Border Accent */}
                  <div
                    className={`absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b ${service.gradient}`}>
                  </div>

                  <h3 className="text-2xl font-bold text-navy mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  {/* Expandable List */}
                  <div className="mt-auto">
                    <button
                      onClick={() =>
                      setExpandedIndex(isExpanded ? null : index)
                      }
                      className="flex items-center justify-between w-full py-3 border-t border-slate-100 text-navy font-bold hover:text-sky transition-colors">
                      
                      <span>عرض التفاصيل</span>
                      <ChevronDownIcon
                        className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      
                    </button>

                    <AnimatePresence>
                      {isExpanded &&
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0
                        }}
                        animate={{
                          height: 'auto',
                          opacity: 1
                        }}
                        exit={{
                          height: 0,
                          opacity: 0
                        }}
                        transition={{
                          duration: 0.3
                        }}
                        className="overflow-hidden">
                        
                          <ul className="pt-4 pb-2 space-y-3">
                            {service.items.map((item, i) =>
                          <li
                            key={i}
                            className="flex items-start text-base text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                            
                                <span
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mt-2 ml-3 flex-shrink-0 shadow-sm`}>
                            </span>
                                <span>{item}</span>
                              </li>
                          )}
                          </ul>
                        </motion.div>
                      }
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}