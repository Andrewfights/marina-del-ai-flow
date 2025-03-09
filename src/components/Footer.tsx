
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    toast({
      title: "Newsletter subscription successful!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };
  
  return (
    <footer className="bg-marina-deep text-white pt-16 pb-8">
      <div className="marina-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-marina-cyan mb-4">Marina del rAI</h3>
            <p className="text-marina-light/80">
              Where AI meets the ocean. Building a community of innovators, technologists, 
              and ocean advocates to create sustainable solutions.
            </p>
            
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-marina-light/70 hover:text-marina-cyan transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-marina-light/70 hover:text-marina-cyan transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-marina-light/70 hover:text-marina-cyan transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-marina-cyan mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-marina-light/80 hover:text-marina-cyan transition-colors">Home</a>
              </li>
              <li>
                <a href="#events" className="text-marina-light/80 hover:text-marina-cyan transition-colors">Events</a>
              </li>
              <li>
                <a href="#signup" className="text-marina-light/80 hover:text-marina-cyan transition-colors">Sign Up</a>
              </li>
              <li>
                <a href="#about" className="text-marina-light/80 hover:text-marina-cyan transition-colors">About</a>
              </li>
              <li>
                <a href="#team" className="text-marina-light/80 hover:text-marina-cyan transition-colors">Team</a>
              </li>
              <li>
                <a href="#contact" className="text-marina-light/80 hover:text-marina-cyan transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Resources */}
          <div>
            <h3 className="text-xl font-bold text-marina-cyan mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-marina-light/80 hover:text-marina-cyan transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-marina-light/80 hover:text-marina-cyan transition-colors">AI Research</a>
              </li>
              <li>
                <a href="#" className="text-marina-light/80 hover:text-marina-cyan transition-colors">Ocean Tech</a>
              </li>
              <li>
                <a href="#" className="text-marina-light/80 hover:text-marina-cyan transition-colors">Partners</a>
              </li>
              <li>
                <a href="#" className="text-marina-light/80 hover:text-marina-cyan transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-marina-cyan mb-4">Newsletter</h3>
            <p className="text-marina-light/80 mb-4">
              Stay updated with the latest news, events, and innovations in AI and ocean technology.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="bg-white/10 border-marina-teal/30 text-white placeholder:text-marina-light/50 pr-12 focus:border-marina-teal"
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  className="absolute right-1 top-1 h-8 w-8 bg-marina-teal hover:bg-marina-blue text-white rounded-md"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-marina-light/60">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
        
        <div className="border-t border-marina-teal/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-marina-light/70 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Marina del rAI. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-marina-light/70 hover:text-marina-cyan transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-marina-light/70 hover:text-marina-cyan transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-sm text-marina-light/70 hover:text-marina-cyan transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
