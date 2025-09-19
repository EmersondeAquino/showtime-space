import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Globe, 
  BarChart3, 
  Users, 
  Clock, 
  Lightbulb,
  GraduationCap 
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", category: "Automação e Análise de Dados", icon: Code2 },
    { name: "Java", category: "Orientação a Objetos", icon: Code2 },
    { name: "React", category: "Desenvolvimento Frontend", icon: Globe },
    { name: "JavaScript", category: "Desenvolvimento Web", icon: Globe },
    { name: "HTML/CSS", category: "Frontend", icon: Globe },
    { name: "SQL", category: "Banco de Dados", icon: Database },
    { name: "Power BI", category: "Análise de Dados", icon: BarChart3 },
    { name: "Excel", category: "Análise de Dados", icon: BarChart3 },
  ];

  const softSkills = [
    { name: "Trabalho em equipe", icon: Users },
    { name: "Boa comunicação", icon: Users },
    { name: "Gestão do tempo", icon: Clock },
    { name: "Cumprimento de prazos", icon: Clock },
    { name: "Flexibilidade", icon: Lightbulb },
    { name: "Adaptabilidade", icon: Lightbulb },
  ];

  const languages = [
    { name: "Português", level: "C2 - Proficiente", color: "bg-success" },
    { name: "Inglês", level: "B2 - Intermediário", color: "bg-primary" },
    { name: "Espanhol", level: "A2 - Básico", color: "bg-secondary" },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e competências que domino para criar soluções eficazes
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Technical Skills */}
          <div className="lg:col-span-2">
            <Card className="p-8 card-gradient hover-lift">
              <div className="flex items-center mb-6">
                <Code2 className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Habilidades Técnicas</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="flex items-center p-4 rounded-lg bg-card-hover/50 hover-bounce">
                    <skill.icon className="h-5 w-5 text-accent mr-3" />
                    <div>
                      <div className="font-semibold">{skill.name}</div>
                      <div className="text-sm text-muted-foreground">{skill.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Soft Skills */}
          <div>
            <Card className="p-8 card-gradient hover-lift h-full">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-secondary mr-3" />
                <h3 className="text-2xl font-bold">Soft Skills</h3>
              </div>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg bg-card-hover/50 hover-bounce">
                    <skill.icon className="h-5 w-5 text-accent mr-3" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages */}
          <Card className="p-8 card-gradient hover-lift">
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 text-accent mr-3" />
              <h3 className="text-2xl font-bold">Idiomas</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-card-hover/50">
                  <span className="font-semibold">{lang.name}</span>
                  <Badge variant="secondary" className={`${lang.color} text-white`}>
                    {lang.level}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Education */}
          <Card className="p-8 card-gradient hover-lift">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Educação</h3>
            </div>
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-card-hover/50">
                <h4 className="font-bold text-lg text-primary">Ciência da Computação</h4>
                <p className="text-muted-foreground">UniFacs (BA)</p>
                <p className="text-sm text-accent font-semibold">Previsão: Dezembro/2026</p>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-card-hover/30">
                  <h5 className="font-semibold">Curso de Java: Orientado a Objetos</h5>
                  <p className="text-sm text-muted-foreground">Udemy - 08/01/2024</p>
                </div>
                <div className="p-3 rounded-lg bg-card-hover/30">
                  <h5 className="font-semibold">Certificação em Python</h5>
                  <p className="text-sm text-muted-foreground">Udemy - 16/09/2025</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;