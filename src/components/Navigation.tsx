import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work with me', href: '#work-with-me' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Plans', href: '#plans' },
    { 
      name: 'Program Info', 
      href: '#program-info',
      dropdown: [
        { name: 'Nutrition', href: '#nutrition' },
        { name: 'Fitness', href: '#fitness' },
        { name: 'Healthy Habits', href: '#habits' },
        { name: 'Accountability', href: '#accountability' },
      ]
    },
    { name: 'About', href: '#about' },
    { 
      name: 'Learn More', 
      href: '#learn-more',
      dropdown: [
        { name: 'Blog', href: '#blog' },
        { name: 'Success Stories', href: '#success-stories' },
        { name: 'FAQ', href: '#faq' },
      ]
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r from-pink to-teal py-2.5 px-4 text-center">
        <p className="text-white text-sm font-medium">
          Struggling to lose weight but still want your favorite foods? 🍕🍷 
          <a 
            href="#free-guide" 
            onClick={(e) => { e.preventDefault(); scrollToSection('#cta'); }}
            className="underline ml-1 hover:text-yellow transition-colors"
          >
            Ditch the diets and grab my FREE 3-step guide!
          </a>
        </p>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`w-full transition-all duration-500 z-50 ${
          isScrolled 
            ? 'fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-lg' 
            : 'relative bg-white'
        }`}
        style={{ top: isScrolled ? 0 : undefined }}
      >
        <div className="section-container">
          <div className="section-inner">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="flex items-center gap-2 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink to-teal flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DJ</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-gray-900 leading-tight group-hover:text-pink transition-colors">
                    Dr. Javeria
                  </span>
                  <span className="text-xs text-teal font-medium">Fitness</span>
                </div>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      onClick={() => !link.dropdown && scrollToSection(link.href)}
                      className="flex items-center gap-1 px-4 py-2 text-gray-700 font-medium hover:text-pink transition-colors rounded-lg hover:bg-pink/5"
                    >
                      {link.name}
                      {link.dropdown && (
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      )}
                    </button>
                    
                    {/* Dropdown Menu */}
                    {link.dropdown && activeDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-card border border-gray-100 py-2 animate-scale-in origin-top">
                        {link.dropdown.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => scrollToSection(item.href)}
                            className="w-full text-left px-4 py-2.5 text-gray-600 hover:text-pink hover:bg-pink/5 transition-colors"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <button 
                  onClick={() => scrollToSection('#cta')}
                  className="btn-primary animate-pulse-glow"
                >
                  Get Started
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="section-container pb-6 bg-white border-t border-gray-100">
            <div className="section-inner pt-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <button
                    onClick={() => !link.dropdown && scrollToSection(link.href)}
                    className="w-full text-left px-4 py-3 text-gray-700 font-medium hover:text-pink hover:bg-pink/5 rounded-lg transition-colors flex items-center justify-between"
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                  {link.dropdown && (
                    <div className="pl-4 space-y-1">
                      {link.dropdown.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => scrollToSection(item.href)}
                          className="w-full text-left px-4 py-2 text-gray-500 hover:text-pink transition-colors"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button 
                onClick={() => scrollToSection('#cta')}
                className="w-full btn-primary mt-4"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
