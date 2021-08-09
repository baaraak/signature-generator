import React, { useState } from 'react';
import { AiOutlineCamera, AiOutlineEdit, AiOutlineMore, AiOutlinePlus, AiOutlineUnorderedList } from 'react-icons/ai';
import Heading from '../heading';
import Input from '../input';

const Details = () => {
  return (
    <div className="p-6 transition animate-enter-left">
      <Heading className="mb-5">signature details</Heading>
      <div className="flex">
        <div className="flex-1">
          <Input id="name" label="Name" className="mb-7"/>
          <Input id="title" className="mb-7" label="Title" className="mb-7"/>
          <InputWithActions id="address" className="mb-7" label="Address" />
          <InputWithActions id="phone" className="mb-7" label="Phone" />
          <InputWithActions id="mobile" className="mb-7" label="Mobile" />
          <InputWithActions id="website" className="mb-7" label="Website" />
          <InputWithActions id="email" className="mb-7" label="Email" />
          <InputWithActions id="skype" className="mb-7" label="Skype" />
          <div className="text-blue-400 flex items-center cursor-pointer hover:text-blue-500 "><AiOutlinePlus className="mr-2"/> Add a field</div>
        </div>
        <div className="pl-6">
          <div className="shadow border-dashed border rounded-lg border-gray-400 bg-gray-100 flex justify-center items-center flex-col h-28  w-28 font-light text-gray-800 cursor-pointer opacity-70 hover:opacity-100 hover:shadow-lg transition">
            <span className="mb-2 text-2xl"><AiOutlineCamera /></span>
            <span className="text-center text-sm">Upload<br />image</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputWithActions = ({...inputProps}) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="relative flex -ml-4">
      <AiOutlineMore className={`mr-1 mt-2 ${hovered ? 'opacity-1' : 'opacity-0'} transition`} />
    <Input {...inputProps} className="mb-7 flex-1"/>
      <AiOutlineEdit className={`absolute right-0 top-1 text-xl text-blue-400  ${hovered ? 'opacity-1' : 'opacity-0'} transition`} />
  </div>
  )
}

export default Details;
