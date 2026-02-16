// import { motion } from "framer-motion";
// import Img1 from "../assets/jobSakura.png";
// import Img2 from "../assets/Etherwise.png";
// import Img3 from "../assets/SarusAerospace.png";
// import { ArrowUpRight } from "lucide-react";
// import Resume from "../assets/sameer-sabale-resume.pdf";

// const internships = [
//   {
//     role: "Software Development Intern",
//     company: "Etherwise",
//     image: Img2,
//     description:
//       "Built an AI-based web scraping system that classifies websites and auto-generates executable scripts for real-time extraction.",
//     tech: ["Python", "FastAPI", "Machine Learning", "Web Scraping"],
//   },
//   {
//     role: "Web Developer Intern",
//     company: "Sarus Aerospace",
//     image: Img3,
//     description:
//       "Developed high-performance React interfaces with responsive layouts and clean animations for a drone product platform.",
//     tech: ["React", "Tailwind CSS", "Framer Motion"],
//   },
//   {
//     role: "Software Developer Intern",
//     company: "Job Sakura",
//     image: Img1,
//     description:
//       "Contributed to an AI-powered recruitment platform with resume parsing, candidate matching, and role-based dashboards.",
//     tech: ["React", "Node.js", "MongoDB", "FastAPI", "AI/ML"],
//   },
// ];

// export default function InternshipsShowcase() {
//   const openResume = () => window.open(Resume, "_blank");

//   return (
//     <section className="bg-black text-white px-6 md:px-16 py-24">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="max-w-4xl mx-auto text-center mb-20"
//       >
//         <h1 className="text-4xl md:text-5xl font-semibold mb-4">
//           Experience <span className="text-orange-500">&</span> Internships
//         </h1>
//         <p className="text-gray-400 text-lg">
//           Applying real-world engineering practices through hands-on industry experience.
//         </p>
//       </motion.div>

//       {/* Grid */}
//       <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//         {internships.map((item, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: i * 0.1 }}
//             whileHover={{ y: -6 }}
//             className="group relative flex flex-col
//                        bg-white/5 border border-white/10
//                        rounded-2xl overflow-hidden
//                        transition"
//           >
//             {/* Image */}
//             <div className="overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.company}
//                 className="h-48 w-full object-cover
//                            group-hover:scale-105 transition-transform duration-500"
//               />
//             </div>

//             {/* Content */}
//             <div className="flex flex-col flex-1 p-6">
//               <h3 className="text-xl font-semibold mb-1">{item.role}</h3>
//               <p className="text-orange-400 text-sm font-medium mb-4">
//                 {item.company}
//               </p>

//               <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">
//                 {item.description}
//               </p>

//               {/* Tech Stack */}
//               <div className="flex flex-wrap gap-2 mt-auto">
//                 {item.tech.map((tech, idx) => (
//                   <span
//                     key={idx}
//                     className="px-3 py-1 text-xs rounded-md
//                                bg-white/10 border border-white/10
//                                text-gray-300"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Resume CTA */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.3 }}
//         className="mt-28 text-center"
//       >
//         <h2 className="text-3xl font-semibold mb-4">View My Resume</h2>
//         <p className="text-gray-400 mb-8">
//           Detailed overview of my skills, projects, and experience.
//         </p>

//         <button
//           onClick={openResume}
//           className="inline-flex items-center gap-2
//                      px-8 py-4 rounded-xl
//                      bg-white text-black font-semibold
//                      hover:bg-amber-200 hover:outline-3 hover:outline-amber-500 outline-offset-8 transition duration-700"
//         >
//           View Resume
//           <ArrowUpRight className="w-5 h-5" />
//         </button>
//       </motion.div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import Img1 from "../assets/jobSakura.png";
import Img2 from "../assets/Etherwise.png";
import Img3 from "../assets/SarusAerospace.png";
import { ArrowUpRight, Sparkles, Briefcase } from "lucide-react";
import Resume from "../assets/sameer-sabale-resume.pdf";

const internships = [

  {
    role: "Web Developer Intern",
    company: "Sarus Aerospace",
    image: Img3,
    description:
      "Developed high-performance React interfaces with responsive layouts and clean animations for a drone product platform.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
    {
    role: "Software Development Intern",
    company: "Etherwise",
    image: Img2,
    description:
      "Built an AI-based web scraping system that classifies websites and auto-generates executable scripts for real-time extraction.",
    tech: ["Python", "FastAPI", "Machine Learning", "Web Scraping"],
  },
  {
    role: "Software Developer Intern",
    company: "Job Sakura",
    image: Img1,
    description:
      "Contributed to an AI-powered recruitment platform with resume parsing, candidate matching, and role-based dashboards.",
    tech: ["React", "Node.js", "MongoDB", "FastAPI", "AI/ML"],
  },
];

export default function InternshipsShowcase() {
  const openResume = () => window.open(Resume, "_blank");

  return (
    <section className="relative bg-black text-white px-6 md:px-16 py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/40 via-transparent to-transparent"></div>
      {/* <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div> */}
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center mb-20 relative"
      >
        <div className="inline-flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30">
            <Briefcase className="w-6 h-6 text-orange-400" />
          </div>
          <span className="text-orange-400 font-medium text-sm tracking-wider uppercase">
            Professional Journey
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-orange-100">
            Experience
          </span>
          <span className="text-orange-500 mx-3">&</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-300">
            Internships
          </span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Transforming academic knowledge into practical solutions through impactful industry engagements
        </p>
        
        {/* Decorative line */}
        <div className="mt-12 w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
      </motion.div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {internships.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative"
          >
            {/* Card gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500/30 via-transparent to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            
            {/* Card */}
            <div className="relative flex flex-col h-full bg-gradient-to-b from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden transition-all duration-300 group-hover:border-orange-500/30">
              {/* Image container with gradient overlay */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <img
                  src={item.image}
                  alt={item.company}
                  className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Company badge */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-sm border border-gray-700 text-sm font-medium">
                    {item.company}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-orange-300 transition-colors">
                    {item.role}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mt-auto pt-6 border-t border-gray-800">
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * idx }}
                        className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-gray-300 group-hover:border-orange-500/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Hover indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-orange-400" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Resume CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-32 text-center relative"
      >
        {/* Decorative elements */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="w-64 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        </div>
        
        <div className="inline-flex items-center gap-3 mb-8">
          <Sparkles className="w-5 h-5 text-orange-400" />
          <span className="text-sm font-medium text-orange-300 tracking-wider">READY FOR THE NEXT CHAPTER</span>
          <Sparkles className="w-5 h-5 text-orange-400" />
        </div>
        
        <h2 className="text-4xl font-bold mb-4 tracking-tight">
          Explore My <span className="text-orange-400">Complete Profile</span>
        </h2>
        
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
          Dive deeper into my technical expertise, project portfolio, and professional journey
        </p>

        <motion.button
          onClick={openResume}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-semibold overflow-hidden"
        >
          {/* Button gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          {/* Button text */}
          <span className="relative z-10 flex items-center gap-3">
            View Full Resume
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </span>
          
          {/* Shine effect */}
          {/* <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div> */}
        </motion.button>
      </motion.div>
    </section>
  );
}