import { useEffect, useRef, useState } from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
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

  const plans = [
    {
      name: 'Silver',
      subtitle: '1-on-1 private coaching',
      price: '$189',
      period: 'per month',
      features: [
        '1 weekly text check-in',
        '1-hour group coaching Zoom meetings (3/month)',
        'Video training and homework assignments',
        'Mindset and healthy habit creation',
        'App access for progress tracking',
      ],
      color: 'bg-gray-50',
      buttonColor: 'btn-teal',
      popular: false,
    },
    {
      name: 'Gold',
      subtitle: '1-on-1 private coaching',
      price: '$289',
      period: 'per month',
      features: [
        'One 30-minute private call monthly',
        '2 weekly text check-ins',
        '1-hour group coaching Zoom meetings (3/month)',
        'Video training and homework assignments',
        'Mindset and healthy habit creation',
        'App access for progress tracking',
      ],
      color: 'bg-gradient-to-b from-yellow-light to-white',
      buttonColor: 'btn-primary',
      popular: true,
    },
    {
      name: 'Platinum',
      subtitle: '1-on-1 private coaching',
      price: '$389',
      period: 'per month',
      features: [
        'Two 30-minute private calls monthly',
        '3 weekly text check-ins',
        '1-hour group coaching Zoom meetings (3/month)',
        'Video training and homework assignments',
        'Mindset and healthy habit creation',
        'Priority app access and support',
      ],
      color: 'bg-purple-light',
      buttonColor: 'btn-teal',
      popular: false,
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
      id="plans"
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
            fill="#f486a6" 
            d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,60L1392,60C1344,60,1248,60,1152,60C1056,60,960,60,864,60C768,60,672,60,576,60C480,60,384,60,288,60C192,60,96,60,48,60L0,60Z"
          />
        </svg>
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
              My Plans <span className="text-gradient">& Pricing</span>
            </h2>
            <p 
              className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Choose the coaching package that fits your goals and budget. All plans include personalized support and proven strategies.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 perspective-1000">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative ${plan.color} rounded-3xl p-6 lg:p-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${plan.popular ? 'md:scale-105 md:-translate-y-4 shadow-card-hover' : 'shadow-card hover:shadow-card-hover'}`}
                style={{ 
                  transitionDelay: `${300 + index * 150}ms`, 
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-4 py-1.5 bg-yellow text-gray-900 text-sm font-bold rounded-full shadow-lg animate-pulse-glow">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-gray-500 text-sm">{plan.subtitle}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl lg:text-5xl font-bold text-gray-900">{plan.price}</span>
                  </div>
                  <span className="text-gray-500">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className={`flex items-start gap-3 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${600 + index * 100 + featureIndex * 50}ms` }}
                    >
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-pink' : 'text-teal'}`} />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => scrollToSection('#cta')}
                  className={`w-full ${plan.buttonColor} group`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 inline group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div 
            className={`mt-12 text-center transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '900ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <p className="text-gray-500 text-sm">
              All plans include a 7-day money-back guarantee. No questions asked.
            </p>
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
            fill="#ffffff" 
            d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,60L1392,60C1344,60,1248,60,1152,60C1056,60,960,60,864,60C768,60,672,60,576,60C480,60,384,60,288,60C192,60,96,60,48,60L0,60Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
