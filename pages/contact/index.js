import Circles from '../../components/Circles'; 
import { BsArrowRight } from 'react-icons/bs'; 
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  return (
    <div className='min-h-screen bg-primary/30'>
      <div className='container mx-auto pt-10 pb-10 px-4 text-center xl:text-left flex items-start justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px] scale-[.70] sm:scale-100 mt-16 sm:mt-0'>
          <motion.h2 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"  
            className="text-3xl sm:text-4xl font-bold text-center mb-4 sm:mb-8"
          >
            Let&rsquo;s <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.form 
            action="https://formspree.io/f/xrbprwal"
            method="POST"
            variants={fadeIn('up', 0.4)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className='flex-1 flex flex-col gap-3 sm:gap-5 w-full mx-auto'
          >
            {/* Name + Subject side-by-side */}
            <div className='grid grid-cols-2 gap-3'>
              <input type='text' name="name" placeholder='Name' className='input w-full text-sm sm:text-base' required />
              <input type='text' name="subject" placeholder='Subject' className='input w-full text-sm sm:text-base' />
            </div>

            {/* Email on its own row */}
            <input type='email' name="email" placeholder='Email' className='input w-full text-sm sm:text-base' required />

            <textarea name="message" placeholder='Message' className='textarea w-full text-sm sm:text-base' required></textarea>
            
            <button type="submit" className='btn text-sm sm:text-base rounded-full border border-white/50 max-w-[160px] px-6 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let&rsquo;s talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[18px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
