 import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from 'lucide-react'
export function Footer() {
  return (
    <footer className="bg-[#071226] text-white pt-20 pb-10 border-t-4 border-gold">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center text-navy-900 font-bold text-xl">
                ع
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">
                  الشيخ عبد العزيز بن عبد الله المعلا
                </span>
                <span className="text-gold text-xs font-medium">
                  للاستشارات العامة
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              نحن كيان استشاري واستثماري يعمل على دعم المؤسسات والمستثمرين عبر
              منظومة متكاملة من الخبرات المتخصصة في مجالات الاستثمار وإدارة
              المشاريع والاستشارات الاستراتيجية.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-colors"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-4 inline-block">
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  className="text-white/60 hover:text-gold transition-colors"
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/60 hover:text-gold transition-colors"
                >
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/60 hover:text-gold transition-colors"
                >
                  خدماتنا الأساسية
                </a>
              </li>
              <li>
                <a
                  href="#sectors"
                  className="text-white/60 hover:text-gold transition-colors"
                >
                  القطاعات
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/60 hover:text-gold transition-colors"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-4 inline-block">
              خدماتنا
            </h4>
            <ul className="space-y-3">
              <li className="text-white/60">إدارة الاستثمارات</li>
              <li className="text-white/60">الاستشارات الاستراتيجية</li>
              <li className="text-white/60">تطوير المشاريع</li>
              <li className="text-white/60">الاستشارات المالية</li>
              <li className="text-white/60">تطوير الأعمال</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-4 inline-block">
              معلومات التواصل
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-gold shrink-0 mt-1" />
                <span className="text-white/60 text-sm leading-relaxed">
                  الإمارات العربية المتحدة
                  <br />
                  دبي، شارع الشيخ زايد
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-gold shrink-0" />
                <span className="text-white/60 text-sm" dir="ltr">
                  +971 50 000 0000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-gold shrink-0" />
                <span className="text-white/60 text-sm">
                  info@almuallaconsulting.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-start">
            جميع الحقوق محفوظة © {new Date().getFullYear()} شركة الشيخ عبد
            العزيز بن عبد الله المعلا للاستشارات العامة
          </p>
          <div className="flex items-center gap-4 text-sm text-white/40">
            <a href="#" className="hover:text-gold transition-colors">
              الشروط والأحكام
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gold transition-colors">
              سياسة الخصوصية
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
