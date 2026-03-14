"use client";
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
const promises = [
{
  text: 'اتخاذ قرارات استثمارية مدروسة',
  color: 'from-sky-400 to-blue-600'
},
{
  text: 'تطوير مشاريع ناجحة ومستدامة',
  color: 'from-emerald-400 to-teal-600'
},
{
  text: 'بناء هياكل تشغيلية قوية',
  color: 'from-violet-400 to-purple-600'
},
{
  text: 'اكتشاف الفرص الجديدة في الأسواق',
  color: 'from-magenta-400 to-pink-600'
},
{
  text: 'تحقيق النمو بثقة واستقرار',
  color: 'from-gold to-amber'
}];

export function OurPromise() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <section className=" p-[5%]  relative overflow-hidden">
      {/* Dramatic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/A modern agricultural environm/image_26.webp"
          alt="Dramatic Architecture"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          />
        
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-transparent"></div>
      </div>

      <div className="  relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="relative h-full">
            
            {/* Glass Card with Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold via-orange to-magenta rounded-[3rem] blur-2xl opacity-20"></div>

            <div className="glass-colored bg-navy/60 p-10 md:p-14 rounded-[3rem] border border-white/20 relative overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/30 to-transparent rounded-bl-full"></div>

              <h2 className={`text-center text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white mb-6 drop-shadow-lg ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
                وعدنا لك
              </h2>
              <p className={`text-center  text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-slate-200 mb-10 leading-relaxed font-light ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
                نعد شركاءنا بتقديم خدمات استشارية واستثمارية تعتمد على الخبرة،
                والتحليل الدقيق، والرؤية الواضحة. نلتزم بأن نكون الشريك الذي
                يساعدك على:
              </p>

              <ul className="space-y-6 mb-12">
                {promises.map((promise, index) =>
                <motion.li
                  key={index}
                  initial={{
                    opacity: 0,
                    x: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: index * 0.1
                  }}
                  className="flex items-center text-white group">
                  
                    <div
                    className={`w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full bg-gradient-to-br ${promise.color} flex items-center justify-center ${isRTL ? 'ml-4' : 'mr-4'} flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    
                      <CheckIcon className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white" />
                    </div>
                    <span className="font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">{promise.text}</span>
                  </motion.li>
                )}
              </ul>

              <div className="pt-8 border-t border-white/20">
                <p className={`text-center text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber to-orange ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
                  هدفنا أن نكون شريكًا يعتمد عليه في بناء المستقبل الاستثماري.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="relative h-[400px] md:h-[500px] lg:h-[700px] 2xl:h-[800px] w-full hidden lg:block">
            
            <div className="absolute top-0 right-0 w-7/8 h-7/8 md:w-8/8 md:h-8/8 xl:w-9/9 xl:h-9/9 2xl:w-10/10 2xl:h-10/10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <Image
                src="/imgs/A modern banking environment w/image_31.webp"
                alt="Business Meeting"
                className="w-full h-full object-cover"
                width={800}
                height={800}
                />
            </div>

          </motion.div>
        </div>
      </div>
    </section>);
}