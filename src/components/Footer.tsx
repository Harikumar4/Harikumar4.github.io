import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-4 border-t border-border bg-gradient-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              AI Researcher & Data Scientist passionate about advancing artificial intelligence 
              through innovative research and practical applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "About", href: "#hero" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Education", href: "#education" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 bg-transparent border-none cursor-pointer"
                  style={{ background: "none", border: "none", padding: 0 }}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Connect</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">harikumar.st4@gmail.com</p>
              <p className="text-muted-foreground">Chennai, India</p>
            </div>
            
            <div className="flex gap-4 pt-2">
              {[
                { icon: Github, href: "https://github.com/Harikumar4", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/hari-kumar4", label: "LinkedIn" },
                { icon: Mail, href: "mailto:harikumar.st4@gmail.com", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 rounded-lg border border-primary/30 hover:border-primary hover:shadow-neon transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <span>© {currentYear} Portfolio.</span>
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;