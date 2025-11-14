import { Quote, ArrowRight, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Testimonials = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };
  const testimonials = [
    {
      text: "Foldäbl handled everything from approvals to installation. The whole experience was incredibly smooth.",
      author: "Sarah M",
      location: "NSW",
    },
    {
      text: "The finance option made owning a second dwelling possible for us. We moved from idea to installed home in a few months.",
      author: "Lisa C",
      location: "VIC",
    },
    {
      text: "They guided us through council approvals and kept us updated the whole way. Zero surprises.",
      author: "Mark T",
      location: "QLD",
    },
    {
      text: "Outstanding quality for the price. Our new studio looks and feels like a proper home.",
      author: "Ryan J",
      location: "SA",
    },
  ];

  return (
    <section className="py-20 sm:py-24 md:py-28 lg:py-32 gradient-section-light">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header with intro, headline, and star rating */}
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            {/* Intro line */}
            <p className="text-muted-foreground text-[15px] sm:text-base mb-6 leading-relaxed">
              Here's what Australian families say about Foldäbl.
            </p>
            
            {/* Headline */}
            <h2 className="text-primary font-bold text-[28px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              What Families Are Saying
            </h2>

            {/* Star Rating Strip */}
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm sm:text-base italic">
              "The process was so much easier than building the usual way."
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[900px] mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="relative group animate-fade-in touch-manipulation bg-white rounded-xl p-7 sm:p-8
                           shadow-md hover:shadow-xl hover:-translate-y-1
                           transition-all duration-300 border border-gray-100"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}>
                
                {/* Profile icon and quote */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                
                {/* Quote text */}
                <p className="mb-5 text-primary text-[15px] sm:text-base leading-relaxed">
                  {testimonial.text}
                </p>
                
                {/* Divider line */}
                <div className="w-10 h-0.5 bg-accent/30 rounded-full mb-3" />
                
                {/* Author name and location */}
                <p className="font-semibold text-accent text-[15px] sm:text-base">
                  {testimonial.author}, {testimonial.location}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button after testimonials */}
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
