import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calculator, Home, Handshake, DollarSign, Clipboard } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      icon: Calculator,
      question: "What's the real cost, including setup?",
      answer:
        "We'll confirm a full turnkey estimate for your site, including delivery, installation, and approvals. Prices start from $39,950 for the home itself, with installation and site works quoted separately.",
    },
    {
      icon: Home,
      question: "Are Foldäbl homes built to last long-term?",
      answer:
        "Yes. Foldäbl homes are built to Australian standards with quality materials, designed for long-term living, not temporary structures.",
    },
    {
      icon: Handshake,
      question: "What support do I get after my home is installed?",
      answer:
        "Our team and installation partners are available to help with any questions after handover. You'll receive warranty details and clear documentation.",
    },
    {
      icon: DollarSign,
      question: "What finance options are available?",
      answer:
        "Finance from around $82/week is available to approved purchasers through our finance partners. We can help you explore options based on your situation.",
    },
    {
      icon: Clipboard,
      question: "How do councils and neighbours usually react to Foldäbl homes?",
      answer:
        "Because they're built to Australian standards and look like modern homes, councils are generally supportive when applications are done correctly. We also guide you on setbacks, positioning, and design choices that keep neighbours comfortable.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 md:py-28 lg:py-32 bg-white">
      <div className="container mx-auto">
        <div className="max-w-[1100px] mx-auto">
          {/* Heading block */}
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            {/* Intro line */}
            <p className="text-muted-foreground text-[15px] sm:text-base mb-4 leading-relaxed max-w-[700px] mx-auto">
              Have questions?
            </p>
            
            {/* Headline */}
            <h2 className="text-primary font-bold text-[28px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-3">
              Common Questions About Foldäbl Homes
            </h2>
          </div>

          {/* Accordion cards */}
          <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="touch-manipulation bg-card rounded-xl shadow-md hover:shadow-lg 
                           transition-all duration-300 p-6 border border-gray-100"
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-none"
                >
                  <AccordionTrigger 
                    className="text-left hover:no-underline py-0 [&>svg]:text-accent [&>svg]:min-w-[20px]
                               text-primary font-semibold text-[16px] sm:text-[17px] md:text-lg leading-snug"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <faq.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent 
                    className="pt-3 sm:pt-4 pl-13 text-muted-foreground text-[15px] sm:text-base leading-relaxed"
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
        </div>
      </div>
    </section>
  );
};
