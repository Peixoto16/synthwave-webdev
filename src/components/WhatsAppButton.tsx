import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phone?: string;
  message?: string;
  fixed?: boolean;
}

const WhatsAppButton = ({ 
  phone = "5511999999999", 
  message = "Olá! Gostaria de saber mais sobre seus serviços.",
  fixed = false 
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  if (fixed) {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 animate-pulse-glow"
      >
        <Button variant="whatsapp" size="lg" className="rounded-full shadow-2xl">
          <MessageCircle className="h-6 w-6" />
          <span className="hidden sm:inline">WhatsApp</span>
        </Button>
      </a>
    );
  }

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
      <Button variant="whatsapp" size="lg">
        <MessageCircle className="h-5 w-5" />
        Fale no WhatsApp
      </Button>
    </a>
  );
};

export default WhatsAppButton;
