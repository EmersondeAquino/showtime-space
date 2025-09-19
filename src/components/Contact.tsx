import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Calendar } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "emersonde.a.s.a.s@gmail.com",
      link: "mailto:emersonde.a.s.a.s@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(71) 99103-9888",
      link: "tel:+5571991039888",
      color: "text-success"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Salvador - BA, Brasil",
      subvalue: "Rua Jones Melo, 151, Cabula VI",
      color: "text-secondary"
    },
    {
      icon: Calendar,
      title: "Nascimento",
      value: "11/02/2003",
      subvalue: "21 anos",
      color: "text-accent"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      color: "hover:text-foreground",
      bgColor: "hover:bg-foreground/10"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      color: "hover:text-primary",
      bgColor: "hover:bg-primary/10"
    },
    {
      icon: Mail,
      name: "Email",
      color: "hover:text-success",
      bgColor: "hover:bg-success/10"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vamos conversar sobre oportunidades e projetos interessantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <Card key={index} className="p-6 card-gradient hover-lift">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-card-hover ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  {item.link ? (
                    <a 
                      href={item.link}
                      className={`${item.color} hover:underline transition-colors block`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{item.value}</p>
                  )}
                  {item.subvalue && (
                    <p className="text-sm text-muted-foreground mt-1">{item.subvalue}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <Card className="p-8 card-gradient hover-lift text-center">
          <h3 className="text-2xl font-bold mb-6">Conecte-se Comigo</h3>
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="lg"
                className={`${social.color} ${social.bgColor} hover-bounce`}
              >
                <social.icon className="h-6 w-6 mr-2" />
                {social.name}
              </Button>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-bounce animate-pulse-glow">
              <Mail className="h-5 w-5 mr-2" />
              Enviar Email
            </Button>
            <Button variant="outline" size="lg" className="hover-lift">
              <Phone className="h-5 w-5 mr-2" />
              Ligar Agora
            </Button>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Disponível para oportunidades de estágio e projetos freelance
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-accent">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span>Disponível para trabalho</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;