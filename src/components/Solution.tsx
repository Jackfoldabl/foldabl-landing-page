import { Clock, Shield, TrendingDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import solutionImage from "@/assets/solution-interior-new.webp";

export const Solution = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };
  const benefits = [
    {
      icon: Clock,
      title: "Move-In Ready Fast",
      description: "Within 8-10 weeks. Ready faster than traditional building.",
    },
    {
      icon: TrendingDown,
      title: "Clear Pricing",
      description: "From $39,950. No surprises, fixed pricing.",
    },
    {
      icon: Shield,
      title: "Built to Last",
      description: "Quality construction built to Australian standards.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Headline & subtext */}
          <div className="text-center mb-14 sm:mb-18 px-4">
            <h2 className="mb-5 sm:mb-7 text-[24px] leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary animate-fade-in">
              A Smarter, Simpler Way to Build Your Home
            </h2>
            <div className="text-[15px] leading-[1.6] sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto space-y-3 sm:space-y-4">
              <p className="animate-fade-in">
                Foldäbl modular homes are built to Australian standards and designed for real families.
              </p>
              <p className="animate-fade-in" style={{animationDelay: '0.1s'}}>
                Whether you're adding extra space or starting fresh, Foldäbl makes it easy to own a home that fits your lifestyle.
              </p>
              <p className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                Choose your plan and we'll handle council approval, construction, and installation.
              </p>
              <p className="font-semibold text-[17px] sm:text-lg text-accent animate-fade-in" style={{animationDelay: '0.3s'}}>
                Move in within 8-10 weeks.
              </p>
            </div>
          </div>

          {/* Two-column grid */}
          <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-14 items-center px-6">
            {/* Benefits cards */}
            <div className="animate-fade-in order-2 md:order-1" style={{animationDelay: '0.3s'}}>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative flex items-start gap-4 sm:gap-5 p-6 sm:p-7 bg-card 
                             rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] 
                             hover:shadow-[0_8px_28px_rgba(0,0,0,0.1)]
                             active:shadow-[0_8px_28px_rgba(0,0,0,0.1)]
                             hover:-translate-y-1
                             transition-all duration-300 ease-out
                             border-l-[4px] border-l-accent
                             mb-5 last:mb-0
                             touch-manipulation"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-accent/10 flex items-center justify-center
                                    group-hover:bg-accent/20 group-hover:scale-105
                                    group-active:bg-accent/20 group-active:scale-105
                                    transition-all duration-300">
                      <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-[18px] leading-[1.3] sm:text-xl font-semibold mb-2 text-primary">{benefit.title}</h3>
                    <p className="text-[15px] leading-[1.5] sm:text-base text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced image with integrated trust bar */}
            <div className="relative animate-fade-in order-1 md:order-2" style={{animationDelay: '0.4s'}}>
              {/* Image card */}
              <div className="relative rounded-t-2xl overflow-hidden 
                              shadow-[0_8px_24px_rgba(0,0,0,0.1)]
                              ring-2 ring-white/60
                              hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)]
                              transition-shadow duration-500">
                <img
                  src={solutionImage}
                  alt="Modern Foldäbl kitchen and dining area"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  style={{filter: 'brightness(1.08) saturate(1.08)'}}
                />
                
                {/* Image caption */}
                <div className="absolute bottom-0 left-0 right-0 
                                bg-gradient-to-t from-black/60 to-transparent
                                px-4 sm:px-6 py-3 sm:py-4">
                  <p className="text-white text-xs sm:text-sm font-medium">
                    Foldäbl 30 Series — Tarrah Model, 60 sqm
                  </p>
                </div>
              </div>
              
              {/* Integrated trust bar */}
              <div className="bg-card rounded-b-xl sm:rounded-b-[20px] shadow-[0_8px_20px_rgba(0,0,0,0.08)] sm:shadow-[0_12px_30px_rgba(0,0,0,0.06)]
                              ring-1 sm:ring-2 ring-white/50 border-t border-[rgba(95,107,123,0.1)]
                              px-4 sm:px-6 py-3 sm:py-4 animate-fade-in" 
                   style={{animationDelay: '0.5s'}}>
                <p className="text-center text-xs sm:text-sm leading-[1.5] text-[#5F6B7B] flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0">
                  <span className="font-semibold">⭐️ Rated 4.9/5</span>
                  <span className="hidden sm:inline"> by Australian homeowners</span>
                  <span className="sm:hidden"> Australian homeowners</span>
                  <span className="hidden sm:inline mx-2 text-[rgba(95,107,123,0.4)]">•</span>
                  <span className="sm:hidden w-full text-center">Built to Australian Standards • Finance available</span>
                  <span className="hidden sm:inline">Built to Australian Standards</span>
                  <span className="hidden sm:inline mx-2 text-[rgba(95,107,123,0.4)]">•</span>
                  <span className="hidden sm:inline">Finance options available</span>
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button after benefits */}
          <div className="flex justify-center mt-14 sm:mt-18 px-6">
              <Button
              size="lg"
              onClick={scrollToForm}
              className="group bg-accent text-accent-foreground hover:bg-accent/90 active:bg-accent/90 touch-manipulation min-h-[56px] text-[16px] sm:text-lg px-8 sm:px-10 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto max-w-[400px]"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
