import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { MissionVision } from "@/components/sections/MissionVision";
import { Services } from "@/components/sections/Services";
import { Coverage } from "@/components/sections/Coverage";
import { Industries } from "@/components/sections/Industries";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingCallButton } from "@/components/ui/FloatingCallButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <MissionVision />
        <Services />
        <Coverage />
        <Industries />
        <WhyChoose />
        <Process />
        <FAQ />
        <Contact />
        <QuoteForm />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
