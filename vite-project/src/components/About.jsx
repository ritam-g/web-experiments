function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* About Header */}
      <section className="text-center px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          About <span className="text-indigo-500">Us</span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg">
          We are focused on building clean, modern and user-friendly
          web applications with great performance and design.
        </p>
      </section>

      {/* About Content */}
      <section className="px-8 py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Who We Are
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We specialize in frontend development using React and Tailwind CSS.
              Our goal is to create intuitive user interfaces that feel smooth,
              responsive and visually appealing.
            </p>

            <p className="text-gray-400 leading-relaxed mt-4">
              By focusing on performance, accessibility and clean code,
              we deliver web experiences that users love.
            </p>
          </div>

          {/* Stats / Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-2xl p-6 text-center hover:scale-105 transition">
              <h3 className="text-3xl font-bold text-indigo-500">10+</h3>
              <p className="text-gray-400 mt-2">Projects</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 text-center hover:scale-105 transition">
              <h3 className="text-3xl font-bold text-indigo-500">2+</h3>
              <p className="text-gray-400 mt-2">Years Learning</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 text-center hover:scale-105 transition">
              <h3 className="text-3xl font-bold text-indigo-500">100%</h3>
              <p className="text-gray-400 mt-2">Passion</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 text-center hover:scale-105 transition">
              <h3 className="text-3xl font-bold text-indigo-500">24/7</h3>
              <p className="text-gray-400 mt-2">Learning</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;
