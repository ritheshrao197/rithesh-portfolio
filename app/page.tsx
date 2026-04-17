import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { SystemsSection } from "@/components/SystemsSection";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { EngineeringApproach } from "@/components/EngineeringApproach";
import { EngineeringWins } from "@/components/EngineeringWins";
import { GitHubSection } from "@/components/GitHubSection";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />

      <SelectedWork />          {/* proof: what you built */}

      <SystemsSection />        {/* thinking: how you build */}

      <EngineeringApproach />   {/* philosophy: how you think */}

      <GitHubSection />         {/* code: how you write */}

      <EngineeringWins />       {/* impact: what you achieved */}

      <Experience />            {/* credibility: where you worked */}

      <Skills />                {/* quick scan */}

      <Contact />
    </>
  );
}