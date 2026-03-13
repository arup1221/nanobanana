import Navbar from "@/components/sections/Navbar";
import Marquee from "@/components/sections/Marquee";
import Hero from "@/components/sections/Hero";
import StatStrip from "@/components/sections/StatStrip";
import ProblemSolution from "@/components/sections/ProblemSolution";
import HowItWorks from "@/components/sections/HowItWorks";
import Product from "@/components/sections/Product";
import Testimonials from "@/components/sections/Testimonials";
import ForClinics from "@/components/sections/ForClinics";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F4EF]">
      <Navbar />
      <Marquee />
      <Hero />
      <StatStrip />
      <ProblemSolution />
      <HowItWorks />
      <Product />
      <Testimonials />
      <ForClinics />
      <Footer />
    </main>
  );
}
