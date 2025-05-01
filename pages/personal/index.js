import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Circles from '../../components/Circles';

const personalData = [
  {
    title: 'games',
    info: [
      {
        title: 'Favorite Games',
        items: [
          { name: 'League of Legends', description: 'Rank: Diamond' },
          { name: 'Teamfight Tactions', description: 'Rank: Master' },
          { name: 'Clash of Clans', description: 'Rank: Legend' },
          { name: 'Minecraft', description: '' },
        ],
      },
    ],
  },
  {
    title: 'shows',
    info: [
      {
        title: 'Favorite Shows',
        items: [
          { name: 'Breaking Bad', description: '' },
          { name: 'The Office', description: '' },
          { name: 'Smallville', description: '' },
          { name: 'Prison Break', description: '' },
          { name: 'The Big Bang Theory', description: '' },
          { name: 'Alice in Borderland', description: '' },
        ],
      },
    ],
  },
  {
    title: 'K-Dramas',
    info: [
      {
        title: 'Favorite Korean Dramas',
        items: [
          { name: 'When Life Gives You Tangerines', description: '9.4/10' },
          { name: 'Twinkling Watermelon', description: '9.2/10' },
          { name: 'Extracurricular', description: '8.3/10' },
          { name: 'Itaewon Class', description: '8.5/10' },
          { name: 'Weak Hero', description: '7.9/10' },
          { name: 'Bloodhounds', description: '8.4/10' },
          { name: 'Signal', description: '8.7/10' },
          { name: 'D.P.', description: '8/10' },
          { name: 'Reply 1988', description: '9.5/10' },
          { name: "Death's Game", description: '8.3/10' },
          { name: 'The Uncanny Counter', description: '7.5/10' },
          { name: 'Alchemy of Souls', description: '8.6/10' },
        ],
      },
    ],
  },
  {
    title: 'misc',
    info: [
      {
        title: 'Other Interests',
        items: [
          { name: 'Sports Betting', description: 'Hobby' },
          { name: 'Cooking', description: 'Hobby' },
          { name: 'Photography', description: 'Hobby' },
          { name: 'Travel', description: 'Passion' },
        ],
      },
    ],
  },
];

const Personal = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-primary/30 py-32 text-center xl:text-left overflow-y-auto">
      <Circles />
      <div className="container mx-auto flex flex-col items-center justify-start text-center xl:text-left">
        {/* Tab Navigation */}
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-6 flex-wrap justify-center">
          {personalData.map((item, itemIndex) => (
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

        
        <div className="flex flex-col gap-y-4 items-center xl:items-start text-center xl:text-left w-full">
          {personalData[index].info.map((item, itemIndex) => (
            <motion.div
              key={itemIndex}
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col items-center xl:items-start w-full"
            >
              <div className="text-lg font-semibold mb-4">{item.title}</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
                {item.items.map((listItem, listIndex) => (
                  <motion.div
                    key={listIndex}
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                  >
                    <div className="text-accent font-semibold">{listItem.name}</div>
                    <div className="text-sm text-gray-400">{listItem.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Personal;
