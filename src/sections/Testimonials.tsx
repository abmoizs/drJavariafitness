import { useEffect, useRef, useState } from 'react';
import { Quote, Star, ArrowRight } from 'lucide-react';

const Testimonials = () => {
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

  const testimonials = [
    {
      quote: "After 5 months of working together, I was not only able to lose 30+ pounds, I gained back my confidence, energy and happiness. Dr. Javeria's approach is life-changing!",
      author: "Sarah M.",
      result: "Lost 30+ lbs",
      rating: 5,
    },
    {
      quote: "My life is completely different now—I lost 50 pounds working with Dr. Javeria, and I am maintaining a weight I haven't seen in over 10 years!",
      author: "Michael R.",
      result: "Lost 50 lbs",
      rating: 5,
    },
    {
      quote: "I finally found a program that works with my busy schedule. No more extreme diets or spending hours at the gym. The results speak for themselves!",
      author: "Jennifer K.",
      result: "Lost 25 lbs",
      rating: 5,
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
      id="testimonials"
      className="relative w-full py-20 lg:py-32 bg-pink-light overflow-hidden"
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
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-pink/10 animate-float" />
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-teal/10 animate-float-slow" />
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
              Your Fitness Success Story Starts{' '}
              <span className="text-gradient">Here!</span>
            </h2>
            <p 
              className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Every incredible transformation you see began with one decision—to start. 
              Work with us as your fitness coaches and create your own success story!
            </p>
          </div>

          {/* Counter */}
          <div 
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: '300ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <div className="inline-flex flex-col items-center">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gradient animate-pulse-glow rounded-3xl px-8 py-4">
                500+
              </span>
              <span className="text-xl text-gray-600 mt-2 font-medium">Lives Transformed</span>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${400 + index * 150}ms`, 
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-pink/30" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow fill-yellow" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">— {testimonial.author}</p>
                  </div>
                  <div className="px-3 py-1 bg-pink-light rounded-full">
                    <span className="text-sm font-medium text-pink">{testimonial.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div 
            className={`mt-12 text-center transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '900ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <button
              onClick={() => scrollToSection('#success-stories')}
              className="inline-flex items-center gap-2 text-pink font-semibold hover:text-pink-dark transition-colors group"
            >
              See more client testimonials
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
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

export default Testimonials;
