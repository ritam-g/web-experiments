function AboutAstratto() {
  return (
    <section className="relative bg-[#faf7f3] py-24 px-6">
      
      {/* Small heading */}
      <p className="text-center text-sm tracking-widest text-gray-500 mb-10">
        — ABOUT ASTRATTO
      </p>

      {/* Main Text */}
      <div className="max-w-6xl mx-auto text-center text-[3.2rem] md:text-[4.2rem] leading-tight font-normal text-black">
        
        <span className="inline-flex items-center gap-3">
          <span className="text-yellow-400 text-5xl">↺</span>
          Our <span className="text-gray-400">visionary</span>
        </span>{" "}
        
        <span className="text-orange-500">artisans</span>{" "}
        collaborate seamlessly to craft{" "}
        
        <span className="inline-flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-xl">
            ✦
          </span>
          inspiring
        </span>{" "}
        
        <span className="text-gray-400">experiences</span>,{" "}
        
        <span className="text-orange-500">leaving</span>{" "}
        lasting <span className="text-gray-400">imprints</span> on{" "}
        
        <span className="text-purple-600">brands</span>{" "}
        and spaces.
      </div>

      {/* Decorative line */}
      <svg
        className="absolute left-10 bottom-10"
        width="200"
        height="60"
        viewBox="0 0 200 60"
        fill="none"
      >
        <path
          d="M0 30 C40 10, 80 50, 120 30 S180 10, 200 30"
          stroke="#8b5cf6"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      {/* Sparkle */}
      <div className="absolute right-20 bottom-24 text-yellow-400 text-4xl">
        ✦
      </div>

    </section>
  );
}

export default AboutAstratto;
