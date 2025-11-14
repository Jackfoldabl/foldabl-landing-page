/**
 * Foldäbl Landing Page - Conversion Optimized Structure
 *
 * Section Order (designed for maximum lead capture):
 * 1. Hero
 *    - Goal: Strong promise with primary CTA above the fold.
 *    - Mobile notes: Ensure content width is capped, spacing between headline/subheadline/CTA is clear,
 *      and hero image crops well on small screens.
 *
 * 2. Starburst "Why Foldäbl"
 *    - Goal: 6 key benefits solved in a quick-scan grid.
 *    - Mobile notes: Enforce true 1-column layout, generous vertical spacing between cards, and prevent
 *      any cramped icon/heading/body text.
 *
 * 3. Home Range - Studio / 2 Bedroom / 3 Bedroom
 *    - Goal: Let users quickly compare core options and request a quote.
 *    - Mobile notes: Cards should stack Studio → 2 Bedroom → 3 Bedroom, full-width or ~90% width.
 *      Avoid any multi-column layout, and ensure the "Most Popular" badge never overlaps text.
 *
 * 4. Use Cases / Who It's For
 *    - Goal: Help visitors see themselves in the product (“granny flat, income, office, guest suite”).
 *    - Mobile notes: Simple vertical stack with clear spacing between the icon, title, and body.
 *
 * 5. How It Works
 *    - Goal: De-risk the decision by making the process feel simple and guided.
 *    - Mobile notes: Steps should be single-column, badges aligned, and descriptions easy to read
 *      with consistent spacing.
 *
 * 6. Social Proof - Testimonials
 *    - Goal: Build trust with real stories and locations.
 *    - Mobile notes: One testimonial per row, comfortable line length, and clear separation between cards.
 *
 * 7. FAQ
 *    - Goal: Resolve remaining objections before the form.
 *    - Mobile notes: Full-width accordion items with large tap targets and consistent spacing between rows.
 *
 * 8. Final CTA + Form
 *    - Goal: Main lead capture form with clear framing.
 *    - Mobile notes: Headline + subheadline stacked with breathing room, full-width fields and button,
 *      and no overlap with sticky CTA.
 *
 * Sticky CTA Button
 * - Floats on mobile & desktop for continuous conversion opportunities.
 * - Mobile notes: Must not cover important content near the final form and should remain an obvious,
 *   thumb-friendly primary action.
 */

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Starbursts } from "@/components/Starbursts";
import { OurHomes } from "@/components/OurHomes";
import { UseCases } from "@/components/UseCases";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { StickyCtaButton } from "@/components/StickyCtaButton";

const Index = () => {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Header />
      
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Starburst "Why Foldäbl" - 6 key benefits */}
      <Starbursts />
      
      {/* 3. Home Range - Studio / 2 Bedroom / 3 Bedroom */}
      <OurHomes />
      
      {/* 4. Use Cases / Who It's For */}
      <UseCases />
      
      {/* 5. How It Works - 4-step process */}
      <Process />
      
      {/* 6. Social Proof - Testimonials */}
      <Testimonials />
      
      {/* 7. FAQ */}
      <FAQ />
      
      {/* 8. Final CTA + Form */}
      <LeadForm />
      
      <Footer />
      
      {/* Sticky CTA - Appears on scroll */}
      <StickyCtaButton />
    </div>
  );
};

export default Index;
