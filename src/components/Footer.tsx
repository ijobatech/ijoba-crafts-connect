import { Button } from "@/components/ui/button";
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Music
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "DJ Gallery", href: "#dj" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Web Development",
    "Graphic Design",
    "DJ Services",
    "Brand Identity",
    "E-commerce Solutions",
    "Event Entertainment"
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", name: "YouTube" },
    { icon: <Music className="w-5 h-5" />, href: "#", name: "SoundCloud" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-white relative">
      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary hover:bg-primary/90 rounded-full p-3 shadow-lg"
        size="icon"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4">
                Ijobatech <span className="text-secondary">Portfolio</span>
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Multi-disciplinary creative professional specializing in web development, 
                graphic design, and DJ services. Based in Ososo, Edo State, Nigeria.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="text-sm">No. 12 Okeshegun Quarter, Ososo</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-secondary" />
                  <a href="tel:+2349039569871" className="text-sm hover:text-secondary transition-colors">
                    09039569871
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-secondary" />
                  <a href="mailto:ijobatechnology@gmail.com" className="text-sm hover:text-secondary transition-colors">
                    ijobatechnology@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-secondary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-300 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <p className="text-gray-300 text-sm mb-4">
                Follow my latest projects and music sets on social media.
              </p>
              
              {/* Social Icons */}
              <div className="flex flex-wrap gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-foreground transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-gray-300 mb-3">Ready to start your project?</p>
                <Button 
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-secondary text-foreground hover:bg-secondary/90"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-400 text-center md:text-left">
                <p>&copy; 2024 Samuel Oyimeh Abel (Ijobatech Portfolio). All rights reserved.</p>
                <p className="mt-1">Built with ❤️ using React, TypeScript & Tailwind CSS</p>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-secondary transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;