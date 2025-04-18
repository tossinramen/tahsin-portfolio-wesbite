import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-16 items-center xl:items-start">
          
          {/* Left Section: Title & Description */}
          <div className="text-center xl:text-left xl:w-[40%] space-y-6">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            
             className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            </motion.p>
          </div>

          {/* Right Section: Swiper Slider */}
          <motion.div 
          variants={fadeIn('down', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:max-w-[70%] mt-8 xl:mt-0">
            <WorkSlider />
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Work;
