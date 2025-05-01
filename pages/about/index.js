import React, { useState } from 'react';

import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaAws,
} from 'react-icons/fa';

import {
  SiC,
  SiCplusplus,
  SiCsharp,
  SiMysql,
  SiPostgresql,
  SiTypescript,
  SiR,
  SiDjango,
  SiFlask,
  SiNextdotjs,
  SiNodedotjs,
  SiPytorch,
  SiGoland,
} from 'react-icons/si';

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Languages',
        icons: [
          { icon: <FaPython />, name: 'Python' },
          { icon: <FaJava />, name: 'Java' },
          { icon: <SiC />, name: 'C' },
          { icon: <SiCplusplus />, name: 'C++' },
          { icon: <SiCsharp />, name: 'C#' },
          { icon: <SiMysql />, name: 'SQL' },
          { icon: <FaJs />, name: 'JavaScript' },
          { icon: <FaHtml5 />, name: 'HTML' },
          { icon: <FaCss3 />, name: 'CSS' },
          { icon: <SiGoland />, name: 'GoLang' },
          { icon: <SiR />, name: 'R' },
          { icon: <SiTypescript />, name: 'TypeScript' },
        ],
      },
      {
        title: 'Frameworks',
        icons: [
          { icon: <SiDjango />, name: 'Django' },
          { icon: <SiFlask />, name: 'Flask' },
          { icon: <FaReact />, name: 'React' },
          { icon: <SiNodedotjs />, name: 'Node.js' },
          { icon: <SiPytorch />, name: 'Pytorch' },
          { icon: <SiNextdotjs />, name: 'Next.js' },
        ],
      },
      {
        title: 'Tools',
        icons: [
          { icon: <FaGitAlt />, name: 'Git' },
          { icon: <FaDocker />, name: 'Docker' },
          { icon: <FaAws />, name: 'AWS' },
        ],
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Duke University',
        stage: 'Durham, NC',
      },
      {
        title: 'Durham School of the Arts',
        stage: 'Durham, NC',
      },
    ],
  },
];

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
        {/* Tab Navigation */}
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

        {/* Tab Content */}
        <div className="flex flex-col gap-y-4 items-center xl:items-start text-center xl:text-left">
          {aboutData[index].info.map((item, itemIndex) => (
            <div key={itemIndex} className="flex flex-col items-center xl:items-start">
              <div className="text-lg font-semibold">{item.title}</div>
              {item.icons && (
                <div className="flex flex-wrap gap-3 mt-2 justify-center xl:justify-start">
                  {item.icons.map((iconData, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="text-3xl transition-transform hover:scale-110"
                      title={iconData.name}
                    >
                      {iconData.icon}
                    </div>
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
