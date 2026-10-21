import { AnimatedSection } from "@/components/common/animated-section";
import { SectionHeading } from "@/components/common/section-heading";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { surfaceCardClass } from "@/components/common/styles";
import { teamRoles } from "@/data/about";

export function Team() {
  return (
    <SectionWrapper id="team" bordered>
      <AnimatedSection>
        <SectionHeading
          eyebrow="Studio"
          title="Meet Our Team"
          description="These are demonstration roles for a small practice. Named portraits have not been published."
        />
      </AnimatedSection>
      <ul className="mt-10 grid gap-6 *:min-w-0 md:grid-cols-2 lg:grid-cols-4">
        {teamRoles.map((member) => (
          <li key={member.role}>
            <AnimatedSection className="h-full">
              <article className={`${surfaceCardClass} h-full p-6 sm:p-8`}>
                <p className="font-nav text-xs tracking-[0.16em] uppercase">Demonstration role</p>
                <h3 className="mt-3 font-heading text-2xl font-medium tracking-tight text-balance sm:text-3xl">{member.role}</h3>
                <p className="mt-4 text-base leading-7">{member.focus}</p>
              </article>
            </AnimatedSection>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
