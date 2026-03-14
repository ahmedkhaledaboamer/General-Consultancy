"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLocale } from 'next-intl';
const steps = [
{
  title: 'فهم الاحتياجات',
  description:
  'نبدأ بتحليل أهداف العميل وتحدياته الحالية لفهم الصورة الكاملة.',
  number: '01',
  color: 'from-sky-400 to-blue-600',
  image:
  '/imgs/18 A vibrant African marketpla/image_5.webp'
},
{
  title: 'التحليل والتقييم',
  description: 'نقوم بدراسة السوق والفرص المتاحة وتقييم الخيارات الممكنة.',
  number: '02',
  color: 'from-emerald-400 to-teal-600',
  image:
  '/imgs/29 A dynamic trading floor wit/image_29.webp'
},
{
  title: 'بناء المسار الاستراتيجي',
  description:
  'نصمم خطة عمل واضحة تعتمد على أفضل الممارسات والخبرات المتخصصة.',
  number: '03',
  color: 'from-violet-400 to-purple-600',
  image:
  '/imgs/A dynamic educational environm/image_75.webp'
},
{
  title: 'التنفيذ والمتابعة',
  description: 'نرافق شركاءنا في مراحل التنفيذ لضمان تحقيق النتائج المطلوبة.',
  number: '04',
  color: 'from-magenta-400 to-pink-600',
  image:
  '/imgs/A dynamic esports arena with m/image_56.webp'
},
{
  title: 'التطوير والنمو',
  description:
  'نستمر في دعم شركائنا لتطوير أعمالهم وتعزيز قدرتهم على التوسع المستقبلي.',
  number: '05',
  color: 'from-gold to-amber',
  image:
  '/imgs/A dynamic financial environmen/image_4.webp'
}];

export function ClientJourney() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <section className=" p-[5%]  relative overflow-hidden">
      {/* Background Image with Colorful Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/A dynamic financial services e/image_42.webp"
          alt="Modern Office"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          />
        
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-purple-deep/90 to-navy/95 mix-blend-multiply"></div>
      </div>

      <div className="  relative z-10">
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
            className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white mb-6">
            
            رحلة العميل معنا
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
            className="text-xl xl:text-2xl 2xl:text-3xl text-slate-300 font-light">
            
            رحلة العمل معنا ليست مجرد خدمة استشارية، بل هي مسار متكامل يبدأ
            بالفهم وينتهي بتحقيق النتائج.
          </motion.p>
        </div>

        <div className="relative">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-white/10 rounded-full z-0">
            <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-l from-sky via-magenta to-gold opacity-50"></div>
            {/* Animated dot on line */}
            <motion.div
              className="absolute top-1/2 right-0 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#fff] -translate-y-1/2"
              animate={{
                right: !isRTL ? ['100%', '0%'] : ['0%', '100%']
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear'
              }} />
            
          </div>

          {/* Vertical Connecting Line (Mobile) */}
          <div className="lg:hidden absolute top-0 bottom-0 right-1/2 w-1 bg-gradient-to-b from-sky via-magenta to-gold opacity-30 translate-x-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, index) =>
            <motion.div
              key={index}
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
                delay: index * 0.15
              }}
              className="h-full relative flex flex-col items-center text-center group">
              
                {/* Image Circle */}
                <div className="w-48 h-48 md:w-52 md:h-52 xl:w-60 xl:h-60 2xl:w-72 2xl:h-72 rounded-full p-2 bg-white/5 backdrop-blur-sm border border-white/10 mb-8 relative z-10 group-hover:scale-105 transition-transform duration-500">
                  <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`}>
                </div>
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    width={800}
                    height={800}
                    />
                  
                    <div
                    className={`absolute inset-0 bg-gradient-to-t ${step.color} mix-blend-multiply opacity-60 group-hover:opacity-20 transition-opacity duration-500`}>
                  </div>
                  </div>

                  {/* Number Badge */}
                  <div
                  className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg border-4 border-navy`}>
                  
                    <span className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-black text-white">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="h-full glass-colored bg-navy/40 p-6 rounded-2xl w-full border-t-4 border-transparent group-hover:border-white/50 transition-all duration-300">
                  <h3 className="text-sm md:text-lg xl:text-xl 2xl:text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base xl:text-lg 2xl:text-xl text-slate-300 leading-relaxed font-light">
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