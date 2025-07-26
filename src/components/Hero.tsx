import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,255,65,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,255,65,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-neon bg-clip-text text-transparent animate-pulse">
              Harikumar
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground">
              <span className="border-r-2 border-primary animate-pulse">AI Researcher & Data Scientist</span>
            </div>
          </div>

          {/* Introduction */}
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about advancing AI through computer vision and multi-modal systems. 
            Currently exploring deep learning techniques to solve real-world problems through innovative research and practical applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:shadow-neon transition-all duration-300"
            >
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full border border-primary/30 hover:border-primary hover:shadow-neon transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-ping" />
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-accent rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-5 w-1 h-1 bg-primary rounded-full animate-bounce" />
    </section>
  );
};

export default Hero;