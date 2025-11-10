"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { Search } from "lucide-react";

type Post = {
  title: string;
  excerpt: string;
  category: "Design" | "Marketing" | "Copywriting";
  minutes: number;
  author: string;
  date: string;
  image: string;
};

const POSTS: Post[] = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    category: "Design",
    minutes: 5,
    author: "Thauf Arifian",
    date: "3 November 2025",
    image: "/assets/insight/green.png",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    category: "Marketing",
    minutes: 10,
    author: "Nicky Gawa",
    date: "3 November 2025",
    image: "/assets/insight/orange.png",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    category: "Copywriting",
    minutes: 7,
    author: "Della Andina",
    date: "3 November 2025",
    image: "/assets/insight/pink 2.png",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    category: "Design",
    minutes: 6,
    author: "Thauf Arifian",
    date: "3 November 2025",
    image: "/assets/insight/pink.png",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    category: "Copywriting",
    minutes: 7,
    author: "Della Andina",
    date: "3 November 2025",
    image: "/assets/insight/green.png",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    category: "Design",
    minutes: 5,
    author: "Thauf Arifian",
    date: "3 November 2025",
    image: "/assets/insight/orange.png",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    category: "Marketing",
    minutes: 8,
    author: "Nicky Gawa",
    date: "3 November 2025",
    image: "/assets/insight/pink.png",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    category: "Design",
    minutes: 5,
    author: "Thauf Arifian",
    date: "3 November 2025",
    image: "/assets/insight/pink 2.png",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    category: "Marketing",
    minutes: 9,
    author: "Nicky Gawa",
    date: "3 November 2025",
    image: "/assets/insight/green.png",
  },
];

const CATEGORY_STYLE: Record<
  Post["category"],
  { text: string; avatar: string }
> = {
  Design: { text: "text-amber-400", avatar: "from-amber-400 to-orange-300" },
  Marketing: { text: "text-pink-400", avatar: "from-pink-400 to-fuchsia-300" },
  Copywriting: { text: "text-teal-400", avatar: "from-teal-400 to-cyan-300" },
};

function ArticleCard({ post }: { post: Post }) {
  const style = CATEGORY_STYLE[post.category];
  const initial = post.author?.[0]?.toUpperCase() ?? "A";

  return (
    <article
      className="group rounded-3xl bg-[#141414] hover:bg-[#222323]
                 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]
                 hover:shadow-lg hover:translate-y-[-2px]
                 transition-colors duration-200 overflow-hidden"
    >
      <Link href="/insight-detail" className="block focus:outline-none">
        <div className="p-3">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(min-width:1024px) 33vw, 100vw"
              priority={false}
            />
          </div>
        </div>

        <div className="px-5 pb-5">
          <p className={`text-[12px] font-medium ${style.text}`}>
            {post.category} • {post.minutes} Minutes
          </p>

          <h3 className="mt-1 text-xl font-semibold leading-snug text-white">
            {post.title}
          </h3>

          <p className="mt-2 text-sm text-white/60">{post.excerpt}</p>

          <div className="mt-4 flex items-center gap-2 text-[12px] text-white/60">
            <span
              aria-hidden
              className={`inline-grid place-items-center h-7 w-7 rounded-full text-black font-bold bg-gradient-to-tr ${style.avatar}`}
            >
              {initial}
            </span>
            <span className="truncate">{post.author}</span>
            <span className="mx-1 h-1 w-1 rounded-full bg-white/30" />
            <span>{post.date}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function ContentSection() {
  const [q, setQ] = useState("");
  const [visible, setVisible] = useState(6);

  useEffect(() => {
    setVisible(6);
  }, [q]);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return POSTS;
    return POSTS.filter(
      (p) =>
        p.title.toLowerCase().includes(s) ||
        p.excerpt.toLowerCase().includes(s) ||
        p.category.toLowerCase().includes(s)
    );
  }, [q]);

  const toShow = filtered.slice(0, visible);
  const canLoadMore = visible < Math.min(9, filtered.length);

  return (
    <section className="px-4 md:px-8 lg:px-12 pt-0 pb-8 text-white">
      {/* Search bar */}
      <div className="w-full flex justify-center mt-6 mb-10">
        <div className="relative w-[80%] max-w-3xl text-left">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#00A093]" />
          <input
            id="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Just type your topic here"
            className="w-full bg-[#111111] border border-[#222222]
                 rounded-xl text-white/90 text-left
                 pl-12 pr-4 py-3 text-sm md:text-base
                 placeholder-white/40 outline-none
                 focus:ring-2 focus:ring-[#00A093]/60
                 transition-all duration-200"
          />
        </div>
      </div>

      {/* Grid cards */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {toShow.map((p, i) => (
          <ArticleCard key={`${p.title}-${i}`} post={p} />
        ))}
      </div>

      {/* Load More */}
      {canLoadMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() =>
              setVisible((v) => Math.min(v + 3, Math.min(9, filtered.length)))
            }
            className="rounded-full px-5 py-2 text-sm font-semibold
                       bg-transparent border border-white/25 text-white/70
                       hover:text-white hover:border-white/40 transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
