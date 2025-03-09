
import { Linkedin, Twitter, Award, Briefcase, HandshakeIcon } from "lucide-react";
import { Button } from "./ui/button";

const TeamSection = () => {
  return (
    <section id="team" className="marina-section bg-gray-50 dark:bg-gray-900">
      <div className="marina-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-marina-blue dark:text-marina-cyan">
            Leadership & Partnerships
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building a future where technology and the coast converge to inspire groundbreaking advancements.
          </p>
        </div>
        
        {/* Founder Feature Section */}
        <div className="mb-16 rounded-2xl overflow-hidden bg-gradient-to-br from-marina-blue/5 to-marina-teal/10 border border-marina-teal/20 p-6 md:p-8">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-marina-teal/10 rounded-full filter blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-marina-blue/10 rounded-full filter blur-2xl"></div>
                <div className="relative aspect-square max-w-sm mx-auto">
                  <div className="h-full w-full overflow-hidden rounded-xl border-2 border-marina-teal/30 shadow-xl">
                    <img 
                      src="/lovable-uploads/40c25825-0f4c-4787-96c8-5fff6502e772.png" 
                      alt="Andrew Montanez" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-marina-blue rounded-full p-3 shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 space-y-4">
              <div className="flex items-center mb-2">
                <Briefcase className="h-5 w-5 text-marina-teal mr-2" />
                <span className="text-marina-teal font-semibold">Founder & CEO</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-marina-blue dark:text-marina-cyan">Andrew Montanez</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A seasoned tech innovator, product manager, and entrepreneur with a deep passion for artificial intelligence and media. 
                With a background spanning AI-driven video editing, live event production, and streaming technology, 
                he has played a key role in shaping cutting-edge products at companies like Pluto TV, Paramount, Telly, Glow, and Ruffcut.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                As the founder of Marina del rAI, Andrew brings together the worlds of AI innovation and oceanic sustainability, 
                creating a hub for startups, creators, and visionaries in Marina del Rey. His expertise in AI automation, 
                interactive media, and event production drives the mission of Marina del rAI—to build a future where 
                technology and the coast converge to inspire groundbreaking advancements.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Beyond tech, Andrew has a background in MMA, fight promotion, and TV production, blending a unique mix of 
                storytelling, sports, and AI to fuel his entrepreneurial ventures.
              </p>
              <div className="flex space-x-3 pt-2">
                <a 
                  href="#" 
                  className="text-marina-blue hover:text-marina-teal transition-colors"
                  aria-label="Andrew Montanez's LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-marina-blue hover:text-marina-teal transition-colors"
                  aria-label="Andrew Montanez's Twitter profile"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partnership Section */}
        <div className="mb-16 rounded-2xl overflow-hidden bg-gradient-to-br from-marina-blue/5 to-marina-teal/10 border border-marina-teal/20 p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-marina-teal mr-2">
                  <path d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3.15a1.575 1.575 0 1 0 3.15 0v-3.15z" />
                  <path d="M13.875 2.25c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125v-9.75c0-.621.504-1.125 1.125-1.125h9.75z" />
                  <path d="M22.5 10.5v2.25a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25v-8.25a2.25 2.25 0 0 1 2.25-2.25h3.542a7.348 7.348 0 0 1-.542-2.25H3.375A3.375 3.375 0 0 0 0 5.625v10.5A3.375 3.375 0 0 0 3.375 19.5h17.25a3.375 3.375 0 0 0 3.375-3.375v-2.25z" />
                </svg>
                <span className="text-marina-teal font-semibold">Strategic Partner</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-marina-blue dark:text-marina-cyan">AILA</h3>
              <p className="text-gray-700 dark:text-gray-300">
                AILA (Artificial Intelligence LA) is a premier organization dedicated to advancing AI technology 
                and fostering collaboration within Los Angeles' dynamic tech ecosystem. As a strategic partner of 
                Marina del rAI, AILA brings its extensive network and expertise to help bridge the worlds of 
                artificial intelligence and ocean sustainability.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                This partnership enables exciting new opportunities for innovation, research, and community building 
                at the intersection of AI and ocean technologies in the Marina del Rey area.
              </p>
              <div className="pt-4">
                <Button variant="outline" className="border-marina-teal text-marina-teal hover:bg-marina-teal/10">
                  Learn More About AILA
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md aspect-video flex items-center justify-center">
                <div className="text-center">
                  <h4 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-marina-blue to-marina-teal mb-2">AILA</h4>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Artificial Intelligence LA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center text-marina-teal hover:text-marina-blue dark:hover:text-marina-cyan transition-colors font-medium"
          >
            <span>Interested in partnering with us? Get in touch</span>
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
