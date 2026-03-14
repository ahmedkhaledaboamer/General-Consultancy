"use client";
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, TrendingUpIcon } from 'lucide-react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
export function HeroSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navyLight to-tealDark opacity-90" />

        {/* Decorative glowing orbs */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-teal rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMnYtNGg0VjJoLTR6bS0yMCAwdjRoMnY0aDRWMmg0VjBoLTR2LTRoLTJ2NGgtNHYyaDR6bTIwIDMwdjRoMnY0aDR2LTRoNHYtMmgtNHYtNGgtMnY0aC00em0tMjAgMHY0aDJ2NGg0di00aDR2LTJoLTR2LTRoLTJ2NGgtNHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className=" mx-auto px-[5%] relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            className={` text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
            
            <div className="inline-block px-4 py-1.5 rounded-full bg-teal/20 border border-teal/30 text-tealLight mb-6 shadow-[0_0_15px_rgba(13,148,136,0.2)]">
              <span className="text-teal-300 font-body font-medium text-sm md:text-base xl:text-lg 2xl:text-xl">
                الريادة في الاستشارات والاستثمار
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-heading font-bold text-white leading-tight mb-6">
              منظومة استشارية متكاملة
              <span className="block mt-2 text-gradient-gold drop-shadow-md text-sm md:text-base xl:text-lg 2xl:text-xl">
                تدعم الاستثمار… وتبني النجاح المؤسسي.
              </span>
            </h1>

            <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-300 font-body leading-relaxed mb-8">
              في بيئة أعمال تتسم بالتغير المستمر وتزايد المنافسة، تحتاج المؤسسات
              والمستثمرون إلى منظومة خدمات قادرة على توفير الرؤية الاستراتيجية
              والدعم التنفيذي في آنٍ واحد.
              <br />
              <br />
              نحن لا نقدّم حلولًا منفصلة… بل نبني منظومة خدمات مترابطة تساعد
              شركاءنا على تحقيق النمو والاستدامة.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-yellow-500 hover:from-goldLight hover:to-gold text-navy font-bold py-4 px-8 rounded-lg transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(201,168,76,0.4)] text-sm md:text-base xl:text-lg 2xl:text-xl">
                
                <span>ابدأ رحلة النجاح معنا</span>
                {isRTL ? <ArrowLeftIcon className="w-5 h-5" /> : <ArrowRightIcon className="w-5 h-5" />}
              </button>
              <button
                onClick={() =>
                document.querySelector('#services')?.scrollIntoView({
                  behavior: 'smooth'
                })
                }
                className="cursor-pointer flex items-center justify-center gap-2 bg-navyLight/50 backdrop-blur-sm border border-teal/30 hover:border-teal hover:bg-navyLight text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg text-sm md:text-base xl:text-lg 2xl:text-xl">
                
                استكشف خدماتنا
              </button>
            </div>
          </motion.div>

          {/* Image Content */}
          <div className="relative hidden lg:block h-[650px]">
            {/* Main Image */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                x: -20
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              className="absolute top-0 right-0 w-4/5 h-[500px]   md:h-[500px]   lg:h-[500px]   2xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-navy/80 border border-gray-700/50 z-10">
              
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent mix-blend-overlay z-10" />
              <Image
                src="/imgs/A cuttingedge biotechnology re/image_34.webp"
                alt="Business Consulting and Investment"
                className="w-full h-full object-cover"
                width={800}
                height={800}
                />
              
            </motion.div>

            {/* Secondary Floating Image */}
            <motion.div
              initial={{
                opacity: 0,
                y: 50
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.5
              }}
              className="absolute bottom-10 left-0 w-2/3 h-[300px]  md:h-[300px]   lg:h-[300px]   2xl:h-[400px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-navy z-20">
              
              <div className="absolute inset-0 bg-teal/10 mix-blend-overlay z-10" />
              <Image
                src="/imgs/A cuttingedge financial innova/image_65.webp"
                alt="Team Meeting"
                className="w-full h-full object-cover"
                width={600}
                height={600}
                />
              
            </motion.div>

            {/* Floating Badge 1 */}
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute top-20 -left-10 bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-xl border border-white/20 z-30">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <TrendingUpIcon className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
                    نمو مستدام
                  </p>
                  <p className="text-xs md:text-sm xl:text-base 2xl:text-lg text-teal-200 font-body">
                    استراتيجيات فعالة
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
              className="absolute bottom-40 -right-8 bg-white p-5 rounded-xl shadow-2xl border border-gray-100 z-30">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-navy font-bold text-xl">+20</span>
                </div>
                <div>
                  <p className="font-heading font-bold text-navy">سنوات خبرة</p>
                  <p className="text-xs text-gray-500 font-body">
                    في السوق المحلي والدولي
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}