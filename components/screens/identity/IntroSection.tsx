"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLocale } from 'next-intl';
export function IntroSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section id="about" className="relative py-24 bg-mesh overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-brand-purple/20 rounded-full blur-2xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-brand-pink/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />

      {/* Small floating thumbnails */}
      <motion.div
        className="absolute top-40 left-20 w-24 h-24 rounded-2xl overflow-hidden border-4 border-brand-teal shadow-xl animate-float hidden lg:block z-10"
        initial={{
          opacity: 0,
          scale: 0
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
          delay: 0.4
        }}>
        
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
          alt="Data"
          className="w-full h-full object-cover"
          width={400}
          height={400}
        />
        
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-20 w-32 h-32 rounded-full overflow-hidden border-4 border-brand-orange shadow-xl animate-float-reverse hidden lg:block z-10"
        initial={{
          opacity: 0,
          scale: 0
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
          delay: 0.6
        }}>
        
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80"
          alt="Strategy"
          className="w-full h-full object-cover"
          width={400}
          height={400}
        />
        
      </motion.div>

      <div className=" mx-auto px-[5%] md:px-[10%] relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            className="relative order-2 lg:order-1"
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
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/40 to-transparent mix-blend-overlay z-10" />
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="Team Collaboration"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                width={1200}
                height={1200}
              />
              
            </div>
            {/* Decorative dots pattern behind image */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[radial-gradient(#CBD5E1_2px,transparent_2px)] [background-size:16px_16px] -z-10" />
          </motion.div>

          {/* Text Side */}
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
              duration: 0.8,
              delay: 0.2
            }}
            className={`order-1 lg:order-2 text-center flex flex-col items-center justify-center md:items-start ${isRTL ? 'md:text-right ' : 'md:text-left '}`}>
            
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-purple/10 text-brand-purple font-tajawal font-bold mb-6 border border-brand-purple/20">
              <span className={`w-2 h-2 rounded-full bg-brand-purple animate-pulse ${isRTL ? 'ml-2' : 'mr-2'}`} />
              من نحن
            </div>

            <h2 className="text-4xl md:text-5xl font-cairo font-bold text-gray-900 mb-6 leading-tight">
              مقدمة
            </h2>

            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-coral via-brand-pink to-brand-purple mb-8 rounded-full" />

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-tajawal">
              الهوية المؤسسية تمثل روح الشركة وشخصيتها، وتجيب على أسئلة مثل: من
              نحن؟ ماذا نمثل؟ ولماذا نتميز؟ هي ليست مجرد عناصر بصرية، بل هي
              طريقة تفكيرنا، أسلوب عملنا، والتزامنا تجاه عملائنا وفريقنا. تجسد
              هويتنا كل ما نفعله، وكل قرار نتخذه، سواء داخليًا أو خارجيًا، لتكون
              الشركة دائمًا مرآة لقيمها ومبادئها.
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

}