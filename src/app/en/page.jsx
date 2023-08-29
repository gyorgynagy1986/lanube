import Hero from "@/components/Hero/Hero";
import SectionStory from "@/components/Story/Story";
import Event from "@/components/Event/Event";
import JoinUs from "@/components/JoinUs/JoinUs";
import Contact from "@/components/Contact/Contact";
import Services from "@/components/Services/Services";
import { links } from "@/data/data";
import Wrapper from "@/components/Wrapper/Wrapper";

export default function Home() {
  return (
    <>
      <Hero lang={true} reservation={links.reservation} />
      <main>
        <SectionStory lang={true} />
        <Services lang={true} />
        <Wrapper>
          <Event lang={true} />
          <JoinUs lang={true} />
        </Wrapper>
        <Contact lang={true} reservation={links.reservation} />
      </main>
    </>
  );
}
