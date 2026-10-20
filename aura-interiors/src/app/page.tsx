import { Approach } from "@/components/home/approach";
import { ConsultationBand } from "@/components/home/consultation-band";
import { Disciplines } from "@/components/home/disciplines";
import { Hero } from "@/components/home/hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Approach />
      <Disciplines />
      <ConsultationBand />
    </>
  );
}
