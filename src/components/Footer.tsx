import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Education", href: "#education" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Connect</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">your.email@example.com</p>
              <p className="text-muted-foreground">Chennai, India</p>
            </div>
            
            <div className="flex gap-4 pt-2">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" }
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
            <span>© {currentYear} Portfolio. Made with</span>
            <Heart className="h-4 w-4 text-primary fill-current" />
            <span>and lots of caffeine.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;