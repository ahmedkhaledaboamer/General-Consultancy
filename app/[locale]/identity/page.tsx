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
const IdentityPage = () => {
  return (
    <div
      dir="rtl"
      className="font-tajawal text-gray-800 bg-mesh overflow-x-hidden min-h-screen">
      
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