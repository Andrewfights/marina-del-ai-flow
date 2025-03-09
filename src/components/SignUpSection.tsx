
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const SignUpSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleInterestChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Successfully signed up!",
      description: "Get ready for exclusive updates and early invites.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      interest: "",
    });
  };
  
  return (
    <section id="signup" className="marina-section bg-gradient-to-b from-marina-light/30 to-background dark:from-marina-deep/30 dark:to-background">
      <div className="marina-container">
        <div className="max-w-4xl mx-auto bg-white dark:bg-marina-deep/70 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left side with image */}
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-marina-blue/80 to-marina-teal/80 mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop" 
                alt="Ocean AI Technology" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
                  <p className="text-marina-light/90">Be the first to know about new events, tech breakthroughs, and networking opportunities.</p>
                </div>
              </div>
            </div>
            
            {/* Right side with form */}
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-marina-blue dark:text-marina-cyan">
                Be Part of the Future
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="marina-input"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="marina-input"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interest">Primary Interest</Label>
                  <Select 
                    value={formData.interest} 
                    onValueChange={handleInterestChange}
                  >
                    <SelectTrigger id="interest" className="marina-input">
                      <SelectValue placeholder="Select an area of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai">Artificial Intelligence</SelectItem>
                      <SelectItem value="oceantech">Ocean Technology</SelectItem>
                      <SelectItem value="networking">Networking & Events</SelectItem>
                      <SelectItem value="all">All of the Above</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button type="submit" className="marina-button-primary w-full">
                  Stay Updated
                </Button>
              </form>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center">
                Get exclusive access to early invites & special content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
