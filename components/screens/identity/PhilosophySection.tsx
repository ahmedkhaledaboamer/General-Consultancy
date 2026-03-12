"use client";
import { motion } from 'framer-motion';
import { AwardIcon, LightbulbIcon, UsersIcon } from 'lucide-react';
const pillars = [
{
  title: 'الاحترافية المطلقة',
  desc: 'تقديم أعلى مستويات الجودة والخبرة في كل خدمة.',
  icon: AwardIcon,
  image:
  'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
  gradient: 'from-brand-purple-dark via-brand-purple to-transparent',
  delay: 0.1
},
{
  title: 'الابتكار المستمر',
  desc: 'تطوير حلول جديدة ومبتكرة لمواجهة تحديات السوق.',
  icon: LightbulbIcon,
  image:
  'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80',
  gradient: 'from-brand-rose via-brand-orange to-transparent',
  delay: 0.3
},
{
  title: 'الشراكة الحقيقية',
  desc: 'بناء علاقات متينة قائمة على الثقة، الشفافية، والدعم المستمر.',
  icon: UsersIcon,
  image:
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
  gradient: 'from-brand-blue-dark via-brand-teal to-transparent',
  delay: 0.5
}];

export function PhilosophySection() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          <h2 className="text-4xl md:text-6xl font-cairo font-bold text-gray-900 mb-6">
            فلسفتنا
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-tajawal">
            فلسفتنا تقوم على ثلاثة محاور رئيسية:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) =>
          <motion.div
            key={index}
            className="group relative h-[450px] rounded-[2rem] overflow-hidden shadow-2xl"
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
              delay: pillar.delay
            }}>
            
              {/* Background Image */}
              <img
              src={pillar.image}
              alt={pillar.title}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            

              {/* Gradient Overlay */}
              <div
              className={`absolute inset-0 bg-gradient-to-t ${pillar.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`} />
            
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />

              {/* Content positioned at bottom */}
              <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/30 shadow-lg">
                  <pillar.icon size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-cairo font-bold mb-4 drop-shadow-lg">
                  {pillar.title}
                </h3>
                <p className="text-xl font-tajawal text-white/90 leading-relaxed drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          )}
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
            <p className="text-2xl font-tajawal text-gray-800 leading-relaxed">
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