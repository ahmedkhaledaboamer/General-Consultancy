import React from 'react';
import { RocketIcon, TargetIcon } from 'lucide-react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
export function HeroSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
          'url("/imgs/A professional office scene wi/image_8.webp")'
        }}>
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/95 via-[#2d5a87]/85 to-[#1a237e]/95 mix-blend-multiply"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-up">
            <TargetIcon className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'} text-amber-400`} />
            <span className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium tracking-wider">
              التميز في التنفيذ المؤسسي
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-sm">
            حوّل رؤيتك إلى واقع ملموس مع خبراء التنفيذ المؤسسي
          </h1>

          <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-blue-50 leading-relaxed mb-10 mx-auto opacity-90">
            في شركة الشيخ عبد العزيز بن عبد الله المعلا للاستشارات العامة، لا
            نكتفي بوضع الخطط، بل نعمل على تحويلها إلى إنجازات ملموسة داخل
            مؤسستك. نحن نرتكز على منهجية شاملة تدمج بين التخطيط الاستراتيجي،
            إدارة العمليات، مراقبة الجودة، والتواصل المستمر مع العميل لضمان
            نتائج دقيقة وفعّالة.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold text-lg md:text-xl xl:text-2xl 2xl:text-3xl overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] transition-all duration-300 w-full sm:w-auto">
              
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              <span className="relative flex items-center justify-center text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
                ابدأ رحلتك معنا اليوم
                <RocketIcon className={`w-5 h-5 ${!isRTL ? 'ml-2' : 'mr-2'} animate-bounce`} />
              </span>
            </Link>
            <Link
              href="#about"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-lg md:text-xl xl:text-2xl 2xl:text-3xl transition-all duration-300 w-full sm:w-auto">
              
              اكتشف المزيد
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Wave/Curve */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-[50px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.06,155.15,122.59,214.34,110.8,251.92,103.36,288.66,81.36,321.39,56.44Z"
            className="fill-white">
          </path>
        </svg>
      </div>
    </section>);

}