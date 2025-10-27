import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 gradient-cta">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-5 sm:mb-7 text-[24px] leading-[1.25] sm:text-3xl md:text-4xl text-accent-foreground">
            Ready to make home ownership simple?
          </h2>
          <p className="text-[16px] leading-[1.5] sm:text-lg md:text-xl text-accent-foreground/90 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Discover why so many Australians are choosing Foldäbl for faster, smarter builds.
          </p>
          <Button
            size="xl"
            variant="default"
            onClick={scrollToForm}
            className="group bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/90 touch-manipulation min-h-[56px] text-[16px] sm:text-lg px-8 sm:px-10 shadow-lg"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
