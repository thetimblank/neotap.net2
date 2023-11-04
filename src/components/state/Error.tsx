import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
   dependants?: unknown[];
   suppress?: boolean;
   className?: string;
}

const Error: React.FC<Props> = ({ children, dependants, suppress, className }) => {
   if (!suppress) {
      console.error(children);
   }

   if (dependants && process.env.NODE_ENV === 'development') {
      dependants.forEach((i) => console.error(i));
   }

   return <p className={`error ${className}`}>Aw snap, {children}</p>;
};

export default Error;
