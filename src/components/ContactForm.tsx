import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Configuração do EmailJS - você precisará configurar estes valores
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'emersonde.a.s.a.s@gmail.com'
      };

      // Enviar email diretamente usando EmailJS
      // Nota: Você precisará configurar sua conta EmailJS e substituir estes IDs
      await emailjs.send(
        'your_service_id', // Substitua pelo seu Service ID
        'your_template_id', // Substitua pelo seu Template ID
        templateParams,
        'your_public_key' // Substitua pela sua Public Key
      );

      // Limpar os campos do formulário
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      toast({
        title: "Mensagem enviada!",
        description: "Sua mensagem foi enviada com sucesso. Em breve entrarei em contato!",
      });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast({
        title: "Erro ao enviar",
        description: "Houve um problema ao enviar sua mensagem. Tente novamente ou entre em contato diretamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-20 px-4 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Envie uma Mensagem</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Entre em contato comigo através do formulário abaixo
          </p>
        </div>

        <Card className="p-8 card-gradient">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Assunto *</Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Assunto da mensagem"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Mensagem *</Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Escreva sua mensagem aqui..."
                rows={6}
              />
            </div>
            
            <Button type="submit" size="lg" className="w-full hover-bounce" disabled={isLoading}>
              <Send className="h-5 w-5 mr-2" />
              {isLoading ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
          
          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Ou entre em contato diretamente:
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => {
                navigator.clipboard.writeText("emersonde.a.s.a.s@gmail.com");
                toast({
                  title: "Email copiado!",
                  description: "O endereço de email foi copiado para a área de transferência.",
                });
              }}
            >
              <Mail className="h-4 w-4 mr-2" />
              emersonde.a.s.a.s@gmail.com
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;