import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Testimonials = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };
  const testimonials = [
    {
      text: "Foldäbl handled everything seamlessly — the process was incredibly smooth.",
      author: "Sarah M",
    },
    {
      text: "Foldäbl's finance partners made our dream home affordable.",
      author: "Lisa C",
    },
    {
      text: "They guided us through council approval effortlessly.",
      author: "Mark T",
    },
    {
      text: "Outstanding quality for the price. Highly recommend.",
      author: "Ryan J",
    },
  ];

  return (
    <section style={{backgroundColor: '#FFFFFF', padding: '64px 24px 72px'}}>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header with intro, headline, and accent underline */}
          <div className="text-center mb-14 sm:mb-18 animate-fade-in">
            {/* Intro line */}
            <p style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '15px',
              color: 'rgba(95,107,123,0.8)',
              marginBottom: '16px',
              lineHeight: '1.6',
              paddingLeft: '24px',
              paddingRight: '24px'
            }}>
              Here's what Australian families say about working with Foldäbl.
            </p>
            
            {/* Headline */}
            <h2 style={{
              fontFamily: 'Poppins',
              color: '#5F6B7B', 
              fontWeight: 700, 
              fontSize: '24px',
              lineHeight: 1.25,
              marginBottom: 0,
              display: 'inline-block'
            }}>
              What Families Are Saying
            </h2>
            
            {/* Tan underline accent */}
            <div className="flex justify-center" style={{marginTop: '12px'}}>
              <div style={{
                width: '60px',
                height: '3px',
                backgroundColor: '#CE9E7A',
                borderRadius: '2px'
              }} />
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto px-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="relative group animate-fade-in touch-manipulation"
                style={{
                  backgroundColor: '#F9F9F9',
                  borderRadius: '20px',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.06)',
                  padding: '28px 26px',
                  transition: 'all 0.25s ease',
                  animationDelay: `${index * 0.1}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.06)';
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.08)';
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.06)';
                }}>
                
                {/* Small quote icon above text */}
                <Quote className="w-6 h-6 mb-4" style={{color: '#CE9E7A'}} />
                
                {/* Quote text */}
                <p className="mb-4" 
                   style={{
                     color: '#5F6B7B',
                     fontWeight: 400,
                     lineHeight: 1.65,
                     fontSize: '16px'
                   }}>
                  {testimonial.text}
                </p>
                
                {/* Divider line */}
                <div style={{
                  width: '40px',
                  height: '2px',
                  backgroundColor: 'rgba(206,158,122,0.3)',
                  marginBottom: '10px',
                  borderRadius: '1px'
                }} />
                
                {/* Author name */}
                <p className="font-semibold" 
                   style={{
                     color: '#CE9E7A',
                     fontWeight: 600,
                     fontSize: '15px'
                   }}>
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button after testimonials */}
          <div className="flex justify-center mt-14 sm:mt-18 px-6">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="group bg-accent text-accent-foreground hover:bg-accent/90 active:bg-accent/90 touch-manipulation min-h-[56px] text-[16px] sm:text-lg px-8 sm:px-10 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto max-w-[400px]"
            >
              Join These Happy Families
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-active:translate-x-1" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
