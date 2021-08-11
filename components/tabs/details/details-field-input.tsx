import React, { useState } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import { AiOutlineDelete, AiOutlineMore } from 'react-icons/ai';
import Input from '../../input';

type Props = {
  mandatory: boolean;
  handleDelete: () => void;
  isDragging: boolean;
  provided: DraggableProvided;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const DetailsFieldInput = ({
  mandatory,
  provided,
  isDragging,
  handleDelete,
  onBlur,
  ...inputProps
}: Props) => {
  const [hovered, setHovered] = useState(false);

  const hoverClasses = hovered ? 'opacity-1' : 'opacity-0';
  return (
    <div
      {...provided.draggableProps}
      ref={provided.innerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex -ml-4"
    >
      <div {...provided.dragHandleProps}>
        <AiOutlineMore
          className={`mr-1 mt-2 transition duration-500 cursor-move ${hoverClasses}`}
        />
      </div>
      <Input
        {...inputProps}
        onBlur={onBlur}
        className={`mb-7 flex-1 ${isDragging ? 'shadow-xl' : ''}`}
      />
      {!mandatory && (
        <AiOutlineDelete
          onClick={handleDelete}
          className={`absolute right-2 top-1 text-xl text-red-400 transition duration-500 cursor-pointer ${hoverClasses}`}
        />
      )}
    </div>
  );
};

export default DetailsFieldInput;
