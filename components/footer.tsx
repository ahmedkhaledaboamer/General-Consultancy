import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from 'lucide-react'
import {useLocale, useTranslations} from 'next-intl'
import {Link} from '@/i18n/routing'
import Logo from './logo'
export function Footer() {
  const locale = useLocale()
  const t = useTranslations('footer')
  const isArabic = locale === 'ar'

  const quickLinksRaw = t.raw('quickLinks.links')
  const quickLinks =
    Array.isArray(quickLinksRaw) &&
    quickLinksRaw
      .map((link: unknown) => {
        const l = link as {label?: unknown; href?: unknown}
        const href = String(l.href || '')
        const label = String(l.label || '')
        return {href, label}
      })
      .filter(link => link.href && link.href !== '[object Object]')

  const servicesRaw = t.raw('services.items')
  const services =
    Array.isArray(servicesRaw) &&
    servicesRaw
      .map(item => String(item))
      .filter(item => item && item !== '[object Object]')

  return (
    <footer
      dir={isArabic ? 'rtl' : 'ltr'}
      className="bg-[#071226] text-white pt-20 pb-10 border-t-4 border-gold"
    >
      <div
        className={`px-[5%] text-center ${isArabic ? 'md:text-right' : 'md:text-left'}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-center md:justify-start flex-col md:flex-row gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-transparent flex items-center justify-center">
                <Logo className="w-full h-full" size={50} />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg md:text-xl xl:text-2xl 2xl:text-3xl leading-tight">
                  {t('company.name')}
                </span>
                <span className="text-gold text-xs md:text-sm xl:text-base 2xl:text-lg font-medium">
                  {t('company.tagline')}
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm md:text-base xl:text-lg 2xl:text-xl leading-relaxed mb-6">
              {t('company.description')}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="#"
                className="p-3 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-colors"
              >
                <LinkedinIcon className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8" />
              </Link>
              <Link
                href="#"
                className="p-3 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-colors"
              >
                <TwitterIcon className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8" />
              </Link>
              <Link
                href="#"
                className="p-3 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-colors"
              >
                <FacebookIcon className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8" />
              </Link>
              <Link
                href="#"
                className="p-3 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-colors"
              >
                <InstagramIcon className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4 inline-block">
              {t('quickLinks.title')}
            </h4>
            <ul className="space-y-3">
              {quickLinks &&
                quickLinks.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4 inline-block">
              {t('services.title')}
            </h4>
            <ul className="space-y-3">
              {services &&
                services.map(service => (
                  <li key={service} className="text-white/60">
                    {service}
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4 inline-block">
              {t('contact.title')}
            </h4>
            <ul className="space-y-4 flex flex-col items-center justify-center md:items-start md:justify-start">
              <li className="flex items-center gap-3">
                <MapPinIcon className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-gold shrink-0 mt-1" />
                <span className="text-white/60 text-sm leading-relaxed">
                  {t('contact.location')}
                  <br />
                </span>
              </li>
              <Link href="tel:+971521068882">
                <li className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-gold shrink-0" />
                  <span className="text-white/60 text-sm" dir="ltr">
                    {t('contact.phone')}
                  </span>
                </li>
              </Link>
              <Link href="mailto:info@shazmlc.com">
                <li className="flex items-center gap-3">
                  <MailIcon className="w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-gold shrink-0" />
                  <span className="text-white/60 text-sm">
                    {t('contact.email')}
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div
          className={`border-t border-white/10 pt-8 flex flex-col text-center`}
        >
          <p className="text-white/40 text-sm md:text-base xl:text-lg 2xl:text-xl">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
