import Hero from "@/components/Hero/Hero";
import SectionStory from "@/components/Story/Story";
import Event from "@/components/Event/Event";
import JoinUs from "@/components/JoinUs/JoinUs";
import Contact from "@/components/Contact/Contact";
import Services from "@/components/Services/Services";

const links = {
  facebook: "",
  instagram: "",
  reservation: "",
};

export default function Home() {
  return (
    <>
        <Hero reservation={links.reservation} />
        <main>
          <SectionStory />
          <Services />
          <Event />
          <JoinUs />
          <Contact reservation={links.reservation} />
        </main>
    </>
  );
}
