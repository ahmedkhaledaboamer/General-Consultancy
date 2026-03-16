import { HeroSection } from "@/components/screens/identity/HeroSection"
import { IntroSection } from "@/components/screens/identity/IntroSection"
import { IdentityDefinition } from "@/components/screens/identity/IdentityDefinition"
import { EntityStatement } from "@/components/screens/identity/EntityStatement"
import { PhilosophySection } from "@/components/screens/identity/PhilosophySection"
import { VisionMission } from "@/components/screens/identity/VisionMission"
import { WhatMakesDifferent } from "@/components/screens/identity/WhatMakesDifferent"
import { ProvingValue } from "@/components/screens/identity/ProvingValue"
import { BrandPromise } from "@/components/screens/identity/BrandPromise"
import { TargetAudience } from "@/components/screens/identity/TargetAudience"
import { FinalCTA } from "@/components/screens/identity/FinalCTA"
import { useLocale } from 'next-intl';
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("meta.identity");

  return {
    title: t("title"),
    description: t("description"),
  };
}
const IdentityPage = () => {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="text-gray-800 bg-mesh overflow-x-hidden min-h-screen">
      <HeroSection />
      <IntroSection />
      <IdentityDefinition />
      <EntityStatement />
      <PhilosophySection />
      <VisionMission />
      <WhatMakesDifferent />
      <ProvingValue />
      <BrandPromise />
      <TargetAudience />
      <FinalCTA />
    </div>);
}

export default IdentityPage