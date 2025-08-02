import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const webProjects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution built with React and Node.js, featuring secure payment integration, inventory management, and responsive design.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Development"
    },
    {
      title: "Corporate Website",
      description: "Professional corporate website with CMS integration, SEO optimization, and advanced analytics dashboard.",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Development"
    },
    {
      title: "Portfolio Dashboard",
      description: "Interactive portfolio dashboard with data visualization, project management, and client communication features.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Development"
    }
  ];

  const designProjects = [
    {
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines for tech startup.",
      technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "Graphic Design"
    },
    {
      title: "Marketing Materials",
      description: "Comprehensive marketing collateral including brochures, business cards, social media graphics, and promotional banners.",
      technologies: ["CorelDRAW", "Photoshop", "InDesign"],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "Graphic Design"
    },
    {
      title: "UI/UX Design System",
      description: "Modern design system with reusable components, accessibility guidelines, and interactive prototypes.",
      technologies: ["Figma", "Adobe XD", "Principle"],
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      category: "Graphic Design"
    }
  ];

  const allProjects = [...webProjects, ...designProjects];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my latest work in web development and graphic design
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    {project.category}
                  </Badge>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-3 pt-2">
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        className="flex-1 bg-primary hover:bg-primary/90"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to take on new challenges and create amazing projects.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 px-8"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;