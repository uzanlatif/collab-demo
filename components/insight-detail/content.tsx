"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../navbar";

type Category = "Design" | "Marketing" | "Copywriting";

const CATEGORY_STYLE: Record<Category, { text: string; avatar: string }> = {
  Design: { text: "text-amber-400", avatar: "from-amber-400 to-orange-300" },
  Marketing: { text: "text-pink-400", avatar: "from-pink-400 to-fuchsia-300" },
  Copywriting: { text: "text-teal-400", avatar: "from-teal-400 to-cyan-300" },
};

type RelatedPost = {
  title: string;
  excerpt: string;
  category: Category;
  minutes: number;
  author: string;
  date: string;
  image: string;
  href?: string;
};

const RELATED_ALL: RelatedPost[] = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    category: "Copywriting",
    minutes: 7,
    author: "Della Andina",
    date: "3 November 2025",
    image: "/assets/insight/green.png",
    href: "/insight-detail",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    category: "Design",
    minutes: 5,
    author: "Thoulid Aprilian",
    date: "3 November 2025",
    image: "/assets/insight/green.png",
    href: "/insight-detail",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    category: "Marketing",
    minutes: 10,
    author: "Nicky Gawa",
    date: "3 November 2025",
    image: "/assets/insight/green.png",
    href: "/insight-detail",
  },
  {
    title: "Another design perspective for modern teams",
    excerpt:
      "From layout systems to micro-interactions that support comprehension and flow.",
    category: "Design",
    minutes: 6,
    author: "Thoulid Aprilian",
    date: "4 November 2025",
    image: "/assets/insight/green.png",
    href: "/insight-detail",
  },
  {
    title: "Messaging frameworks that scale across channels",
    excerpt:
      "Turning research insights into reusable narratives and message maps.",
    category: "Copywriting",
    minutes: 8,
    author: "Della Andina",
    date: "4 November 2025",
    image: "/assets/insight/green.png",
    href: "/insight-detail",
  },
  {
    title: "Growth loops without vanity metrics",
    excerpt:
      "What to measure, when to iterate, and how to brief creative with data.",
    category: "Marketing",
    minutes: 9,
    author: "Nicky Gawa",
    date: "4 November 2025",
    image: "/assets/insight/green.png",
    href: "/insight-detail",
  },
];

function RelatedCard({ p }: { p: RelatedPost }) {
  const style = CATEGORY_STYLE[p.category];
  const initial = p.author[0]?.toUpperCase() ?? "A";

  return (
    <article className="group rounded-3xl bg-[#141414] hover:bg-[#222323] border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] hover:shadow-lg transition-colors duration-200 overflow-hidden">
      <Link href={p.href ?? "/insight-detail"} className="block">
        <div className="p-3">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
            <Image src={p.image} alt={p.title} fill className="object-cover" />
          </div>
        </div>

        <div className="px-5 pb-5">
          <p className={`text-[12px] font-medium ${style.text}`}>
            {p.category} • {p.minutes} Minutes
          </p>

          <h3 className="mt-1 text-xl font-semibold leading-snug text-white">
            {p.title}
          </h3>

          <p className="mt-2 text-sm text-white/60">{p.excerpt}</p>

          <div className="mt-4 flex items-center gap-2 text-[12px] text-white/60">
            <span className={`inline-grid place-items-center h-7 w-7 rounded-full text-black font-bold bg-gradient-to-tr ${style.avatar}`}>
              {initial}
            </span>
            <span className="truncate">{p.author}</span>
            <span className="mx-1 h-1 w-1 rounded-full bg-white/30" />
            <span>{p.date}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function InsightDetailPage() {
  const [visible, setVisible] = useState(3);

  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* ====== ARTICLE ====== */}
      <section className="mx-auto w-full max-w-[1200px] px-6 md:px-8 py-10">
        {/* meta chip */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
          <span className="text-amber-400 font-medium">Design</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span className="text-white/70">5 Minutes</span>
        </div>

        {/* sub meta */}
        <p className="mt-3 text-[13px] text-white/60">
          Senin, 3 November 2025 • 17:00 WIB
          <span className="mx-2">•</span>
          <span className="inline-flex items-center gap-2">
            <span className="inline-grid place-items-center h-5 w-5 rounded-full bg-gradient-to-tr from-amber-400 to-orange-300 text-black text-[10px] font-bold">
              T
            </span>
            Thoulid Aprilian <span className="text-white/40">|</span> Designer
          </span>
        </p>

        {/* title */}
        <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
          The standard Lorem Ipsum passage, used since the 1500s
        </h1>

        {/* hero image (full width to container) */}
        <div className="mt-6 rounded-3xl overflow-hidden border border-white/10">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/assets/insight/green.png"
              alt="Article hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* body */}
        <div className="mt-6 space-y-6 text-white/80">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Section 1.10.32 of “de Finibus Bonorum et Malorum”,
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>

          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Section 1.10.32 of “de Finibus Bonorum et Malorum”,
          </h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
        </div>
      </section>

      {/* ====== RELATED ====== */}
      <section className="mx-auto w-full max-w-[1200px] px-6 md:px-8 pb-12">
        <div className="text-center">
          <h3 className="text-2xl md:text-4xl font-bold">Other Related Articles</h3>
          <span aria-hidden className="mx-auto mt-3 block h-[3px] w-16 rounded-full bg-[#00A093]" />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {RELATED_ALL.slice(0, visible).map((p, i) => (
            <RelatedCard key={i} p={p} />
          ))}
        </div>

        {visible < RELATED_ALL.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVisible((v) => Math.min(v + 3, RELATED_ALL.length))}
              className="rounded-full px-6 py-2 text-sm font-semibold bg-transparent border border-white/25 text-white/70 hover:text-white hover:border-white/40 transition"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
