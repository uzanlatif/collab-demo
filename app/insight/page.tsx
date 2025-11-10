"use client";

import React from "react";
import HeroSection from "@/components/insight/hero";
import ContentSection from "@/components/insight/content";
import FooterSection from "@/components/footer-section";

export default function InsightPage() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <ContentSection />
      <FooterSection />
    </div>
  );
}
