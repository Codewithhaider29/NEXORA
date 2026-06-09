import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Statistics from "@/components/sections/Statistics";
import MultiChain from "@/components/sections/MultiChain";
import LiveActivity from "@/components/sections/LiveActivity";
import AICommandCenter from "@/components/sections/AICommandCenter";
import AICopilot from "@/components/sections/AICopilot";
import NetworkScanner from "@/components/sections/NetworkScanner";
import AdvancedAnalytics from "@/components/sections/AdvancedAnalytics";
import ProductTour from "@/components/sections/ProductTour";
import DeveloperExperience from "@/components/sections/DeveloperExperience";
import DeveloperTools from "@/components/sections/DeveloperTools";
import SecurityTrust from "@/components/sections/SecurityTrust";
import Governance from "@/components/sections/Governance";
import TreasuryOverview from "@/components/sections/TreasuryOverview";
import BentoGrid from "@/components/sections/BentoGrid";
import Tokenomics from "@/components/sections/Tokenomics";
import UseCases from "@/components/sections/UseCases";
import TrustedBuilders from "@/components/sections/TrustedBuilders";
import Testimonials from "@/components/sections/Testimonials";
import VideoShowcase from "@/components/sections/VideoShowcase";
import Pricing from "@/components/sections/Pricing";
import Roadmap from "@/components/sections/Roadmap";
import FAQ from "@/components/sections/FAQ";
import Newsletter from "@/components/sections/Newsletter";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050816] overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Statistics />
      <MultiChain />
      <LiveActivity />
      <AICommandCenter />
      <AICopilot />
      <NetworkScanner />
      <AdvancedAnalytics />
      <ProductTour />
      <DeveloperExperience />
      <DeveloperTools />
      <SecurityTrust />
      <Governance />
      <TreasuryOverview />
      <BentoGrid />
      <Tokenomics />
      <UseCases />
      <TrustedBuilders />
      <Testimonials />
      <VideoShowcase />
      <Pricing />
      <Roadmap />
      <FAQ />
      <Newsletter />
      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
