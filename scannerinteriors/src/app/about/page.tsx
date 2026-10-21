import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { DesignPhilosophy } from "@/components/about/design-philosophy";
import { MissionVision } from "@/components/about/mission-vision";
import { OurStory } from "@/components/about/our-story";
import { Team } from "@/components/about/team";
import { WhyChooseUs } from "@/components/about/why-choose-us";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { OurClients } from "@/components/home/our-clients";
import { aboutContent } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description: aboutContent.description,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <DesignPhilosophy />
      <Team />
      <WhyChooseUs />
      <OurClients />
      <ConsultationCTA />
    </>
  );
}
