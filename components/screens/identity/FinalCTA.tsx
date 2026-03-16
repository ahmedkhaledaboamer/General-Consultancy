"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
export function FinalCTA() {
  const locale = useLocale();
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background Image Collage Grid */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-1 opacity-40 mix-blend-luminosity">
        <Image
          src="/imgs/A modern mediumscale industria/image_58.webp"
          alt="Office"
          className="w-full h-full object-cover"
          width={600}
          height={600}
        />
        
        <Image
          src="/imgs/A modern pharmaceutical invest/image_21.webp"
          alt="Success"
          className="w-full h-full object-cover"
          width={600}
          height={600}
        />
        
        <Image
          src="/imgs/A modern pharmaceutical manufa/image_2.webp"
          alt="Team"
          className="w-full h-full object-cover"
          width={600}
          height={600}
        />
        
        <Image
          src="/imgs/A modern plastics manufacturin/image_32.webp"
          alt="City"
          className="w-full h-full object-cover"
          width={600}
          height={600}
        />
        
        <Image
          src="/imgs/A modern postal sorting facili/image_27.webp"
          alt="Trust"
          className="w-full h-full object-cover"
          width={600}
          height={600}
        />
        
        <Image
          src="/imgs/A modern residential real esta/image_27.webp"
          alt="Growth"
          className="w-full h-full object-cover"
          width={600}
          height={600}
        />
        
        <Image
          src="/imgs/A modern veterinary hospital w/image_47.webp"
          alt="Leadership"
          className="w-full h-full object-cover"
          width={600}
          height={600}
        />
        
        <Image
          src="/imgs/A stunning beachfront resort w/image_14.webp"
          alt="Strategy"
          className="w-full h-full object-cover"
          width={600}
          height={600}
        />
        
      </div>

      {/* Heavy Multi-stop Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo-dark/95 via-brand-purple-dark/90 to-brand-teal/95 z-0" />

      {/* Animated Floating Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-teal rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-blob" />
        <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-brand-pink rounded-full mix-blend-screen filter blur-[120px] opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-brand-blue rounded-full mix-blend-screen filter blur-[150px] opacity-50 animate-blob animation-delay-4000" />

        {/* Confetti-like dots */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-brand-yellow rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-brand-coral rounded-full animate-float-reverse animation-delay-1000" />
        <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-brand-emerald rounded-full animate-float animation-delay-2000" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-brand-pink rounded-full animate-float-reverse animation-delay-3000" />
      </div>

      <div className="mx-auto px-[5%] relative z-10 text-center">
        <motion.div
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
            duration: 0.8
          }}>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-cairo font-bold text-white mb-10 leading-tight drop-shadow-2xl">
            إذا كنت تبحث عن شريك مؤسسي موثوق...
          </h2>

          <p className="text-2xl md:text-4xl text-white/90 leading-relaxed mb-16 drop-shadow-lg font-medium">
            نحن هنا لنكون دليلك في رحلة النمو والنجاح.
            <br className="hidden md:block" />
            دعنا نرتقي معًا بهويتك ومشاريعك إلى آفاق جديدة.
          </p>

          <Link href={`/${locale}/execution`} className="group relative inline-flex items-center justify-center px-16 py-8 text-2xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-brand-coral via-brand-orange to-brand-pink font-cairo rounded-full hover:scale-105 hover:shadow-[0_0_60px_rgba(249,115,22,0.6)] focus:outline-none overflow-hidden">
            <span className="relative z-10 drop-shadow-md">
              تواصل معنا الآن
            </span>
            {/* Shimmer effect */}
            <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
          </Link>
        </motion.div>
      </div>
    </section>);

}