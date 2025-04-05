import React from "react";
import ProjectCard from "./components/ProjectCard";
import projects from "./data/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-200">
      <Navbar />

      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12">
          Our Featured Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
