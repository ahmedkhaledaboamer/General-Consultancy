 "use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  BriefcaseIcon,
  TrendingUpIcon,
  UsersIcon,
  AwardIcon } from
'lucide-react';
// Custom hook for animated counter
function useCounter(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, {
    once: true
  });
  useEffect(() => {
    if (inView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min(
          (timestamp - startTimestamp) / (duration * 1000),
          1
        );
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration]);
  return {
    count,
    nodeRef
  };
}
const stats = [
{
  label: 'مشروع ناجح',
  value: 500,
  prefix: '+',
  icon: BriefcaseIcon,
  color: 'text-sky'
},
{
  label: 'قطاع اقتصادي',
  value: 50,
  prefix: '+',
  icon: TrendingUpIcon,
  color: 'text-emerald'
},
{
  label: 'شريك استراتيجي',
  value: 200,
  prefix: '+',
  icon: UsersIcon,
  color: 'text-magenta'
},
{
  label: 'سنة من الخبرة',
  value: 15,
  prefix: '+',
  icon: AwardIcon,
  color: 'text-gold'
}];

function StatItem({ stat, index }: {stat: any;index: number;}) {
  const { count, nodeRef } = useCounter(stat.value, 2.5);
  return (
    <motion.div
      ref={nodeRef}
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
        duration: 0.6,
        delay: index * 0.1
      }}
      className="flex flex-col items-center text-center p-8 rounded-3xl glass-colored bg-white/5 hover:bg-white/10 transition-colors border-t-4 border-t-white/20">
      
      <div
        className={`w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 shadow-inner ${stat.color}`}>
        
        <stat.icon className="w-8 h-8" />
      </div>
      <div className="flex items-baseline justify-center gap-1 mb-2" dir="ltr">
        <span className="text-5xl md:text-6xl font-black text-white drop-shadow-lg">
          {count}
        </span>
        <span className={`text-4xl font-bold ${stat.color}`}>
          {stat.prefix}
        </span>
      </div>
      <p className="text-xl font-medium text-slate-300">{stat.label}</p>
    </motion.div>);

}
export function StatsSection() {
  return (
    <section className=" p-[5%]  relative overflow-hidden">
      {/* Background Image with Vibrant Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt="Data and Technology"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-sky/90 via-violet/90 to-magenta/90 mix-blend-multiply"></div>
      </div>

      <div className="  relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) =>
          <StatItem key={index} stat={stat} index={index} />
          )}
        </div>
      </div>
    </section>);

}