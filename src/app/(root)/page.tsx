'use client';

import React, { useContext, useState } from 'react';
import Scrollable from '@/components/Scrollable';
import './page.css';
import { motion } from 'framer-motion';
import { ThemeContext, ThemeContextValues } from '@/providers/ThemeContext';
import Section from './Section';
import Render from './Render';
import Footer from '@/components/footer/Footer';
import Loading from '@/components/state/Loading';

const Page: React.FC = () => {
   const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextValues;
   const [scrollLock, setScrollLock] = useState<boolean>(false);

   return (
      <Scrollable locked={scrollLock} className='home'>
         <motion.div
            className='overlay center'
            style={{ backgroundColor: 'var(--bg-h1)' }}
            transition={{ type: 'spring', delay: 0.1, duration: 0.3 }}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: '-100%' }}>
            <Loading />
         </motion.div>
         <Render theme={theme} />
         <div className='header flex-col flex-align center-text'>
            <motion.h1 initial={{ y: 0, scale: 4.5 }} transition={{ type: 'spring', duration: 1 }} animate={{ y: 0, scale: 1 }}>
               hey, i&apos;m neo.
            </motion.h1>
         </div>
         <div className='experience'>
            <motion.h3
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ ease: 'anticipate', duration: 1, delay: 1.1 }}>
               I come from Germany and have found a passion for coding and developing small projects.
            </motion.h3>
            <motion.h3
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ ease: 'anticipate', duration: 1, delay: 1.1 }}>
               I&apos;d love to expand my experience in much larger projects. If you think you could help, let me know at{' '}
               <button className=''>
                  <svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'>
                     <path d='M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z' />
                  </svg>
                  Hello
               </button>
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
