import { getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/screens/home/HeroSection";
import { AboutSection } from "@/components/screens/home/AboutSection";
import { VisionMission } from "@/components/screens/home/VisionMission";
import { CoreServices } from "@/components/screens/home/CoreServices";
import { SectorServices } from "@/components/screens/home/SectorServices";
import { WhatWeOffer } from "@/components/screens/home/WhatWeOffer";
import { ClientJourney } from "@/components/screens/home/ClientJourney";
import { StatsSection } from "@/components/screens/home/StatsSection";
import { ServiceLevels } from "@/components/screens/home/ServiceLevels";
import { GallerySection } from "@/components/screens/home/GallerySection";
import { ValuesSection } from "@/components/screens/home/ValuesSection";
import { WhoWeServe } from "@/components/screens/home/WhoWeServe";
import { OurPromise } from "@/components/screens/home/OurPromise";
import { OurApproach } from "@/components/screens/home/OurApproach";
import { CTASection } from "@/components/screens/home/CTASection";

export default async function Page() {
  const t = await getTranslations("page");

  return (
    <>
      <HeroSection />
      <AboutSection />
      <VisionMission />
      <CoreServices />
      <SectorServices />
      <WhatWeOffer />
      <ClientJourney />
      <StatsSection />
      <ServiceLevels />
      <GallerySection />
      <ValuesSection />
      <WhoWeServe />
      <OurPromise />
      <OurApproach />
      <CTASection />
    </>
  );
}
