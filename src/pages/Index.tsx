
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import SignUpSection from "@/components/SignUpSection";
import AboutSection from "@/components/AboutSection";
import BlueTechSection from "@/components/BlueTechSection";
import TeamSection from "@/components/TeamSection";
import EventSection from "@/components/EventSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <SignUpSection />
      <AboutSection />
      <BlueTechSection />
      <TeamSection />
      <EventSection />
      <Footer />
    </div>
  );
};

export default Index;
