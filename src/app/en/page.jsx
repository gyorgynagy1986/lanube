
import Hero from "@/components/Hero/Hero";
import SectionStory from "@/components/Story/Story";
import Event from "@/components/Event/Event";
import JoinUs from "@/components/JoinUs/JoinUs";
import Contact from "@/components/Contact/Contact";
import Services from "@/components/Services/Services";

const links = {
  facebook: "https://www.facebook.com/lanubechicken/?locale=hu_HU",
  instagram: "https://www.instagram.com/lanubebp/?hl=hu",
  reservation: "https://reservours.com/lanube/tablereservation?s=website",
};

export default function Home() {
  return (
    <>
        <Hero lang={true} reservation={links.reservation} />
        <main>
          <SectionStory lang={true} />
          <Services lang={true} />
          <Event lang={true} />
          <JoinUs lang={true} />
          <Contact lang={true} reservation={links.reservation} />
        </main>
    </>
  );
}
