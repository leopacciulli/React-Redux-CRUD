import React from 'react';
import Modal from '../Modal';
import { Buttons, Form } from './styles';

interface IModalProps {
  isOpen: boolean;
  handleCancel: () => void;
  handleDelete: () => void;
}

const ModalDeletePost: React.FC<IModalProps> = ({
  isOpen,
  handleCancel,
  handleDelete,
}) => {
  return (
    <Modal isOpen={isOpen}>
      <Form>
        <h4>Are you sure you want to delete this item?</h4>

        <Buttons>
          <button type="button" onClick={handleCancel}>
            <p className="text">Cancel</p>
          </button>
          <button type="button" onClick={handleDelete}>
            <p className="text">Ok</p>
          </button>
        </Buttons>
      </Form>
    </Modal>
  );
};

export default ModalDeletePost;
