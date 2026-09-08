"use client";

import MarketingNav from "./marketing-nav";
import MarketingHero from "./marketing-hero";
import ExpertiseGrid from "./expertise-grid";
import SearchEvolution from "./search-evolution";
import MarketingProcess from "./marketing-process";
import ToolsAndTechnologies from "./tools-and-technologies";
import DeveloperMarketer from "./developer-marketer";
import MarketingCapabilities from "./marketing-capabilities";
import ResultsStatement from "./results-statement";
import MarketingCTA from "./marketing-cta";

export default function DigitalMarketingView() {
  return (
    <div className="relative min-h-screen">
      {/* Background blueprint grid */}
      <div className="bg-grid pointer-events-none fixed inset-0 -z-20" />

      {/* Sticky Navigation */}
      <MarketingNav />

      {/* Main Content Assembly */}
      <main>
        <MarketingHero />
        <ExpertiseGrid />
        <SearchEvolution />
        <MarketingProcess />
        <ToolsAndTechnologies />
        <DeveloperMarketer />
        <MarketingCapabilities />
        <ResultsStatement />
        <MarketingCTA />
      </main>
    </div>
  );
}
