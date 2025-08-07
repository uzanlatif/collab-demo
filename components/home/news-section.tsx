import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "Collab Digital, 2024’s best agency",
      excerpt:
        "Lorem ipsum dolor si amet bla bla bla Lorem ipsum dolor si amet bla bla bla",
      image: "/images/news/2.png",
      featured: true,
    },
    {
      id: 2,
      title: "Hutama Karya is joining our lineup!",
      excerpt: "",
      image: "/images/news/1.png",
    },
    {
      id: 3,
      title: "Hutama Karya is joining our lineup!",
      excerpt: "",
      image: "/images/news/1.png",
    },
    {
      id: 4,
      title: "Hutama Karya is joining our lineup!",
      excerpt:
        "Lorem ipsum dolor si amet bla bla bla Lorem ipsum dolor si amet bla bla bla",
      image: "/images/news/1.png",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-16 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm md:text-base font-bold tracking-[0.3em] text-center text-white uppercase mb-12">
          WHAT'S NEW?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* Featured Card */}
          <div className="relative group col-span-1 lg:col-span-1 h-full overflow-hidden rounded-lg">
            <Image
              src={newsItems[0].image}
              alt={newsItems[0].title}
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transition-all duration-300">
              <h3 className="text-white font-semibold text-lg mb-1">
                {newsItems[0].title}
              </h3>
              <p className="text-sm text-white/80 leading-snug mb-4">
                {newsItems[0].excerpt}
              </p>
              <div className="text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm text-white/90">Read more</span>
                <ArrowRight className="inline w-4 h-4 ml-1 text-white/90" />
              </div>
            </div>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-2 gap-4 col-span-1 lg:col-span-2">
            {newsItems.slice(1).map((item, idx) => (
              <div
                key={item.id}
                className="relative group h-[140px] md:h-[160px] overflow-hidden rounded-lg"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end transition-all duration-300 group-hover:translate-y-2">
                  <h3 className="text-white font-bold text-sm mb-1">
                    {item.title}
                  </h3>
                  {item.excerpt && (
                    <p className="text-xs text-white/80 leading-tight">
                      {item.excerpt}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            variant="ghost"
            className="text-white hover:text-red-400 group hover:bg-transparent px-0"
          >
            <span className="group-hover:text-red-400 transition-colors duration-200">
              See more
            </span>
            <ArrowRight className="w-4 h-4 ml-2 text-red-500 group-hover:text-red-400 transition-colors duration-200" />
          </Button>
        </div>
      </div>
    </section>
  );
}
