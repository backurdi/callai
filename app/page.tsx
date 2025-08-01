import {
  Navigation,
  HeroSection,
  HowItWorks,
  PainPoints,
  EarlyAdopterBenefits,
  UseCases,
  WaitlistSection,
  FAQ,
  Footer,
} from "@/components/landing";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <PainPoints />
      <EarlyAdopterBenefits />
      {/* <UseCases /> */}
      <WaitlistSection />
      <FAQ />
      <Footer />
    </div>
  );
}
