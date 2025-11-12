import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Fixed WhatsApp Button */}
      <WhatsAppButton fixed />

      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <ProjectsSection />
      <ComparisonSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FAQSection />

      {/* Footer */}
      <footer className="border-t border-border px-4 py-8">
        <div className="container mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>© 2025 Desenvolvimento Web Profissional. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
