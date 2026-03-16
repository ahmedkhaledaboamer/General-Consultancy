"use client";
import { motion } from 'framer-motion';
import { CheckCircleIcon } from 'lucide-react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
export function VisionMission() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <section className="  bg-white overflow-hidden">
      <div className="mx-auto p-[5%]">
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32 relative">
          <motion.div
            className={`lg:col-span-5 flex flex-col items-center justify-center text-center md:items-start ${isRTL ? 'md:text-right ' : 'md:text-left '}`}
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
              duration: 0.8
            }}>
            
            <div className="inline-block px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 xl:px-12 xl:py-5 2xl:px-14 2xl:py-6 bg-gradient-to-r from-brand-pink to-brand-rose text-white rounded-full font-bold mb-6 shadow-lg shadow-brand-pink/30">
              الغاية والهدف
            </div>
            <h2 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-cairo font-bold text-gray-900 mb-8">
              رسالتنا
            </h2>
            <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-gray-600 leading-relaxed relative z-10">
              تقديم استشارات واستراتيجيات استثمارية متكاملة تمكن عملائنا من
              تحقيق أهدافهم ونمو مستدام، مع الالتزام بأعلى معايير الجودة،
              الشفافية، والمصداقية.
            </p>

            {/* Small decorative thumbnail */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48 rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-20 hidden md:block">
              <Image
                src="/imgs/A spectacular sports complex w/image_51.webp"
                alt="Success"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
              
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7 relative"
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}>
            
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-pink via-brand-purple to-brand-orange rounded-[2.5rem] opacity-50 blur-lg" />
            <div className="relative h-80 md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <div className="absolute inset-0 bg-brand-purple/10 mix-blend-overlay z-10" />
              <Image
                src="/imgs/A vibrant professional service/image_33.webp"
                alt="Strategy Planning"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                width={1200}
                height={1200}
              />
            </div>
          </motion.div>
        </div>

        {/* Decorative Divider */}
        <div className="flex justify-center items-center my-20 relative">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent absolute" />
          <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 rounded-full bg-gradient-to-br from-brand-teal to-brand-blue flex items-center justify-center shadow-lg shadow-brand-teal/30 relative z-10 animate-pulse-slow">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm" />
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7 relative order-2 lg:order-1"
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}>
            
            <div className="absolute -inset-4 bg-gradient-to-bl from-brand-teal via-brand-blue to-brand-indigo rounded-[2.5rem] opacity-50 blur-lg" />
            <div className="relative h-80 md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <div className="absolute inset-0 bg-brand-teal/10 mix-blend-overlay z-10" />
              <Image
                src="/imgs/A cuttingedge technology inves/image_38.webp"
                alt="Growth Chart"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                width={1200}
                height={1200}
              />
            </div>

            {/* Small decorative thumbnail */}
            <div className="absolute -top-10 -left-10 w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48 rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-20 hidden md:block">
              <Image
                src="/imgs/A sophisticated urban developm/image_31.webp"
                alt="Abstract"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
            </div>
          </motion.div>

          <motion.div
            className={`lg:col-span-5 order-1 lg:order-2 flex flex-col items-center justify-center text-center md:items-start ${isRTL ? 'md:text-right ' : 'md:text-left'}`}
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
            }}>
            
            <div className="inline-block px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 xl:px-12 xl:py-5 2xl:px-14 2xl:py-6 bg-gradient-to-r from-brand-teal to-brand-blue text-white rounded-full font-bold mb-6 shadow-lg shadow-brand-teal/30">
              المستقبل والطموح
            </div>
            <h2 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-cairo font-bold text-gray-900 mb-8">
              رؤيتنا
            </h2>
            <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-gray-600 leading-relaxed mb-10">
              أن نصبح الشركة الرائدة والأكثر موثوقية في مجال الاستشارات العامة
              والاستثمارية، من خلال:
            </p>
            <ul className="space-y-6 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-gray-700">
              <li className={`${isRTL ? 'text-right' : 'text-left'} flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow`}>
                <div className="w-10 h-10 rounded-full bg-brand-emerald/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircleIcon className="text-brand-emerald w-6 h-6" />
                </div>
                <span className="font-bold text-base md:text-lg lg:text-xl xl:text-2xl ">قيادة مبتكرة ومؤثرة</span>
              </li>
              <li className={`${isRTL ? 'text-right' : 'text-left'} flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow`}>
                <div className="w-10 h-10 rounded-full bg-brand-emerald/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircleIcon className="text-brand-emerald w-6 h-6" />
                </div>
                <span className="font-bold text-base md:text-lg lg:text-xl xl:text-2xl">تطوير حلول مستدامة</span>
              </li>
              <li className={`${isRTL ? 'text-right' : 'text-left'} flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow`}>
                <div className="w-10 h-10 rounded-full bg-brand-emerald/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircleIcon className="text-brand-emerald w-6 h-6" />
                </div>
                <span className="font-bold text-base md:text-lg lg:text-xl xl:text-2xl">
                  تحقيق أثر إيجابي  على شركائنا وعملائنا
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>);

}