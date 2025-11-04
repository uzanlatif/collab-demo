"use client";

import React, { useState } from "react";
import ContentSection from "@/components/insight-detail/content";
import FooterSection from "@/components/footer-section";

export default function CareerPage() {

  return (
    <div className="min-h-screen bg-black text-white">
      <ContentSection/>
      <FooterSection />
    </div>
  );
}
