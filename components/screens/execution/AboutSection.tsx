import { UsersIcon, BriefcaseIcon, AwardIcon } from 'lucide-react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
export function AboutSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';


  return (
    <section id="about" className="bg-white relative overflow-hidden p-[5%]">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className={`w-full lg:w-1/2 space-y-8 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-2">
            من نحن
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight">
            شريكك الموثوق لتحقيق{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              التميز والابتكار
            </span>
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 leading-relaxed">
            نحن فريق استشاري وتنفيذي متخصص يجمع بين الخبرة العملية
            والاستراتيجية العميقة، قادر على إدارة المشاريع الكبيرة والمعقدة،
            وضمان تحويل الأفكار إلى خطوات تنفيذية واضحة. تجربتنا تشمل قطاعات
            متعددة، مما يجعلنا شريكًا موثوقًا لكل مؤسسة تسعى لتحقيق التميز
            والابتكار.
          </p>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10 mix-blend-overlay"></div>
            <Image
              src="/imgs/A customized solutions concept/image_28.webp"
              alt="فريق العمل"
              className="w-full h-auto md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] object-cover hover:scale-105 transition-transform duration-700" 
              width={800}
              height={800}
          />
          </div>
          {/* Decorative Background Elements */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-blue-600/20 rounded-3xl z-0"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>);

}