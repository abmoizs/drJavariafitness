import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const credentials = [
    'Board-Certified Health & Wellness Coach',
    'Certified Nutrition Specialist',
    'Personal Training Certification',
    '10+ Years Experience',
  ];

  return (
    <section 
      ref={sectionRef}
      id="about"
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
            fill="#ffffff" 
            d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,60L1392,60C1344,60,1248,60,1152,60C1056,60,960,60,864,60C768,60,672,60,576,60C480,60,384,60,288,60C192,60,96,60,48,60L0,60Z"
          />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-white/10 animate-float" />
        <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-white/10 animate-float-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-white/5 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container relative z-10">
        <div className="section-inner">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Headline */}
              <h2 
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '100ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                My Online Fitness Coaching Programs Teach You How to Achieve Results Without Giving Up the Foods You Love...
              </h2>

              {/* Highlighted Text */}
              <div 
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <p className="text-xl sm:text-2xl text-white/90 font-medium leading-relaxed">
                  If you're <span className="font-caveat text-3xl text-yellow">always starting over</span> on Monday, the problem{' '}
                  <span className="font-bold">isn't</span> you—it's your approach to fitness.
                </p>
              </div>

              {/* Body Text */}
              <div 
                className={`space-y-4 transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '500ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <p className="text-white/80 leading-relaxed">
                  My name is <strong className="text-white">Dr. Javeria</strong>, and I am a board-certified health & wellness coach, 
                  nutrition specialist, and fitness expert. For the past decade, I have been helping men and women 
                  transform their bodies (and keep the results) without starving themselves or spending hours in the gym.
                </p>
                <p className="text-white/80 leading-relaxed">
                  I'll be honest with you — while I love eating healthy foods most of the time, I also love enjoying 
                  treats in moderation! As your fitness coach, my goal is to teach you how to do this, too.
                </p>
              </div>

              {/* Credentials */}
              <div 
                className={`grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '700ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                {credentials.map((credential, index) => (
                  <div 
                    key={credential}
                    className="flex items-center gap-2 text-white/90"
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-yellow flex-shrink-0" />
                    <span className="text-sm">{credential}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div 
                className={`transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '900ms', transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}
              >
                <button 
                  onClick={() => scrollToSection('#work-with-me')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink font-semibold rounded-full hover:bg-yellow hover:text-gray-900 transition-all duration-300 group shadow-lg"
                >
                  Learn More About My Approach
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div 
              className={`relative transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-12 rotate-3'
              }`}
              style={{ transitionDelay: '400ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src="/coach-portrait.jpg" 
                    alt="Dr. Javeria - Fitness Coach" 
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating Badge */}
                <div 
                  className={`absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl transition-all duration-600 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
                  }`}
                  style={{ transitionDelay: '1000ms', transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink to-teal flex items-center justify-center">
                      <span className="text-white font-bold text-xl">10+</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Years of</p>
                      <p className="text-gray-600">Experience</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-4 border-white/30" />
                <div className="absolute -bottom-4 right-10 w-12 h-12 rounded-full bg-yellow/80" />
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
            fill="#e5f3f4" 
            d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,60L1392,60C1344,60,1248,60,1152,60C1056,60,960,60,864,60C768,60,672,60,576,60C480,60,384,60,288,60C192,60,96,60,48,60L0,60Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;
