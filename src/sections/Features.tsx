import { useEffect, useRef, useState } from 'react';
import { Users, Apple, Brain, ArrowRight } from 'lucide-react';

const Features = () => {
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

  const features = [
    {
      icon: Users,
      title: 'Accountability',
      description: 'Stay on track with a personal fitness coach who has your back, checks in on your progress, helps hold you accountable, and positively pushes you towards your goals.',
      color: 'from-pink to-pink-dark',
      bgColor: 'bg-pink-light',
    },
    {
      icon: Apple,
      title: 'Nutrition Habits',
      description: 'Create simple, sustainable, and scientifically-backed nutrition habits that are tailored to you and allow you to reach your goals without completely eliminating the foods you enjoy.',
      color: 'from-teal to-teal-dark',
      bgColor: 'bg-teal-light',
    },
    {
      icon: Brain,
      title: 'Empowered Mindset',
      description: 'Realize your goals are attainable and feel empowered to pursue them. Enjoy the support of your personal fitness coach and our supportive community of like-minded individuals.',
      color: 'from-purple to-purple-dark',
      bgColor: 'bg-purple-light',
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
      id="program-info"
      className="relative w-full py-20 lg:py-32 bg-white overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-pink/5 animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-teal/5 animate-float-slow" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-purple/5 animate-float" style={{ animationDelay: '1s' }} />
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
              An Online Fitness Program That Blends{' '}
              <span className="text-gradient">Results with Sustainability</span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`group relative ${feature.bgColor} rounded-3xl p-8 transition-all duration-700 hover:shadow-card-hover ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ 
                    transitionDelay: `${300 + index * 150}ms`, 
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {/* Icon */}
                  <div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                      isVisible ? 'animate-bounce-in' : ''
                    }`}
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/50 transition-colors duration-300 pointer-events-none" />
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div 
            className={`mt-16 text-center transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <div className="bg-gradient-to-r from-pink-light via-white to-teal-light rounded-3xl p-8 lg:p-12">
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                If you've tried everything and still can't stick with it, you're{' '}
                <span className="font-bold text-pink">not alone</span>.
                Stay consistent and finally see results—with 1:1 support that's there for you 24/7.
              </p>
              <button
                onClick={() => scrollToSection('#cta')}
                className="btn-primary group"
              >
                I'm Ready to Make a Change!
                <ArrowRight className="ml-2 w-5 h-5 inline group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
