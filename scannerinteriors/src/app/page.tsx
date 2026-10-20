import { AboutPreview } from "@/components/home/about-preview";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { DesignProcess } from "@/components/home/design-process";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { HeroSection } from "@/components/home/hero-section";
import { RoomCompare } from "@/components/home/room-compare";
import { ServicesPreview } from "@/components/home/services-preview";
import { Testimonials } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedProjects />
      <RoomCompare />
      <DesignProcess />
      <Testimonials />
      <ConsultationCTA />
    </>
  );
}
