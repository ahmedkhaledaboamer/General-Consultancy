"use client";
import { motion } from 'framer-motion';
import {
  StarIcon,
  ShieldCheckIcon,
  LightbulbIcon,
  HeartIcon,
  HandshakeIcon,
  Gem} from
'lucide-react';
import Image from 'next/image';
export function CoreValues() {
  return (
    <section
      id="values"
      className=" bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50 relative">
      
      <div className=" mx-auto p-[5%]">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2
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
            className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-slate-900 mb-8">
            
            قيمنا الجوهرية
          </motion.h2>
          <motion.p
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
              delay: 0.1
            }}
            className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-slate-700 leading-relaxed font-medium">
            
            تستند منظومة العمل في الشركة إلى مجموعة من القيم التي توجه قراراتنا
            وتعكس هويتنا المؤسسية.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {/* Value 1 */}
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
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: 0.1
            }}
            className="relative h-80 md:h-96 lg:h-108 xl:h-120 2xl:h-132 rounded-3xl overflow-hidden shadow-2xl group hover:-translate-y-2 transition-all duration-500">
            
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
              alt="الاحترافية"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              width={600}
              height={600}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-800/80 to-purple-500/40 mix-blend-multiply"></div>
            <div className="text-center absolute inset-0 p-8 flex flex-col justify-center items-center text-white z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30 shadow-lg group-hover:-translate-y-2 transition-transform">
                <StarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3">الاحترافية</h3>
              <p className="text-white/90 text-lg md:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed">
                نلتزم بأعلى مستويات المهنية في جميع أعمالنا وخدماتنا.
              </p>
            </div>
          </motion.div>

          {/* Value 2 */}
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
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="relative h-80 md:h-96 lg:h-108 xl:h-120 2xl:h-132 rounded-3xl overflow-hidden shadow-2xl group hover:-translate-y-2 transition-all duration-500">
            
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80"
              alt="النزاهة"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              width={600}
              height={600}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-800/80 to-cyan-500/40 mix-blend-multiply"></div>
            <div className="text-center absolute inset-0 p-8 flex flex-col justify-center items-center text-white z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30 shadow-lg group-hover:-translate-y-2 transition-transform">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3">النزاهة</h3>
              <p className="text-white/90 text-lg md:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed">
                نؤمن بالشفافية والوضوح في جميع تعاملاتنا.
              </p>
            </div>
          </motion.div>

          {/* Value 3 */}
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
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
            className="relative h-80 md:h-96 lg:h-108 xl:h-120 2xl:h-132 rounded-3xl overflow-hidden shadow-2xl group hover:-translate-y-2 transition-all duration-500">
            
            <Image
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80"
              alt="الابتكار"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              width={600}
              height={600}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900 via-rose-800/80 to-pink-500/40 mix-blend-multiply"></div>
            <div className="text-center absolute inset-0 p-8 flex flex-col justify-center items-center text-white z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30 shadow-lg group-hover:-translate-y-2 transition-transform">
                <LightbulbIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-3">الابتكار</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                نسعى دائمًا إلى تطوير حلول جديدة تدعم النمو والتقدم.
              </p>
            </div>
          </motion.div>

          {/* Value 4 */}
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
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
            className="relative h-80 md:h-96 lg:h-108 xl:h-120 2xl:h-132 rounded-3xl overflow-hidden shadow-2xl group hover:-translate-y-2 transition-all duration-500">
            
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
              alt="المسؤولية"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              width={600}
              height={600}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-teal-800/80 to-emerald-500/40 mix-blend-multiply"></div>
            <div className="text-center absolute inset-0 p-8 flex flex-col justify-center items-center text-white z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30 shadow-lg group-hover:-translate-y-2 transition-transform">
                <HeartIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3">المسؤولية</h3>
              <p className="text-white/90 text-lg md:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed">
                نعتبر نجاح شركائنا جزءًا من مسؤوليتنا المهنية.
              </p>
            </div>
          </motion.div>

          {/* Value 5 */}
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
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: 0.5
            }}
            className="relative h-80 md:h-96 lg:h-108 xl:h-120 2xl:h-132 rounded-3xl overflow-hidden shadow-2xl group hover:-translate-y-2 transition-all duration-500">
            
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
              alt="الشراكة"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              width={600}
              height={600}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900 via-orange-800/80 to-amber-500/40 mix-blend-multiply"></div>
            <div className="text-center absolute inset-0 p-8 flex flex-col justify-center items-center text-white z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30 shadow-lg group-hover:-translate-y-2 transition-transform">
                <HandshakeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3">الشراكة</h3>
              <p className="text-white/90 text-lg md:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed">
                نؤمن بأن النجاح الحقيقي يتحقق عبر التعاون وبناء علاقات طويلة
                الأمد.
              </p>
            </div>
          </motion.div>

          {/* Value 6 */}
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
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: 0.5
            }}
            className="relative h-80 md:h-96 lg:h-108 xl:h-120 2xl:h-132 rounded-3xl overflow-hidden shadow-2xl group hover:-translate-y-2 transition-all duration-500">
            
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
              alt="التميّز"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              width={600}
              height={600}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900 via-orange-800/80 to-amber-500/40 mix-blend-multiply"></div>
            <div className="text-center absolute inset-0 p-8 flex flex-col justify-center items-center text-white z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30 shadow-lg group-hover:-translate-y-2 transition-transform">
                <Gem className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3">التميّز</h3>
              <p className="text-white/90 text-lg md:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed">
                نسعى لتحقيق أعلى معايير الجودة والتميّز في كل ما نقدمه من خدمات وحلول استشارية.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}