import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Palette, 
  Music, 
  Globe, 
  Smartphone, 
  Database,
  Headphones,
  Mic,
  Camera
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Web Development",
      color: "bg-blue-500",
      skills: [
        { name: "HTML5 & CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "PHP", level: 85 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Graphic Design",
      color: "bg-purple-500",
      skills: [
        { name: "Adobe Photoshop", level: 95 },
        { name: "Adobe Illustrator", level: 90 },
        { name: "CorelDRAW", level: 85 },
        { name: "Figma", level: 85 },
        { name: "Brand Identity", level: 90 },
        { name: "UI/UX Design", level: 80 }
      ]
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "DJ & Audio",
      color: "bg-green-500",
      skills: [
        { name: "Serato DJ Pro", level: 95 },
        { name: "Virtual DJ", level: 90 },
        { name: "Mixing & Beatmatching", level: 95 },
        { name: "Audio Production", level: 80 },
        { name: "Event Management", level: 85 },
        { name: "Crowd Reading", level: 95 }
      ]
    }
  ];

  const tools = [
    { name: "VS Code", category: "Development" },
    { name: "Git & GitHub", category: "Development" },
    { name: "WordPress", category: "Development" },
    { name: "Responsive Design", category: "Development" },
    { name: "Adobe Creative Suite", category: "Design" },
    { name: "Canva", category: "Design" },
    { name: "Logo Design", category: "Design" },
    { name: "Print Design", category: "Design" },
    { name: "Pioneer CDJ", category: "DJ Equipment" },
    { name: "DJ Mixer", category: "DJ Equipment" },
    { name: "Studio Monitors", category: "DJ Equipment" },
    { name: "Microphones", category: "DJ Equipment" }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical proficiency across multiple creative disciplines
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="bg-card p-8 rounded-xl border border-border/50">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Tools & Technologies
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="text-center group">
                  <Badge 
                    variant="secondary" 
                    className="w-full py-2 px-4 hover:bg-primary hover:text-white transition-colors duration-200 cursor-default"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-medium">{tool.name}</span>
                      <span className="text-xs opacity-70">{tool.category}</span>
                    </div>
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Service Icons */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mt-16">
            {[
              { icon: <Globe className="w-8 h-8" />, label: "Web Apps" },
              { icon: <Smartphone className="w-8 h-8" />, label: "Mobile First" },
              { icon: <Database className="w-8 h-8" />, label: "Backend" },
              { icon: <Headphones className="w-8 h-8" />, label: "Audio Mixing" },
              { icon: <Mic className="w-8 h-8" />, label: "Live Events" },
              { icon: <Camera className="w-8 h-8" />, label: "Visual Design" }
            ].map((service, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
                <p className="text-sm font-medium text-foreground">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;