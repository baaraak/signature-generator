import React, { useCallback, useMemo, useState } from 'react';
import {
  AiOutlineCamera,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineMore,
  AiOutlinePlus,
} from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import detailsAtom, {
  DETAILS_FIELDS,
  Field,
} from '../../../recoil/detailsAtom';
import Button from '../../button';
import Heading from '../../heading';
import Input from '../../input';
import Modal from '../../modal';
import Select from '../../select';
import AddFieldModal from './add-field-modal';

const Details = () => {
  const [details, setDetails] = useRecoilState(detailsAtom);
  const [addFieldModalVisible, setAddFieldModalVisible] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setDetails((prev) => prev.map((p) => (p.id === id ? { ...p, value } : p)));
  };

  const onAddField = (fieldId: string) => {
    const fieldById = DETAILS_FIELDS.find((f) => f.id === fieldId);
    if (fieldById) setDetails((prev) => prev.concat(fieldById));
    setAddFieldModalVisible(false);
  };

  const fields = useMemo(() => {
    const currentFieldsIds = details.map((f) => f.id);
    return DETAILS_FIELDS.filter((d) => !currentFieldsIds.includes(d.id));
  }, [details]);

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
      {addFieldModalVisible && (
        <AddFieldModal
          onAdd={onAddField}
          fields={fields}
          onClose={() => setAddFieldModalVisible(false)}
        />
      )}
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
