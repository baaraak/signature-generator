import React, { useState } from 'react';
import {
  AiOutlineCamera,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineMore,
  AiOutlinePlus,
  AiOutlineUnorderedList,
} from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import detailsAtom from '../../recoil/detailsAtom';
import Heading from '../heading';
import Input from '../input';

const Details = () => {
  const [details, setDetails] = useRecoilState(detailsAtom);

  const onChange = (e) => {
    console.log('***********************');
    console.log(e.target.name);
    console.log(e.target.id);
    console.log(e.target.value);
    console.log('***********************');
  };

  return (
    <div className="p-6 transition animate-enter-left">
      <Heading className="mb-5">signature details</Heading>
      <div className="flex">
        <div className="flex-1">
          {details.map((row) => (
            <InputWithActions
              key={row.id}
              className="mb-7"
              onBlur={onChange}
              {...row}
            />
          ))}
          <div className="text-blue-400 flex items-center cursor-pointer hover:text-blue-500 ">
            <AiOutlinePlus className="mr-2" /> Add a field
          </div>
        </div>
        <div className="pl-6">
          <div className="shadow border-dashed border rounded-lg border-gray-400 bg-gray-100 flex justify-center items-center flex-col h-28  w-28 font-light text-gray-800 cursor-pointer opacity-70 hover:opacity-100 hover:shadow-lg transition">
            <span className="mb-2 text-2xl">
              <AiOutlineCamera />
            </span>
            <span className="text-center text-sm">
              Upload
              <br />
              image
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputWithActions = ({ mandatory, ...inputProps }: any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex -ml-4"
    >
      <AiOutlineMore
        className={`mr-1 mt-2 ${
          hovered ? 'opacity-1' : 'opacity-0'
        } transition duration-500 cursor-move`}
      />
      <Input {...inputProps} className="mb-7 flex-1" />
      {!mandatory && (
        <>
          <AiOutlineDelete
            className={`absolute right-6 top-1 text-xl text-red-400  ${
              hovered ? 'opacity-1' : 'opacity-0'
            } transition duration-500 cursor-pointer`}
          />
          <AiOutlineEdit
            className={`absolute right-0 top-1 text-xl text-blue-400  ${
              hovered ? 'opacity-1' : 'opacity-0'
            } transition duration-500 cursor-pointer`}
          />
        </>
      )}
    </div>
  );
};

export default Details;
