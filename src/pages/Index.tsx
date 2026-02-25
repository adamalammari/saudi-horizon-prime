import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ServicesSection from "@/components/sections/ServicesSection";
import ValueProposition from "@/components/sections/ValueProposition";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <FeaturedProjects />
      <ServicesSection />
      <ValueProposition />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
