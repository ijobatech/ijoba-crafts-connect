import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Event Coordinator",
      company: "Elegant Events Nigeria",
      rating: 5,
      content: "Samuel's DJ services transformed our corporate gala into an unforgettable experience. His ability to read the crowd and seamlessly transition between different music styles is exceptional. Highly recommended!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b740?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Okafor",
      role: "Business Owner",
      company: "TechStart Solutions",
      rating: 5,
      content: "Working with Samuel on our website redesign was a game-changer. His attention to detail and understanding of modern web design principles resulted in a site that perfectly represents our brand.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Blessing Adebayo",
      role: "Marketing Director",
      company: "Creative Minds Agency",
      rating: 5,
      content: "Samuel created our entire brand identity from scratch. The logo, color scheme, and marketing materials he designed have received countless compliments from our clients. Outstanding creativity!",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Afolabi",
      role: "Groom",
      company: "Wedding Client",
      rating: 5,
      content: "Samuel made our wedding day perfect! From the ceremony background music to the reception party, he kept everyone dancing all night. Professional, punctual, and incredibly talented.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Grace Emeka",
      role: "Restaurant Owner",
      company: "Taste of Home Restaurant",
      rating: 5,
      content: "The e-commerce platform Samuel built for our food delivery service exceeded our expectations. User-friendly, fast, and beautifully designed. Our online orders increased by 300%!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emmanuel Osagie",
      role: "Club Manager",
      company: "Nightlife Entertainment",
      rating: 5,
      content: "Samuel's weekly residency at our club has significantly increased our Friday night attendance. His music selection and mixing skills create an electric atmosphere that keeps people coming back.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What clients say about working with me across different services
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      {testimonial.company && (
                        <p className="text-xs text-primary">
                          {testimonial.company}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-card p-8 rounded-xl border border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">75+</div>
                <p className="text-muted-foreground">Events Performed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5⭐</div>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">
              Ready to join these satisfied clients?
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;