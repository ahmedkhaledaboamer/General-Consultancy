import { HeroSection } from "@/components/screens/services/HeroSection";
import { ServicesSection } from "@/components/screens/services/ServicesSection";
import { HowWeWorkSection } from "@/components/screens/services/HowWeWorkSection";
import { WhyChooseUsSection } from "@/components/screens/services/WhyChooseUsSection";
import { FAQSection } from "@/components/screens/services/FAQSection";
import { CTASection } from "@/components/screens/services/CTASection";
import { useLocale } from "next-intl";
import Image from "next/image";
const  ServicesPage = () => {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <main
    dir={isRTL ? 'rtl' : 'ltr'}
    className="font-body text-gray-800 bg-gray-50 overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <HowWeWorkSection />
      <WhyChooseUsSection />

      {/* Image Divider */}
      <section className="relative h-64 md:h-80 w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/imgs/11 A luxurious real estate dev/image_24.webp"
            alt="Business strategy and growth"
            className="w-full h-full object-cover object-center"
            width={1400}
            height={800}
            style={{
              transform: 'translateZ(-1px) scale(1.5)'
            }} // Simple parallax effect
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-tealDark/80 to-navy/90" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white leading-relaxed drop-shadow-lg">
            &quot;نحن لا نقدّم حلولًا منفصلة… بل نبني منظومة خدمات مترابطة تساعد
            شركاءنا على تحقيق النمو والاستدامة.&quot;
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(201,168,76,0.6)]" />
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </main>
  );
}

export default ServicesPage