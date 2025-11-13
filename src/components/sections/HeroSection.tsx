import { CheckCircle2, Zap, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKDE5OSA4OSUgNDglIC8gMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="container relative z-10 mx-auto max-w-6xl text-center">
        <div className="animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-pulse-glow">
            <Sparkles className="h-4 w-4" />
            🔥 Apenas 3 Vagas Disponíveis Este Mês
          </div>
          
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-300 hover:scale-[1.02]">
            Sites <span className="text-gradient">Programados</span>
            <br />
            Que Vendem de Verdade
          </h1>
          
          <p className="mx-auto mb-4 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in" style={{ animationDelay: '200ms' }}>
            Sites profissionais, rápidos e 100% seus. Ideal para negócios que querem presença real e autoridade online.
          </p>
          
          <p className="mx-auto mb-6 max-w-2xl text-base text-muted-foreground/90 animate-fade-in" style={{ animationDelay: '300ms' }}>
            Nada de arrasta e cola. Seu site é digitado linha a linha, com o cuidado que o seu negócio merece.
          </p>
          
          <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center gap-2 text-primary transition-transform hover:scale-105">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-sm font-medium">Seu Começo no Digital: A partir de R$ 1.200</span>
            </div>
            <div className="hidden h-5 w-px bg-border sm:block"></div>
            <div className="flex items-center gap-2 text-muted-foreground transition-transform hover:scale-105">
              <Zap className="h-5 w-5" />
              <span className="text-sm">Entrega em 7-15 dias</span>
            </div>
          </div>
          
          <div className="w-full flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="w-full sm:w-auto">
              <WhatsAppButton message="Olá! Vi seu site e quero garantir minha vaga para criar um site profissional. Pode me passar mais detalhes?" />
            </div>
            <Button variant="outline" size="lg" className="w-full sm:w-auto transition-all hover:scale-105 group border-2" asChild>
              <a href="#projetos" className="flex items-center justify-center">
                Ver Projetos
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
          </div>
          
          <p className="mt-6 text-xs text-muted-foreground/70 animate-fade-in" style={{ animationDelay: '700ms' }}>
            Resposta em até 2 horas • Satisfação garantida ou seu dinheiro de volta
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
