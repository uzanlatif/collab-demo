"use client";

import React, { useEffect, useState } from "react";

/* underline inputs */
function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm text-white/70 mb-2">{children}</label>;
}
function UnderlineInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={
        "w-full bg-transparent outline-none text-white placeholder-white/40 " +
        "border-b border-white/20 focus:border-teal-400 transition-colors pb-2 " +
        (props.className ?? "")
      }
    />
  );
}
function UnderlineTextarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={
        "w-full bg-transparent outline-none text-white placeholder-white/40 " +
        "border-b border-white/20 focus:border-teal-400 transition-colors pb-2 min-h-[120px] resize-y " +
        (props.className ?? "")
      }
    />
  );
}

export default function CareerApplyForm({ position }: { position: string }) {
  const [pos, setPos] = useState(position);
  useEffect(() => setPos(position), [position]); // auto-sync saat user memilih job lain

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: kirim ke endpoint Anda
  }

  return (
    <section id="apply" className="bg-black text-white py-10 md:py-14">
      <form onSubmit={onSubmit} className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Dare to join us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <Label>Full Name (Active State)</Label>
            <UnderlineInput placeholder="Your Name" defaultValue="Nicky Gawa" />
          </div>

          <div>
            <Label>Position</Label>
            <UnderlineInput
              value={pos}
              onChange={(e) => setPos(e.target.value)}
              placeholder="Select a position"
            />
          </div>

          <div>
            <Label>Email</Label>
            <UnderlineInput type="email" placeholder="you@email.com" />
          </div>

          <div>
            <Label>Handphone Number</Label>
            <UnderlineInput type="tel" placeholder="+62..." />
          </div>

          <div className="md:col-span-2">
            <Label>Message</Label>
            <UnderlineTextarea placeholder="Tell us why you're a great fit." />
          </div>

          <div className="md:col-span-2">
            <Label>Portfolio &amp; CV Link</Label>
            <UnderlineInput placeholder="https://..." />
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="px-8 py-3 rounded-full font-medium text-black w-40 transition-transform hover:scale-[1.02] active:scale-[0.99]"
            style={{
              background: "linear-gradient(90deg,#00A093 0%,#00756B 100%)",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
