
import { Linkedin, Twitter } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Sophia Chen",
    role: "Founder & AI Director",
    bio: "Former MIT AI researcher with 10+ years of experience in machine learning. Leading our AI strategy for ocean conservation.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Marine Technology Lead",
    bio: "Marine biologist and tech innovator developing AI-powered systems for underwater monitoring and conservation.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 3,
    name: "Elena Rodríguez",
    role: "Community & Events Manager",
    bio: "Experienced community builder connecting technologists, ocean advocates, and entrepreneurs to create sustainable solutions.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
    linkedin: "#"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Sustainable Business Advisor",
    bio: "Former tech executive now focused on helping ocean-tech startups build sustainable, profitable business models.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
    twitter: "#"
  },
  {
    id: 5,
    name: "Dr. Aisha Patel",
    role: "Data Science Researcher",
    bio: "Leading our ocean data initiatives and developing models to predict climate impact on marine ecosystems.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 6,
    name: "Thomas Zhang",
    role: "Technical Partnership Lead",
    bio: "Building bridges between AI researchers, tech companies, and marine science institutions to drive innovation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    linkedin: "#"
  }
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="marina-card h-full flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex items-start mb-4">
          <div className="mr-4">
            <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-marina-teal/30">
              <img 
                src={member.image} 
                alt={member.name} 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-marina-blue dark:text-marina-cyan">{member.name}</h3>
            <p className="text-marina-teal font-medium">{member.role}</p>
          </div>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">{member.bio}</p>
      </div>
      
      {(member.linkedin || member.twitter) && (
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex justify-end space-x-3">
          {member.linkedin && (
            <a 
              href={member.linkedin} 
              className="text-gray-500 hover:text-marina-teal transition-colors"
              aria-label={`${member.name}'s LinkedIn profile`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {member.twitter && (
            <a 
              href={member.twitter} 
              className="text-gray-500 hover:text-marina-teal transition-colors"
              aria-label={`${member.name}'s Twitter profile`}
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="marina-section bg-gray-50 dark:bg-gray-900">
      <div className="marina-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-marina-blue dark:text-marina-cyan">
            Meet the Innovators Behind Marina del rAI
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our diverse team of AI researchers, marine experts, and community builders are
            working together to create technological solutions for a sustainable ocean future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center text-marina-teal hover:text-marina-blue dark:hover:text-marina-cyan transition-colors font-medium"
          >
            <span>Want to join our team? Get in touch</span>
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
