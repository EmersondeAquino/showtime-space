import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, Globe, Gamepad2, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Chess System Java",
      description: "Jogo completo de xadrez desenvolvido em Java com implementação de todas as regras do jogo, movimentos especiais e interface de console.",
      technologies: ["Java", "OOP", "Game Logic", "Console UI"],
      icon: Gamepad2,
      color: "text-primary",
      bgColor: "bg-primary/10",
      type: "Game Development",
      github: "https://github.com/EmersondeAquino/chess-system-java"
    },
    {
      title: "Biosphere ODS",
      description: "Site educativo sobre os Objetivos de Desenvolvimento Sustentável da ONU, criado para conscientização da população sobre sustentabilidade.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      icon: Globe,
      color: "text-success",
      bgColor: "bg-success/10",
      link: "https://biosphereods.vercel.app",
      type: "Web Development",
      featured: true,
      github: "https://github.com/EmersondeAquino/biosphere-ods"
    },
    {
      title: "Trabalho de Julia",
      description: "Implementação matemática de uma cadeia de Markov utilizando a linguagem Julia para análise estatística e modelagem probabilística.",
      technologies: ["Julia", "Mathematics", "Statistics", "Markov Chains"],
      icon: TrendingUp,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      type: "Data Science",
      github: "https://github.com/EmersondeAquino/trabalho-julia"
    },
    {
      title: "Dashboard Power BI",
      description: "Dashboard interativo criado no Power BI a partir de dados do Excel, com visualizações avançadas e insights de negócio.",
      technologies: ["Power BI", "Excel", "Data Analysis", "Visualization"],
      icon: BarChart3,
      color: "text-accent",
      bgColor: "bg-accent/10",
      type: "Business Intelligence",
      github: "https://github.com/EmersondeAquino/dashboard-powerbi"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi aplicando diferentes tecnologias e conceitos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`p-8 card-gradient hover-lift ${project.featured ? 'ring-2 ring-primary/30' : ''}`}
            >
              {project.featured && (
                <Badge className="mb-4 bg-primary text-primary-foreground">
                  Projeto Destaque
                </Badge>
              )}
              
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 rounded-lg ${project.bgColor} ${project.color}`}>
                  <project.icon className="h-8 w-8" />
                </div>
                <Badge variant="outline" className="text-xs">
                  {project.type}
                </Badge>
              </div>

              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                {project.github ? (
                  <Button variant="outline" size="sm" className="hover-bounce" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="hover-bounce">
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                )}
                {project.link && (
                  <Button size="sm" className="hover-bounce" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Projeto
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover-lift">
            <Github className="h-5 w-5 mr-2" />
            Ver Todos os Projetos no GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;