import { CheckCircle2, Zap, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKDE5OSA4OSUgNDglIC8gMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
      
      {/* Floating elements for interactivity */}
      <div className="absolute left-10 top-20 animate-pulse-glow">
        <div className="h-20 w-20 rounded-full bg-primary/10 blur-2xl"></div>
      </div>
      <div className="absolute right-10 top-40 animate-pulse-glow" style={{ animationDelay: '1s' }}>
        <div className="h-32 w-32 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 mx-auto max-w-6xl text-center">
        <div className="animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-pulse-glow">
            <Sparkles className="h-4 w-4" />
            100% Código Limpo • Performance Superior
          </div>
          
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl hover-scale transition-all duration-300">
            Sites <span className="text-gradient animate-gradient">Programados</span>
            <br />
            Que Vendem de Verdade
          </h1>
          
          <p className="mx-auto mb-4 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in" style={{ animationDelay: '200ms' }}>
            Desenvolvimento web profissional, sistemas personalizados e agentes de IA.
            <br />
            Sem arrasta e cola. Só código de qualidade.
          </p>
          
          <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center gap-2 text-primary hover-scale">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-sm font-medium">A partir de R$ 2.500</span>
            </div>
            <div className="hidden h-5 w-px bg-border sm:block"></div>
            <div className="flex items-center gap-2 text-muted-foreground hover-scale">
              <Zap className="h-5 w-5" />
              <span className="text-sm">Entrega em 7-15 dias</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: '600ms' }}>
            <WhatsAppButton message="Olá! Quero um orçamento para um site profissional." />
            <Button variant="outline" size="lg" className="hover-scale group" asChild>
              <a href="#projetos">
                Ver Projetos
                <ChevronDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
