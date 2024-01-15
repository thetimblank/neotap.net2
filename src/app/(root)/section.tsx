import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Item = {
   name: string;
   description?: string;
   roles?: string[];
   link?: string;
   startDate?: Date;
   endDate?: Date;
};

interface Props {
   title: string;
   data: Item[];
}

const Dates = ({ startDate, endDate }: { startDate?: Date; endDate?: Date }) => {
   if (startDate && !endDate) {
      return (
         <p>
            start. {startDate.toLocaleString('default', { month: 'long' })}, {startDate.getFullYear()}
         </p>
      );
   }

   if (!startDate && endDate) {
      return (
         <p>
            end. {endDate.toLocaleString('default', { month: 'long' })}, {endDate.getFullYear()}
         </p>
      );
   }

   if (startDate && endDate) {
      return (
         <p>
            {startDate.toLocaleString('default', { month: 'long' })}, {startDate.getFullYear()}
            {' - '}
            {endDate.toLocaleString('default', { month: 'long' })}, {endDate.getFullYear()}
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
                        <Link href={item.link}>
                           <h3 className='a'>{item.name}</h3>
                        </Link>
                     ) : (
                        <h3>{item.name}</h3>
                     )}

                     <div className='roles'>
                        <motion.h2
                           initial={{ opacity: 0, y: 50 }}
                           transition={{ duration: 1, ease: 'anticipate' }}
                           whileInView={{ opacity: 1, y: 0 }}>
                           <Dates startDate={item.startDate} endDate={item.endDate} />
                        </motion.h2>
                        {item.roles && (
                           <div style={{ gap: '5vw' }} className='flex-gap flex-align'>
                              {item.roles.map((role, _j) => {
                                 return (
                                    <motion.h2
                                       className='role'
                                       key={_j}
                                       initial={{ opacity: 0, y: 50 }}
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
