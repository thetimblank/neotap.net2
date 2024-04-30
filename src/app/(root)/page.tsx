'use client';

import React, { useContext, useState } from 'react';
import Scrollable from '@/components/Scrollable';
import './page.css';
import { motion } from 'framer-motion';
import { ThemeContext, ThemeContextValues } from '@/providers/ThemeContext';
import Section from './section';
import Render from './Render';
import Footer from '@/components/footer/Footer';

const Page: React.FC = () => {
   const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextValues;
   const [scrollLock, setScrollLock] = useState<boolean>(false);

   return (
      <Scrollable locked={scrollLock} className='home'>
         <motion.div
            className='overlay center'
            style={{ backgroundColor: 'var(--bg-h1)' }}
            initial={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', delay: 0.1, duration: 1 }}
            animate={{ y: '-100%', opacity: 0 }}>
            <h3>loading...</h3>
         </motion.div>
         <Render theme={theme} />
         <div style={{ position: 'absolute' }}>
            <button className='btn' onClick={() => changeTheme('light')}>
               light
            </button>
            <button className='btn' onClick={() => changeTheme('dark')}>
               dark
            </button>
            <button className='btn' onClick={() => setScrollLock((e) => !e)}>
               scroll lock is {scrollLock ? 'on' : 'off'}
            </button>
         </div>
         <div className='header flex-col flex-align center-text'>
            <motion.h1 initial={{ y: 0, scale: 4.5 }} transition={{ type: 'spring', duration: 1 }} animate={{ y: 0, scale: 1 }}>
               hey, i'm neo.
            </motion.h1>
         </div>
         <div className='experience'>
            <motion.h3
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ ease: 'anticipate', duration: 1, delay: 1.1 }}>
               I design sites with a focus on quality of life features & simplicity.
            </motion.h3>
            <motion.h3
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ ease: 'anticipate', duration: 1, delay: 1.1 }}>
               The sites I make promise interactivity, a responsive UI, & ease of use.
            </motion.h3>
            <Section
               title="where i've been"
               data={[
                  {
                     name: 'Vase Oasis',
                     roles: ['Lead Web & App Developer', 'Engineer'],
                     link: 'https://vaseoasis.com',
                     startDate: new Date(2023, 7),
                     endDate: 'Present',
                  },
                  {
                     name: 'Bloodline Interactive',
                     roles: ['Lead Web Developer', 'Engine Developer'],
                     link: 'https://bloodline.neotap.net',
                     startDate: new Date(2023, 7),
                     endDate: 'Present',
                  },
                  {
                     name: 'Project Hydra',
                     roles: ['Lead Web Developer'],
                     link: 'https://hydra.neotap.net',
                     startDate: new Date(2022, 9),
                     endDate: new Date(2023, 7),
                  },
                  {
                     name: "how's your day",
                     roles: ['Personal Project'],
                     link: 'https://howsyourday.neotap.net',
                     startDate: new Date(2023, 7),
                  },
               ]}
            />
            <Section
               title="what i've learned"
               data={[
                  {
                     name: 'Languages',
                     roles: ['English', 'German', 'Basic Spanish'],
                  },
                  {
                     name: 'Actual Languages',
                     roles: ['Typescript', 'Python', 'Java', 'Basic Rust', 'Basic C++'],
                  },
                  // {
                  //    name: 'Concepts',
                  //    roles: ['Algorithms', 'Data Structures'],
                  // },
               ]}
            />
         </div>
         <Footer />
      </Scrollable>
   );
};

export default Page;
