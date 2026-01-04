function Home() {
  return (
    <div className="Home min-h-screen bg-gray-950 text-white ">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Welcome to <span className="text-indigo-500">Your App</span>
        </h1>

        <p className="mt-6 max-w-2xl text-gray-400 text-lg">
          Build fast, modern and responsive web applications using
          React and Tailwind CSS.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-700 rounded-xl hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-20 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">
          What You’ll Get
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-gray-800 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">
              Clean UI
            </h3>
            <p className="text-gray-400">
              Minimal and modern user interface for better UX.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">
              Responsive
            </h3>
            <p className="text-gray-400">
              Works perfectly on mobile, tablet and desktop.
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">
              Fast Performance
            </h3>
            <p className="text-gray-400">
              Optimized and lightweight components.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
