import Hero from "@/components/Hero/Hero";
import SectionStory from "@/components/Story/Story";
import Event from "@/components/Event/Event";
import JoinUs from "@/components/JoinUs/JoinUs";
import Contact from "@/components/Contact/Contact";
import Services from "@/components/Services/Services";
import Wrapper from "@/components/Wrapper/Wrapper";
import { links } from "@/data/data";
import ParallaxWrapper from "@/components/ParallaxWrapper/ParallaxWrapper";

export default function Home() {
  return (
    <>
      <Hero reservation={links.reservation} />
      <main>
        <ParallaxWrapper>
          <SectionStory />
          <Services />
        </ParallaxWrapper>
        <Wrapper>
          <Event />
          <JoinUs />
        </Wrapper>
        <Contact reservation={links.reservation} />
      </main>
    </>
  );
}
