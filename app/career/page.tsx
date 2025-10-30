"use client";

import React, { useState } from "react";
import HeroSection from "@/components/career/hero";
import CareerAvailable, { JOBS } from "@/components/career/career-available";
import CareerApplyForm from "@/components/career/career-apply";
import FooterSection from "@/components/career/footer-section";

export default function CareerPage() {
  const [selectedPosition, setSelectedPosition] = useState<string>(JOBS[0].title);

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />

      <CareerAvailable
        onSelect={(title) => setSelectedPosition(title)}
        defaultOpenId={JOBS[0].id}
      />

      <CareerApplyForm position={selectedPosition} />

      <FooterSection />
    </div>
  );
}
