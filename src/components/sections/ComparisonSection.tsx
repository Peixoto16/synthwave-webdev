import { CheckCircle2, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhatsAppButton from "@/components/WhatsAppButton";

const ComparisonSection = () => {
  return (
    <section className="px-4 py-12 sm:py-16 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Programado vs Arrasta & Cola
          </h2>
          <p className="text-lg text-muted-foreground">
            Entenda a diferença que faz o código profissional
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Programado */}
          <Card className="border-primary/50 bg-gradient-card shadow-glow animate-fade-in hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                Site Programado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Carrega em menos de 2s = visitantes não desistem",
                  "Aparece no Google sem pagar anúncios",
                  "Nunca trava, mesmo com milhares de acessos",
                  "Faça qualquer mudança sem limitações",
                  "Protegido contra hackers e ataques",
                  "Fácil de atualizar e expandir no futuro",
                  "Perfeito em celular, tablet e computador",
                  "Conecta com qualquer ferramenta que precisar"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Arrasta e Cola */}
          <Card className="border-border/50 bg-card animate-fade-in hover-scale" style={{ animationDelay: '100ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl opacity-70">
                <X className="h-6 w-6 text-muted-foreground" />
                Arrasta e Cola
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Demora 5s+ = você perde clientes",
                  "Não aparece no Google organicamente",
                  "Trava e dá erro constantemente",
                  "Preso aos templates genéricos",
                  "Vulnerável a hackers e invasões",
                  "Cada mudança é uma dor de cabeça",
                  "Quebra em alguns dispositivos",
                  "Não conecta com ferramentas profissionais"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    <span className="text-muted-foreground line-through">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        {/* CTA após comparação */}
        <div className="mt-12 text-center animate-fade-in">
          <div className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 p-8 sm:p-12">
            <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
              Pronto para ter um site que <span className="text-primary">realmente converte</span>?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground">
              Não perca tempo com soluções amadoras. Garanta sua vaga agora e tenha um site profissional que gera resultados.
            </p>
            <WhatsAppButton message="Olá! Quero um site programado profissionalmente. Pode me enviar mais informações sobre valores e prazos?" />
            <p className="mt-4 text-sm text-muted-foreground/70">
              Vagas limitadas • Atendimento personalizado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
