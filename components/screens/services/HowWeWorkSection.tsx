"use client";
import { motion } from 'framer-motion';
import {
  SearchIcon,
  BarChart3Icon,
  MapIcon,
  RocketIcon,
  RefreshCwIcon } from
'lucide-react';
import Image from 'next/image';
const steps = [
{
  id: 1,
  title: 'فهم الاحتياجات',
  description: 'نبدأ بتحليل أهداف العميل وتحديد التحديات والفرص.',
  icon: SearchIcon,
  color: 'from-teal-400 to-teal-600',
  badgeColor: 'bg-teal-500',
  borderColor: 'group-hover:border-teal-400'
},
{
  id: 2,
  title: 'الدراسة والتحليل',
  description:
  'نقوم بإجراء الدراسات اللازمة وتحليل السوق والبيئة الاستثمارية.',
  icon: BarChart3Icon,
  color: 'from-blue-400 to-blue-600',
  badgeColor: 'bg-blue-500',
  borderColor: 'group-hover:border-blue-400'
},
{
  id: 3,
  title: 'التخطيط الاستراتيجي',
  description: 'نضع خطة عمل واضحة تتضمن أفضل الحلول الممكنة.',
  icon: MapIcon,
  color: 'from-amber-400 to-amber-600',
  badgeColor: 'bg-amber-500',
  borderColor: 'group-hover:border-amber-400'
},
{
  id: 4,
  title: 'التنفيذ والمتابعة',
  description:
  'نرافق شركاءنا خلال مراحل التنفيذ لضمان تحقيق النتائج المطلوبة.',
  icon: RocketIcon,
  color: 'from-emerald-400 to-emerald-600',
  badgeColor: 'bg-emerald-500',
  borderColor: 'group-hover:border-emerald-400'
},
{
  id: 5,
  title: 'التطوير المستمر',
  description:
  'نستمر في دعم شركائنا لتطوير مشاريعهم وتعزيز قدرتهم على النمو.',
  icon: RefreshCwIcon,
  color: 'from-purple-400 to-purple-600',
  badgeColor: 'bg-purple-500',
  borderColor: 'group-hover:border-purple-400'
}];

export function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/A cuttingedge fintech developm/image_30.webp"
          alt="Strategy Planning"
          className="w-full h-full object-cover"
          width={1400}
          height={800}
        />
        
        <div className="absolute inset-0 bg-navy/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy opacity-80" />
      </div>

      <div className=" mx-auto px-[5%] relative z-10">
        <div className="text-center mx-auto mb-20">
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
            
            <h2 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-bold text-white mb-6 drop-shadow-lg">
              كيف نعمل
            </h2>
            <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-300 font-body leading-relaxed bg-navy/30 p-4 rounded-xl backdrop-blur-sm border border-white/5">
              تعتمد منهجية عملنا على فهم عميق لاحتياجات شركائنا، وتحليل دقيق
              للفرص والتحديات، ثم تطوير حلول عملية قابلة للتنفيذ. تمر عملية
              العمل لدينا عبر مراحل واضحة:
            </p>
          </motion.div>
        </div>

        <div className="relative mt-16">
          {/* Multi-color Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 md:h-2 lg:h-3 2xl:h-4 bg-gradient-to-r from-purple-500 via-emerald-500 via-amber-500 via-blue-500 to-teal-500 opacity-40 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 2xl:gap-14">
            {steps.map((step, index) =>
            <motion.div
              key={step.id}
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
                delay: index * 0.15
              }}
              className="relative flex flex-col items-center text-center group">
              
                {/* Step Number Badge */}
                <div
                className={`absolute -top-4 -right-2 w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 ${step.badgeColor} rounded-full flex items-center justify-center text-white font-bold font-heading z-20 shadow-lg border-2 border-navy transform group-hover:scale-110 transition-transform`}>
                
                  {step.id}
                </div>

                {/* Icon Container with Vibrant Gradient */}
                <div
                className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 mb-6 relative z-10 transform group-hover:-translate-y-2 transition-all duration-300 shadow-xl`}>
                
                  <div className="w-full h-full bg-navy rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <step.icon className="w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 text-white drop-shadow-md" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col items-center justify-center bg-navy/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 w-full h-full transform transition-all duration-300 group-hover:bg-navy/80 hover:border-white/20">
                  <h3 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-heading font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 font-body text-sm md:text-base xl:text-lg 2xl:text-xl leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}