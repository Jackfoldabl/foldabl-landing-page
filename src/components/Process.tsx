import { Home, FileCheck, Truck, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Process = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };
  const steps = [
    {
      icon: Home,
      title: "Tell Us About Your Site",
      description: "Share your property details, goals, and budget. Our team checks what's possible on your block.",
    },
    {
      icon: FileCheck,
      title: "Design & Approvals",
      description: "We help you select the right Foldäbl home and support your council applications and paperwork.",
    },
    {
      icon: Truck,
      title: "Manufacture & Delivery",
      description: "Your home is manufactured to Australian standards and delivered to your site within 8–10 weeks.",
    },
    {
      icon: Wrench,
      title: "Installation & Handover",
      description: "Have our licensed partners install your home, or use your own local builder. We support you through to move-in.",
      note: "Availability may vary by location.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 md:py-28 lg:py-32 bg-white">
      <div className="container mx-auto">
        <div className="max-w-[1100px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <h2 className="mb-5 text-[28px] leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              How The Foldäbl Process Works
            </h2>
            <p className="text-[16px] leading-[1.65] sm:text-lg md:text-xl max-w-[640px] mx-auto text-muted-foreground">
              We guide you from first enquiry to move-in, step by step.
            </p>
          </div>

          {/* Steps Container */}
          <div className="flex flex-col md:flex-row md:items-stretch relative gap-6 md:gap-5">
            {steps.map((step, index) => (
              <div key={index} style={{flex: '1'}}>
                {/* Step Card */}
                <div className="relative bg-white overflow-visible animate-fade-in h-full flex flex-col touch-manipulation 
                                shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border border-gray-100"
                     style={{
                       padding: '32px 24px 28px',
                       animationDelay: `${index * 0.15}s`,
                       minHeight: '240px'
                     }}>
                  {/* Number Badge */}
                  <div className="absolute -top-3 sm:-top-4 left-4 sm:left-6 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center font-bold text-sm sm:text-base z-10
                                  bg-accent text-accent-foreground shadow-lg"
                       style={{boxShadow: '0 4px 12px rgba(206, 158, 122, 0.4)'}}>
                    {index + 1}
                  </div>

                  <div className="flex flex-col flex-1">
                    {/* Icon + Title Container */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-accent/10 shadow-sm">
                        <step.icon className="w-7 h-7 text-accent" />
                      </div>
                      
                      <h3 className="text-left font-semibold leading-[1.3] text-primary text-[18px] sm:text-[19px]">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-left flex-1 text-muted-foreground text-[15px] sm:text-base leading-[1.65]">
                      {step.description}
                    </p>
                    
                    {/* Optional Note */}
                    {step.note && (
                      <p className="text-[13px] sm:text-sm mt-3 text-left italic text-muted-foreground/70 leading-relaxed">
                        {step.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button after process steps */}
          <div className="flex justify-center mt-16 sm:mt-20">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="group bg-accent text-accent-foreground hover:bg-accent/90 active:bg-accent/90 touch-manipulation 
                         min-h-[56px] text-[16px] sm:text-lg px-8 sm:px-10 rounded-lg
                         shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto max-w-[400px]"
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

