import { Shield, RefreshCw, Headphones, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import WhatsAppButton from "@/components/WhatsAppButton";

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Garantia",
      description: "Se não ficar satisfeito, devolvemos 100% do seu investimento. Sem perguntas."
    },
    {
      icon: RefreshCw,
      title: "Revisões",
      description: "Ajustes e modificações durante todo o projeto."
    },
    {
      icon: Headphones,
      title: "Suporte Gratuito",
      description: "30 dias de suporte técnico gratuito após a entrega para qualquer dúvida ou ajuste."
    },
    {
      icon: CheckCircle2,
      title: "Código 100% Seu",
      description: "Você recebe todo o código-fonte. Sem dependências, sem mensalidades escondidas."
    }
  ];

  return (
    <section className="px-4 py-12 sm:py-16">
      <div className="container mx-auto max-w-6xl">
        {/* Badge de destaque */}
        <div className="mb-8 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-primary/10 px-6 py-3 text-lg font-bold text-primary shadow-lg">
            <Shield className="h-6 w-6" />
            Garantia Total de Satisfação
          </div>
        </div>

        <div className="mb-12 text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Seu Investimento Está <span className="text-primary">100% Protegido</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Trabalho com total transparência e compromisso com sua satisfação. 
            Seu sucesso é minha prioridade.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="border-border bg-gradient-card text-center animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 pb-6">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Final */}
        <div className="text-center animate-fade-in">
          <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 p-8 sm:p-12">
            <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
              Risco Zero para Você
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground">
              Você só paga se ficar 100% satisfeito. Simples assim. 
              Comece seu projeto agora sem preocupações.
            </p>
            <WhatsAppButton message="Olá! Quero começar meu projeto com garantia total. Vamos conversar?" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
