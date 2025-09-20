import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-float">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">Emerson</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-foreground">
            Desenvolvedor Full Stack
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estudante de Ciência da Computação apaixonado por tecnologia, 
            criando soluções inovadoras com Python, Java, React e mais.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="hover-bounce animate-pulse-glow" asChild>
            <a href="mailto:emersonde.a.s.a.s@gmail.com?subject=Contato%20via%20Portfólio&body=Olá%20Emerson,%0D%0A%0D%0AEu%20gostaria%20de%20conversar%20sobre...%0D%0A%0D%0AAtenciosamente,">
              <Mail className="mr-2 h-5 w-5" />
              Entre em Contato
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="hover-lift"
            asChild
          >
            <a href="/cv-emerson.pdf" download="CV-Emerson.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <Button variant="ghost" size="icon" className="hover-bounce" asChild>
            <a href="https://github.com/EmersondeAquino" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover-bounce" asChild>
            <a href="https://www.linkedin.com/in/emerson-aquino-53a34028b/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover-bounce" asChild>
            <a href="mailto:emersonde.a.s.a.s@gmail.com">
              <Mail className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;