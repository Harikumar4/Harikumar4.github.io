import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    institution: "Vellore Institute of Technology, Chennai",
    degree: "B.Tech Computer Science and Engineering with Data Science specialization",
    period: "Aug 2023 - Present",
    location: "Chennai, India",
    cgpa: "9.75",
    details: ["First Rank in School of Computer Science and Engineering"]
  },
  {
    institution: "D.A.V Public School, Chennai",
    degree: "Higher Secondary Education",
    period: "2008 - 2023",
    location: "Chennai, India",
    grade12: "95.8%",
    grade10: "96.2%",
    details: ["School award for overall performance and academic excellence in 12th grade"]
  }
];

const achievements = [
  {
    title: "FOSSIT Hackathon Runner-up",
    description: "Secured the runner-up position showcasing skills in innovative problem-solving and teamwork.",
    icon: Award
  },
  {
    title: "First Rank - VIT Chennai CSE",
    description: "Achieved First Rank in the School of Computer Science and Engineering at VIT.",
    icon: GraduationCap
  },
  {
    title: "Academic Excellence Award",
    description: "Received school award for overall performance and academic excellence in 12th grade.",
    icon: Award
  }
];

const Education = () => {
  return (
    <section className="py-20 px-4 bg-gradient-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-4">
            Education & Achievements
          </h2>
          <p className="text-xl text-muted-foreground">
            Academic journey and recognition
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Education</h3>
            {educationData.map((edu, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-neon group"
              >
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/50 transition-colors">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-primary group-hover:text-primary/90 transition-colors">
                        {edu.institution}
                      </CardTitle>
                      <p className="text-foreground font-medium">{edu.degree}</p>
                      
                      <div className="flex flex-col sm:flex-row gap-2 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  {edu.cgpa && (
                    <div className="flex gap-2">
                      <Badge className="bg-primary/10 text-primary border border-primary/30">
                        CGPA: {edu.cgpa}
                      </Badge>
                    </div>
                  )}
                  
                  {edu.grade12 && (
                    <div className="flex gap-2">
                      <Badge className="bg-primary/10 text-primary border border-primary/30">
                        Grade 12: {edu.grade12}
                      </Badge>
                      <Badge className="bg-primary/10 text-primary border border-primary/30">
                        Grade 10: {edu.grade10}
                      </Badge>
                    </div>
                  )}

                  {edu.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1 text-xs">●</span>
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Achievements</h3>
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card 
                  key={index}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-neon group"
                >
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 group-hover:border-accent/50 transition-colors">
                        <IconComponent className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-accent group-hover:text-accent/90 transition-colors">
                          {achievement.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;