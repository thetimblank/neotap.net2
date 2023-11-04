import React from 'react';
import './State.css';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
   size?: 'small' | 'large';
   noFullPage?: boolean;
}

const Loading: React.FC<Props> = ({ size, noFullPage }) => {
   return (
      <div className={`${noFullPage ? '' : 'full '}center`}>
         <div className={`loader ${size === 'small' ? 'small' : ''}`}>
            <div />
            <div />
            <div />
            <div />
         </div>
      </div>
   );
};

export default Loading;
