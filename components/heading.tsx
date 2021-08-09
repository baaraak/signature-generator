import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Heading = ({ children, className }: Props) => {
  return (
    <h3 className={`font-bold text-gray-800 uppercase ${className}`}>
      {children}
    </h3>
  );
};

export default Heading;
