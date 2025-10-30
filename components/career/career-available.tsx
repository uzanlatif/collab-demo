"use client";

import React, { useState } from "react";

/* UI kecil */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold bg-white/10 text-white/80 border border-white/15">
      {children}
    </span>
  );
}
function GradientLine({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`block h-[2px] w-full rounded-full ${className}`}
      style={{ background: "linear-gradient(90deg,#00A093 0%,#00756B 100%)" }}
    />
  );
}
function GradientButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & { asLink?: string }
) {
  const { asLink, ...rest } = props;
  const btn = (
    <button
      {...rest}
      className={
        "px-6 py-3 rounded-full font-medium text-black transition-transform hover:scale-[1.02] active:scale-[0.99]"
      }
      style={{ background: "linear-gradient(90deg,#00A093 0%,#00756B 100%)" }}
    />
  );
  return asLink ? <a href={asLink}>{btn}</a> : btn;
}

/* Types & data */
export type Job = {
  id: string;
  title: string;
  tags: string[];
  responsibilities: string[];
  requirements: string[];
  applyUrl?: string;
};

export const JOBS: Job[] = [
  {
    id: "creative-director",
    title: "Creative Director",
    tags: ["Full Time"],
    responsibilities: [
      "Lead the creative vision and direction across all brand campaigns",
      "Manage and mentor creative team (designers, copywriters, content creators)",
      "Translate marketing objectives into clear creative strategies",
      "Supervise concepting, execution, and final delivery of creative materials",
      "Collaborate with account and strategy teams to align outputs with client goals",
      "Maintain and elevate brand identity consistency across platforms",
      "Stay updated with cultural trends, design innovation, and storytelling formats",
    ],
    requirements: [
      "Bachelor’s degree in Design, Communication, Advertising, or related field",
      "Minimum 5+ years experience in creative or art direction (agency experience preferred)",
      "Strong portfolio demonstrating strategic and aesthetic excellence",
      "Proven leadership and team management skills",
      "Excellent communication and presentation ability",
      "Deep understanding of branding, digital content, and visual storytelling",
      "Familiarity with creative tools (Adobe Creative Suite, Figma, etc.)",
      "Passionate, detail-oriented, and able to handle multiple projects under pressure",
      "Based in Jakarta, full WFO",
    ],
    applyUrl: "#apply", // langsung loncat ke form
  },
  { id: "social-media-specialist", title: "Social Media Specialist", tags: ["Full Time"], responsibilities: [], requirements: [] },
  { id: "content-creator", title: "Content Creator", tags: ["Intern"], responsibilities: [], requirements: [] },
  { id: "finance", title: "Finance", tags: ["Full Time"], responsibilities: [], requirements: [] },
  { id: "kol-specialist", title: "KOL Specialist", tags: ["Intern"], responsibilities: [], requirements: [] },
  { id: "office-boy", title: "Office Boy", tags: ["Full Time", "Intern"], responsibilities: [], requirements: [] },
];

function JobItem({
  job, open, onToggle, onSelect,
}: {
  job: Job;
  open: boolean;
  onToggle: () => void;
  onSelect: (title: string) => void;
}) {
  return (
    <div className="border-b border-white/10">
      {/* Header */}
      <button
        onClick={() => { onToggle(); onSelect(job.title); }}
        className="w-full flex items-center justify-between py-4"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3">
          <span className={open
              ? "font-semibold bg-gradient-to-r from-[#00A093] to-[#00756B] bg-clip-text text-transparent"
              : "font-semibold text-white/90"}>
            {job.title}
          </span>
          {job.tags.map((t) => <Badge key={t}>{t}</Badge>)}
        </div>
        <span className="text-white/70 text-xl leading-none select-none">{open ? "–" : "+"}</span>
      </button>

      {/* Body */}
      {open && (
        <div className="pb-6">
          <GradientLine className="mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-white/85">
            <div>
              <h3 className="font-semibold text-white mb-2">Responsibilities</h3>
              <ul className="list-disc pl-5 space-y-2">
                {job.responsibilities.map((it, i) => <li key={i}>{it}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Requirements</h3>
              <ul className="list-disc pl-5 space-y-2">
                {job.requirements.map((it, i) => <li key={i}>{it}</li>)}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <GradientButton
              asLink={job.applyUrl ?? "#apply"}
              onClick={() => onSelect(job.title)}
            >
              Apply Now
            </GradientButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CareerAvailable({
  onSelect,
  defaultOpenId,
}: {
  onSelect: (title: string) => void;
  defaultOpenId?: string | null;
}) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? JOBS[0]?.id ?? null);

  return (
    <section className="bg-black text-white px-4 md:px-6 py-8 md:py-12 max-w-5xl mx-auto">
      <div className="divide-y divide-white/10">
        {JOBS.map((job) => (
          <JobItem
            key={job.id}
            job={job}
            open={openId === job.id}
            onToggle={() => setOpenId(openId === job.id ? null : job.id)}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}
