import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
      <div>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="w-full flex flex-row justify-between">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            {project.name}
          </h2>
          <p className="text-sm text-red-600 font-mono border-2 p-2">
            <span className="text-black font-thin text-sm">ID: </span>
            {project.id}
          </p>
        </div>
        <p className="text-sm text-gray-500 mb-2 italic">
          Client: {project.client}
        </p>
        <p className="text-gray-600 mb-4">{project.description}</p>

        {/* 💰 Pricing */}
        <div className="mb-4">
          <span className="text-sm text-gray-500 mr-2">Price:</span>
          <span className="text-sm line-through text-red-500 mr-2">
            {project.previousPrice}
          </span>
          <span className="text-lg font-bold text-green-600">
            {project.price}
          </span>
        </div>

        {/* 🔑 Features */}
        <div className="mb-3">
          <h3 className="font-semibold text-sm text-gray-700">Key Features:</h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* 🔧 Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 🔗 Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-semibold"
        >
          Visit Project <FaExternalLinkAlt size={12} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
