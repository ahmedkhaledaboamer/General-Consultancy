import { PhoneIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';
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
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 leading-tight">
            هل أنت مستعد لنقل خططك من مرحلة التفكير إلى مرحلة الإنجاز الفعلي؟
          </h2>
          <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-blue-100 mb-12 leading-relaxed opacity-90">
            تواصل معنا الآن وابدأ رحلتك مع فريق محترف يضمن لك التنفيذ المثالي
            وتحقيق الأهداف.
          </p>
          <div className="mt-16 pt-10 border-t border-white/20 flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-100">
            <Link href="tel:+971521068882" className="flex items-center">
              <PhoneIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 ml-3 text-amber-400" />
              <span className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl dir-ltr">521068882 971+</span>
            </Link>
            <Link href="mailto:info@shazmlc.com" className="flex items-center">
              <MailIcon className="w-6 h-6 ml-3 text-amber-400" />
              <span className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl">info@shazmlc.com</span>
            </Link>
          </div>
        </div>
      </div>
    </section>);

}