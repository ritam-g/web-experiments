import AboutAstratto from "./AboutAstratto";
import SectionTop from "./SectionTop";

function Section2() {
  return (
    <div className="parent border-sky-200 border-2 p-3 
    lg:flex  flex-col
    ">
    <SectionTop first="Our Services" snd="Discover a wide range of opportunities through
a comprehensive range of qualified services."/>

    <div className="middle w-full  flex justify-evenly ">
    <div className="max-w-sm rounded-2xl border-2 border-violet-600 p-6 bg-[#fbf7f3]
    ">
      
      {/* Header */}
      <div className="flex items-start justify-between">
        <h2 className="text-3xl font-medium text-black leading-tight">
          Motion<br />Graphics
        </h2>

        <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center">
          <span className="text-white text-xl">↗</span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-[2px] bg-violet-600"></div>

      {/* Description */}
      <p className="text-gray-700 text-sm leading-relaxed mb-6">
        Bring your ideas to life through dynamic visuals and engaging animations
      </p>

      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src="/images/boat.png" // replace with your image path
          alt="Motion graphics"
          className="w-full h-auto object-cover"
        />
      </div>

    </div>
    <div className="max-w-sm rounded-2xl border-2 border-violet-600 p-6 bg-[#fbf7f3]
    ">
      
      {/* Header */}
      <div className="flex items-start justify-between">
        <h2 className="text-3xl font-medium text-black leading-tight">
          Motion<br />Graphics
        </h2>

        <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center">
          <span className="text-white text-xl">↗</span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-[2px] bg-violet-600"></div>

      {/* Description */}
      <p className="text-gray-700 text-sm leading-relaxed mb-6">
        Bring your ideas to life through dynamic visuals and engaging animations
      </p>

      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src="/images/triangle.png" // replace with your image path
          alt="Motion graphics"
          className="w-full h-auto object-cover"
        />
      </div>

    </div>
    <div className="max-w-sm rounded-2xl border-2 border-violet-600 p-6 bg-[#fbf7f3]
    ">
      
      {/* Header */}
      <div className="flex items-start justify-between">
        <h2 className="text-3xl font-medium text-black leading-tight">
          Motion<br />Graphics
        </h2>

        <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center">
          <span className="text-white text-xl">↗</span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-[2px] bg-violet-600"></div>

      {/* Description */}
      <p className="text-gray-700 text-sm leading-relaxed mb-6">
        Bring your ideas to life through dynamic visuals and engaging animations
      </p>

      {/* Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src="/images/fishes.png" // replace with your image path
          alt="Motion graphics"
          className="w-full h-auto object-cover"
        />
      </div>

    </div>
    </div>
    
    <div className="last">
        <AboutAstratto/>
    </div>
    </div>
  );
}

export default Section2;
