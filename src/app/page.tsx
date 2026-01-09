import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { CardanoSection } from "@/components/sections/CardanoSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { LatestStoriesSection } from "@/components/sections/LatestStoriesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { FounderSection } from "@/components/sections/FounderSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PartnersSection />
      <CardanoSection />
      <StatsSection />
      <LatestStoriesSection />
      <ProjectsSection />
      <FounderSection />
    </div>
  );
};

export default Home;
