import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export const StickyCtaButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero (approx 100vh),
      // but hide it when the user is actively viewing the lead form
      const heroHeight = window.innerHeight;
      const scrolledPastHero = window.scrollY > heroHeight * 0.8;

      let nearLeadForm = false;
      const leadForm = document.getElementById("lead-form");
      if (leadForm) {
        const rect = leadForm.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        // Consider "near" if the form occupies the middle of the viewport
        nearLeadForm = rect.top < viewportHeight * 0.6 && rect.bottom > viewportHeight * 0.2;
      }

      setIsVisible(scrolledPastHero && !nearLeadForm);
    };

    // Run once on mount so the CTA is in the correct initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Sticky Button - Bottom Right */}
      <button
        onClick={scrollToForm}
        className="hidden md:flex fixed bottom-8 right-8 z-50
                   items-center gap-2 px-6 py-4 rounded-lg
                   bg-accent text-accent-foreground font-semibold text-base
                   shadow-xl hover:shadow-2xl
                   hover:scale-105 active:scale-95
                   transition-all duration-300 ease-out
                   animate-fade-in group"
        style={{
          boxShadow: '0 8px 24px rgba(206, 158, 122, 0.4), 0 4px 12px rgba(0,0,0,0.2)'
        }}
      >
        Get Your Free Quote
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </button>

      {/* Mobile Sticky Button - Bottom Full Width */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white via-white to-transparent animate-fade-in">
        <button
          onClick={scrollToForm}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg
                     bg-accent text-accent-foreground font-semibold text-base
                     shadow-xl hover:shadow-2xl
                     active:scale-95
                     transition-all duration-300 ease-out group"
          style={{
            boxShadow: '0 8px 24px rgba(206, 158, 122, 0.4), 0 4px 12px rgba(0,0,0,0.2)'
          }}
        >
          Get Your Free Quote
          <ArrowRight className="w-5 h-5 transition-transform group-active:translate-x-1" />
        </button>
      </div>
    </>
  );
};

