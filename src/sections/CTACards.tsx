import { useEffect, useRef, useState } from 'react';
import { User, BookOpen, Heart, ArrowRight } from 'lucide-react';

const CTACards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: User,
      title: 'Work With Me',
      description: 'My signature private 1:1 fitness coaching program, designed to help busy professionals achieve results without extreme measures.',
      cta: 'Learn More',
      href: '#work-with-me',
      color: 'from-pink to-pink-dark',
    },
    {
      icon: BookOpen,
      title: 'View My Blog',
      description: 'Check out my Fitness Blog for helpful tips on training, healthy living, nutrition, and maintaining a balanced lifestyle.',
      cta: 'Read It',
      href: '#blog',
      color: 'from-teal to-teal-dark',
    },
    {
      icon: Heart,
      title: 'About Me',
      description: 'From my own personal experience, I\'ve learned that the secret is finding a plan that works with YOUR life and goals.',
      cta: 'My Story',
      href: '#about',
      color: 'from-purple to-purple-dark',
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="work-with-me"
      className="relative w-full py-20 lg:py-32 bg-teal-light overflow-hidden"
    >
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg 
          className="relative block w-full h-16"
          viewBox="0 0 1440 60" 
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,60L1392,60C1344,60,1248,60,1152,60C1056,60,960,60,864,60C768,60,672,60,576,60C480,60,384,60,288,60C192,60,96,60,48,60L0,60Z"
          />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-teal/10 animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-pink/10 animate-float-slow" />
      </div>

      <div className="section-container relative z-10">
        <div className="section-inner">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Take the First Step and <span className="text-gradient">Apply to Work With Us!</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 perspective-1000">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`group bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ 
                    transitionDelay: `${200 + index * 150}ms`, 
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {/* Icon */}
                  <div 
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* CTA */}
                  <button
                    onClick={() => scrollToSection(card.href)}
                    className="inline-flex items-center gap-2 text-pink font-semibold hover:text-pink-dark transition-colors group/btn"
                  >
                    {card.cta}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
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

export default CTACards;
