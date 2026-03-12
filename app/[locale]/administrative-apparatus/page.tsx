import { CoreValues } from "@/components/screens/administrative-apparatus/CoreValues";
import { ExecutivePositions } from "@/components/screens/administrative-apparatus/ExecutivePositions";
import { HeroSection } from "@/components/screens/administrative-apparatus/HeroSection"
import { LeadershipPhilosophy } from "@/components/screens/administrative-apparatus/LeadershipPhilosophy";
import { ProcessSection } from "@/components/screens/administrative-apparatus/ProcessSection";
import { QualityStandards } from "@/components/screens/administrative-apparatus/QualityStandards";
import { SuccessRoadmap } from "@/components/screens/administrative-apparatus/SuccessRoadmap";
import { FinalCTA } from "@/components/screens/administrative-apparatus/FinalCTA";
const AdministrativeApparatusPage = () => {
  return (
    <main
      dir="rtl"
      className="font-cairo min-h-screen bg-slate-50 overflow-x-hidden selection:bg-purple-500 selection:text-white">
      <HeroSection />
      <LeadershipPhilosophy />
      <ExecutivePositions />
      <ProcessSection />
      <CoreValues />
      <QualityStandards />
      <SuccessRoadmap />
      <FinalCTA />
    </main>
  );
}

export default AdministrativeApparatusPage