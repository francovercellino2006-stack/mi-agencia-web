import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowIWork from "@/components/HowIWork";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Quiz from "@/components/Quiz";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Quiz />
        <Benefits />
        <HowIWork />
        <About />
        <FeaturedProjects />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
