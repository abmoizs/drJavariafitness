import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingTags = [
    { name: 'Strength Training', color: 'bg-pink-light text-pink', delay: 0 },
    { name: 'Nutrition Coaching', color: 'bg-teal-light text-teal', delay: 0.1 },
    { name: 'Mindset Coaching', color: 'bg-pink-light text-pink', delay: 0.2 },
    { name: 'Accountability', color: 'bg-teal-light text-teal', delay: 0.3 },
    { name: 'Progress Tracking', color: 'bg-pink-light text-pink', delay: 0.4 },
  ];

  return (
    <section 
      ref={heroRef}
      className="relative w-full min-h-screen bg-white overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-pink/10 animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-teal/10 animate-float-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-12 h-12 rounded-full bg-purple/10 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-orange/10 animate-float-slow" style={{ animationDelay: '0.5s' }} />
        
        {/* Gradient Mesh Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-pink-light/30 via-transparent to-teal-light/20" />
      </div>

      <div className="section-container relative z-10">
        <div className="section-inner">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20 lg:py-0">
            {/* Left Content */}
            <div className="order-2 lg:order-1 space-y-8">
              {/* Headline */}
              <div className="space-y-2">
                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transition-all duration-800 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '300ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <span className="text-gray-900">Transform Your</span>
                </h1>
                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transition-all duration-800 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '450ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <span className="text-gradient">Body & Mind</span>
                </h1>
                <h1 
                  className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transition-all duration-800 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '600ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <span className="text-gray-900">With Expert Coaching</span>
                </h1>
              </div>

              {/* Subheadline */}
              <p 
                className={`text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '800ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                Personalized fitness and nutrition programs designed for your lifestyle. 
                No extreme diets, no endless cardio—just sustainable results.
              </p>

              {/* CTA Button */}
              <div 
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
                }`}
                style={{ transitionDelay: '1000ms', transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}
              >
                <button 
                  onClick={() => scrollToSection('#plans')}
                  className="btn-primary text-lg group"
                >
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Trust Badges */}
              <div 
                className={`flex flex-wrap gap-4 pt-4 transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '1100ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>500+ Transformations</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Certified Coach</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image with Floating Tags */}
            <div className="order-1 lg:order-2 relative">
              {/* Main Image */}
              <div 
                className={`relative z-10 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}
                style={{ transitionDelay: '400ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/hero-image.jpg" 
                    alt="Fitness Coaching" 
                    className="w-full h-auto object-cover"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </div>

              {/* Floating Tags */}
              <div className="absolute inset-0 pointer-events-none">
                {floatingTags.map((tag, index) => (
                  <div
                    key={tag.name}
                    className={`absolute pointer-events-auto tag-pill ${tag.color} shadow-lg transition-all duration-400 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                    style={{ 
                      transitionDelay: `${1200 + index * 80}ms`,
                      transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                      animation: isVisible ? `float ${5 + index * 0.5}s ease-in-out infinite` : 'none',
                      animationDelay: `${index * 0.5}s`,
                      ...(index === 0 && { top: '5%', left: '-10%' }),
                      ...(index === 1 && { top: '20%', right: '-5%' }),
                      ...(index === 2 && { top: '45%', left: '-15%' }),
                      ...(index === 3 && { bottom: '25%', right: '-10%' }),
                      ...(index === 4 && { bottom: '10%', left: '5%' }),
                    }}
                  >
                    {tag.name}
                  </div>
                ))}
              </div>

              {/* Decorative Ring */}
              <div 
                className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-4 border-pink/20 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
                style={{ transitionDelay: '1400ms' }}
              />
              <div 
                className={`absolute -top-5 -left-5 w-24 h-24 rounded-full border-4 border-teal/20 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
                style={{ transitionDelay: '1500ms' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
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
    </section>
  );
};

export default Hero;
