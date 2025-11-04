"use client";

import React, { useState } from "react";
import HeroSection from "@/components/insight/hero";
import ContentSection from "@/components/insight/content";
import FooterSection from "@/components/footer-section";

export default function CareerPage() {

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <ContentSection/>
      <FooterSection />
    </div>
  );
}
