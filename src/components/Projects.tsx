import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Calendar } from "lucide-react";

const projects = [
  {
    title: "FusionFlow",
    subtitle: "Multi-Modal RAG, AI, LLMs, Web App",
    date: "July 2025",
    description: "Built a web platform that supports text, PDF, audio, video, and image inputs for multi-modal retrieval-augmented generation.",
    features: [
      "Integrated LangChain, ChromaDB, and SentenceTransformers for chunking, embedding, and semantic search.",
      "Implemented asynchronous processing to reduce data ingestion time by 40%."
    ],
    technologies: ["LangChain", "ChromaDB", "SentenceTransformers", "Multi-Modal AI", "RAG"],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "LexiCrafter",
    subtitle: "AI, Multi-Agent, Langgraph",
    date: "June 2025",
    description: "Developed LexiCrafter, an AI-powered platform that automates book creation using a modular, agent-based architecture built with LangGraph.",
    features: [
      "Orchestrated 6+ specialized agents for tasks including outlining, writing, formatting, research, and exporting, accelerating book production by ~90%.",
      "Designed and orchestrated specialized agents for tasks including outlining, chapter writing, formatting, and exporting to PDF/DOCX/audio formats.",
      "Developed a Research Agent that crawls top websites and stores key insights in a vector database for AI-assisted content generation."
    ],
    technologies: ["LangGraph", "Multi-Agent Systems", "Vector Database", "AI Automation", "NLP"],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "CasePilot",
    subtitle: "AI, NLP, Web Platform",
    date: "February 2025",
    description: "Worked on CasePilot, a platform connecting clients with affordable legal assistance while providing lawyers with case management tools.",
    features: [
      "Developed the Precedent Finder, a unique tool that retrieves similar past cases using NLP-based case description matching.",
      "Implemented a legal chatbot trained on fine-tuned models using legal Q&A data for instant legal assistance.",
      "Automated legal notice generation by integrating dynamic templates and user inputs for quick document creation."
    ],
    technologies: ["NLP", "Fine-tuning", "Legal AI", "Web Platform", "Case Matching"],
    links: {
      github: "#",
      demo: "#"
    }
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gradient-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Innovative AI solutions and research implementations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-neon group h-full flex flex-col"
            >
              <CardHeader>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-primary group-hover:text-primary/90 transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                  </div>
                  <p className="text-sm text-accent font-medium">{project.subtitle}</p>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col space-y-4">
                <p className="text-foreground leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 flex-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1 text-xs">●</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        key={i}
                        variant="secondary"
                        className="bg-secondary/50 text-secondary-foreground border border-primary/20 hover:border-primary/50 transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 w-full"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;