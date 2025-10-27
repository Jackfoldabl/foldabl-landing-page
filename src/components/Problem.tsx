import { XCircle, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Problem = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };
  const problems = [
    { icon: TrendingUp, text: "No unpredictable costs" },
    { icon: Clock, text: "No long approvals" },
    { icon: XCircle, text: "No builder stress" },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-secondary">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Two-part headline for emotional journey */}
          <h2 className="mb-4 sm:mb-5 text-[22px] leading-[1.3] sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary px-4">
            Tired of waiting months and watching costs blow out?
          </h2>
          <p className="text-[17px] leading-[1.4] sm:text-lg md:text-xl lg:text-2xl font-medium text-accent mb-8 sm:mb-10 px-4">
            There's a smarter way to build your next home or add extra space.
          </p>
          
          {/* Refined subtext with better rhythm */}
          <p className="text-[15px] leading-[1.65] sm:text-base md:text-lg text-muted-foreground max-w-[560px] mx-auto mb-12 sm:mb-16 px-6">
            Traditional building often means endless decisions and months of waiting. 
            Foldäbl delivers quality homes at a fixed price with a clear, simple process.
          </p>
          
          {/* Enhanced icon boxes with depth */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-[900px] mx-auto px-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center py-8 px-6 sm:py-10 sm:px-7 bg-card rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] active:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 ease-out touch-manipulation min-h-[160px]"
              >
                <problem.icon className="w-14 h-14 sm:w-16 sm:h-16 text-accent mb-4" />
                <p className="text-[16px] leading-[1.4] sm:text-base md:text-lg font-semibold text-primary text-center">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
          
          {/* Closing bridge */}
          <p className="text-[14px] leading-[1.6] sm:text-sm md:text-base text-[hsl(var(--primary))] opacity-70 text-center max-w-[640px] mx-auto mt-12 sm:mt-16 px-6">
            Foldäbl Homes takes the guesswork out of building with fixed pricing, 
            fast timelines, and full support from council approval to installation.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mt-10 sm:mt-12 px-6">
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
