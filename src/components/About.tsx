import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Music } from "lucide-react";

const About = () => {
  const experiences = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Web Development",
      description: "Crafting responsive, modern websites with cutting-edge technologies and user-centered design principles."
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Graphic Design",
      description: "Creating visually stunning designs that communicate brand stories and engage audiences effectively."
    },
    {
      icon: <Music className="w-8 h-8 text-primary" />,
      title: "DJ Services",
      description: "Bringing energy and excitement to events with expertly curated music and professional mixing skills."
    }
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multi-disciplinary creative professional with a passion for innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Bio Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Hello! I'm Samuel Oyimeh Abel
              </h3>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Based in the vibrant community of Ososo, Akoko Edo, Edo State, Nigeria, I am a 
                passionate creative professional who bridges the gap between technology, design, and entertainment.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                With an OND from the Federal College of Agriculture, Akure, I've cultivated a unique 
                perspective that combines technical precision with creative flair. My journey spans 
                across web development, graphic design, and music entertainment, allowing me to offer 
                comprehensive creative solutions.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Whether I'm coding a responsive website, designing a compelling brand identity, or 
                energizing a crowd with the perfect mix, I bring dedication, creativity, and 
                professionalism to every project.
              </p>

              {/* Contact Info Highlight */}
              <div className="bg-secondary/20 p-6 rounded-lg mt-8">
                <h4 className="font-semibold text-foreground mb-3">Get in Touch</h4>
                <div className="space-y-2 text-foreground/70">
                  <p>📍 No. 12 Okeshegun Quarter, Ososo</p>
                  <p>📞 09039569871 • 09168021268</p>
                  <p>✉️ ijobatechnology@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Profile Image with decorative elements */}
            <div className="relative">
              <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/30 rounded-full"></div>
                <div className="absolute inset-4 bg-gradient-to-tl from-accent/30 to-primary/10 rounded-full"></div>
                
                {/* Main image */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                  <img
                    src="/lovable-uploads/de0b7a87-18f9-4cd0-b6fb-b300b6585095.png"
                    alt="Samuel Oyimeh Abel - Professional Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border/50">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      {exp.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;