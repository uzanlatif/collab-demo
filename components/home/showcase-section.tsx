// "use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ShowcaseSection() {
  const showcaseItems = [
    {
      id: 1,
      title: "Cosmos Campaign",
      category: "Branding & Digital",
      image: "/images/showcase/cosmos.png",
      className: "md:col-span-1 md:row-span-2",
    },
    {
      id: 2,
      title: "Tiket x 9GAG",
      category: "Travel & Tourism",
      image: "/images/showcase/tiketx9gag.png",
      className: "md:col-span-1 md:row-span-2",
    },
    {
      id: 3,
      title: "NyamNyam Campaign",
      category: "F&B Marketing",
      image: "/images/showcase/nyamnyam.png",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
      title: "Finansial Product",
      category: "Fintech",
      image: "/images/showcase/finansial.png",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 5,
      title: "Halodoc Plus",
      category: "Health Campaign",
      image: "/images/showcase/halodoc.png",
      className: "md:col-span-1 md:row-span-2",
    },
    {
      id: 6,
      title: "Thermolyte Influencer",
      category: "Influencer Marketing",
      image: "/images/showcase/thermolyte-plus.png",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 7,
      title: "Grand Final PIXY x JXB",
      category: "Event Marketing",
      image: "/images/showcase/PIXYxJXB.png",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      id: 8,
      title: "Tri Regional Ad",
      category: "Social Media",
      image: "/images/showcase/tri-regional.png",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 9,
      title: "Lazada Promo",
      category: "E-commerce Campaign",
      image: "/images/showcase/lazada.png",
      className: "md:col-span-1 md:row-span-2",
    },
    {
      id: 10,
      title: "Wardah Global",
      category: "Beauty & Skincare",
      image: "/images/showcase/wardah.png",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 11,
      title: "Wardah House of W",
      category: "Beauty Campaign",
      image: "/images/showcase/wardah-house-of-w.png",
      className: "md:col-span-1 md:row-span-2",
    },
    {
      id: 12,
      title: "Wardah Skinverse",
      category: "Product Showcase",
      image: "/images/showcase/wardah-skinverse.png",
      className: "md:col-span-1 md:row-span-1",
    },

    // Tambahan 3 card biar grid penuh
    {
      id: 13,
      title: "Extra Showcase 1",
      category: "Branding",
      image: "/images/showcase/cosmos.png",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 14,
      title: "Extra Showcase 2",
      category: "Travel",
      image: "/images/showcase/tiketx9gag.png",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 15,
      title: "Extra Showcase 3",
      category: "Marketing",
      image: "/images/showcase/nyamnyam.png",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      id: 16,
      title: "Extra Showcase 2",
      category: "Travel",
      image: "/images/showcase/tiketx9gag.png",
      className: "md:col-span-1 md:row-span-1",
    },
    
  ];

  return (
    <section id="showcase" className="py-16 px-4 sm:px-6 md:px-16 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm md:text-base font-bold tracking-[0.3em] text-center text-white uppercase mb-12">
          OUR SHOWCASE
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] gap-4 mb-8">
          {showcaseItems.map((item) => (
            <Card
              key={item.id}
              className={`group cursor-pointer border-0 overflow-hidden transition-all duration-300 hover:scale-[1.02] ${item.className}`}
            >
              <CardContent className="p-0 relative h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 z-0"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10" />

                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90">{item.category}</p>
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </CardContent>
            </Card>
          ))}
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
