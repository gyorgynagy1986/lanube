import Hero from "@/components/Hero/Hero";
import SectionStory from "@/components/Story/Story";
import Event from "@/components/Event/Event";
import JoinUs from "@/components/JoinUs/JoinUs";
import Contact from "@/components/Contact/Contact";
import Services from "@/components/Services/Services";
import { links } from "@/data/data";
import Wrapper from "@/components/Wrapper/Wrapper";
import ParallaxWrapper from "@/components/ParallaxWrapper/ParallaxWrapper";

export default function Home() {
  return (
    <>
      <Hero lang={true} reservation={links.reservation} />
      <main>
        <ParallaxWrapper>
          <SectionStory lang={true} />
          <Services lang={true} />
        </ParallaxWrapper>
        <Wrapper>
          <Event lang={true} />
          <JoinUs lang={true} />
        </Wrapper>
        <Contact lang={true} reservation={links.reservation} />
      </main>
    </>
  );
}
