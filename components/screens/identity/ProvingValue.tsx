"use client";
import { motion } from 'framer-motion';
import { BarChart3Icon, GlobeIcon, EyeIcon, TrophyIcon } from 'lucide-react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
const metrics = [
{
  title: 'نتائج قابلة للقياس',
  desc: 'كل مشروع أو استشارة يتم تقييمه وفق مؤشرات أداء محددة.',
  icon: BarChart3Icon,
  image:
  '/imgs/A minimalist corporate support/image_35.webp',
  gradient: 'from-brand-blue to-brand-cyan',
  border: 'border-b-brand-blue'
},
{
  title: 'أفضل المعايير العالمية',
  desc: 'نحن نطبق أفضل الممارسات في كل المجالات.',
  icon: GlobeIcon,
  image:
  '/imgs/A partnership concept visualiz/image_14.webp',
  gradient: 'from-brand-teal to-brand-emerald',
  border: 'border-b-brand-teal'
},
{
  title: 'الشفافية والتواصل',
  desc: 'كل خطوة في المشروع يتم توضيحها للعميل، مع تقديم تقارير دورية.',
  icon: EyeIcon,
  image:
  '/imgs/A partnership success concept/image_48.webp',
  gradient: 'from-brand-orange to-brand-amber',
  border: 'border-b-brand-orange'
},
{
  title: 'سجل نجاح موثوق',
  desc: 'لدينا تاريخ حافل بالمشاريع الناجحة والشراكات المؤثرة.',
  icon: TrophyIcon,
  image:
  '/imgs/A refined corporate collaborat/image_24.webp',
  gradient: 'from-brand-purple to-brand-pink',
  border: 'border-b-brand-purple'
}];

export function ProvingValue() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <section className="  bg-white relative overflow-hidden">
      <div className="mx-auto p-[5%] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-10 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-18">
          <motion.div
            className="md:w-1/2"
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
            transition={{
              duration: 0.7
            }}>
            
            <h2 className={`text-center text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-cairo font-bold text-gray-900 mb-6 leading-tight ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              كيف نثبت قيمتنا؟ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue">
                وكيف نُظهر مصداقيتنا؟
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative h-48 md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] rounded-3xl overflow-hidden shadow-xl"
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
              duration: 0.7,
              delay: 0.2
            }}>
            
            <Image
              src="/imgs/A financial evaluation scene w/image_39.webp"
              alt="Celebration"
              className="w-full h-full object-cover"
              width={800}
              height={800}
            />
            
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/60 to-transparent" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {metrics.map((metric, index) =>
          <motion.div
            key={index}
            className={`bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-b-8 ${metric.border} group`}
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
              delay: index * 0.1
            }}>
            
              {/* Image Thumbnail */}
              <div className="h-40 md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full relative overflow-hidden">
                <Image
                src={metric.image}
                alt={metric.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                width={600}
                height={600}
              />
              
                <div
                className={`absolute inset-0 bg-gradient-to-t ${metric.gradient} opacity-40 mix-blend-multiply`} />
              
              </div>

              <div className="p-8 relative">
                {/* Floating Icon Badge */}
                <div
                className={`absolute -top-10 ${!isRTL ? 'left-8' : 'right-8'} w-20 h-20    rounded-2xl bg-gradient-to-br ${metric.gradient} text-white flex items-center justify-center shadow-lg border-4 border-white transform group-hover:-translate-y-2 transition-transform duration-300`}>
                
                  <metric.icon size={36} />
                </div>

                <h3 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-cairo font-bold text-gray-900 mb-4 mt-6">
                  {metric.title}
                </h3>
                <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-gray-600 leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Success Story Callout */}
        <motion.div
          className="relative rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem] xl:rounded-[4rem] 2xl:rounded-[4.5rem] overflow-hidden shadow-2xl"
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
            src="/imgs/A global investment community/image_20.webp"
            alt="Success Growth"
            className="absolute inset-0 w-full h-full object-cover"
            width={1600}
            height={1080}
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-brand-indigo-dark/95 via-brand-purple-dark/90 to-brand-pink/80" />

          <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
            <div className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              <div className="text-center">
                <div className="text-5xl md:text-7xl font-cairo font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-brand-pink-light">
                  40%
                </div>
                <div className="text-white/80 font-bold mt-2">
                  زيادة كفاءة
                </div>
              </div>
            </div>

            <div className={`flex flex-col items-center justify-center text-center md:items-start ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 2xl:px-12 2xl:py-6 rounded-full bg-brand-yellow/20 text-brand-yellow font-bold mb-6 border border-brand-yellow/30">
                <TrophyIcon size={20} />
                قصة نجاح
              </div>
              <p className="text-2xl md:text-4xl xl:text-6xl 2xl:text-7xl font-cairo font-bold text-white leading-tight drop-shadow-lg">
                &quot;أحد عملائنا تمكن من زيادة كفاءة أعماله بنسبة{' '}
                <span className="text-brand-yellow">40%</span> <br className="md:hidden lg:block xl:hidden 2xl:block" /> بعد تطبيق
                استراتيجيتنا المتكاملة.&quot;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}