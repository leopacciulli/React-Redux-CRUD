import React, { useState } from 'react';
import Input from '../Input';
import Modal from '../Modal';
import TextArea from '../TextArea';
import { BlockInput, Buttons, Form } from './styles';

interface IPostToEdit {
  title: string;
  content: string;
  username: string;
  created_datetime: string;
}

interface IModalProps {
  isOpen: boolean;
  handleCancel: () => void;
  handleSave: (data: IPostToEdit) => void;
  postToEdit: IPostToEdit
}

const ModalEditPost: React.FC<IModalProps> = ({
  isOpen,
  handleCancel,
  handleSave,
  postToEdit
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const submit = () => {
    const data = {
      title: title !== '' ? title : postToEdit.title,
      content: content !== '' ? content : postToEdit.content,
      username: postToEdit.username,
      created_datetime: postToEdit.created_datetime
    }
    handleSave(data)
  }
  

  return (
    <Modal isOpen={isOpen}>
      <Form>
        <h1>Edit Item</h1>

        <BlockInput>
          <p>Title</p>
          <Input
            name="title"
            onChange={e => setTitle(e.target.value)}
            defaultValue={postToEdit.title}
          />
        </BlockInput>

        <BlockInput>
          <p>Content</p>
          <TextArea
            name="content"
            onChange={e => setContent(e.target.value)}
            defaultValue={postToEdit.content}
          />
        </BlockInput>

        <Buttons>
          <button type="button" onClick={handleCancel}>
            <p className="text">Cancel</p>
          </button>
          <button type="button" onClick={submit}>
            <p className="text">Save</p>
          </button>
        </Buttons>
      </Form>
    </Modal>
  );
};

export default ModalEditPost;
