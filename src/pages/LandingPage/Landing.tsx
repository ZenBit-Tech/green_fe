import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import Heading from "@/components/Landing/Heading";
import Benefits from "@/components/Landing/Benefits";

function LandingPage() {
  return (
    <>
      <Heading />
      <Benefits />
      <CTA />
      <Footer />
    </>
  );
}

export default LandingPage;
