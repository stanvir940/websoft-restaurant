import React from "react";
import "./index.css";

// Single variable for project data (including images)
const projects = [
  {
    title: "E-Commerce Store",
    description: "A fully responsive online store with payment integration.",
    // image: require("./proj1.png"), // Replace with your image path
    link: "https://example.com/ecommerce",
  },
  {
    title: "Blog Platform",
    description: "A clean and modern blog site with user authentication.",
    // image: require("./proj2.png"), // Replace with your image path
    link: "https://example.com/blog",
  },
  {
    title: "Portfolio Website",
    description: "A sleek portfolio to showcase creative work.",
    // image: require("./proj3"), // Replace with your image path
    link: "https://example.com/portfolio",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-10 rounded-b-lg shadow-lg">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            My Web Development Portfolio
          </h1>
          <p className="text-lg md:text-xl">
            Check out some of the websites I've built for my clients!
          </p>
        </div>
      </header>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 rounded-t-lg shadow-lg">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2025 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
