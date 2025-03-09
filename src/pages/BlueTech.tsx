
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlueTech = () => {
  return (
    <div className="min-h-screen bg-marina-deep text-white pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-wave-pattern opacity-5 animate-wave"></div>
      
      <div className="marina-container relative z-10 py-12">
        {/* Back to home button */}
        <Button asChild variant="ghost" className="mb-8 text-marina-cyan hover:text-marina-cyan/80 hover:bg-marina-teal/10 group">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </Button>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-marina-cyan mb-8">Blue Technology</h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-marina-light/90 mb-8">
              Blue Technology (Blue Tech) represents the intersection of cutting-edge technology and ocean sustainability. 
              It encompasses innovative solutions designed to protect, explore, and harness the potential of our oceans while 
              ensuring their preservation for future generations.
            </p>
            
            <h2 className="text-2xl font-bold text-marina-teal mt-12 mb-6">What is Blue Tech?</h2>
            
            <p className="text-marina-light/90 mb-6">
              Blue Tech refers to technologies specifically designed for ocean and marine environments. 
              This rapidly evolving field combines artificial intelligence, robotics, data analytics, 
              and sustainable engineering to address the unique challenges and opportunities presented by our oceans.
            </p>
            
            <h2 className="text-2xl font-bold text-marina-teal mt-12 mb-6">Key Areas of Blue Tech Innovation</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-marina-teal/20">
                <h3 className="text-xl font-bold text-marina-cyan mb-4">Ocean Monitoring & Conservation</h3>
                <p className="text-marina-light/90">
                  AI-powered systems that track ocean health, marine biodiversity, and pollution levels in real-time, 
                  enabling more effective conservation efforts and rapid response to environmental threats.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-marina-teal/20">
                <h3 className="text-xl font-bold text-marina-cyan mb-4">Sustainable Maritime Transport</h3>
                <p className="text-marina-light/90">
                  Advanced propulsion systems, optimized routing algorithms, and clean energy solutions that 
                  reduce the environmental impact of shipping and marine transportation.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-marina-teal/20">
                <h3 className="text-xl font-bold text-marina-cyan mb-4">Marine Research & Exploration</h3>
                <p className="text-marina-light/90">
                  Autonomous underwater vehicles, advanced sensors, and machine learning tools that expand our 
                  understanding of ocean ecosystems and enable discovery in previously inaccessible marine environments.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-marina-teal/20">
                <h3 className="text-xl font-bold text-marina-cyan mb-4">Renewable Ocean Energy</h3>
                <p className="text-marina-light/90">
                  Innovative technologies that harness the power of waves, tides, and offshore wind to generate 
                  clean, renewable energy while minimizing impacts on marine ecosystems.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-marina-teal mt-12 mb-6">The Role of AI in Blue Tech</h2>
            
            <p className="text-marina-light/90 mb-6">
              Artificial intelligence serves as a cornerstone of Blue Tech innovation, enabling:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="h-5 w-5 bg-marina-teal/20 rounded-full flex items-center justify-center text-marina-cyan text-xs mr-3 mt-0.5">
                  ✓
                </span>
                <span className="text-marina-light/90">
                  <strong className="text-marina-cyan">Predictive Analytics:</strong> Forecasting ocean conditions, tracking marine species migration, and anticipating environmental changes
                </span>
              </li>
              
              <li className="flex items-start">
                <span className="h-5 w-5 bg-marina-teal/20 rounded-full flex items-center justify-center text-marina-cyan text-xs mr-3 mt-0.5">
                  ✓
                </span>
                <span className="text-marina-light/90">
                  <strong className="text-marina-cyan">Autonomous Systems:</strong> Enabling unmanned vessels and underwater robots to collect data, monitor conditions, and perform tasks in harsh marine environments
                </span>
              </li>
              
              <li className="flex items-start">
                <span className="h-5 w-5 bg-marina-teal/20 rounded-full flex items-center justify-center text-marina-cyan text-xs mr-3 mt-0.5">
                  ✓
                </span>
                <span className="text-marina-light/90">
                  <strong className="text-marina-cyan">Data Processing:</strong> Analyzing vast amounts of oceanographic data to identify patterns, anomalies, and insights that would be impossible to detect manually
                </span>
              </li>
            </ul>
            
            <h2 className="text-2xl font-bold text-marina-teal mt-12 mb-6">Join the Blue Tech Movement</h2>
            
            <p className="text-marina-light/90 mb-8">
              At Marina del rAI, we're bringing together innovators, researchers, entrepreneurs, and ocean enthusiasts 
              to accelerate the development and adoption of Blue Tech solutions. Whether you're a technologist, environmental scientist, 
              investor, or simply passionate about ocean conservation, there's a place for you in this growing community.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-marina-teal/20 text-center mt-10">
              <h3 className="text-2xl font-bold text-marina-cyan mb-4">Ready to dive in?</h3>
              <p className="text-marina-light/90 mb-6">
                Explore opportunities to learn, collaborate, and contribute to the future of Blue Technology.
              </p>
              <Button asChild className="marina-button-primary">
                <Link to="/#signup">Sign Up for Our Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueTech;
