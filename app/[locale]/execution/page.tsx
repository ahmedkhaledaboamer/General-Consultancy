import { AboutSection } from "@/components/screens/execution/AboutSection"
import { HeroSection } from "@/components/screens/execution/HeroSection"
import { EntityDictionary } from "@/components/screens/execution/EntityDictionary"
import { ExecutionPath } from "@/components/screens/execution/ExecutionPath"
import { ExecutionUnits } from "@/components/screens/execution/ExecutionUnits"
import { ServiceLevels } from "@/components/screens/execution/ServiceLevels"
import { FileJourney } from "@/components/screens/execution/FileJourney"
import { WhyChooseUs } from "@/components/screens/execution/WhyChooseUs"
import { ServicesSection } from "@/components/screens/execution/ServicesSection"
import { CommitmentsSection } from "@/components/screens/execution/CommitmentsSection"
import { QualityStandards } from "@/components/screens/execution/QualityStandards"
import { FAQSection } from "@/components/screens/execution/FAQSection"
import { FinalCTA } from "@/components/screens/execution/FinalCTA"
import { useLocale } from "next-intl"

const ExecutionPage = () => {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <main
      dir={isRTL ? 'rtl' : 'ltr'}
      className="min-h-screen bg-white text-gray-900 selection:bg-blue-500 selection:text-white"
    >
      <HeroSection />
      <AboutSection />
      <EntityDictionary />
      <ExecutionPath />
      <ExecutionUnits />
      <ServiceLevels />
      <FileJourney />
      <WhyChooseUs />
      <ServicesSection />
      <CommitmentsSection />
      <QualityStandards />
      <FAQSection />
      <FinalCTA />
    </main>
  )
}

export default ExecutionPage