// "use client";

import React from "react";
import Image from "next/image";

interface SectionProps {
  title: string;
  description: string;
  solutions: string[];
  imageSrc: string;
  color: string;
  accent: string;
  button: string;
}

const sections: SectionProps[] = [
  {
    title: "Collab Digital",
    description:
      "Optimize your paid media with Collab Digital across Google, Meta, and TikTok. Reach more audience through rich media and interactive ads for better visibility and engagement.",
    solutions: [
      "Paid Media Strategy",
      "Media Planning",
      "Media Buying",
      "Ads Optimization",
      "Dashboard Report",
      "Monthly Report",
    ],
    imageSrc: "/page/services/collab digital.png",
    color: "text-cyan-400",
    accent: "border-cyan-400",
    button: "bg-cyan-500",
  },
  {
    title: "Collab Community",
    description:
      "Having good connection and partnership with various influencer from mega, macro, micro and nano tier, KOL artist management and region community.",
    solutions: [
      "Paid Media Strategy",
      "KOL Planning & Listing",
      "KOL Implementation",
      "Comment & Review on Google Play, App Store",
      "Event attending",
      "Community Buzzer",
    ],
    imageSrc: "/page/services/collab community.png",
    color: "text-purple-400",
    accent: "border-purple-400",
    button: "bg-purple-500",
  },
  {
    title: "Collab Event",
    description:
      "With integrated marketing services we can provide online to offline activation start from promotion on social media, KOL Community to Event offline activation. And connect with IP Promotor & Media for sponsorship management.",
    solutions: [
      "Event Planning",
      "Budget Plan",
      "Project Manager",
      "Event Executions",
      "Event Report",
      "Online to Offline Strategy",
      "Sponsorship Management",
    ],
    imageSrc: "/page/services/collab event.png",
    color: "text-orange-400",
    accent: "border-orange-400",
    button: "bg-orange-500",
  },
  {
    title: "Collab Media",
    description:
      "Collab Media is a group of digital platforms—Abis Ini Kemana Ya?, Kapan Cobain, and Approv—that promote travel destinations, support local food businesses, and cover trending news and entertainment.",
    solutions: ["Advertorial", "Event Attending", "Sponsorship"],
    imageSrc: "/page/services/collab media.png",
    color: "text-green-400",
    accent: "border-green-400",
    button: "bg-green-500",
  },
  {
    title: "Collab Production",
    description:
      "With our strong creative team we believe we can create good content deliverables and help you make great visual communication that can reach right audience with right key message on various channel. We also can help you to livestream productions on Ecommerce and Social media platforms.",
    solutions: [
      "Ideation Plan",
      "Budget Plan",
      "VO & Talents",
      "Production Supervise",
      "Editing",
      "Project Manager",
      "Report",
    ],
    imageSrc: "/page/services/collab production.png",
    color: "text-red-500",
    accent: "border-red-500",
    button: "bg-red-600",
  },
];

export default function ContentSection() {
  return (
    <div className="bg-black text-white py-20 px-6 md:px-20 space-y-28">
      {sections.map((section, idx) => (
        <section
          key={idx}
          className={`flex flex-col-reverse md:flex-row ${
            idx % 2 === 1 ? "md:flex-row-reverse" : ""
          } gap-10 items-center`}
        >
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-3 h-3 rounded-full ${section.color} bg-current`} />
              <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
            </div>
            <p className="text-white/70 mb-6">{section.description}</p>

            <h3 className={`${section.color} mb-3 font-semibold`}>Our Solutions</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {section.solutions.map((item) => (
                <span
                  key={item}
                  className={`px-4 py-2 rounded-full border ${section.accent} text-sm`}
                >
                  {item}
                </span>
              ))}
            </div>

            <h3 className="text-white/70 mb-2">Clients</h3>
            <div className="flex gap-3 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 bg-white/10 rounded-md" />
              ))}
            </div>

            <button
              className={`${section.button} px-5 py-2 rounded-full font-semibold hover:opacity-80`}
            >
              See More
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full md:w-1/2 h-64 md:h-96">
            <Image
              src={section.imageSrc}
              alt={section.title}
              layout="fill"
              objectFit="contain"
              className="rounded-xl"
            />
          </div>
        </section>
      ))}
    </div>
  );
}
