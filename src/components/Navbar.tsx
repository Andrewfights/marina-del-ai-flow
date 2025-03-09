
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Upcoming Events", href: "#events" },
    { name: "Sign Up", href: "#signup" },
    { name: "About", href: "#about" },
    { name: "Blue Tech", href: "#bluetech" },
    { name: "The Team", href: "#team" },
    { name: "The Event", href: "#event" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-marina-deep/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="marina-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <span className="text-xl md:text-2xl font-montserrat font-bold bg-gradient-to-r from-marina-blue via-marina-teal to-marina-cyan bg-clip-text text-transparent">
                Marina del rAI
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-white hover:text-marina-cyan transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <Button className="marina-button-primary ml-4">
              Join the Movement
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-marina-cyan focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in bg-white/95 dark:bg-marina-deep/95 backdrop-blur-md rounded-md shadow-lg">
            <div className="flex flex-col space-y-4 px-2 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block font-medium text-gray-700 dark:text-gray-200 hover:text-marina-teal dark:hover:text-marina-cyan px-3 py-2 rounded-md transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="marina-button-primary w-full mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Join the Movement
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
