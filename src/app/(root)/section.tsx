import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
                  <div className='item' key={_i}>
                     {item.link ? (
                        <Link href={item.link} target='_blank'>
                           <h3 className='a'>{item.name}</h3>
                        </Link>
                     ) : (
                        <h3>{item.name}</h3>
                     )}

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
                        <motion.h2
                           initial={{ opacity: 0, y: 50 }}
                           transition={{ duration: 1, ease: 'anticipate' }}
                           viewport={{ once: true }}
                           whileInView={{ opacity: 1, y: 0 }}>
                           <Dates startDate={item.startDate} endDate={item.endDate} />
                        </motion.h2>
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
