import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Input from '../Input';
import Modal from '../Modal';
import { Form } from './styles';
import { setUserNameAction } from '../../store/user';

const ModalSignUp: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [modalOpen, setModalOpen] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = useCallback(async () => {
    dispatch(setUserNameAction(username));
    setModalOpen(false);
    history.push('/home');
  }, [history, username, dispatch]);

  const handleChange = useCallback((event: any) => {
    const name = event.target.value;
    setUsername(name);
  }, []);

  return (
    <Modal isOpen={modalOpen}>
      <Form>
        <h1>Welcome to CodeLeap network!</h1>

        <h2>Please enter your username</h2>

        <Input
          name="username"
          onChange={text => handleChange(text)}
          placeholder="Username"
        />

        <button disabled={username === ''} type="button" onClick={handleSubmit}>
          <p className="text">Enter</p>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalSignUp;
