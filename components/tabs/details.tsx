import React, { useState } from 'react';
import {
  AiOutlineCamera,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineMore,
  AiOutlinePlus,
} from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import detailsAtom from '../../recoil/detailsAtom';
import Button from '../button';
import Heading from '../heading';
import Input from '../input';
import Modal from '../modal';

const Details = () => {
  const [details, setDetails] = useRecoilState(detailsAtom);
  const [addFieldModalVisible, setAddFieldModalVisible] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setDetails((prev) => prev.map((p) => (p.id === id ? { ...p, value } : p)));
  };

  return (
    <div className="p-6 animate__animated animate__bounceInLeft">
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
          <div
            onClick={() => setAddFieldModalVisible(true)}
            className="text-blue-400 inline-flex items-center cursor-pointer hover:text-blue-500 "
          >
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
      <Modal
        open={addFieldModalVisible}
        onClose={() => setAddFieldModalVisible(false)}
      >
        <div className="flex flex-col w-64 px-4 text-center">
          <Heading className="mb-4 text-xl">Add a field</Heading>
          <select>
            <option value="">1</option>
            <option value="">2</option>
          </select>
          <Button className="bg-red-500 hover:bg-red-400 text-white border-red-700 mt-4">
            Add field
          </Button>
          <Button
            className="bg-white hover:bg-gray-100 text-gray-800 border-gray-400 mt-2"
            onClick={() => setAddFieldModalVisible(false)}
          >
            Cancel
          </Button>
        </div>
      </Modal>
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
