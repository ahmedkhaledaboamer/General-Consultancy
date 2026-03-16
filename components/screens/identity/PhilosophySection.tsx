"use client";
import { motion } from 'framer-motion';
import { AwardIcon, LightbulbIcon, UsersIcon, type LucideIcon } from 'lucide-react';
import Image from 'next/image';

type PillarConfig = {
  title: string;
  desc: string;
  icon: LucideIcon;
  image: string;
  gradient: string;
  delay: number;
};

const pillars: PillarConfig[] = [
{
  title: 'الاحترافية المطلقة',
  desc: 'تقديم أعلى مستويات الجودة والخبرة في كل خدمة.',
  icon: AwardIcon,
  image:
  '/imgs/A transparent strategy environ/image_19.webp',
  gradient: 'from-brand-purple-dark via-brand-purple to-transparent',
  delay: 0.1
},
{
  title: 'الابتكار المستمر',
  desc: 'تطوير حلول جديدة ومبتكرة لمواجهة تحديات السوق.',
  icon: LightbulbIcon,
  image:
  '/imgs/A visionary roadmap scene feat/image_22.webp',
  gradient: 'from-brand-rose via-brand-orange to-transparent',
  delay: 0.3
},
{
  title: 'الشراكة الحقيقية',
  desc: 'بناء علاقات متينة قائمة على الثقة، الشفافية، والدعم المستمر.',
  icon: UsersIcon,
  image:
  '/imgs/A longterm support environment/image_30.webp',
  gradient: 'from-brand-blue-dark via-brand-teal to-transparent',
  delay: 0.5
}];

function PhilosophyCard({ title, desc, icon: Icon, image, gradient, delay }: PillarConfig) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center group relative h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] rounded-[2rem] overflow-hidden shadow-2xl"
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
        duration: 0.6,
        delay
      }}>
      
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        width={800}
        height={800}
      />

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
      />

      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />

      {/* Content positioned at bottom - desc visible by default on tablet/mobile, on hover on desktop */}
      <div className="flex flex-col items-center justify-center w-full p-8 text-white transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/30 shadow-lg">
          <Icon size={32} className="text-white" />
        </div>
        <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-cairo font-bold mb-4 drop-shadow-lg">
          {title}
        </h3>
        <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-white/90 leading-relaxed drop-shadow-md opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 lg:delay-100">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export function PhilosophySection() {
  return (
    <section className="  bg-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="mx-auto p-[5%] relative z-10">
        <motion.div
          className="text-center mb-20 relative"
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
            duration: 0.7
          }}>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue blur-3xl opacity-30 -z-10" />
          <h2 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-cairo font-bold text-gray-900 mb-6">
            فلسفتنا
          </h2>
          <p className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-gray-600 mx-auto">
            فلسفتنا تقوم على ثلاثة محاور رئيسية:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar) => (
            <PhilosophyCard key={pillar.title} {...pillar} />
          ))}
        </div>

        <motion.div
          className="relative max-w-4xl mx-auto"
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
            delay: 0.7
          }}>
          
          <div className="absolute inset-0 bg-gradient-to-r from-brand-teal via-brand-blue to-brand-purple rounded-3xl transform rotate-1 opacity-50 blur-sm" />
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 text-center border border-white shadow-xl">
            <p className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-gray-800 leading-relaxed">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink text-3xl block mb-4">
                مثال تطبيقي
              </span>
              نبدأ كل مشروع بتقييم الوضع الحالي، نضع خطة واضحة، ثم نتابع التنفيذ
              لضمان تحقيق النتائج المرجوة.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}