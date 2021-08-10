import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: MouseEvent) => void;
  color?: string;
};

const Button = ({ children, className, onClick, color }: Props) => {
  return (
    <button
      className={`font-semibold py-2 px-4 border rounded shadow ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
