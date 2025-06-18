// app/page.js\""

"use client";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import CTA from "@/components/Home/CTA";
import ScrollToTop from "@/components/ScrollToTop";
import RevealCardsGrid from "@/components/Home/RevelCard";
import { ProjectShowcase } from "@/components/Showcase";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <CTA />
      <ProjectShowcase/>
      {/* <RevealCardsGrid/> */}
      <ScrollToTop />

      {/* LATER ON WE COULD SHOW SOME OF MY PROJECTS MADE USING THINGS HERE FROM VERCEL  */}

      
    </div>
  );
}
