import { useEffect } from "react";

export const LeadForm = () => {
  useEffect(() => {
    // Load GHL auto-resize script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="lead-form" className="py-16 sm:py-20 md:py-24 lg:py-28 gradient-form scroll-mt-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-[960px] mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-14 md:mb-18">
            <h2 className="mb-5 sm:mb-7 text-[24px] leading-[1.25] sm:text-3xl md:text-4xl text-primary-foreground">
              Let's Get You Started
            </h2>
            <p className="text-[16px] leading-[1.5] sm:text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Tell us a bit about your site and goals. Our team will be in touch within 24 hours.
            </p>
          </div>

          {/* GHL Form Embed - Direct styling without extra wrapper */}
          <div className="relative">
            <iframe
              src="https://api.leadconnectorhq.com/widget/survey/a3zh6FUCJAxCFbG7UEo0"
              id="a3zh6FUCJAxCFbG7UEo0"
              title="Foldäbl Enquiry"
              scrolling="no"
              className="w-full border-0 rounded-lg sm:rounded-xl"
              style={{
                minHeight: '780px',
                background: 'transparent'
              }}
            />

            {/* Notes under form */}
            <div className="mt-4 sm:mt-6 md:mt-8 text-center space-y-2 px-4">
              <p className="text-sm sm:text-base md:text-base text-primary-foreground/80 font-medium">
                You'll need a suitable property site. We can help with finance, council approval, and installation.
              </p>
              <p className="text-xs sm:text-sm text-primary-foreground/60">
                Your details are safe with us. No spam — ever.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile adjustments */}
      <style>{`
        #a3zh6FUCJAxCFbG7UEo0 {
          display: block;
        }
        
        @media (max-width: 640px) {
          #a3zh6FUCJAxCFbG7UEo0 {
            min-height: 950px !important;
            border-radius: 12px !important;
          }
        }
        
        @media (min-width: 641px) and (max-width: 768px) {
          #a3zh6FUCJAxCFbG7UEo0 {
            min-height: 900px !important;
            border-radius: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};
