'use client';

import React, { useContext, useState } from 'react';
import Scrollable from '@/components/Scrollable';
import './page.css';
import { motion } from 'framer-motion';
import { ThemeContext, ThemeContextValues } from '@/providers/ThemeContext';
import Section from './section';
import Render from './Render';

const Page = () => {
   const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextValues;
   const [scrollLock, setScrollLock] = useState<boolean>(false);

   return (
      <Scrollable locked={scrollLock} className='home'>
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
            <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
               hey, i'm neo.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
               neotap.net neotap.net neotap.net neotap.net neotap.net neotap.net
            </motion.p>
         </div>
         <div className='experience'>
            <h3>I design full stack websites with a focus on quality of life features & simplicity.</h3>
            <h3>The websites I make promise interactivity & responsive UI while being easy to use.</h3>
            <Section
               title="where i've been"
               data={[
                  {
                     name: 'Vase Oasis',
                     roles: ['CEO', 'Lead Web & App Developer', 'Engineer'],
                     link: 'https://bloodline.neotap.net',
                     startDate: new Date(2023, 7),
                     endDate: new Date(2023, 7),
                  },
                  {
                     name: 'Bloodline Interactive',
                     roles: ['Lead Web Developer', 'Engine Developer'],
                     link: 'https://bloodline.neotap.net',
                     startDate: new Date(2023, 7),
                     endDate: new Date(2023, 7),
                  },
                  {
                     name: 'Bloodline Interactive',
                     roles: ['Developer'],
                     link: 'https://bloodline.neotap.net',
                     startDate: new Date(2023, 7),
                  },
                  {
                     name: 'Bloodline Interactive',
                     roles: ['Developer'],
                     link: 'https://bloodline.neotap.net',
                     endDate: new Date(2023, 7),
                  },
                  {
                     name: 'Bloodline Interactive',
                     roles: ['Developer'],
                     link: 'https://bloodline.neotap.net',
                  },
               ]}
            />
            <Section
               title="what i've learned"
               data={[
                  {
                     name: 'Computer Science',
                  },
               ]}
            />
         </div>
      </Scrollable>
   );
};

export default Page;
