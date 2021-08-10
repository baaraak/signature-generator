import React, { useState } from 'react';
import { Field } from '../../../recoil/detailsAtom';
import Button from '../../button';
import Heading from '../../heading';
import Modal from '../../modal';
import Select from '../../select';

type Props = {
  onClose: () => void;
  onAdd: (fieldId: string) => void;
  fields: Field[];
};

const AddFieldModal = ({ onClose, fields, onAdd }: Props) => {
  const [value, setValue] = useState<string>('');
  return (
    <Modal open onClose={onClose}>
      <div className="flex flex-col w-64 px-4 text-center">
        <Heading className="mb-4 text-xl">Add a field</Heading>
        <Select
          className="mb-2"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>): void =>
            setValue(e.target.value)
          }
        >
          <option value="" disabled selected>
            Choose field label
          </option>
          {fields.map((f) => (
            <option key={f.id} value={f.id}>
              {f.label}
            </option>
          ))}
        </Select>
        <Button
          onClick={() => onAdd(value)}
          disabled={!!!value.length}
          className="bg-red-500 hover:bg-red-400 text-white border-red-700 mt-4"
        >
          Add field
        </Button>
        <Button
          className="bg-white hover:bg-gray-100 text-gray-800 border-gray-400 mt-2"
          onClick={onClose}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default AddFieldModal;
