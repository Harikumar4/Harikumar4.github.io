import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Summer Research Intern",
    company: "Center of NeuroInformatics",
    location: "Research Center",
    period: "Jun 2025 - Present",
    description: [
      "Conducted neuroimaging research on ADHD using functional Near-Infrared Spectroscopy to analyze brain activation patterns.",
      "Built and evaluated classification models using extracted features, achieving promising accuracy in distinguishing ADHD from control subjects.",
      "Currently exploring spatiotemporal forecasting techniques to model dynamic brain activity patterns across regions and time for early and accurate ADHD detection."
    ],
    skills: ["fNIRS", "Machine Learning", "Neuroimaging", "ADHD Research", "Spatiotemporal Analysis"]
  },
  {
    title: "Summer Research Intern – Computer Vision and Image Processing",
    company: "School of Computer Science, VIT Chennai",
    location: "Chennai, India",
    period: "Jun 2025 – Present",
    description: [
      "Built an end-to-end pipeline for measuring pupil diameter from smartphone images using deep learning and image processing techniques.",
      "Implemented YOLOv8-based segmentation and ellipse fitting in Python (OpenCV, NumPy) for accurate, automated pupil detection.",
      "Developed calibration modules to convert pixel-based measurements to millimeters using reference objects."
    ],
    skills: ["YOLOv8", "Computer Vision", "OpenCV", "Python", "Image Processing", "Deep Learning"]
  },
  {
    title: "Data Analyst Intern",
    company: "Strategic Research Insights",
    location: "Remote",
    period: "May 2025 - Jun 2025",
    description: [
      "Worked on real life case studies alongside professionals regarding pharmaceutical datasets.",
      "Utilized SQL for data extraction and Python for transforming data and building interactive KPI dashboards."
    ],
    skills: ["SQL", "Python", "Data Analysis", "KPI Dashboards", "Pharmaceutical Data"]
  },
  {
    title: "Research Member",
    company: "Data Science Club",
    location: "VIT Chennai",
    period: "Aug 2024 - Present",
    description: [
      "Worked on autoencoder models for inpainting to reconstruct missing regions in medical images using unsupervised learning techniques.",
      "Implemented Neural Style Transfer for image processing by replicating the method from the research paper 'A Neural Algorithm of Artistic Style' by Gatys et al.",
      "Currently developing a streaming pipeline for audio data to implement automatic speech recognition (ASR), converting real-time speech to text."
    ],
    skills: ["Autoencoders", "Neural Style Transfer", "Medical Imaging", "ASR", "Unsupervised Learning"]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            Research and professional journey in AI and data science
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-neon group"
            >
              <CardHeader className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-primary group-hover:text-primary/90 transition-colors">
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-foreground">{exp.company}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground">
                      <span className="text-primary mt-2 text-xs">●</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.skills.map((skill, i) => (
                    <Badge 
                      key={i}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground border border-primary/20 hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;