import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
   children: React.ReactNode;
   className?: string;
}

const Scrollable: React.FC<Props> = ({ children, className }) => {
   return (
      <main className={`center ${className}`}>
         <div className='page'>{children}</div>
      </main>
   );
};

export default Scrollable;
