"use client";
import { motion } from 'framer-motion';
import {
  CompassIcon,
  RocketIcon,
  HandshakeIcon,
  BarChart3Icon } from
'lucide-react';
const cards = [
{
  title: 'قيمنا الجوهرية',
  desc: 'التي توجه كل سلوك وقرار.',
  icon: CompassIcon,
  image:
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
  gradient: 'from-brand-purple/90 to-brand-pink/90',
  delay: 0.1
},
{
  title: 'فلسفتنا في العمل والاستثمار',
  desc: 'التي تضمن الحلول الفعالة والمستدامة.',
  icon: RocketIcon,
  image:
  'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80',
  gradient: 'from-brand-blue/90 to-brand-cyan/90',
  delay: 0.2
},
{
  title: 'وعدنا للعملاء والشركاء',
  desc: 'بتقديم الأفضل دائمًا.',
  icon: HandshakeIcon,
  image:
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
  gradient: 'from-brand-orange/90 to-brand-amber/90',
  delay: 0.3
},
{
  title: 'المصداقية والنتائج الملموسة',
  desc: 'الطريقة التي نثبت بها مصداقيتنا من خلال الأداء والنتائج الملموسة.',
  icon: BarChart3Icon,
  image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  gradient: 'from-brand-teal/90 to-brand-emerald/90',
  delay: 0.4
}];

export function IdentityDefinition() {
  return (
    <section className="  bg-white relative overflow-hidden">
      <div className=" mx-auto p-[5%] relative z-10">
        <motion.div
          className="text-center mb-20"
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
          
          <h2 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-cairo font-bold text-gray-900 mb-6 relative inline-block">
            تعريف الهوية
            <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-orange rounded-full md:w-32 lg:w-40 xl:w-48 2xl:w-56" />
          </h2>
          <p className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-gray-600 mx-auto font-tajawal mt-8">
            الهوية المؤسسية هي مزيج من القيم، الثقافة، والوعود التي تقدمها
            الشركة للعالم. تشمل:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {cards.map((card, index) =>
          <motion.div
            key={index}
            className="group relative h-80 md:h-96 lg:h-112 xl:h-128 2xl:h-144 rounded-3xl overflow-hidden shadow-xl"
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
              delay: card.delay
            }}>
            
              {/* Background Image */}
              <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
            

              {/* Gradient Overlay */}
              <div
              className={`absolute inset-0 bg-gradient-to-t ${card.gradient} mix-blend-multiply opacity-90 group-hover:opacity-75 transition-opacity duration-300`} />
            
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-white z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/30 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <card.icon size={32} className="text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-cairo font-bold mb-3 drop-shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300">
                  {card.title}
                </h3>
                <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-tajawal text-white/90 leading-relaxed drop-shadow-md transform group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Gradient Border Quote Box */}
        <motion.div
          className="relative p-1 rounded-3xl bg-gradient-to-r from-brand-teal via-brand-blue to-brand-purple max-w-5xl mx-auto shadow-2xl"
          initial={{
            opacity: 0,
            scale: 0.95
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
            delay: 0.5
          }}>
          
          <div className="bg-white rounded-[1.4rem] p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 bg-brand-purple/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 bg-brand-teal/5 rounded-full blur-2xl" />
            <p className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-cairo font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo-dark to-brand-purple-dark leading-relaxed relative z-10">
              &quot;لكل مشروع نشارك فيه، نضمن أن تكون النتائج انعكاسًا لقيمنا
              ورسالتنا.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}