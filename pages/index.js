import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Typewriter } from 'react-simple-typewriter';


const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1 
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show" 
          exit="hidden"
          className="h1">
            Software Engineer <br />{" "}
            <span className="text-accent">Duke University</span>
            <motion.div
  variants={fadeIn("down", 0.25)}
  initial="hidden"
  animate="show"
  exit="hidden"
  className="text-3xl mt-4 text-white font-medium h-[30px]" 
>
  <Typewriter
    words={['Student', 'Developer', 'Gamer', 'Sports Bettor', 'Esports Fan']}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</motion.div>

              
            
          </motion.h1>

          <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show" 
          exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">

          </motion.p>

          
          <div className="flex justify-center xl:hidden relative">
           
          </div>

          
          <motion.div
  variants={fadeIn("down", 0.4)}
  initial="hidden"
  animate="show"
  exit="hidden"
  className="flex justify-center xl:justify-start mt-8 xl:mt-0 z-50 relative"
>
  <ProjectsBtn />
</motion.div>


        </div>
      </div>

      
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">

        </div>
        <ParticlesContainer />
        <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        animate="show" 
        exit="hidden"
        transition={{duration:1, ease: 'easeInOut'}}
        className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
        < Avatar/>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
