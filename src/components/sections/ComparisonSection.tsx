import { CheckCircle2, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
                  "Performance otimizada (< 2s de carregamento)",
                  "SEO avançado e indexação perfeita",
                  "Código limpo e escalável",
                  "Customização total e ilimitada",
                  "Segurança profissional",
                  "Manutenção facilitada",
                  "Totalmente responsivo",
                  "Integração com qualquer sistema"
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
                  "Lento e pesado (5s+ de carregamento)",
                  "SEO limitado e problemas de indexação",
                  "Código poluído e cheio de bugs",
                  "Limitado aos templates disponíveis",
                  "Vulnerabilidades conhecidas",
                  "Difícil de manter e atualizar",
                  "Responsividade limitada",
                  "Integrações restritas"
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
        
        <div className="mt-12 flex justify-center animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="group relative max-w-3xl rounded-lg border-2 border-primary/40 p-6 transition-all duration-300 hover:border-primary hover:shadow-glow hover:scale-[1.02]">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enquanto muitos usam construtores genéricos (WordPress, Shopify ... ), você pode ter um site exclusivo, feito com código limpo e atenção aos mínimos detalhes.
            </p>
            <p className="mt-3 text-sm text-foreground font-medium">
              Seu site pode e deve refletir a qualidade do seu negócio !!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
