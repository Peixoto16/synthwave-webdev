import { MessageCircle, FileText, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "Conversa no WhatsApp",
      description: "Bate-papo rápido de 15 minutos para entender seu projeto e objetivos.",
      time: "15 minutos"
    },
    {
      number: "2",
      icon: FileText,
      title: "Proposta Personalizada",
      description: "Receba um orçamento detalhado com prazo, valor e funcionalidades incluídas.",
      time: "24 horas"
    },
    {
      number: "3",
      icon: Rocket,
      title: "Desenvolvimento e Entrega",
      description: "Seu site é desenvolvido do zero, com atualizações constantes até a aprovação final.",
      time: "7-15 dias"
    }
  ];

  return (
    <section className="px-4 py-12 sm:py-16 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Como Funciona?</h2>
          <p className="text-lg text-muted-foreground">
            Processo simples e transparente do início ao fim
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="relative border-border bg-gradient-card animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Número do passo */}
                <div className="absolute -top-4 left-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg">
                    {step.number}
                  </div>
                </div>
                
                <CardContent className="pt-12 pb-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    ⏱️ {step.time}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="mt-12 text-center animate-fade-in">
          <p className="text-lg text-muted-foreground mb-4">
            Simples assim! Sem burocracia, sem complicação.
          </p>
          <p className="text-sm text-muted-foreground/70">
            Transparência total em cada etapa do processo
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
