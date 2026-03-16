"use client";
import { motion } from 'framer-motion';
import {
  BriefcaseIcon,
  SettingsIcon,
  ShieldCheckIcon,
  SparklesIcon,
  MessageCircleIcon,
  type LucideIcon,
} from 'lucide-react';
import Image from 'next/image';

type FeatureConfig = {
  title: string;
  desc: string;
  icon: LucideIcon;
  gradient: string;
  thumb: string;
};

const features: FeatureConfig[] = [
{
  title: 'خبرة متخصصة وعميقة',
  desc: 'في إدارة المشاريع والاستثمارات.',
  icon: BriefcaseIcon,
  gradient: 'from-brand-purple to-brand-pink',
  thumb:
  '/imgs/A market opportunity evaluatio/image_44.webp'
},
{
  title: 'منهجية عمل متكاملة',
  desc: 'تربط بين الاستراتيجية والتنفيذ العملي.',
  icon: SettingsIcon,
  gradient: 'from-brand-blue to-brand-cyan',
  thumb:
  '/imgs/A modern banking advisory scen/image_15.webp'
},
{
  title: 'التزام بالمصداقية والشفافية',
  desc: 'في كل تعامل.',
  icon: ShieldCheckIcon,
  gradient: 'from-brand-teal to-brand-emerald',
  thumb:
  '/imgs/A modern banking strategy envi/image_23.webp'
},
{
  title: 'حلول مرنة ومبتكرة',
  desc: 'تناسب احتياجات كل عميل بشكل شخصي.',
  icon: SparklesIcon,
  gradient: 'from-brand-orange to-brand-amber',
  thumb:
  '/imgs/A modern investment portfolio/image_25.webp'
},
{
  title: 'تواصل مستمر ومؤثر',
  desc: 'يبني الثقة والعلاقات طويلة الأمد.',
  icon: MessageCircleIcon,
  gradient: 'from-brand-rose to-brand-pink',
  thumb:
  '/imgs/A modern investment strategy s/image_6.webp'
}];

type FeatureCardProps = FeatureConfig & {
  index: number;
  spanClass: string;
};

function FeatureCard({ title, desc, icon: Icon, gradient, thumb, index, spanClass }: FeatureCardProps) {
  return (
    <motion.div
      className={`${spanClass} group bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-gray-100 relative`}
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
        className={`mx-auto h-2 w-full md:w-1/2 lg:w-2/3 xl:w-3/4 2xl:w-full bg-gradient-to-r ${gradient}`}
      />

      <div className="p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16">
        <div className="flex justify-between items-start mb-6">
          <div
            className={`w-16 h-16 md:w-20 md:h-20  rounded-2xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
            <Icon size={32} />
          </div>
          <Image
            src={thumb}
            alt={title}
            width={1200}
            height={1200}
            className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-full object-cover border-2 border-gray-100 shadow-sm" />
        </div>
        <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-cairo font-bold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export function WhatMakesDifferent() {
  return (
    <section className="  bg-mesh relative overflow-hidden">
      <div className="mx-auto p-[5%] relative z-10">
        {/* Large Image Banner */}
        <motion.div
          className="relative w-full h-80 md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl mb-20"
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
          
          <Image
            src="/imgs/A modern retail investment env/image_0.webp"
            alt="Modern Workspace"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-indigo-dark/90 via-brand-purple/80 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10 md:px-20">
            <h2 className="mx-auto text-center text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-cairo font-bold text-white drop-shadow-xl leading-tight">
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
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              index={index}
              spanClass="md:col-span-2"
            />
          ))}

          {/* Bottom Row: 2 cards centered */}
          <div className="md:col-span-1 hidden md:block"></div>
          {features.slice(3, 5).map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              index={index + 3}
              spanClass="md:col-span-2"
            />
          ))}
          <div className="md:col-span-1 hidden md:block"></div>
        </div>

        {/* Bottom Quote Card */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto"
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
          
          <Image
            src="/imgs/A modern strategic investment/image_0.webp"
            alt="Abstract Colorful"
            className="absolute inset-0 w-full h-full object-cover"
            width={1200}
            height={1200}
          />
          
          <div className="absolute inset-0 bg-brand-indigo-dark/80 mix-blend-multiply" />
          <div className="relative p-12 md:p-16 text-center z-10">
            <p className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-cairo font-bold text-white leading-relaxed drop-shadow-lg">
              &quot;في كل مشروع، ندمج بين التحليل الدقيق ورؤية واضحة لتحقيق أعلى قيمة
              ممكنة.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}