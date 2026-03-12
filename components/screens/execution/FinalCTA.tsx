import React from 'react';
import { ArrowLeftIcon, PhoneIcon, MailIcon } from 'lucide-react';
export function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
          'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80")'
        }}>
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-indigo-900/90 to-purple-900/95"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            هل أنت مستعد لنقل خططك من مرحلة التفكير إلى مرحلة الإنجاز الفعلي؟
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed opacity-90">
            تواصل معنا الآن وابدأ رحلتك مع فريق محترف يضمن لك التنفيذ المثالي
            وتحقيق الأهداف.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto flex items-center justify-center">
              <span className="relative z-10 flex items-center">
                تواصل معنا
                <ArrowLeftIcon className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="px-8 py-4 bg-transparent border-2 border-white/50 hover:border-white hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all duration-300 w-full sm:w-auto">
              اعرف المزيد
            </button>
          </div>

          <div className="mt-16 pt-10 border-t border-white/20 flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-100">
            <div className="flex items-center">
              <PhoneIcon className="w-6 h-6 ml-3 text-amber-400" />
              <span className="text-lg dir-ltr">+971 50 123 4567</span>
            </div>
            <div className="flex items-center">
              <MailIcon className="w-6 h-6 ml-3 text-amber-400" />
              <span className="text-lg">info@almualla-consulting.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}