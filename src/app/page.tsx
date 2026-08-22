import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Plans } from "@/components/sections/Plans";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Products } from "@/components/sections/Products";
import { Clients } from "@/components/sections/Clients";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <About />
      <Services />
      <Plans />
      <HowItWorks />
      <Products />
      <Clients />
      <Portfolio />
      <Testimonials />
      <Faq />
      <CtaFinal />
      <Footer />
    </main>
  );
}
