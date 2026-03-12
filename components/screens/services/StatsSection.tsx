"use client";
import { motion } from 'framer-motion';
import {
  BriefcaseIcon,
  GlobeIcon,
  AwardIcon,
  CheckCircleIcon } from
'lucide-react';
const stats = [
{
  id: 1,
  value: '+60',
  label: 'خدمة متخصصة',
  icon: BriefcaseIcon,
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
  color: 'from-amber-400 to-orange-500'
},
{
  id: 2,
  value: '+10',
  label: 'قطاعات',
  icon: GlobeIcon,
  image:
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80',
  color: 'from-blue-400 to-indigo-500'
},
{
  id: 3,
  value: '+20',
  label: 'سنة خبرة',
  icon: AwardIcon,
  image:
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80',
  color: 'from-emerald-400 to-teal-500'
},
{
  id: 4,
  value: '+500',
  label: 'مشروع ناجح',
  icon: CheckCircleIcon,
  image:
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80',
  color: 'from-purple-400 to-pink-500'
}];

export function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-tealDark via-navy to-tealDark">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1400&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) =>
          <motion.div
            key={stat.id}
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
              delay: index * 0.1,
              duration: 0.6
            }}
            className="relative group rounded-2xl overflow-hidden">
            
              {/* Background Image Thumbnail */}
              <div className="absolute inset-0 z-0">
                <img
                src={stat.image}
                alt={stat.label}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" />
              
                <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-80 mix-blend-multiply`} />
              
                <div className="absolute inset-0 bg-navy/40" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col items-center text-center border border-white/10 rounded-2xl h-full backdrop-blur-sm hover:border-white/30 transition-colors">
                <div
                className={`w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 backdrop-blur-md shadow-lg`}>
                
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 tracking-tight drop-shadow-lg">
                  {stat.value}
                </h3>
                <p className="text-gray-200 font-body text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}