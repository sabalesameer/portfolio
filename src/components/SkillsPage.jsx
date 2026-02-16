// import React from "react";
// import { motion } from "framer-motion";

// export default function SkillsPage() {
//   const frontend = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
//   const backend = ["Node.js", "Express", "FastAPI", "MongoDB"];
//   const languages = ["C++", "Python", "C"];
//   const tools = ["Git", "GitHub", "VS Code", "Postman", "Vercel"];

//   const skillLevel = {
//     HTML: 90,
//     CSS: 85,
//     JavaScript: 80,
//     React: 85,
//     "Tailwind CSS": 90,
//     "Node.js": 75,
//     Express: 70,
//     FastAPI: 75,
//     MongoDB: 70,
//     "C++": 80,
//     Python: 75,
//     C: 65,
//     Git: 85,
//     GitHub: 85,
//     "VS Code": 90,
//     Postman: 70,
//     Vercel: 75,
//   };

//   // SVGs must exist in: public/skills/*.svg
//   const svgLogos = [
//     "react",
//     "tailwind",
//     "nodejs",
//     "github",
//     "vite",
//   ];

//   const SkillItem = ({ skill }) => (
//     <div className="flex flex-col gap-1">
//       <span className="px-2 py-1 rounded-lg border border-white/30 hover:bg-white hover:text-black transition text-center text-xs">
//         {skill}
//       </span>

//       <div className="w-full h-[4px] bg-white/20 rounded-full overflow-hidden">
//         <motion.div
//           initial={{ width: 0 }}
//           whileInView={{ width: `${skillLevel[skill] || 50}%` }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="h-full bg-gradient-to-r from-blue-300 to-blue-500 rounded-full"
//         />
//       </div>
//     </div>
//   );

//   const SkillBox = ({ title, data }) => (
//     <div className="border border-white/20 rounded-3xl p-4">
//       <div className="border-2 border-white/50 rounded-2xl p-4 hover:shadow-[0_0_16px_rgba(59,130,246,0.6)] transition">
//         <h2 className="text-xl font-bold text-center mb-4">{title}</h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//           {data.map((s) => (
//             <SkillItem key={s} skill={s} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center relative">
//       <h1 className="absolute top-8 text-5xl uppercase font-thin tracking-widest">
//         Skills
//       </h1>

//       <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

//         {/* LEFT */}
//         <div className="flex flex-col gap-6">
//           <SkillBox title="Frontend" data={frontend} />
//           <SkillBox title="Backend" data={backend} />
//         </div>

//         {/* CENTER ICONS */}
//         <div className="flex items-center justify-center">
//           <div className="grid grid-cols-3 gap-6 place-items-center">
//             {svgLogos.map((logo, i) => (
//               <motion.img
//                 key={logo}
//                 src={`/${logo}.svg`}
//                 alt={logo}
//                 className="w-14 h-14 md:w-16 md:h-16"
//                 initial={{ opacity: 0, scale: 0.6 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.25, rotate: 6 }}
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: i * 0.2,
//                 }}
//               />
//             ))}
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="flex flex-col gap-6">
//           <SkillBox title="Tools" data={tools} />
//           <SkillBox title="Programming Languages" data={languages} />
//         </div>

//       </div>
//     </div>
//   );
// }



import React from "react";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const frontend = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
  const backend = ["Node.js", "Express", "FastAPI", "MongoDB"];
  const languages = ["C++", "Python", "C"];
  const tools = ["Git", "GitHub", "VS Code", "Postman", "Vercel"];

  const skillLevel = {
    HTML: 90, CSS: 85, JavaScript: 80, React: 85, "Tailwind CSS": 90,
    "Node.js": 75, Express: 70, FastAPI: 75, MongoDB: 70,
    "C++": 80, Python: 75, C: 65,
    Git: 85, GitHub: 85, "VS Code": 90, Postman: 70, Vercel: 75,
  };

  const techIcons = ["react", "tailwind", "nodejs", "postman", "python", "git", "vscode", "github"];

  const SkillItem = ({ skill }) => (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-sm">
        <span className="text-white/80">{skill}</span>
        <span className="text-blue-400 font-medium">{skillLevel[skill]}%</span>
      </div>

      <div className="w-full h-1.5 bg-black/ rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skillLevel[skill]}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full bg-gradient-to-r from-orange-200 to-orange-600 rounded-full border-orange-500"
        />
      </div>
    </div>
  );

  const SkillCard = ({ title, skills }) => (
    <motion.div
      className="
        rounded-2xl p-6
        bg-[#0b0f14]
        shadow-[0_20px_60px_rgba(0,0,0,0.8)]
        border border-white/5
      "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold mb-5 text-white">{title}</h3>
      <div className="space-y-4 ">
        {skills.map((skill) => (
          <SkillItem key={skill} skill={skill} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-thin tracking-wide"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h1>
          <p className="text-white/50 mt-3">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left */}
          <div className="space-y-8 ">
            <SkillCard title="Frontend" skills={frontend} />
            <SkillCard title="Backend" skills={backend} />
          </div>

          {/* Center */}
          <div className="flex items-center justify-center">
            <motion.div
              className="
                relative rounded-3xl p-10
                bg-[#0b0f14]
                shadow-[0_30px_80px_rgba(0,0,0,0.9)]
                border border-white/5
              "
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-center mb-8">Tech Stack</h3>

              <div className="grid grid-cols-4 gap-6">
                {techIcons.map((icon, i) => (
                  <motion.div
                    key={icon}
                    className="
                      w-16 h-16 rounded-xl
                      bg-[#0f1621]
                      flex items-center justify-center
                      shadow-[inset_4px_4px_8px_#05070a,inset_-4px_-4px_8px_#1a2230]"
                    whileHover={{
                      scale: 1.1,
                      boxShadow:
                        "0 15px 40px rgba(59,130,246,0.35)",
                    }}
                  >
                    <img
                      src={`/${icon}.svg`}
                      alt={icon}
                      className="w-8 h-8 opacity-90"
                    />
                  </motion.div>
                ))}
              </div>


              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">

              </div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="space-y-8">
            <SkillCard title="Tools" skills={tools} />
            <SkillCard title="Languages" skills={languages} />
          </div>

        </div>

      </div>
    </div>
  );
}
