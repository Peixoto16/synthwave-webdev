import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um site?",
      answer: "Depende da complexidade, mas geralmente entre 7 a 15 dias para projetos padrão. Sites mais elaborados ou sistemas personalizados podem levar de 3 a 6 semanas."
    },
    {
      question: "Qual é o investimento inicial?",
      answer: "Projetos começam a partir de R$ 2.500 para landing pages profissionais. E-commerces e sistemas personalizados variam de acordo com as funcionalidades necessárias."
    },
    {
      question: "Vocês fazem manutenção após a entrega?",
      answer: "Sim! Ofereço planos de manutenção mensal e também atendimento pontual para atualizações, correções e melhorias no seu site ou sistema."
    },
    {
      question: "O que são agentes de IA personalizados?",
      answer: "São assistentes inteligentes desenvolvidos para automatizar tarefas específicas do seu negócio: atendimento ao cliente, análise de dados, geração de conteúdo e muito mais."
    }
  ];

  return (
    <section className="px-4 py-16 sm:py-24 bg-secondary/20">
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
      </div>
    </section>
  );
};

export default FAQSection;
