import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-interior.webp";
import heroMobileImage from "@/assets/hero-mobile.webp";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100vh] min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image for Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src={heroImage}
          alt="Beautiful Foldäbl modular home interior"
          className="w-full h-full object-cover"
          loading="eager"
          style={{
            filter: 'brightness(1.05) saturate(1.08)'
          }}
        />
        {/* Uniform overlay for desktop */}
        <div 
          className="absolute inset-0 bg-[rgba(95,107,123,0.45)]"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-6 sm:px-8 py-8 md:px-8 safe-area-inset flex items-center justify-center">
        {/* Mobile Layout: Image as visible element */}
        <div className="w-full md:hidden flex flex-col gap-6 max-w-[92%]">
          {/* Mobile Image - displayed as an element */}
          <img
            src={heroMobileImage}
            alt="Foldäbl modular home"
            className="w-full h-auto rounded-2xl shadow-2xl"
            loading="eager"
            style={{
              filter: 'brightness(1.02) saturate(1.05)'
            }}
          />
          
          {/* Mobile Content Box */}
          <div 
            className="rounded-xl p-8"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
            }}
          >
          {/* Headline */}
          <h1 
            className="mb-4 sm:mb-5 leading-[1.15] sm:leading-tight font-bold text-center md:text-left"
            style={{
              fontSize: 'clamp(32px, 7vw, 52px)',
              fontWeight: 700,
              color: '#5F6B7B'
            }}
          >
            Real Families. Real Homes.
          </h1>

          {/* Subheadline */}
          <p 
            className="mb-3 sm:mb-4 text-center md:text-left mx-auto md:mx-0"
            style={{
              fontSize: 'clamp(18px, 3.5vw, 20px)',
              fontWeight: 400,
              lineHeight: 1.4,
              color: '#5F6B7B',
              maxWidth: '95%'
            }}
          >
            Smart modular homes starting from $39,950. Built to last, ready in 8-10 weeks.
          </p>

          {/* Supporting Paragraph */}
          <p 
            className="mb-5 sm:mb-6 text-center md:text-left"
            style={{
              fontSize: 'clamp(15px, 2.2vw, 18px)',
              lineHeight: 1.5,
              color: '#5F6B7B',
              opacity: 0.85
            }}
          >
            Fixed-price, council-approved homes built to Australian standards.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center md:justify-start mb-3 sm:mb-4">
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center justify-center gap-2 transition-all duration-300 ease-out active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent w-[90%] sm:w-[85%] md:w-auto touch-manipulation"
              style={{
                backgroundColor: '#CE9E7A',
                color: '#FFFFFF',
                fontWeight: 600,
                padding: '18px 32px',
                borderRadius: '14px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
                fontSize: 'clamp(16px, 3vw, 18px)',
                minHeight: '54px',
                willChange: 'transform',
                WebkitTapHighlightColor: 'transparent'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B88669'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#CE9E7A'}
              onTouchStart={(e) => e.currentTarget.style.backgroundColor = '#B88669'}
              onTouchEnd={(e) => e.currentTarget.style.backgroundColor = '#CE9E7A'}
            >
              Get Started
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
            </button>
          </div>

          {/* Footnote */}
          <p 
            className="text-center md:text-left mx-auto md:mx-0 px-2 sm:px-0"
            style={{
              fontSize: 'clamp(13px, 2.5vw, 14px)',
              lineHeight: 1.5,
              color: '#5F6B7B',
              opacity: 0.75,
              maxWidth: '95%'
            }}
          >
            Finance options from $82/week available. You'll need a suitable property site. Our team can help with finance, council approval, and installation.
          </p>
          </div>
        </div>

        {/* Desktop Content Box */}
        <div 
          className="hidden md:block w-full max-w-[560px] rounded-2xl p-10"
          style={{
            background: 'rgba(95, 107, 123, 0.25)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
          }}
        >
          {/* Headline */}
          <h1 
            className="mb-4 sm:mb-5 leading-[1.15] sm:leading-tight font-bold text-left"
            style={{
              fontSize: '52px',
              fontWeight: 700,
              color: '#FFFFFF',
              textShadow: '0 2px 12px rgba(0,0,0,0.4)'
            }}
          >
            Real Families. Real Homes.
          </h1>

          {/* Subheadline */}
          <p 
            className="mb-3 sm:mb-4 text-left"
            style={{
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: 1.4,
              color: 'rgba(255,255,255,0.97)',
              textShadow: '0 2px 10px rgba(0,0,0,0.4)'
            }}
          >
            Smart modular homes starting from $39,950. Built to last, ready in 8-10 weeks.
          </p>

          {/* Supporting Paragraph */}
          <p 
            className="mb-5 sm:mb-6 text-left"
            style={{
              fontSize: '18px',
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.92)',
              textShadow: '0 2px 10px rgba(0,0,0,0.4)'
            }}
          >
            Fixed-price, council-approved homes built to Australian standards.
          </p>

          {/* CTA Button */}
          <div className="flex justify-start mb-3 sm:mb-4">
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center justify-center gap-2 transition-all duration-300 ease-out active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent touch-manipulation"
              style={{
                backgroundColor: '#CE9E7A',
                color: '#FFFFFF',
                fontWeight: 600,
                padding: '18px 32px',
                borderRadius: '14px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
                fontSize: '18px',
                minHeight: '54px',
                willChange: 'transform',
                WebkitTapHighlightColor: 'transparent'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B88669'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#CE9E7A'}
              onTouchStart={(e) => e.currentTarget.style.backgroundColor = '#B88669'}
              onTouchEnd={(e) => e.currentTarget.style.backgroundColor = '#CE9E7A'}
            >
              Get Started
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
            </button>
          </div>

          {/* Footnote */}
          <p 
            className="text-left px-2 sm:px-0"
            style={{
              fontSize: '14px',
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.9)',
              textShadow: '0 2px 10px rgba(0,0,0,0.4)'
            }}
          >
            Finance options from $82/week available. You'll need a suitable property site. Our team can help with finance, council approval, and installation.
          </p>
        </div>
      </div>
    </section>
  );
};
