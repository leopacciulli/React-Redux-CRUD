import React, { useState, useEffect } from 'react';

import ReactModal from 'react-modal';

interface IModalProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  isOpen: boolean;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#FFFFFF',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
