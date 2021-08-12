import React, { useState } from 'react';
import dynamic from 'next/dynamic';

type Props = {
  id?: string;
  value?: string;
  className?: string;
  type?: string;
  label?: string;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  id,
  label,
  type = 'text',
  className,
  value,
  onBlur,
  onFocus,
}: Props) => {
  const [active, setActive] = useState(value && value.length > 0);
  console.log('***********************');
  console.log(value);
  console.log(active);
  console.log('***********************');
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActive(e.target.value.length !== 0);
    if (typeof onBlur === 'function') {
      onBlur(e);
    }
  };

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActive(true);
    if (typeof onFocus === 'function') {
      onFocus(e);
    }
  };

  return (
    <div
      className={`flex flex-col justify-end py-1 relative border-b ${className}`}
    >
      {label && (
        <label
          className={`p-0 m-0 border-none font-light text-gray-500 absolute transition origin-top-left pointer-events-none w-4/6 ${
            active ? 'label-transform' : 'transform-none'
          }`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        defaultValue={value}
        className={`p-0 m-0 border-none outline-none font-light ${
          active ? 'placeholder-opacity-100' : 'placeholder-opacity-0'
        };`}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </div>
  );
};

// disable ssr, causing issues with conditional className
export default dynamic(() => Promise.resolve(Input), {
  ssr: false,
});
