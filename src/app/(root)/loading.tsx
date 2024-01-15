import Loading from '@/components/state/Loading';
import React from 'react';

const loading: React.FC = () => {
   return (
      <div className='overlay center'>
         <Loading />
      </div>
   );
};

export default loading;
