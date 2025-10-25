import { Github, Heart, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-transparent to-black/90 pt-20 pb-6 w-full">
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">About</h3>
            <p className="text-gray-400">
              Passionate developer crafting digital experiences with modern technologies.
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Me', 'Projects', 'Skills', 'Certifications'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase().replace(' ', '-'));
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 inline-block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Get in Touch</h3>
            <div className="space-y-2">
              <p className="text-gray-400">Email: 2200031527cseh@gmail.com</p>
              <p className="text-gray-400">Location: Vijayawada, India</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/ManoharBokka0208/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/Manohar-Bokka-505329286/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:2200030353cseh@gmail.com"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" /> by
            <span className="ml-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold">
              Manohar Bokka
            </span>
          </p>
          <p className="text-gray-600 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
