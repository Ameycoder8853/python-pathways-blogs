'use client';

import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            A Journey to Computing's Next Frontier
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Discover the exciting convergence of quantum computing and neural networks, shaping the future of technology.
          </p>
        </header>

        {/* Blog Content */}
        <article className="space-y-12">
          {/* Section 1 */}
          <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">The Power Problem That Changed Everything</h2>
            <p className="leading-relaxed text-gray-700">
              Today’s neural processors are power-hungry beasts, but nature has already provided a solution billions of years ago: the human brain. It processes information with unmatched efficiency, consuming less power than a light bulb.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Breaking Down the Quantum-Neural Bridge</h2>
            <p className="leading-relaxed text-gray-700">
              Imagine your smartphone processing AI tasks like your brain—efficiently and without overheating. This is no longer a distant dream, thanks to innovations like "neuromorphic resonance chambers."
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Tiny "concert halls" where quantum states and neural signals harmonize.</li>
              <li>Processing speeds 100x faster than today’s systems.</li>
              <li>Revolutionary power efficiency and density.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">The "Aha!" Moment</h2>
            <p className="leading-relaxed text-gray-700">
              With quantum-neural systems, we’ve moved from linear domino-like processing to a jazz-band symphony of computation—faster, smarter, and more powerful than ever.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Beyond the Laboratory: What This Means for You</h2>
            <p className="leading-relaxed text-gray-700">
              Imagine a world where:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Your virtual assistant understands emotion and context.</li>
              <li>Medical diagnoses are real-time and incredibly precise.</li>
              <li>Natural disasters are predicted and prevented effortlessly.</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Join the Revolution</h2>
            <p className="leading-relaxed text-gray-700">
              The fusion of quantum and neural technologies isn’t just about faster computers—it’s about reimagining intelligence itself. Want to be part of this journey? The future is ours to create.
            </p>
            <button className="mt-6 px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition duration-300">
              Register at pythonpathways.org
            </button>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Page;
