import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Heading = ({ children, className }: Props) => {
  return (
    <h3 className={`font-semibold text-gray-700 ${className}`}>{children}</h3>
  );
};

export default Heading;
