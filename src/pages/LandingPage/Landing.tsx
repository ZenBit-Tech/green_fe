import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import Heading from "@/components/Landing/Heading";
import Benefits from "@/components/Landing/Benefits";
import About from "@/components/About";

function LandingPage() {
  return (
    <>
      <Heading />
      <Benefits />
      <About />
      <CTA />
      <Footer />
    </>
  );
}

export default LandingPage;
