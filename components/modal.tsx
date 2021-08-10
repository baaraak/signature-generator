import React from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import ClientOnlyPortal from './client-portal';

type Props = {
  open: boolean;
  children: React.ReactNode;
  onClose?: () => void;
};

const Modal = ({ open, children, onClose }: Props) => {
  if (!open) return null;
  return (
    <ClientOnlyPortal selector="body">
      <div className="fixed inset-0 z-40 flex items-center justify-center flex-col">
        <div className="opacity-60">
          <div className="absolute inset-0 bg-gray-900 opacity-60 animate__animated animate__fadeIn" />
        </div>
        <div className="bg-white z-50 p-5 rounded-xl shadow-xl animate__animated animate__fadeInUp relative">
          {children}
          <div
            onClick={onClose}
            className="absolute -right-5 -top-5 text-white text-xl cursor-pointer"
          >
            <AiOutlineClose />
          </div>
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export default Modal;
