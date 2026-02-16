import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import Profile1 from "../assets/Avatar.png";

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <div className="min-h-screen w-full bg-black flex flex-col md:flex-row items-center justify-center gap-12 relative overflow-hidden px-6 md:px-16 py-20">

      {/* Left Section */}
      <motion.div
        className="flex flex-col gap-8 w-full md:w-1/2 text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.h1
          variants={childVariants}
          className="text-4xl sm:text-5xl md:text-6xl text-white font-thin transition duration-500 hover:scale-105 hover:drop-shadow-[0_0_25px_#2323FF]"
        >
          About Me
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="text-base sm:text-lg md:text-2xl font-thin text-white leading-relaxed"
        >
          I'm <span className="text-orange-500 font-bold">Sameer</span>, a
          dedicated software developer with a passion for creating innovative
          solutions. With a strong foundation in computer science and hands-on
          experience in various programming languages and frameworks, I thrive
          on tackling complex challenges and continuously learning new
          technologies.
        </motion.p>

        {/* Tech Stack */}
        <div className="w-full flex flex-wrap justify-center md:justify-start gap-3">
          {["React.js", "Node.js", "Tailwind", "Python", "Cpp"].map(
            (tech, i) => (
              <button
                key={i}
                className="px-4 py-1 bg-white/10 text-white border border-white/20 font-medium rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-md active:scale-95 text-sm sm:text-base"
              >
                {tech}
              </button>
            )
          )}
        </div>
      </motion.div>

      {/* Animated Blob */}
      <motion.div
        className="absolute w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full bg-blue-400 blur-[100px] opacity-70 z-0"
        animate={{
          x: [2, 200, -400, 2],
          y: [2, -40, 40, 2],
          scale: [0.8, 1.1, 1, 0.8],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Right Section */}
      <div className="w-full md:w-auto flex justify-center items-center z-10 relative mt-10 md:mt-0">

        <motion.div
          onMouseMove={handleMouseMove}
          className="relative w-fit rounded-3xl p-[3px]"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                300px circle at ${mouseX}px ${mouseY}px,
                rgba(59, 130, 246, 0.6),
                transparent 60%
              )
            `,
          }}
        >
          <motion.img
            src={Profile1}
            alt="Profile"
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl bg-black"
          />
        </motion.div>

        {/* Contact Floating Button */}
        <div className="group h-10 w-10 hover:w-40 rounded-4xl bg-black ring-8 ring-black ring-offset-1 ring-offset-blue-500 transition-all duration-300 right-0 absolute bottom-1 flex justify-center items-center text-center overflow-hidden text-white text-sm font-thin hover:font-normal cursor-pointer hover:shadow-[0_0_5px_rgba(59,130,246),inset_0_0_15px_rgba(59,130,246)]">
          <a href="" class="whitespace-nowrap transition-all duration-300 flex">
            <span class="inline-block font-thin text-blue-400">@</span>
            <span class="hidden group-hover:inline-block transition-all duration-300 ml-1"><a href="#contact">Contact</a></span>
          </a>
        </div>
      </div>
    </div>
  );
}