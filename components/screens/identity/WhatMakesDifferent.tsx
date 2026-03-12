"use client";
import { motion } from 'framer-motion';
import {
  BriefcaseIcon,
  SettingsIcon,
  ShieldCheckIcon,
  SparklesIcon,
  MessageCircleIcon } from
'lucide-react';
const features = [
{
  title: 'خبرة متخصصة وعميقة',
  desc: 'في إدارة المشاريع والاستثمارات.',
  icon: BriefcaseIcon,
  gradient: 'from-brand-purple to-brand-pink',
  thumb:
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&q=80'
},
{
  title: 'منهجية عمل متكاملة',
  desc: 'تربط بين الاستراتيجية والتنفيذ العملي.',
  icon: SettingsIcon,
  gradient: 'from-brand-blue to-brand-cyan',
  thumb:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&q=80'
},
{
  title: 'التزام بالمصداقية والشفافية',
  desc: 'في كل تعامل.',
  icon: ShieldCheckIcon,
  gradient: 'from-brand-teal to-brand-emerald',
  thumb:
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=100&q=80'
},
{
  title: 'حلول مرنة ومبتكرة',
  desc: 'تناسب احتياجات كل عميل بشكل شخصي.',
  icon: SparklesIcon,
  gradient: 'from-brand-orange to-brand-amber',
  thumb:
  'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=100&q=80'
},
{
  title: 'تواصل مستمر ومؤثر',
  desc: 'يبني الثقة والعلاقات طويلة الأمد.',
  icon: MessageCircleIcon,
  gradient: 'from-brand-rose to-brand-pink',
  thumb:
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=100&q=80'
}];

export function WhatMakesDifferent() {
  return (
    <section className="py-24 md:py-32 bg-mesh relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Large Image Banner */}
        <motion.div
          className="relative w-full h-80 rounded-[2.5rem] overflow-hidden shadow-2xl mb-20"
          initial={{
            opacity: 0,
            y: 50
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}>
          
          <img
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&q=80"
            alt="Modern Workspace"
            className="absolute inset-0 w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-brand-indigo-dark/90 via-brand-purple/80 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10 md:px-20">
            <h2 className="text-4xl md:text-6xl font-cairo font-bold text-white drop-shadow-xl max-w-2xl leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-orange">
                ما الذي يجعلنا
              </span>{' '}
              مختلفين؟
            </h2>
          </div>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-20">
          {/* Top Row: 3 cards */}
          {features.slice(0, 3).map((feature, index) =>
          <motion.div
            key={index}
            className="md:col-span-2 group bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-gray-100 relative"
            initial={{
              opacity: 0,
              y: 50
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
            }}>
            
              <div
              className={`h-2 w-full bg-gradient-to-r ${feature.gradient}`} />
            
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  
                    <feature.icon size={32} />
                  </div>
                  <img
                  src={feature.thumb}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 shadow-sm" />
                
                </div>
                <h3 className="text-2xl font-cairo font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-xl text-gray-600 font-tajawal">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          )}

          {/* Bottom Row: 2 cards centered */}
          <div className="md:col-span-1 hidden md:block"></div>
          {features.slice(3, 5).map((feature, index) =>
          <motion.div
            key={index + 3}
            className="md:col-span-2 group bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-gray-100 relative"
            initial={{
              opacity: 0,
              y: 50
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
              delay: (index + 3) * 0.1
            }}>
            
              <div
              className={`h-2 w-full bg-gradient-to-r ${feature.gradient}`} />
            
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  
                    <feature.icon size={32} />
                  </div>
                  <img
                  src={feature.thumb}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 shadow-sm" />
                
                </div>
                <h3 className="text-2xl font-cairo font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-xl text-gray-600 font-tajawal">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          )}
          <div className="md:col-span-1 hidden md:block"></div>
        </div>

        {/* Bottom Quote Card */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.5
          }}>
          
          <img
            src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&q=80"
            alt="Abstract Colorful"
            className="absolute inset-0 w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-brand-indigo-dark/80 mix-blend-multiply" />
          <div className="relative p-12 md:p-16 text-center z-10">
            <p className="text-2xl md:text-4xl font-cairo font-bold text-white leading-relaxed drop-shadow-lg">
              &quot;في كل مشروع، ندمج بين التحليل الدقيق ورؤية واضحة لتحقيق أعلى قيمة
              ممكنة.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}