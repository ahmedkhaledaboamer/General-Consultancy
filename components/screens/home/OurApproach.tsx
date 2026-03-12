"use client";
import { motion } from 'framer-motion';
import {
  SearchIcon,
  MapIcon,
  PenToolIcon,
  PlayCircleIcon,
  RefreshCwIcon } from
'lucide-react';
const approaches = [
{
  text: 'التحليل العميق',
  icon: SearchIcon,
  color: 'from-sky-400 to-blue-600',
  image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80'
},
{
  text: 'التخطيط الاستراتيجي',
  icon: MapIcon,
  color: 'from-emerald-400 to-teal-600',
  image:
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80'
},
{
  text: 'تصميم الحلول',
  icon: PenToolIcon,
  color: 'from-violet-400 to-purple-600',
  image:
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&q=80'
},
{
  text: 'التنفيذ والمتابعة',
  icon: PlayCircleIcon,
  color: 'from-magenta-400 to-pink-600',
  image:
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&q=80'
},
{
  text: 'التطوير المستمر',
  icon: RefreshCwIcon,
  color: 'from-gold to-amber',
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&q=80'
}];

export function OurApproach() {
  return (
    <section className=" p-[5%]  bg-slate-50 relative overflow-hidden">
      <div className=" relative z-10">
        <div className="text-center   mb-24">
          <motion.h2
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
            }}
            className="text-4xl md:text-5xl font-black text-navy mb-6">
            
            نهجنا في العمل
          </motion.h2>
          <motion.p
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
            }}
            transition={{
              delay: 0.1
            }}
            className="text-xl text-slate-600 font-light">
            
            نعتمد منهجية متكاملة تقوم على:
          </motion.p>
        </div>

        <div className="relative">
          {/* Colorful Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-2 bg-gradient-to-l from-sky via-magenta to-gold rounded-full -translate-y-1/2 z-0 opacity-30"></div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4 relative z-10">
            {approaches.map((item, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="relative flex flex-col items-center w-full lg:w-1/5 group">
              
                {/* Image Card */}
                <div className="w-40 h-40 rounded-3xl overflow-hidden shadow-xl mb-6 relative border-4 border-white transform group-hover:-translate-y-4 transition-transform duration-500">
                  <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                
                  <div
                  className={`absolute inset-0 bg-gradient-to-t ${item.color} mix-blend-multiply opacity-60 group-hover:opacity-20 transition-opacity duration-500`}>
                </div>

                  {/* Floating Icon */}
                  <div
                  className={`absolute -bottom-4 -right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg border-2 border-white`}>
                  
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <span className="font-bold text-navy text-xl text-center mt-2">
                  {item.text}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}