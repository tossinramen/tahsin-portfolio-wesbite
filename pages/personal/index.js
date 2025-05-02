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
          { name: 'Teamfight Tactics', description: 'Rank: Master' },
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
          { name: 'Breaking Bad', description: '10/10' },
          { name: 'The Office', description: '9.5/10' },
          { name: 'Smallville', description: '8.7/10' },
          { name: 'Prison Break', description: '8.6/10' },
          { name: 'The Big Bang Theory', description: '9.1/10' },
          { name: 'Alice in Borderland', description: '8.3/10' },
          { name: 'Narcos & Narcos: Mexico', description: '9.8/10' },
          { name: 'Criminal Minds', description: '8.3/10' },
          { name: 'The Blacklist', description: '8.1/10' },
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
          { name: 'Bloodhounds', description: '8.4/10' },
          { name: 'Signal', description: '8.7/10' },
          { name: 'Reply 1988', description: '9.5/10' },
          { name: "Death's Game", description: '8.3/10' },
          { name: 'Alchemy of Souls', description: '8.6/10' },
        ],
      },
    ],
  },
  {
    title: 'Anime',
    info: [
      {
        title: 'Favorite Animes',
        items: [
          { name: 'One Piece', description: '10/10' },
          { name: 'Attack on Titan', description: '9.8/10' },
          { name: 'Chainsaw Man', description: '8.3/10' },
          { name: 'Sword Art Online', description: '7.9/10' },
          { name: 'Violet Evergarden', description: '9.3/10' },
          { name: 'Spy x Family', description: '9.1/10' },
          { name: 'Naurto Shippuden', description: '9.2/10' },
          { name: "Solo Leveling", description: '9/10' },
          { name: 'Demon Slayer', description: '8.7/10' },
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
          { name: 'Favorite NBA Teams', description: 'Warriors, Lakers, Nuggets' },
          { name: 'Favorite Esports Teams (League)', description: 'G2, C9, T1, BLG' },
          { name: 'Photography', description: 'Lowkey haven\'t touched a camera since highschool' },
          { name: 'Favorite Past Travels', description: 'Italy, France, Sweden, Denmark, Switzerland'},
          { name: 'Dream Travel Destinations', description: 'Japan, South Korea'},
        ],
      },
    ],
  },
];

const Personal = () => {
  const [index, setIndex] = useState(0);

  return (
<div className="h-screen overflow-y-auto bg-primary/30 text-center xl:text-left px-4 pt-40 sm:pt-32 pb-12">
<Circles />
      <div className="container mx-auto flex flex-col items-center justify-start text-center xl:text-left">
        {/* Tab Navigation */}
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-6 flex-wrap justify-center">
          {personalData.map((item, itemIndex) => (
            <button
            key={itemIndex}
            onClick={() => setIndex(itemIndex)}
            className={`capitalize xl:text-lg px-2 py-1 relative transition-all
              ${index === itemIndex ? 'text-accent' : 'text-white'}
            `}
          >
            <span className="relative z-10">{item.title}</span>
            {index === itemIndex && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-accent" />
            )}
          </button>
          
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
              <div className="grid grid-cols-3 gap-2 w-full max-w-3xl">
                {item.items.map((listItem, listIndex) => (
                  <motion.div
                    key={listIndex}
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="bg-white/10 p-1.5 rounded-lg backdrop-blur-sm"
                  >
                    <div className="text-accent font-semibold text-xs">{listItem.name}</div>
                    <div className="text-[10px] text-gray-400">{listItem.description}</div>
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
