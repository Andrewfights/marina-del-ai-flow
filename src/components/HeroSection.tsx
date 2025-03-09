
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-ocean-gradient"
    >
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>
      
      {/* Wave pattern - This creates the ocean wave animation effect */}
      <div className="absolute inset-0 bg-wave-pattern opacity-10 animate-wave"></div>
      
      <div className="marina-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Where AI Meets the Ocean: Innovation at Marina del Rey
          </h1>
          
          <p className="text-lg md:text-xl text-marina-light/90 mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Join us in shaping the future of technology, sustainability, and community. 
            Marina del rAI brings together innovators, thought leaders, and ocean enthusiasts.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button asChild className="marina-button-primary group">
              <a href="#events">
                See Upcoming Events
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button asChild className="marina-button-secondary">
              <a href="#signup">Sign Up for Updates</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay at the bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
