import React, { useState } from "react";
import Img1 from "../assets/AttackDetected.png";
import Img2 from "../assets/Etherwise.png";
import Img3 from "../assets/SarusAerospace.png";
import Img4 from "../assets/GroundcontrollStation.png";
import Img5 from "../assets/MyImg2.png";
import Img6 from "../assets/MyImg2.png";

function Project() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "AI Based DoS Detection System (Cyber attack Detection)",
      desc:
        "Developed a real-time network intrusion detection system using Scapy and machine learning (XGBoost) to detect DoS attacks.",
      img: Img1,
      github: "#",
      details: {
        overview:
          "This project focuses on real-time detection of Denial of Service (DoS) attacks by analyzing live network traffic. Packet-level features are extracted using Scapy and classified using an optimized XGBoost model.",
        technologies: [
          "Python",
          "Scapy",
          "XGBoost",
          "Pandas",
          "Matplotlib"
        ],
        features: [
          "Live packet capture and preprocessing",
          "High-accuracy DoS attack classification",
          "Real-time attacker IP identification",
          "Traffic visualization dashboard",
          "Automated alert generation",
          "Block attacker IPs"
        ],
        output:
          "Detects DoS attacks in real time and displays attacker IPs, traffic volume, and alerts through a visual dashboard."
      }
    },
    {
      title: "Web Scraping & ML Automation Platform",
      desc:
        "AI-driven platform that classifies websites and automatically generates and executes scraping scripts.",
      img: Img2,
      github: "#",
      details: {
        overview:
          "This system uses machine learning to classify websites as static or dynamic and generates appropriate scraping code using Requests, BeautifulSoup, or Selenium. The code is executed on the same platform and results are displayed instantly.",
        technologies: [
          "Python",
          "FastAPI",
          "Selenium",
          "BeautifulSoup",
          "Machine Learning",
          "LLM Integration"
        ],
        features: [
          "Website type classification",
          "Automatic scraper code generation",
          "Same-platform script execution",
          "Structured JSON data output",
          "End-to-end automation"
        ],
        output:
          "Users receive cleaned, structured data extracted automatically without writing manual scraping code."
      }
    },
    {
      title: "Sarus Aerospace - Corporate Website",
      desc:
        "Responsive and optimized website built with React and Tailwind CSS for an aerospace brand.",
      img: Img3,
      github: "#",
      details: {
        overview:
          "Designed and developed a modern, responsive corporate website for Sarus Aerospace, focusing on clean UX, animations, and performance optimization.",
        technologies: [
          "React.js",
          "Tailwind CSS",
          "Framer Motion",
          "SEO Optimization"
        ],
        features: [
          "Responsive layout for all devices",
          "Smooth UI animations",
          "SEO-friendly structure",
          "Optimized performance"
        ],
        output:
          "A professional web presence that enhances brand identity and improves user engagement."
      }
    },
    {
      title: "Ground Control System for Drones",
      desc:
        "Software system to gather telemetry data and display real-time drone status",
      img: Img4,
      github: "#",
      details: {
        overview:
          "The Ground Control System (GCS) enables efficient drone mission planning, flight monitoring, and telemetry visualization through a centralized interface.",
        technologies: [
          "Python",
          "Telemetry Systems",
          "Drone Communication Protocols"
        ],
        features: [
          "Live telemetry monitoring",
          "Waypoint-based mission planning",
          "Battery and altitude tracking",
          "Real-time status updates"
        ],
        output:
          "Provides operators with real-time situational awareness and mission control for drones."
      }
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center py-16 px-4 text-white">
      <h1 className="text-4xl md:text-5xl font-thin uppercase mb-10">
        Projects
      </h1>

      <div className="w-full md:w-[90%] lg:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {projects.slice(0, showAll ? projects.length : 2).map((project, index) => (
          <div
            key={index}
            className="group border-2 border-gray-700 bg-[#111] rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4 transition-all hover:shadow-[0_0_5px_rgb(128,0,255),inset_0_0_5px_rgb(128,0,255)] duration-300"
          >
            <div className="w-full md:w-1/2 h-52 md:h-64 overflow-hidden rounded-xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-orange-500 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 ml-14">
                {/* <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 border-2 border-orange-500 rounded-2xl flex justify-center items-center hover:shadow-[0_0_5px_rgb(225,165,0),inset_0_0_5px_rgb(225,165,0)]"
                >
                  GitHub
                </a> */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="h-10 border-2 border-gray-200 rounded-2xl hover:shadow-[0_0_5px_rgb(225,165,0),inset_0_0_5px_rgb(225,165,0)] hover:border-orange-500"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-10 px-8 py-3 border border-orange-500 rounded-xl hover:shadow-[0_0_5px_rgb(225,165,0),inset_0_0_5px_rgb(225,165,0)]"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>

      {/* Fixed More Info Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
          <div className="bg-[#111] w-full max-w-2xl rounded-xl border border-gray-800">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <h2 className="text-lg font-semibold text-orange-500 line-clamp-1 pr-8">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-orange-500 text-xl absolute top-4 right-4"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-4 max-h-[70vh] overflow-y-auto">
              {/* Overview */}
              <div className="mb-4">
                <h3 className="text-sm font-medium text-orange-400 mb-2">Overview</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedProject.details.overview}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h3 className="text-sm font-medium text-orange-400 mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.details.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-orange-500/10 border border-orange-500/20 rounded text-orange-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h3 className="text-sm font-medium text-orange-400 mb-2">Key Features</h3>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                  {selectedProject.details.features.map((feature, i) => (
                    <li key={i} className="text-gray-300 text-sm">{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Output */}
              <div>
                <h3 className="text-sm font-medium text-orange-400 mb-2">Output</h3>
                <p className="text-gray-300 text-sm bg-black/30 p-3 rounded-lg border border-gray-800">
                  {selectedProject.details.output}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-2 p-4 border-t border-gray-800">
             
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;