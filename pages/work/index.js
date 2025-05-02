import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className="min-h-screen bg-primary/30 overflow-y-auto pt-20 md:pt-16"> 
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-16 items-start">
          
          
          <div className="scale-[.70] sm:scale-100 text-center xl:text-left xl:w-[40%] mt-16 xl:mt-12 mx-auto xl:mx-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mb-2"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[400px] mx-auto xl:mx-0"
            >
              These are some of the projects I&rsquo;ve worked on. To see more, check out my{' '}
              <a
                href="https://github.com/tossinramen"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-accent"
              >
                GitHub
              </a>.
            </motion.p>
          </div>

          {/* Slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[70%] mt-6 xl:mt-10"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
