import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WhatsAppButton from "@/components/WhatsAppButton";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quais tipos de projetos você trabalha?",
      answer: "Trabalho com Agentes de IA personalizados, sites profissionais e sistemas sob medida. Outros projetos também podem ser negociados — se você tem uma ideia, podemos conversar sobre a melhor solução!"
    },
    {
      question: "Quanto tempo leva para desenvolver um site?",
      answer: "Depende da complexidade, mas geralmente entre 7 a 15 dias para projetos padrão. Sites mais elaborados ou sistemas personalizados podem levar de 3 a 6 semanas."
    },
    {
      question: "Qual é o investimento inicial?",
      answer: "Projetos começam a partir de R$ 1.200 para landing pages profissionais. E-commerces e sistemas personalizados variam de acordo com as funcionalidades necessárias."
    },
    {
      question: "Vocês fazem manutenção após a entrega?",
      answer: "Sim! Ofereço planos de manutenção mensal e também atendimento pontual para atualizações, correções e melhorias no seu site ou sistema."
    },
    {
      question: "O que são agentes de IA personalizados?",
      answer: "São assistentes inteligentes desenvolvidos para automatizar tarefas específicas do seu negócio: atendimento ao cliente, análise de dados, geração de conteúdo e muito mais."
    },
    {
      question: "Por que não usar Wix, WordPress ou outras plataformas prontas?",
      answer: "Plataformas prontas são limitadas, lentas e cheias de código desnecessário. Um site programado do zero é 5x mais rápido, tem SEO superior, segurança profissional e você não fica refém de mensalidades ou limitações técnicas."
    },
    {
      question: "Qual a diferença entre você e uma agência tradicional?",
      answer: "Agências cobram R$ 5.000+ pelo mesmo trabalho, têm processos burocráticos e demorados. Aqui você fala direto comigo, tem agilidade, preço justo e a mesma (ou melhor) qualidade técnica."
    },
    {
      question: "Faz parceria com empresas de marketing ou gestores de tráfego?",
      answer: "Sim! Se você é uma empresa de marketing ou gestor de tráfego e precisa de alguém para criar seus sites com excelência e agilidade, pode me chamar — eu cuido dessa parte para você!"
    }
  ];

  return (
    <section className="px-4 py-12 sm:py-16 bg-secondary/20">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Perguntas Frequentes</h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o processo
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4 animate-fade-in">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="rounded-lg border border-border bg-card px-6 hover-scale"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        {/* CTA Final */}
        <div className="mt-12 text-center animate-fade-in">
          <div className="rounded-2xl border-2 border-green-500/30 bg-gradient-to-br from-green-500/5 to-green-500/10 p-8 sm:p-12">
            <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
              Ainda tem dúvidas? 🤔
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground">
              Fale comigo agora no WhatsApp! Vou tirar todas as suas dúvidas e criar uma proposta personalizada para o seu projeto.
            </p>
            <WhatsAppButton message="Olá! Li o FAQ mas ainda tenho algumas dúvidas. Pode me ajudar?" />
            <p className="mt-4 text-sm text-muted-foreground/70">
              Resposta rápida • Orçamento sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
