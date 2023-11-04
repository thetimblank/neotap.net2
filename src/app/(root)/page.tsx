import React from 'react';
import Scrollable from '@/components/Scrollable';
import './page.css';
import Link from 'next/link';

const Page = () => {
   return (
      <Scrollable className='home'>
         <div className='header flex-col flex-align center-text'>
            <h1>Flip flavorfly</h1>
            <p>
               Unlock your trading potential with our expertly curated Counter-Strike skin flipping strategies, maximizing your
               profits in the Counter-Strike market.
            </p>
            <Link href='/listings' className='btn'>
               Start Flipping
            </Link>
         </div>
      </Scrollable>
   );
};

export default Page;
