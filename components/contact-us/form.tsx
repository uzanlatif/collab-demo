// app/components/Form.tsx
"use client";

import React from "react";

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm text-white/70 mb-2">{children}</label>;
}

/* Border-b di container → panjang penuh, fokus pakai focus-within */
function UnderlineSelect(
  props: React.SelectHTMLAttributes<HTMLSelectElement> & { wrapperClassName?: string }
) {
  const { wrapperClassName, ...rest } = props;
  return (
    <div
      className={
        "relative group border-b border-white/20 focus-within:border-teal-400 transition-colors pb-2 " +
        (wrapperClassName ?? "")
      }
    >
      <select
        {...rest}
        className="w-full bg-transparent outline-none text-white appearance-none pr-8"
      />
      {/* caret di ujung kanan */}
      <span className="pointer-events-none absolute right-0 top-2 h-0 w-0 border-x-6 border-x-transparent border-t-6 border-teal-400" />
    </div>
  );
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

export default function ContactForm() {
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <section className="bg-black text-white py-12">
      <form onSubmit={onSubmit} className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Grid 2 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {/* === Inquiry Category span 2 kolom & underline penuh === */}
          <div className="md:col-span-2">
            <Label>Inquiry Category</Label>
            <UnderlineSelect
              defaultValue="Brand Activation or Event"
              wrapperClassName="w-full" // border-b container melebar penuh
            >
              <option className="bg-black" value="Brand Activation or Event">
                Brand Activation or Event
              </option>
              <option className="bg-black" value="Digital Campaign">
                Digital Campaign
              </option>
              <option className="bg-black" value="Social Media Management">
                Social Media Management
              </option>
              <option className="bg-black" value="Others">
                Others
              </option>
            </UnderlineSelect>
          </div>

          {/* Full Name */}
          <div>
            <Label>Full Name (Active State)</Label>
            <UnderlineInput placeholder="Nicky Gawa" defaultValue="Nicky Gawa" />
          </div>

          {/* Company */}
          <div>
            <Label>Company</Label>
            <UnderlineInput placeholder="" />
          </div>

          {/* Email */}
          <div>
            <Label>Email</Label>
            <UnderlineInput type="email" placeholder="" />
          </div>

          {/* Handphone Number */}
          <div>
            <Label>Handphone Number</Label>
            <UnderlineInput type="tel" placeholder="" />
          </div>

          {/* Expected Budget (Rp prefix) */}
          <div>
            <Label>Expected Budget</Label>
            <div className="flex items-end gap-2">
              <span className="pb-2 text-white/70">Rp</span>
              <UnderlineInput className="flex-1" inputMode="numeric" placeholder="" />
            </div>
          </div>

          {/* How Did You Find Us? */}
          <div>
            <Label>How Did You Find Us?</Label>
            <UnderlineSelect defaultValue="Social Media">
              <option className="bg-black" value="Social Media">
                Social Media
              </option>
              <option className="bg-black" value="Search Engine">
                Search Engine
              </option>
              <option className="bg-black" value="Referral">
                Referral
              </option>
              <option className="bg-black" value="Event">
                Event
              </option>
            </UnderlineSelect>
          </div>

          {/* Content of Inquiry (span 2 kolom) */}
          <div className="md:col-span-2">
            <Label>Content of Inquiry</Label>
            <UnderlineTextarea placeholder="" />
          </div>
        </div>

        {/* Privacy + Submit */}
        <div className="mt-6 flex flex-col items-center gap-6">
          <p className="text-xs text-white/50 text-center">
            By sending this form, you shall be deemed to have agreed to our{" "}
            <a href="#" className="underline text-white/70 hover:text-white">
              Privacy Policy
            </a>
            .
          </p>

          <button
            type="submit"
            className="px-8 py-3 rounded-full font-medium text-black
                       bg-gradient-to-r from-teal-400 to-teal-500
                       hover:from-teal-300 hover:to-teal-400 transition-colors w-40"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
