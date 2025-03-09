
import { Calendar, Clock, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventSection = () => {
  // Event details
  const event = {
    title: "Marina del rAI Launch Event 2024",
    date: "May 27, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Marina del Rey, CA",
    theme: "AI Solutions for Ocean Sustainability",
    highlights: [
      "Keynote: The Future of AI in Ocean Conservation",
      "Panel: Sustainable Tech for Cleaner Oceans",
      "Workshop: Building AI Models for Marine Research",
      "Startup Showcase: Emerging Blue Tech Innovations",
      "Networking Reception: Connect with Industry Leaders"
    ]
  };
  
  return (
    <section id="event" className="marina-section bg-ocean-gradient text-white">
      {/* Background patterns */}
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-wave-pattern opacity-5 animate-wave"></div>
      
      <div className="marina-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-marina-cyan font-semibold py-1 px-4 rounded-full text-sm mb-4">
            Tuesday, May 27, 2024
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Marina del rAI Launch Event 🎉
          </h2>
          
          <p className="text-xl text-marina-light/90 max-w-3xl mx-auto">
            Join us for the premier gathering of AI innovators, ocean technologists, and marine 
            conservation experts in Marina del Rey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Event Details Column */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-marina-cyan">Event Details</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-marina-cyan mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">Date</h4>
                  <p className="text-marina-light/90">{event.date}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-marina-cyan mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">Time</h4>
                  <p className="text-marina-light/90">{event.time}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-marina-cyan mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">Venue</h4>
                  <p className="text-marina-light/90">{event.location}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Star className="h-6 w-6 text-marina-cyan mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">Theme</h4>
                  <p className="text-marina-light/90">{event.theme}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Event Program Column */}
          <div className="space-y-8">
            {/* Agenda Highlights */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-marina-cyan">Agenda Highlights</h3>
              
              <ul className="space-y-3">
                {event.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-5 w-5 bg-marina-teal/20 rounded-full flex items-center justify-center text-marina-cyan text-xs mr-3 mt-0.5">
                      ✓
                    </span>
                    <span className="text-marina-light/90">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Speaker Announcement Note */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-3 text-marina-cyan">Speakers</h3>
              <p className="text-marina-light/90">
                Our exciting speaker lineup will be announced soon! Stay tuned for updates on industry experts and thought leaders who will be joining us.
              </p>
            </div>
          </div>
        </div>
        
        {/* Tickets Section */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-3 text-marina-cyan">Ready to join us?</h3>
            <p className="text-marina-light/90 mb-6">
              Secure your spot at the Marina del rAI Launch Event. Early bird tickets available until May 1st.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="marina-button-primary w-full sm:w-auto">
                Reserve Your Spot
              </Button>
              <Button variant="outline" className="border-marina-teal/50 text-marina-light hover:bg-marina-teal/10 w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
