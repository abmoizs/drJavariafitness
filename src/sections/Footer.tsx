import { useState } from 'react';
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Work With Me', href: '#work-with-me' },
    { name: 'Our Plans', href: '#plans' },
    { name: 'About Me', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Success Stories', href: '#success-stories' },
  ];

  const programLinks = [
    { name: 'Strength Training', href: '#program-info' },
    { name: 'Nutrition Coaching', href: '#program-info' },
    { name: 'Mindset Coaching', href: '#program-info' },
    { name: 'Accountability', href: '#program-info' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-pink overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg 
          className="relative block w-full h-16"
          viewBox="0 0 1440 60" 
          preserveAspectRatio="none"
        >
          <path 
            fill="#f486a6" 
            d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,60L1392,60C1344,60,1248,60,1152,60C1056,60,960,60,864,60C768,60,672,60,576,60C480,60,384,60,288,60C192,60,96,60,48,60L0,60Z"
          />
        </svg>
      </div>

      <div className="section-container relative z-10 pt-20 pb-8">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); scrollToSection('#'); }}
                className="flex items-center gap-2 mb-6 group"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <span className="text-pink font-bold text-xl">DJ</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-white leading-tight">
                    Dr. Javeria
                  </span>
                  <span className="text-xs text-white/80">Fitness</span>
                </div>
              </a>
              <p className="text-white/80 mb-6 leading-relaxed">
                Transform your body and mind with expert fitness coaching. 
                Personalized programs designed for your lifestyle.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-pink transition-all duration-300 hover:-translate-y-1"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-pink transition-all duration-300 hover:-translate-y-1"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-pink transition-all duration-300 hover:-translate-y-1"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Programs</h3>
              <ul className="space-y-3">
                {programLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
              <ul className="space-y-3 mb-6">
                <li>
                  <a 
                    href="mailto:contact@drjaveriafitness.com"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    drjavariahanif@gmail.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+923124173769"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +92 312 4173 769
                  </a>
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <MapPin className="w-4 h-4" />
                  Available Online Worldwide
                </li>
              </ul>

              {/* Newsletter */}
              <div>
                <h4 className="text-white font-semibold mb-3">Subscribe</h4>
                <p className="text-white/70 text-sm mb-3">
                  Get FREE fitness & nutrition tips!
                </p>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-full bg-white/20 text-white placeholder:text-white/50 border border-white/20 focus:outline-none focus:border-white/50 transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-white text-pink font-semibold rounded-full hover:bg-yellow hover:text-gray-900 transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
                {isSubscribed && (
                  <p className="text-yellow text-sm mt-2 animate-slide-up">
                    Thanks for subscribing!
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">
                © 2025 Dr. Javeria Fitness. All Rights Reserved
              </p>
              <div className="flex gap-6 text-sm">
                <button className="text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </button>
                <button className="text-white/60 hover:text-white transition-colors">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
