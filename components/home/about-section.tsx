import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-8 md:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Team Image */}
          <div className="relative w-full h-auto aspect-video">
            <Image
              src="/images/about.png"
              alt="Team working together"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent rounded-lg" />
          </div>

          {/* About Content */}
          <div className="space-y-6 text-white">
            <h2 className="text-2xl md:text-4xl tracking-[0.35em] text-gray-300 font-light uppercase font-inter">
              WHO WE ARE
            </h2>

            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              We provide <span className="font-semibold text-white">whole marketing services</span> such as Creative, digital marketing, influencers & community, programmatic, social media maintenance, content creation and event collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
