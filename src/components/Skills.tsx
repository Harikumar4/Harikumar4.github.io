import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cpu, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C", "C++", "Java", "JavaScript", "HTML"],
    color: "primary"
  },
  {
    title: "Frameworks & Libraries",
    icon: Cpu,
    skills: [
      "TensorFlow", "Keras", "Flask", "Pandas", "NumPy", "Matplotlib", 
      "ReactJS", "Node.js", "Express.js", "LangGraph", "ChromaDB", "LangChain"
    ],
    color: "accent"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "SQL", "Vector Databases"],
    color: "primary"
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Figma", "Supabase", "REST APIs"],
    color: "accent"
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-neon group"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/50 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-primary group-hover:text-primary/90 transition-colors">
                      {category.title}
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i}
                        variant="secondary"
                        className="bg-secondary/50 text-secondary-foreground border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Specialized Skills */}
        <div className="mt-12">
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-neon">
            <CardHeader>
              <CardTitle className="text-xl text-primary text-center">
                Specialized Areas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  "Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing",
                  "Neuroimaging", "Multi-Modal AI", "Retrieval-Augmented Generation", "Multi-Agent Systems",
                  "Neural Style Transfer", "Speech Recognition", "Medical Image Analysis", "Data Science"
                ].map((skill, i) => (
                  <Badge 
                    key={i}
                    className="bg-primary/10 text-primary border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;