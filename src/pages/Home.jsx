import { motion } from 'framer-motion';
import Bgprofile from '../assets/Profile2s.png';
import TypeText from "../components/TypeText";
import SkillsPage from '../components/SkillsPage';
import AboutMe from '../components/AboutMe';
import Project from '../components/Project';
import Internships from '../components/Internships';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { MoveDown } from 'lucide-react';


function Home() {



  return (
    <div className="flex flex-col bg-[#101010] text-white items-center" >
      <Navbar />
      {/* screen 1 */}
      <div id='home' className=" h-screen w-full bg-black p-4 md:p-10 flex items-center justify-center relative overflow-hidden">
        <motion.img
          src={Bgprofile}
          alt="Bg_profile"
          className='h-full w-full md:w-[35%] absolute left-0 object-cover filter drop-shadow-[0_0_80px_#808080] md:drop-shadow-none md:hover:drop-shadow-[0_0_300px_#808080] duration-[1.5s] z-2'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }} viewport={{ once: true, amount: 0.7 }} />

        <div className="md:right-9 absolute items-start flex flex-col text-start rounded-lg w-full md:w-[60%] h-auto md:h-[80%] p-4 md:p-10 bg-transparent gap-10 z-10">
          <motion.div
            className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin flex flex-col gap-10 '
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}>
            <span className=' text-5xl sm:text-5xl md:text-5xl lg:text-[16rem] font-semibold uppercase text-white hover:text-shadow-[0_0_25px_#2323FF] hover:scale-105 duration-500 '>hello</span>
            <h1 className='text-5xl lg:text-7xl text-white hover:text-shadow-[0_0_15px_#2323FF]'>Sameer Sabale</h1>
          </motion.div>

          <p className="mt-2 text-lg text-orange-500 font-medium">Software Engineer <span className='text-blue-500'>|</span> AI & Full-Stack Systems <span className='text-blue-500'>|</span> Cybersecurity</p>

          <TypeText
            className='text-base sm:text-lg md:text-xl font-thin max-w-full md:max-w-[80%] text-gray-500'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
            text={["I design and build production-ready web applications and applied AI systems,with hands-on experience in cybersecurity, automation, and scalable architectures. I am passionate about leveraging technology to solve real-world problems and create impactful solutions."]}
            typingSpeed={20}
          />
        </div>
        
      </div>

      {/* screen 2 */}
      <div id='about' className=" h-screen w-full bg-black text-center flex flex-col items-center justify-center gap-10 relative overflow-hidden p-4 ">
        <AboutMe />
      </div>

      {/* screen 3 */}
      <div id='skills' className=" h-auto w-full bg-black text-center gap-10 relative overflow-hidden">
        <SkillsPage />
      </div>

      {/* screen 4 */}

      <div id='projects' className=" h-auto w-full bg-black text-center gap-10 relative overflow-hidden">
        <Project />
      </div>

      {/* screen 5 */}
      <div id='internships' className=" h-auto w-full bg-black text-center gap-10 relative overflow-hidden p-4 ">
        <Internships />
      </div>

      {/* Footer */}
      <div id='contact' className=" h-auto w-full bg-black text-center gap-10 relative overflow-hidden p-4">
        <Footer />
      </div>


    </div>
  )
}

export default Home;
