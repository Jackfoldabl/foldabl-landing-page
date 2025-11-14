import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What's the real cost, including setup?",
      answer:
        "Pricing starts from $39,950 for the home. Installation is additional and varies by site and location. We'll give you a clear, itemised estimate before you commit.",
    },
    {
      question: "Are Foldäbl homes built to last long-term?",
      answer:
        "Our homes are built to Australian standards with quality materials. With proper site prep and maintenance, they're designed for long-term living.",
    },
    {
      question: "What support do I get after my home is installed?",
      answer:
        "You'll receive product documentation and a clear support path. If we arrange installation via our partners, we coordinate handover and ensure any issues are addressed quickly.",
    },
    {
      question: "What finance options are available for Foldäbl homes?",
      answer:
        "We can introduce you to trusted finance partners. Terms range from 3-7 years with competitive rates. Pre-approval is available so you know your budget up front.",
    },
    {
      question: "How do councils and neighbours usually react to Foldäbl homes?",
      answer:
        "Most sites we assess are compatible (about 96%). We handle the council documentation to keep things smooth and compliant.",
    },
  ];

  return (
    <section style={{backgroundColor: '#F8F8F8', padding: '64px 24px 72px'}}>
      <div className="mx-auto px-6" style={{maxWidth: '1100px'}}>
        {/* Heading block */}
        <div className="text-center mb-14 sm:mb-18 animate-fade-in">
          {/* Intro line */}
          <p style={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: 'clamp(14px, 2.8vw, 15px)',
            color: 'rgba(95,107,123,0.8)',
            marginBottom: '12px',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '1rem',
            paddingRight: '1rem'
          }}>
            Here are answers to the most common questions from families exploring Foldäbl homes.
          </p>
          
          {/* Headline */}
          <h2 style={{
            fontFamily: 'Poppins',
            color: '#5F6B7B', 
            fontWeight: 700, 
            fontSize: 'clamp(24px, 5vw, 28px)',
            lineHeight: 1.2,
            marginBottom: 0,
            display: 'inline-block'
          }}>
            Common Questions
          </h2>
          
          {/* Tan underline accent */}
          <div className="flex justify-center" style={{marginTop: '10px'}}>
            <div style={{
              width: '60px',
              height: '2px',
              backgroundColor: '#CE9E7A'
            }} />
          </div>
        </div>

        {/* Accordion cards */}
        <div className="max-w-3xl mx-auto px-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="touch-manipulation"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '18px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                  padding: '22px 24px',
                  marginBottom: '16px'
                }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-none"
                >
                  <AccordionTrigger 
                    className="text-left hover:no-underline py-0 [&>svg]:text-[#CE9E7A] [&>svg]:min-w-[20px]"
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: 600,
                      fontSize: 'clamp(15px, 3vw, 17px)',
                      color: '#5F6B7B',
                      lineHeight: '1.4'
                    }}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent 
                    className="pt-2 sm:pt-3"
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: 400,
                      fontSize: 'clamp(14px, 2.8vw, 15px)',
                      color: '#5F6B7B',
                      lineHeight: 1.6,
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
