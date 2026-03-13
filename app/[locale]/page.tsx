import { getLocale, getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/screens/home/HeroSection";
import { AboutSection } from "@/components/screens/home/AboutSection";
import { VisionMission } from "@/components/screens/home/VisionMission";
import { CoreServices } from "@/components/screens/home/CoreServices";
import { SectorServices } from "@/components/screens/home/SectorServices";
import { WhatWeOffer } from "@/components/screens/home/WhatWeOffer";
import { ClientJourney } from "@/components/screens/home/ClientJourney";
import { ServiceLevels } from "@/components/screens/home/ServiceLevels";
import { ValuesSection } from "@/components/screens/home/ValuesSection";
import { WhoWeServe } from "@/components/screens/home/WhoWeServe";
import { OurPromise } from "@/components/screens/home/OurPromise";
import { OurApproach } from "@/components/screens/home/OurApproach";
import { CTASection } from "@/components/screens/home/CTASection";

export default async function Page() {
  const t = await getTranslations("page");
  const locale = await getLocale();
  const isRTL = locale === 'ar';
  return (
    <main dir={isRTL ? 'rtl' : 'ltr'}>
      <HeroSection />
      <AboutSection />
      <VisionMission />
      <CoreServices />
      <SectorServices />
      <WhatWeOffer />
      <ClientJourney />
      <ServiceLevels />
      <ValuesSection />
      <WhoWeServe />
      <OurPromise />
      <OurApproach />
      <CTASection />
    </main>
  );
}
