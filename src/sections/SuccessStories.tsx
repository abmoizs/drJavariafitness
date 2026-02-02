import { useEffect, useRef, useState } from 'react';
import { Award, ArrowRight } from 'lucide-react';

const SuccessStories = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stories = [
    {
      image: '/success-1.jpg',
      title: 'Strength Transformation',
      description: 'Built muscle and confidence',
    },
    {
      image: '/success-2.jpg',
      title: 'Mountain Achiever',
      description: 'Conquered fitness goals',
    },
    {
      image: '/success-3.jpg',
      title: 'Mind-Body Balance',
      description: 'Found inner peace & strength',
    },
    {
      image: '/success-4.jpg',
      title: 'Partner Success',
      description: 'Together we conquer',
    },
    {
      image: '/success-5.jpg',
      title: 'Elevate & Conquer',
      description: 'Reached new heights',
    },
    {
      image: '/success-6.jpg',
      title: 'Nutrition Mastery',
      description: 'Healthy eating habits',
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
      id="success-stories"
      className="relative w-full py-20 lg:py-32 bg-white overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="section-inner">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Real Results, <span className="text-gradient">Real People</span>
            </h2>
            <p 
              className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              See how our clients have transformed their lives through personalized fitness coaching
            </p>
          </div>

          {/* Award Badge */}
          <div 
            className={`flex justify-center mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
            }`}
            style={{ transitionDelay: '300ms', transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-light to-white rounded-full shadow-lg animate-pulse-glow">
              <Award className="w-8 h-8 text-yellow" />
              <span className="font-semibold text-gray-900">
                Named one of the top fitness coaches to follow in 2024!
              </span>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${index === 0 || index === 3 ? 'row-span-2' : ''}`}
                style={{ 
                  transitionDelay: `${400 + index * 100}ms`, 
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div className="relative h-full min-h-[200px] lg:min-h-[300px]">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg">{story.title}</h3>
                    <p className="text-white/80 text-sm">{story.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Supporting Text */}
          <div 
            className={`mt-12 text-center transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              When it comes to losing weight, your body, your goals, and your lifestyle are unique to{' '}
              <span className="font-bold text-pink">you</span>. Part of why our coaching programs are so successful 
              is because they are personalized to every unique client that we work with. We pride ourselves on 
              helping our clients successfully transform their bodies throughout many{' '}
              <span className="font-bold text-teal">different phases of life</span>.
            </p>
            
            <button
              onClick={() => scrollToSection('#work-with-me')}
              className="mt-8 inline-flex items-center gap-2 text-pink font-semibold hover:text-pink-dark transition-colors group"
            >
              See how we help our clients
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
