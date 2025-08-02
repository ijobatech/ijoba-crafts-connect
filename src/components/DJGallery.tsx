import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Music, Calendar, MapPin } from "lucide-react";

const DJGallery = () => {
  const events = [
    {
      title: "Summer Music Festival 2024",
      date: "August 15, 2024",
      venue: "Edo State Cultural Center",
      type: "Festival",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&h=300&fit=crop",
      description: "Headlined the main stage at the annual summer music festival with a 3-hour progressive house set."
    },
    {
      title: "Corporate Gala Night",
      date: "July 20, 2024",
      venue: "Grand Palace Hotel",
      type: "Corporate",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&h=300&fit=crop",
      description: "Provided elegant background music and energetic dance sets for annual corporate celebration."
    },
    {
      title: "Wedding Reception",
      date: "June 10, 2024",
      venue: "Garden Paradise Resort",
      type: "Wedding",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=300&fit=crop",
      description: "Created magical moments with carefully curated playlists for ceremony and reception."
    },
    {
      title: "Birthday Bash",
      date: "May 25, 2024",
      venue: "Private Residence",
      type: "Private Party",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&h=300&fit=crop",
      description: "High-energy party vibes with mixed genre sets that kept the dance floor packed all night."
    },
    {
      title: "Club Night Residency",
      date: "Every Friday",
      venue: "Eclipse Nightclub",
      type: "Club",
      image: "https://images.unsplash.com/photo-1571266028243-d220c2a67b79?w=500&h=300&fit=crop",
      description: "Weekly residency featuring deep house, afrobeats, and electronic dance music."
    },
    {
      title: "Community Festival",
      date: "April 15, 2024",
      venue: "Ososo Town Square",
      type: "Community",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
      description: "Brought the community together with a diverse mix of local and international hits."
    }
  ];

  const mixes = [
    {
      title: "Afrobeats Summer Vibes",
      duration: "45:30",
      genre: "Afrobeats",
      date: "Aug 2024"
    },
    {
      title: "Deep House Sessions",
      duration: "52:15",
      genre: "Deep House",
      date: "Jul 2024"
    },
    {
      title: "Wedding Mix Collection",
      duration: "38:45",
      genre: "Mixed",
      date: "Jun 2024"
    },
    {
      title: "Electronic Fusion",
      duration: "47:20",
      genre: "Electronic",
      date: "May 2024"
    }
  ];

  return (
    <section id="dj" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              DJ <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the energy through photos, mixes, and event highlights
            </p>
          </div>

          {/* Event Gallery */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Recent Events & Performances
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    
                    {/* Event Type Badge */}
                    <Badge className="absolute top-4 left-4 bg-primary text-white">
                      {event.type}
                    </Badge>

                    {/* Event Details Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="font-semibold text-lg mb-1">{event.title}</h4>
                      <div className="flex items-center gap-4 text-sm opacity-90">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.venue}
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mixes Section */}
          <div className="bg-card p-8 rounded-xl border border-border/50">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Featured Mixes
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {mixes.map((mix, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      {/* Play Button */}
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:bg-primary/90 transition-colors duration-200 cursor-pointer">
                        <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                      </div>

                      {/* Mix Details */}
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                          {mix.title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Music className="w-4 h-4" />
                            {mix.genre}
                          </div>
                          <span>{mix.duration}</span>
                          <span>{mix.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Audio Player Note */}
            <div className="text-center mt-8 p-6 bg-secondary/20 rounded-lg">
              <Music className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-muted-foreground">
                🎵 Audio players and full mixes coming soon! Contact me for demo tracks and live mix recordings.
              </p>
            </div>
          </div>

          {/* Equipment & Services */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              DJ Services & Equipment
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Wedding Receptions", description: "Romantic & celebration music" },
                { title: "Corporate Events", description: "Professional background & party music" },
                { title: "Private Parties", description: "Customized playlists for any occasion" },
                { title: "Club Nights", description: "High-energy dance music" }
              ].map((service, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 px-8"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book DJ Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DJGallery;