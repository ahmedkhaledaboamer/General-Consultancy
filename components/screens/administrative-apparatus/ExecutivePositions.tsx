"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
export function ExecutivePositions() {
  return (
    <section
      id="executives"
      className="  bg-slate-100 relative overflow-hidden">
      
      {/* Hero-style banner image for section */}
      <div className="absolute top-0 start-0 w-full h-[500px] z-0">
        <Image
          src="/imgs/A dynamic startup growth envir/image_49.webp"
          alt="Conference Room"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-100"></div>
      </div>

      <div className=" mx-auto p-[5%] relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-32 pt-10">
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
            className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-white mb-8 text-shadow-lg">
            
            المناصب التنفيذية
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
            className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-white/90 leading-relaxed font-medium text-shadow-md">
            
            يتكون الجهاز الإداري في الشركة من مجموعة من القيادات التنفيذية التي
            تشرف على مختلف مجالات العمل الاستشاري والاستثماري.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 mt-10">
          {/* Card 1 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: 0.1
            }}
            className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 pt-20 shadow-2xl hover:shadow-[0_20px_50px_rgba(79,70,229,0.4)] hover:-translate-y-2 transition-all duration-300 relative text-white text-center">
            
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden">
              <Image
                src="/imgs/A family business environment/image_76.webp"
                alt="رئيس مجلس الإدارة"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
              
            </div>
            <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4">رئيس مجلس الإدارة</h3>
            <p className="text-white/90 leading-relaxed text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
              يتولى الإشراف العام على التوجه الاستراتيجي للشركة، ووضع السياسات
              العليا التي تدعم تحقيق رؤيتها وتوسّعها في الأسواق.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-8 pt-20 shadow-2xl hover:shadow-[0_20px_50px_rgba(6,182,212,0.4)] hover:-translate-y-2 transition-all duration-300 relative text-white text-center lg:translate-y-12">
            
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden">
              <Image
                src="/imgs/A family business growth plann/image_4.webp"
                alt="الرئيس التنفيذي"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
              
            </div>
            <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4">الرئيس التنفيذي</h3>
            <p className="text-white/90 leading-relaxed text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
              يقود العمليات التشغيلية للشركة ويعمل على تنفيذ الاستراتيجيات
              العامة وتحقيق الأهداف المؤسسية.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
            className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl p-8 pt-20 shadow-2xl hover:shadow-[0_20px_50px_rgba(16,185,129,0.4)] hover:-translate-y-2 transition-all duration-300 relative text-white text-center">
            
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden">
              <Image
                src="/imgs/A family business planning roo/image_40.webp"
                alt="مدير إدارة الاستثمارات"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
              
            </div>
            <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4">مدير إدارة الاستثمارات</h3>
            <p className="text-white/90 leading-relaxed text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
              يشرف على تطوير وإدارة الاستثمارات في مختلف القطاعات الاقتصادية،
              ويعمل على تحليل الفرص الاستثمارية وتطوير المحافظ الاستثمارية.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: 0.1
            }}
            className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-8 pt-20 shadow-2xl hover:shadow-[0_20px_50px_rgba(225,29,72,0.4)] hover:-translate-y-2 transition-all duration-300 relative text-white text-center">
            
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden">
              <Image
                src="/imgs/A global strategy office with/image_16.webp"
                alt="مدير الاستشارات الاستراتيجية"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
              
            </div>
            <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4">
              مدير الاستشارات الاستراتيجية
            </h3>
            <p className="text-white/90 leading-relaxed text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
              يقود تقديم الخدمات الاستشارية المتعلقة بالتخطيط الاستراتيجي وتطوير
              نماذج الأعمال وتحليل الأسواق.
            </p>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 pt-20 shadow-2xl hover:shadow-[0_20px_50px_rgba(245,158,11,0.4)] hover:-translate-y-2 transition-all duration-300 relative text-white text-center lg:translate-y-12">
            
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden">
              <Image
                src="/imgs/A modern facility management h/image_61.webp"
                alt="مدير تطوير المشاريع"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
              
            </div>
            <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4">مدير تطوير المشاريع</h3>
            <p className="text-white/90 leading-relaxed text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
              مسؤول عن دعم تطوير المشاريع الاستثمارية والإشراف على مراحل التخطيط
              والتنفيذ.
            </p>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
            className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-8 pt-20 shadow-2xl hover:shadow-[0_20px_50px_rgba(139,92,246,0.4)] hover:-translate-y-2 transition-all duration-300 relative text-white text-center">
            
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden">
              <Image
                src="/imgs/A modern healthcare management/image_9.webp"
                alt="مدير الاستشارات المالية والمصرفية"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
              
            </div>
            <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4">
              مدير الاستشارات المالية والمصرفية
            </h3>
            <p className="text-white/90 leading-relaxed text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
              يشرف على تقديم الاستشارات المتعلقة بالتمويل، والاستراتيجيات
              المصرفية، والهياكل المالية للمشاريع.
            </p>
          </motion.div>

          {/* Card 7 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: 0.1
            }}
            className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-8 pt-20 shadow-2xl hover:shadow-[0_20px_50px_rgba(14,165,233,0.4)] hover:-translate-y-2 transition-all duration-300 relative text-white text-center">
            
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden">
              <Image
                src="/imgs/A modern industrial management/image_64.webp"
                alt="مدير الاستشارات القطاعية"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
              
            </div>
            <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4">
              مدير الاستشارات القطاعية
            </h3>
            <p className="text-white/90 leading-relaxed text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
              يقود الخدمات الاستشارية المتخصصة في قطاعات متعددة مثل الصحة،
              والتعليم، والطاقة، والسياحة، والصناعة.
            </p>
          </motion.div>

          {/* Card 8 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-3xl p-8 pt-20 shadow-2xl hover:shadow-[0_20px_50px_rgba(217,70,239,0.4)] hover:-translate-y-2 transition-all duration-300 relative text-white text-center lg:translate-y-12">
            
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden">
              <Image
                src="/imgs/A modern insurance office with/image_4.webp"
                alt="مدير العلاقات العامة والإعلام"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
              
            </div>
            <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4">
              مدير العلاقات العامة والإعلام
            </h3>
            <p className="text-white/90 leading-relaxed text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
              يشرف على إدارة العلاقات المؤسسية والإعلامية وتعزيز الحضور الإعلامي
              للشركة وشركائها.
            </p>
          </motion.div>

          {/* Card 9 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
            className="bg-gradient-to-br from-lime-500 to-green-600 rounded-3xl p-8 pt-20 shadow-2xl hover:shadow-[0_20px_50px_rgba(132,204,22,0.4)] hover:-translate-y-2 transition-all duration-300 relative text-white text-center">
            
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden">
              <Image
                src="/imgs/A modern logistics management/image_55.webp"
                alt="مدير التسويق والإعلام الرقمي"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
              
            </div>
            <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4">
              مدير التسويق والإعلام الرقمي
            </h3>
            <p className="text-white/90 leading-relaxed text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
              يقود استراتيجيات التسويق وإدارة الإعلام الرقمي والتواصل عبر
              المنصات المختلفة.
            </p>
          </motion.div>

        </div>
      </div>
    </section>);

}