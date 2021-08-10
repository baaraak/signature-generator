import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  color?: string;
  disabled?: boolean;
};

const Button = ({ children, className, onClick, color, disabled }: Props) => {
  return (
    <button
      className={`font-semibold text-sm py-2 px-4 border rounded shadow ${className} ${
        disabled ? 'opacity-50 pointer-events-none' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
