'use client';

import { useEffect, useState } from 'react';
import './page.css';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useViewportSize } from '@mantine/hooks';
import Link from 'next/link';

interface CPS {
   average: number;
   seconds: number;
}

const Page: React.FC = () => {
   const [rotation, setRotation] = useState<number>(0);
   const [cps, setCps] = useState<CPS>({
      average: 0,
      seconds: 0,
   });
   const { height, width } = useViewportSize();

   const handleClick = () => {
      setRotation((prev) => prev + 180);
   };

   useEffect(() => {
      const timer = setInterval(() => {
         setCps({ average: Math.floor(rotation / 180 / cps.seconds), seconds: cps.seconds + 1 });
      }, 1000);

      return () => clearInterval(timer);
   }, [cps, rotation]);

   return (
      <div className='full center clicker'>
         <motion.div
            className='back'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'anticipate', duration: 1, delay: 1.5 }}>
            <Link href='/'>
               <svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'>
                  <path d='m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z' />
               </svg>
            </Link>
         </motion.div>
         {rotation / 180 >= 100 && <Confetti width={width} height={height} recycle={false} />}
         <motion.div
            initial={{ opacity: 0, y: -500, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ease: 'anticipate', duration: 1.5 }}>
            <motion.svg
               onClick={handleClick}
               className='neotap'
               viewBox='0 0 320 320'
               initial={{ height: '20vw', width: '20vw' }}
               animate={{ rotate: rotation }}
               whileHover={{ height: '25vw', width: '25vw' }}
               transition={{ type: 'spring', duration: 0.2 }}>
               <path d='M13.9549 206L32.0149 115.7H49.3009L88.1299 181.103L81.2929 180.716L94.1929 115.7H114.833L96.7729 206H79.6159L40.6579 140.597L47.6239 140.984L34.5949 206H13.9549ZM148.194 152.078H191.667L188.442 168.332H144.969L148.194 152.078ZM142.26 189.23H191.538L188.055 206H118.137L136.197 115.7H204.438L200.955 132.47H153.612L142.26 189.23ZM251.51 207.548C242.394 207.548 234.525 205.914 227.903 202.646C221.367 199.292 216.336 194.691 212.81 188.843C209.284 182.909 207.521 176.072 207.521 168.332C207.521 160.592 208.854 153.454 211.52 146.918C214.186 140.296 217.97 134.577 222.872 129.761C227.86 124.859 233.751 121.032 240.545 118.28C247.425 115.528 255.036 114.152 263.378 114.152C272.494 114.152 280.32 115.829 286.856 119.183C293.478 122.451 298.552 127.052 302.078 132.986C305.604 138.834 307.367 145.628 307.367 153.368C307.367 161.108 306.034 168.289 303.368 174.911C300.702 181.447 296.875 187.166 291.887 192.068C286.985 196.884 281.094 200.668 274.214 203.42C267.42 206.172 259.852 207.548 251.51 207.548ZM253.316 189.746C258.39 189.746 262.948 188.843 266.99 187.037C271.118 185.145 274.601 182.565 277.439 179.297C280.277 176.029 282.427 172.288 283.889 168.074C285.437 163.774 286.211 159.259 286.211 154.529C286.211 150.057 285.265 146.144 283.373 142.79C281.481 139.35 278.686 136.684 274.988 134.792C271.376 132.9 266.904 131.954 261.572 131.954C256.498 131.954 251.94 132.9 247.898 134.792C243.856 136.598 240.373 139.135 237.449 142.403C234.611 145.671 232.418 149.455 230.87 153.755C229.408 157.969 228.677 162.441 228.677 167.171C228.677 171.643 229.623 175.599 231.515 179.039C233.493 182.393 236.288 185.016 239.9 186.908C243.598 188.8 248.07 189.746 253.316 189.746Z' />
            </motion.svg>
         </motion.div>
         <motion.div
            className='flex-col flex-align flex-gap'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'anticipate', duration: 1, delay: 1.5 }}
            style={{ position: 'absolute', bottom: '12.5%' }}>
            <h2>{rotation / 180} taps</h2>
            <p style={{ color: 'var(--text-l2)' }}>
               {cps.average} cps at {cps.seconds}s
            </p>
         </motion.div>
      </div>
   );
};
export default Page;
