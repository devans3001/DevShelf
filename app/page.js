
"use client";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import CTA from "@/components/Home/CTA";
import ScrollToTop from "@/components/ScrollToTop";
import { ProjectShowcase } from "@/components/Showcase";
import TechStack from "@/components/TechStack";

export default function HomePage() {
 
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <CTA />
      <ProjectShowcase/>
      <TechStack/>
      
      <ScrollToTop />

    </div>
  );
}
