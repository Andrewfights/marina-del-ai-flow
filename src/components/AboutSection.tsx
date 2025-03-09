
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="marina-section">
      <div className="marina-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-marina-blue dark:text-marina-cyan">
              Why Marina del rAI?
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Marina del rAI represents the convergence of cutting-edge artificial intelligence and ocean innovation in the heart of Marina del Rey. We're building a vibrant community where technologists, marine experts, entrepreneurs, and enthusiasts collaborate to create sustainable solutions for our oceans.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Our mission is to accelerate the development and adoption of AI technologies that can monitor, protect, and sustainably utilize our ocean resources. Through events, workshops, and networking opportunities, we're fostering a unique ecosystem where innovation thrives at the intersection of technology and the sea.
            </p>
            
            <Button asChild className="marina-button-primary group">
              <a href="#">
                Read More 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          {/* Right column - Image/Illustration */}
          <div className="order-1 md:order-2">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-marina-teal/10 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-marina-blue/10 rounded-full filter blur-3xl"></div>
              
              {/* Main image with ocean/AI theme */}
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border border-marina-light/20 dark:border-marina-teal/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-marina-blue/30 to-marina-teal/20 mix-blend-multiply"></div>
                <img 
                  src="https://images.unsplash.com/photo-1608099269227-82de5da1e4a8?q=80&w=1000&auto=format&fit=crop" 
                  alt="Marina del Rey with AI visualization overlay" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with circuit-like patterns */}
                <div className="absolute inset-0 circuit-pattern opacity-30"></div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute bottom-6 right-6 h-24 w-24 bg-marina-teal rounded-lg shadow-lg flex items-center justify-center z-20">
                <div className="text-white font-bold text-center text-sm">
                  AI + Ocean Innovation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
