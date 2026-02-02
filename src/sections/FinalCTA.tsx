import { useEffect, useRef, useState } from 'react';
import { Clock, ClipboardList, TrendingUp, ArrowRight, Mail } from 'lucide-react';

const FinalCTA = () => {
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

  const trustBadges = [
    { icon: Clock, text: '24/7 Support' },
    { icon: ClipboardList, text: 'Personalized Plans' },
    { icon: TrendingUp, text: 'Proven Results' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="cta"
      className="relative w-full py-20 lg:py-32 bg-pink overflow-hidden"
    >
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg 
          className="relative block w-full h-16"
          viewBox="0 0 1440 60" 
          preserveAspectRatio="none"
        >
          <path 
            fill="#e5f3f4" 
            d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,60L1392,60C1344,60,1248,60,1152,60C1056,60,960,60,864,60C768,60,672,60,576,60C480,60,384,60,288,60C192,60,96,60,48,60L0,60Z"
          />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-white/10 animate-float" />
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-white/10 animate-float-slow" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-white/5 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="section-container relative z-10">
        <div className="section-inner">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content - Image */}
            <div 
              className={`relative order-2 lg:order-1 transition-all duration-900 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '300ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/cta-image.jpg" 
                    alt="Start Your Transformation" 
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-4 border-white/30" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-yellow/80" />
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Headline */}
              <h2 
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '100ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                Ready to Transform Your Body{' '}
                <span className="font-caveat text-5xl lg:text-6xl text-yellow">Without</span>{' '}
                Giving Up Your Favorite Foods?
              </h2>

              {/* Body Text */}
              <div 
                className={`space-y-4 transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <p className="text-white/90 leading-relaxed">
                  Let's be honest—no one wants to give up the foods they love just to lose weight. 
                  And the good news is… you don't have to.
                </p>
                <p className="text-white/90 leading-relaxed">
                  While I won't promise you can eat treats every single day and still reach your goals, I{' '}
                  <span className="font-bold text-white">can</span> promise you this: with our personalized 
                  fitness coaching, you'll never be asked to cut out your favorite foods completely.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Our approach is all about <span className="font-bold text-yellow">balance—not restriction</span>.
                </p>
              </div>

              {/* Trust Badges */}
              <div 
                className={`flex flex-wrap gap-4 transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '500ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                {trustBadges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div 
                      key={badge.text}
                      className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white"
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{badge.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div 
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '700ms', transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}
              >
                <a 
                  href="mailto:contact@drjaveriafitness.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-pink font-semibold rounded-full hover:bg-yellow hover:text-gray-900 transition-all duration-300 group shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  Get Your Free Guide
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Additional Info */}
              <div 
                className={`pt-4 transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '900ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <p className="text-white/70 text-sm">
                  Seriously—you can message us anytime you need, 24/7. We're here to support you every step of the way.
                </p>
              </div>
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

export default FinalCTA;
