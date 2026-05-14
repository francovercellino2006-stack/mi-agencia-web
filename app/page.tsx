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
        <Benefits />
        <HowIWork />
        <About />
        <FeaturedProjects />
        <Quiz />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
