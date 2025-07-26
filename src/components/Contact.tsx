import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's collaborate on exciting AI and research projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Let's Connect</h3>
              <p className="text-foreground leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, research collaborations, 
                or innovative AI projects. Whether you're looking for a research partner or 
                want to explore potential collaborations, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "harikumar.st4@gmail.com", href: "mailto:harikumar.st4@gmail.com" },
                { icon: MapPin, label: "Location", value: "Chennai, India", href: "#" }
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <a 
                      href={href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-primary mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/Harikumar4", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/hari-kumar4", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:harikumar.st4@gmail.com", label: "Email" }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="p-3 rounded-lg border border-primary/30 hover:border-primary hover:shadow-neon transition-all duration-300 group"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-neon">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input 
                      placeholder="Enter your first name"
                      className="bg-input border-border focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Enter your last name"
                      className="bg-input border-border focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="Enter your email"
                    className="bg-input border-border focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input 
                    placeholder="What's this about?"
                    className="bg-input border-border focus:border-primary focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    className="bg-input border-border focus:border-primary focus:ring-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-neon hover:shadow-neon-strong transition-all duration-300"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;