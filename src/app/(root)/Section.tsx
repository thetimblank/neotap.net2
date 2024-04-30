import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Tooltip } from '@mantine/core';

type Item = {
   name: string;
   description?: string;
   roles?: string[];
   link?: string;
   startDate?: Date;
   endDate?: Date | 'Present';
};

interface Props extends React.HTMLAttributes<HTMLDivElement> {
   title: string;
   data: Item[];
}

const Dates = ({ startDate, endDate }: { startDate?: Date; endDate?: Date | 'Present' }) => {
   let end = typeof endDate === 'string' ? 'Present' : endDate?.getFullYear();

   if (startDate && !endDate) {
      return <p>start. {startDate.getFullYear()}</p>;
   }

   if (!startDate && endDate) {
      return <p>end. {end}</p>;
   }

   if (startDate && endDate) {
      return (
         <p>
            {startDate.getFullYear()}
            {' - '}
            {end}
         </p>
      );
   }

   return null;
};

const Section: React.FC<Props> = ({ title, data }) => {
   return (
      <>
         <h1 className='space-l'>{title}</h1>
         <section>
            {data.map((item, _i) => {
               return (
                  <div className='flex-gap flex-col item' key={_i}>
                     <div className='flex-gap flex-align title'>
                        {item.link ? (
                           <Link href={item.link} target='_blank' className='a'>
                              <h3>{item.name}</h3>
                           </Link>
                        ) : (
                           <h3>{item.name}</h3>
                        )}
                        {item.startDate && item.endDate && (
                           <Tooltip
                              events={{ hover: true, focus: true, touch: true }}
                              label={<Dates startDate={item.startDate} endDate={item.endDate} />}>
                              <svg
                                 tabIndex={0}
                                 className={item.link ? 'a' : ''}
                                 xmlns='http://www.w3.org/2000/svg'
                                 height='24'
                                 viewBox='0 -960 960 960'
                                 width='24'>
                                 <path d='m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z' />
                              </svg>
                           </Tooltip>
                        )}
                     </div>

                     <div className='roles'>
                        {item.description && (
                           <motion.h2
                              initial={{ opacity: 0, y: 50 }}
                              transition={{ duration: 1, ease: 'anticipate' }}
                              viewport={{ once: true }}
                              whileInView={{ opacity: 1, y: 0 }}>
                              {item.description}
                           </motion.h2>
                        )}
                        {item.roles && (
                           <div style={{ gap: '2vh 5vw', flexWrap: 'wrap' }} className='flex-gap flex-align'>
                              {item.roles.map((role, _j) => {
                                 return (
                                    <motion.h2
                                       className='role'
                                       key={_j}
                                       initial={{ opacity: 0, y: 50 }}
                                       viewport={{ once: true }}
                                       transition={{ duration: 1, ease: 'anticipate', delay: _j * 0.2 + 0.2 }}
                                       whileInView={{ opacity: 1, y: 0 }}>
                                       {role}
                                    </motion.h2>
                                 );
                              })}
                           </div>
                        )}
                     </div>
                  </div>
               );
            })}
         </section>
      </>
   );
};

export default Section;
