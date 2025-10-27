import { Home, FileCheck, Truck, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Process = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };
  const steps = [
    {
      icon: Home,
      title: "Choose Your Home",
      description: "Browse our range from 27-79 sqm and find the design that fits your needs, budget, and property.",
    },
    {
      icon: FileCheck,
      title: "Council Approval",
      description: "We handle council applications, planning reports, and documentation to ensure your home is approved quickly and correctly.",
    },
    {
      icon: Truck,
      title: "Manufacture & Delivery",
      description: "Your Foldäbl home is precision-built to Australian standards and delivered to your property within 8-10 weeks.",
    },
    {
      icon: Wrench,
      title: "Installation Support",
      description: "Choose to have our licensed partners install your home, or use your own local builder. Either way, we'll guide the process from start to finish.",
      note: "Availability may vary by location.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28" style={{backgroundColor: '#FAFAFA'}}>
      <div className="mx-auto px-6 sm:px-8">
        <div className="max-w-[1100px] mx-auto">
          {/* Header */}
          <div className="text-center mb-14 sm:mb-18 animate-fade-in">
            <h2 className="mb-5 text-[24px] leading-[1.25] sm:text-3xl md:text-4xl font-bold" style={{color: '#5F6B7B'}}>How It Works</h2>
            <p className="text-[15px] leading-[1.65] sm:text-base max-w-[600px] mx-auto px-6" 
               style={{color: '#5F6B7B', opacity: 0.85}}>
              We make owning a modular home simple. From choosing your design to settling in, our team guides you through every step of the journey.
            </p>
          </div>

          {/* Steps Container */}
          <div className="flex flex-col md:flex-row md:items-stretch relative gap-6 md:gap-5 px-6">
            {steps.map((step, index) => (
              <div key={index} style={{flex: '1'}}>
                {/* Step Card */}
                <div className="relative bg-white overflow-visible animate-fade-in h-full flex flex-col touch-manipulation"
                     style={{
                       borderRadius: '20px',
                       boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                       padding: '32px 24px 28px',
                       animationDelay: `${index * 0.15}s`,
                       minHeight: '240px'
                     }}>
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-6 w-11 h-11 rounded-full flex items-center justify-center font-bold text-base shadow-lg z-10"
                       style={{backgroundColor: '#CE9E7A', color: '#FFFFFF'}}>
                    {index + 1}
                  </div>

                  <div className="flex flex-col flex-1">
                    {/* Icon + Title Container */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                           style={{backgroundColor: 'rgba(206,158,122,0.12)'}}>
                        <step.icon className="w-7 h-7" style={{color: '#CE9E7A'}} />
                      </div>
                      
                      <h3 className="text-left font-semibold leading-[1.3]" 
                          style={{color: '#5F6B7B', fontWeight: 600, fontSize: '18px'}}>
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-left flex-1" 
                       style={{
                         color: 'rgba(95,107,123,0.85)', 
                         fontWeight: 400, 
                         fontSize: '15px', 
                         lineHeight: '1.65'
                       }}>
                      {step.description}
                    </p>
                    
                    {/* Optional Note */}
                    {step.note && (
                      <p className="text-[13px] mt-3 text-left italic" 
                         style={{color: 'rgba(95,107,123,0.6)', lineHeight: 1.5}}>
                        {step.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button after process steps */}
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

