
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventCard = ({ event }: { event: Event }) => {
  // Calculate days remaining
  const today = new Date();
  const eventDate = new Date(event.date);
  const daysRemaining = Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
  return (
    <div className="marina-card group">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-marina-blue/20 to-marina-deep/80 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {daysRemaining > 0 && event.date !== "TBD" ? (
          <div className="absolute top-4 right-4 bg-marina-teal text-white text-sm font-semibold py-1 px-3 rounded-full z-20">
            In {daysRemaining} days
          </div>
        ) : event.date === "TBD" && (
          <div className="absolute top-4 right-4 bg-marina-teal text-white text-sm font-semibold py-1 px-3 rounded-full z-20">
            Date TBD
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-marina-blue dark:text-marina-cyan">{event.title}</h3>
        
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
          <Calendar className="h-4 w-4 mr-2 text-marina-teal" />
          <span className="text-sm">{event.date === "TBD" ? "Date to be determined" : new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
        
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
          <Clock className="h-4 w-4 mr-2 text-marina-teal" />
          <span className="text-sm">{event.time}</span>
        </div>
        
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
          <MapPin className="h-4 w-4 mr-2 text-marina-teal" />
          <span className="text-sm">{event.location}</span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-200 mb-5">{event.description}</p>
        
        <Button asChild className="w-full group">
          <a href={event.link} className="justify-center">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </div>
  );
};

// Event type definition
interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  link: string;
}

// Sample events data with updated ocean/blue tech related images
const events: Event[] = [
  {
    id: 1,
    title: "AI & Ocean Data Workshop",
    date: "2023-12-15",
    time: "10:00 AM - 3:00 PM",
    location: "Marina del Rey Tech Hub",
    description: "Learn how AI is transforming ocean data collection and analysis with hands-on workshops and expert presentations.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "Blue Tech Innovation Summit",
    date: "2024-01-20",
    time: "9:00 AM - 6:00 PM",
    location: "Marina del Rey Convention Center",
    description: "Join leading innovators, startups, and investors to explore the future of sustainable ocean technology.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "AI & the Deep Sea: Robotics & Exploration 🤖",
    date: "TBD",
    time: "9:00 AM - 8:00 PM",
    location: "Marina del Rey Tech Campus",
    description: "Exploring how AI-powered underwater drones, ROVs, and deep-sea AI tools are changing ocean exploration, marine archaeology, and oceanography.",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  }
];

const EventsSection = () => {
  return (
    <section id="events" className="marina-section bg-gradient-to-b from-background to-marina-light/30 dark:to-marina-deep/30">
      <div className="marina-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Next Big Events 🚀
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join us at these upcoming Marina del rAI events where technology meets ocean innovation. 
            Connect with experts, learn new skills, and be part of the future.
          </p>
        </div>
        
        <div className="marina-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="marina-button-secondary">
            <a href="#">View All Events</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
