
import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/d4cd879b-066e-4440-97ea-7d3d885830f5.png" 
            alt="Petallex Logo" 
            className="h-10" 
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-petallex-blue hover:text-petallex-teal transition">Features</a>
          <a href="#benefits" className="text-petallex-blue hover:text-petallex-teal transition">Benefits</a>
          <a href="#how-it-works" className="text-petallex-blue hover:text-petallex-teal transition">How It Works</a>
          <a href="#pricing" className="text-petallex-blue hover:text-petallex-teal transition">Pricing</a>
          <Button className="bg-petallex-gradient text-white hover:opacity-90">
            Request Demo
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          <a href="#features" className="text-petallex-blue hover:text-petallex-teal transition" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#benefits" className="text-petallex-blue hover:text-petallex-teal transition" onClick={() => setIsMobileMenuOpen(false)}>Benefits</a>
          <a href="#how-it-works" className="text-petallex-blue hover:text-petallex-teal transition" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
          <a href="#pricing" className="text-petallex-blue hover:text-petallex-teal transition" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
          <Button className="bg-petallex-gradient w-full text-white hover:opacity-90">
            Request Demo
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
