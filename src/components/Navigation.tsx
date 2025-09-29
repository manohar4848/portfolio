import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg'
          : 'bg-transparent border-b border-gray-600/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-xl animate-pulse">Manohar</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {['Home', 'About Me', 'Projects', 'Skills', 'Certifications'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:shadow-lg"
                >
                  <span className="relative before:content-[''] before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-1 before:bg-pink-500 before:transition-all before:duration-300 hover:before:w-full">
                    {item}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-gradient-to-b from-black via-gray-800 to-gray-900 backdrop-blur-lg transform transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {['Home', 'About Me', 'Projects', 'Skills', 'Certifications'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 transform hover:scale-105"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
