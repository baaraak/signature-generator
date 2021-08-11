import React, { useMemo, useState } from 'react';
import { AiOutlineCamera, AiOutlinePlus } from 'react-icons/ai';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import detailsAtom, { DETAILS_FIELDS } from '../../../recoil/detailsAtom';

import Heading from '../../heading';
import AddFieldModal from './add-field-modal';
import { reorder } from '../../../services/utils';
import DetailsFieldInput from './details-field-input';

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

  const onDeleteField = (fieldId: string) => {
    setDetails((prev) => prev.filter((p) => p.id !== fieldId));
  };

  const onDragEnd = (results: DropResult) => {
    console.log(
      '🚀 ~ file: details.tsx ~ line 32 ~ onDragEnd ~ draggableId, destination, source',
      results
    );
    // dropped outside the list
    if (!results.destination) {
      return;
    }

    if (results.destination.index === results.source.index) {
      return;
    }

    const newDetails = reorder(
      details,
      results.source.index,
      results.destination.index
    );

    setDetails(newDetails);
  };

  const fields = useMemo(() => {
    const currentFieldsIds = details.map((f) => f.id);
    return DETAILS_FIELDS.filter((d) => !currentFieldsIds.includes(d.id));
  }, [details]);

  return (
    <div className="p-6 ">
      <Heading className="mb-5 uppercase">signature details</Heading>
      <div className="flex">
        <div className="flex-1">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {details.map((row, index) => (
                    <Draggable key={row.id} draggableId={row.id} index={index}>
                      {(provided, snapshot) => (
                        <DetailsFieldInput
                          key={row.id}
                          onBlur={onChange}
                          handleDelete={() => onDeleteField(row.id)}
                          provided={provided}
                          isDragging={snapshot.isDragging}
                          {...row}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

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

export default Details;
