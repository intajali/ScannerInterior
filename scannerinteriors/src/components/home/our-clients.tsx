import { Container } from "@/components/common/container";
import { SectionHeading } from "@/components/common/section-heading";
import { clients, type ClientLogo } from "@/data/clients";

function Wordmark({ lines }: { lines: ClientLogo["lines"] }) {
  if (lines.length === 1) {
    return (
      <span className="font-heading text-[1.65rem] leading-none tracking-tight text-charcoal sm:text-3xl">
        {lines[0]}
      </span>
    );
  }

  return (
    <span className="inline-flex flex-col items-center leading-none text-charcoal">
      <span className="font-heading text-xl tracking-tight sm:text-2xl">{lines[0]}</span>
      <span className="mt-1.5 font-nav text-[0.62rem] font-medium tracking-[0.22em] uppercase">
        {lines[1]}
      </span>
    </span>
  );
}

function LogoSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="client-marquee-set" aria-hidden={hidden || undefined}>
      {clients.map((client) => (
        <li key={client.name} className="client-marquee-item flex items-center justify-center">
          <span className="inline-flex h-14 items-center justify-center sm:h-16">
            <Wordmark lines={client.lines} />
          </span>
          <span className="mx-8 size-1 shrink-0 rounded-full bg-bronze sm:mx-12" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

export function OurClients() {
  return (
    <section id="clients" className="scroll-mt-32 overflow-hidden border-b border-sage bg-white text-charcoal">
      <Container className="pt-14 sm:pt-20 lg:pt-24">
        <SectionHeading eyebrow="Clients" title="Our Clients" />
      </Container>
      <div className="client-marquee mt-10 pb-14 sm:mt-12 sm:pb-20 lg:pb-24">
        <ul className="sr-only">
          {clients.map((client) => (
            <li key={client.name}>{client.name}</li>
          ))}
        </ul>
        <div className="client-marquee-track" data-motion="" aria-hidden="true">
          <LogoSet />
          <LogoSet hidden />
        </div>
      </div>
    </section>
  );
}
