"use client";
import { motion } from 'framer-motion';
import {
  TargetIcon,
  BarChartIcon,
  MessageCircleIcon,
  RocketIcon,
  CompassIcon,
} from 'lucide-react';
import Image from 'next/image';

export function SuccessRoadmap() {
  return (
    <section className=" relative overflow-hidden text-white">
      {/* Blurred background image and gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/A vibrant tech startup workspa/image_28.webp"
          alt="City at Night"
          className="w-full h-full object-cover blur-[2px] scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/95 via-blue-900/90 to-cyan-900/95 mix-blend-multiply" />
      </div>

      <div className="mx-auto p-[5%] relative z-10">
        <div className="text-center mb-12 md:mb-24">
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
            className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-4 md:mb-8 text-shadow-lg">
            
            خارطة طريق النجاح
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
            className="text-base md:text-xl xl:text-2xl 2xl:text-3xl text-white/90 leading-relaxed font-medium text-shadow-md mx-auto">
            
            نعتمد في عملنا على خارطة طريق واضحة تساعد شركاءنا على تحقيق النجاح
            في مشاريعهم واستثماراتهم.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical gradient line: start-aligned on mobile, centered on desktop */}
          <div
            className="absolute top-0 bottom-0 start-8 md:start-6 w-2 md:start-auto md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-purple-500 via-rose-500 to-amber-500 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            aria-hidden
          />

          <div className="space-y-10 md:space-y-16">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative flex flex-col md:flex-row md:justify-start items-start md:items-center group min-h-[4rem] md:min-h-0"
            >
              <div className="absolute -start-5 md:start-6 w-14 h-14 md:w-16 md:h-16 -translate-x-1/2 md:left-1/2 md:start-auto md:-translate-x-1/2 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(168,85,247,0.6)] border-4 border-white group-hover:scale-110 transition-transform top-3 md:top-0">
                <TargetIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="w-full ms-0 md:w-1/2 md:pe-16 md:max-w-[calc(50%-3rem)] text-center md:text-end min-w-0">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 sm:p-8 rounded-2xl md:rounded-3xl hover:bg-white/20 transition-colors shadow-2xl flex flex-col sm:flex-row-reverse gap-4 sm:gap-6 items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 rounded-xl md:rounded-2xl overflow-hidden shrink-0 shadow-lg border-2 border-white/30">
                    <Image
                      src="/imgs/A warm family business office/image_5.webp"
                      alt="تحديد الأهداف"
                      className="w-full h-full object-cover"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-purple-300 font-bold text-sm md:text-lg xl:text-xl 2xl:text-2xl mb-1 md:mb-2 block">المرحلة الأولى</span>
                    <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-2 md:mb-3">تحديد الأهداف</h3>
                    <p className="text-white/80 text-sm md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed break-words">
                      فهم رؤية العمل وتحديد الأهداف الاستراتيجية للمشروع.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative flex flex-col md:flex-row md:justify-end items-start md:items-center group min-h-[4rem] md:min-h-0"
            >
              <div className="absolute -start-5 md:start-6 w-14 h-14 md:w-16 md:h-16 -translate-x-1/2 md:left-1/2 md:start-auto md:-translate-x-1/2 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.6)] border-4 border-white group-hover:scale-110 transition-transform top-3 md:top-0">
                <BarChartIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="w-full ms-0 md:w-1/2 md:ps-16 md:max-w-[calc(50%-3rem)] text-center md:text-start min-w-0">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 sm:p-8 rounded-2xl md:rounded-3xl hover:bg-white/20 transition-colors shadow-2xl flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 rounded-xl md:rounded-2xl overflow-hidden shrink-0 shadow-lg border-2 border-white/30">
                    <Image
                      src="/imgs/A dramatic energy investment e/image_17.webp"
                      alt="تحليل الفرص"
                      className="w-full h-full object-cover"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-blue-300 font-bold text-sm md:text-lg xl:text-xl 2xl:text-2xl mb-1 md:mb-2 block">المرحلة الثانية</span>
                    <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-2 md:mb-3">تحليل الفرص</h3>
                    <p className="text-white/80 text-sm md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed break-words">
                      دراسة السوق وتحديد الفرص الاستثمارية المتاحة.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative flex flex-col md:flex-row md:justify-start items-start md:items-center group min-h-[4rem] md:min-h-0"
            >
              <div className="absolute -start-5 md:start-6 w-14 h-14 md:w-16 md:h-16 -translate-x-1/2 md:left-1/2 md:start-auto md:-translate-x-1/2 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(20,184,166,0.6)] border-4 border-white group-hover:scale-110 transition-transform top-3 md:top-0">
                <MessageCircleIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="w-full ms-0 md:w-1/2 md:pe-16 md:max-w-[calc(50%-3rem)] text-center md:text-end min-w-0">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 sm:p-8 rounded-2xl md:rounded-3xl hover:bg-white/20 transition-colors shadow-2xl flex flex-col sm:flex-row-reverse gap-4 sm:gap-6 items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 rounded-xl md:rounded-2xl overflow-hidden shrink-0 shadow-lg border-2 border-white/30">
                    <Image
                      src="/imgs/27 A bustling construction sit/image_20.webp"
                      alt="تطوير الاستراتيجية"
                      className="w-full h-full object-cover"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-teal-300 font-bold text-sm md:text-lg xl:text-xl 2xl:text-2xl mb-1 md:mb-2 block">المرحلة الثالثة</span>
                    <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-2 md:mb-3">تطوير الاستراتيجية</h3>
                    <p className="text-white/80 text-sm md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed break-words">
                      بناء خطة عمل متكاملة لتطبيق الأهداف.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative flex flex-col md:flex-row md:justify-end items-start md:items-center group min-h-[4rem] md:min-h-0"
            >
              <div className="absolute -start-5 md:start-6 w-14 h-14 md:w-16 md:h-16 -translate-x-1/2 md:left-1/2 md:start-auto md:-translate-x-1/2 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(244,114,182,0.6)] border-4 border-white group-hover:scale-110 transition-transform top-3 md:top-0">
                <RocketIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="w-full ms-0 md:w-1/2 md:ps-16 md:max-w-[calc(50%-3rem)] text-center md:text-start min-w-0">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 sm:p-8 rounded-2xl md:rounded-3xl hover:bg-white/20 transition-colors shadow-2xl flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 rounded-xl md:rounded-2xl overflow-hidden shrink-0 shadow-lg border-2 border-white/30">
                    <Image
                      src="/imgs/A vibrant education environmen/image_21.webp"
                      alt="التنفيذ"
                      className="w-full h-full object-cover"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-pink-300 font-bold text-sm xl:text-xl 2xl:text-2xl mb-1 md:mb-2 block">المرحلة الرابعة</span>
                    <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-2 md:mb-3">التنفيذ</h3>
                    <p className="text-white/80 text-sm md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed break-words">
                      تطبيق الخطط والبرامج وفق أفضل الممارسات.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative flex flex-col md:flex-row md:justify-start items-start md:items-center group min-h-[4rem] md:min-h-0"
            >
              <div className="absolute -start-5 md:start-6 w-14 h-14 md:w-16 md:h-16 -translate-x-1/2 md:left-1/2 md:start-auto md:-translate-x-1/2 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(245,158,11,0.6)] border-4 border-white group-hover:scale-110 transition-transform top-3 md:top-0">
                <CompassIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="w-full ms-0 md:w-1/2 md:pe-16 md:max-w-[calc(50%-3rem)] text-center md:text-end min-w-0">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 sm:p-8 rounded-2xl md:rounded-3xl hover:bg-white/20 transition-colors shadow-2xl flex flex-col sm:flex-row-reverse gap-4 sm:gap-6 items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 rounded-xl md:rounded-2xl overflow-hidden shrink-0 shadow-lg border-2 border-white/30">
                    <Image
                      src="/imgs/6 A bright hospital corridor w/image_22.webp"
                      alt="النمو المستدام"
                      className="w-full h-full object-cover"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-amber-300 font-bold text-sm xl:text-xl 2xl:text-2xl mb-1 md:mb-2 block">المرحلة الخامسة</span>
                    <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-2 md:mb-3">النمو المستدام</h3>
                    <p className="text-white/80 text-sm md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed break-words">
                      دعم المشاريع في مواصلة التوسع والتطوير المستقبلي.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );

}