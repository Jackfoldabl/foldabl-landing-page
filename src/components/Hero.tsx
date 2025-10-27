import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-interior.webp";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100vh] min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Warmth Filter and Uniform Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful Foldäbl modular home interior"
          className="w-full h-full object-cover"
          loading="eager"
          style={{
            filter: 'brightness(1.05) saturate(1.08)'
          }}
        />
        {/* Uniform overlay - darker on mobile for readability */}
        <div 
          className="absolute inset-0 bg-[rgba(95,107,123,0.65)] md:bg-[rgba(95,107,123,0.45)]"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-6 sm:px-8 py-8 md:px-8 safe-area-inset flex items-center justify-center">
        {/* Backdrop Blur Container */}
        <div 
          className="w-full max-w-[92%] sm:max-w-[85%] md:max-w-[560px] rounded-xl sm:rounded-2xl p-7 sm:p-8 md:p-10"
          style={{
            background: 'rgba(95, 107, 123, 0.25)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
          }}
        >
          {/* Headline */}
          <h1 
            className="mb-4 sm:mb-5 leading-[1.15] sm:leading-tight font-bold text-center md:text-left"
            style={{
              fontSize: 'clamp(32px, 7vw, 52px)',
              fontWeight: 700,
              color: '#FFFFFF',
              textShadow: '0 2px 12px rgba(0,0,0,0.4)'
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
              color: 'rgba(255,255,255,0.97)',
              maxWidth: '95%',
              textShadow: '0 2px 10px rgba(0,0,0,0.4)'
            }}
          >
            Beautiful modular homes starting from $39,950 — ready in just 8–10 weeks.
          </p>

          {/* Supporting Paragraph */}
          <p 
            className="mb-5 sm:mb-6 text-center md:text-left"
            style={{
              fontSize: 'clamp(15px, 2.2vw, 18px)',
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.92)',
              textShadow: '0 2px 10px rgba(0,0,0,0.4)'
            }}
          >
            Affordable, council-approved designs built to last. Skip the stress of traditional home building.
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
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '95%',
              textShadow: '0 2px 10px rgba(0,0,0,0.4)'
            }}
          >
            Finance options from $82/week available. You'll need a suitable property site — our team can help with finance, council approval, and installation.
          </p>
        </div>
      </div>
    </section>
  );
};
