import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import Avatar from '../../components/Avatar';

// data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center justify-center text-center xl:text-left">
        
        {/* Tab Navigation (Moved Above Content) */}
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-6">
          {aboutData.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0
                ${index === itemIndex ? 'text-accent after:w-[100%] after:bg-accent transition-all after:duration-300' : ''}`}
              onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </div>
          ))}
        </div>

        {/* Content for Selected Tab (Ensure Centering) */}
        <div className="flex flex-col gap-y-4 items-center xl:items-start text-center xl:text-left">
          {aboutData[index].info.map((item, itemIndex) => (
            <div key={itemIndex} className="flex flex-col items-center xl:items-start">
              <div className="text-lg font-semibold">{item.title}</div>
              {item.icons && (
                <div className="flex gap-2 mt-2">
                  {item.icons.map((icon, iconIndex) => (
                    <span key={iconIndex} className="text-2xl">{icon}</span>
                  ))}
                </div>
              )}
              {item.stage && <div className="text-sm text-gray-400">{item.stage}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
