import React, { useState } from 'react';

// const FloatingLabelInput = styled.div`
//   width: 100%;
// `;

// const FloatingLabelInputContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   position: relative;
//   height: 2em;
//   border-bottom: 1px solid #ddd;
//   font-size: inherit;
// `;

// const FloatingLabel = styled.label`
//   padding: 0;
//   margin: 0;
//   border: 0;
//   position: absolute;
//   color: #9b9b9b;
//   bottom: 0;
//   transition: all 0.2s ease-in-out;
//   transform-origin: left top;
//   font-size: 1em;
//   cursor: text;
//   pointer-events: none;
//   width: 66.6%;
//   transform: ${(props) =>
//     props.active ? 'translate3d(0, -70%, 0) scale(0.70)' : 'none'};
// `;

// const FloatingInput = styled.input`
//   padding: 0;
//   margin: 0;
//   border: none;
//   outline: none;
//   font-size: 1em;
//   &::placeholder {
//     color: #9b9b9b;
//     opacity: ${(props) => (props.active ? 1 : 0)};
//     transition: opacity 0.2s cubic-bezier(0.6, 0.04, 0.98, 0.335);
//   }
// `;

type Props = {
  id?: string;
  value?: string;
  className?: string;
  type?: string;
  label?: string;
  inputProps: any;
};

const Input = ({
  id,
  label,
  type = 'text',
  className,
  value,
  ...inputProps
}: Props) => {
  const [active, setActive] = useState(value && value.length > 0);
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
        className={`p-0 m-0 border-none outline-none font-light ${
          active ? 'placeholder-opacity-100' : 'placeholder-opacity-0'
        };`}
        onBlur={(e) => setActive(e.target.value.length !== 0)}
        onFocus={() => setActive(true)}
      />
    </div>
  );
};

export default Input;
