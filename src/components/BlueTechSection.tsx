
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Innovation {
  id: number;
  title: string;
  company: string;
  description: string;
  image: string;
}

const innovations: Innovation[] = [
  {
    id: 1,
    title: "AI-Powered Ocean Monitoring",
    company: "DeepBlue Analytics",
    description: "Using computer vision and machine learning to track ocean health indicators, marine life populations, and pollution levels in real-time.",
    image: "https://images.unsplash.com/photo-1580329921383-c9dd15bf9b90?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Smart Marine Conservation Drones",
    company: "EcoWatch Systems",
    description: "Autonomous drones that use AI to identify endangered species, illegal fishing activities, and coral reef damage from above.",
    image: "https://images.unsplash.com/photo-1510146621401-6519c577d8d1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Sustainable Maritime Technology",
    company: "GreenWave Propulsion",
    description: "AI-optimized propulsion systems that reduce fuel consumption and emissions while maximizing efficiency for commercial vessels.",
    image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Predictive Ocean Current Modeling",
    company: "FlowCast Technologies",
    description: "Machine learning algorithms that predict ocean currents, helping shipping companies optimize routes and reduce carbon footprint.",
    image: "https://images.unsplash.com/photo-1498922124352-a16107828369?q=80&w=1000&auto=format&fit=crop"
  }
];

const BlueTechSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSlide = () => {
    setActiveIndex((current) => (current === innovations.length - 1 ? 0 : current + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? innovations.length - 1 : current - 1));
  };
  
  return (
    <section id="bluetech" className="marina-section bg-marina-deep text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-wave-pattern opacity-5 animate-wave"></div>
      
      <div className="marina-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-marina-cyan">
            Blue Tech: AI + Sustainability 🌊
          </h2>
          <p className="text-lg text-marina-light/90 max-w-3xl mx-auto">
            Discover how artificial intelligence is revolutionizing ocean conservation, 
            sustainable maritime technology, and marine research.
          </p>
        </div>
        
        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="mb-8 space-y-6">
              <div className="flex items-center">
                <div className="bg-marina-teal/20 text-marina-cyan font-semibold py-1 px-4 rounded-full text-sm">
                  Innovation Spotlight
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-marina-cyan">
                AI-Driven Ocean Solutions
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-marina-teal/20 p-2 rounded-lg mr-4 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#22d3ee" strokeWidth="2"/>
                      <path d="M15 9L11 13L9 11" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-marina-cyan mb-1">AI-powered ocean monitoring</h4>
                    <p className="text-marina-light/90">Real-time data collection and analysis for ocean health, pollution tracking, and marine life conservation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-marina-teal/20 p-2 rounded-lg mr-4 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#22d3ee" strokeWidth="2"/>
                      <path d="M15 9L11 13L9 11" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-marina-cyan mb-1">Smart marine conservation</h4>
                    <p className="text-marina-light/90">Machine learning algorithms helping protect endangered species and manage marine protected areas.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-marina-teal/20 p-2 rounded-lg mr-4 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#22d3ee" strokeWidth="2"/>
                      <path d="M15 9L11 13L9 11" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-marina-cyan mb-1">Sustainable maritime technology</h4>
                    <p className="text-marina-light/90">AI-optimized shipping routes, smart port management, and clean energy solutions for marine vessels.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Button asChild className="marina-button-primary group">
              <a href="#">
                Explore Blue Tech
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          <div className="relative h-[400px] md:h-[500px]">
            {/* Innovation carousel */}
            <div className="relative h-full rounded-xl overflow-hidden border border-marina-teal/20 shadow-lg shadow-marina-teal/10">
              {innovations.map((innovation, index) => (
                <div
                  key={innovation.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-marina-deep/70 to-marina-deep"></div>
                  <img
                    src={innovation.image}
                    alt={innovation.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="bg-marina-deep/60 backdrop-blur-sm p-4 rounded-lg border border-marina-teal/20">
                      <h4 className="text-xl font-bold text-marina-cyan mb-1">{innovation.title}</h4>
                      <p className="text-sm text-marina-light mb-3">By {innovation.company}</p>
                      <p className="text-marina-light/90">{innovation.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Navigation buttons */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
                <Button
                  onClick={prevSlide}
                  variant="ghost"
                  size="icon"
                  className="bg-marina-deep/50 backdrop-blur-sm hover:bg-marina-teal/20 text-white rounded-full h-10 w-10"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
                <Button
                  onClick={nextSlide}
                  variant="ghost"
                  size="icon"
                  className="bg-marina-deep/50 backdrop-blur-sm hover:bg-marina-teal/20 text-white rounded-full h-10 w-10"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Indicator dots */}
              <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 z-20">
                {innovations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === activeIndex 
                        ? "bg-marina-cyan w-6" 
                        : "bg-marina-light/40 hover:bg-marina-light/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueTechSection;
