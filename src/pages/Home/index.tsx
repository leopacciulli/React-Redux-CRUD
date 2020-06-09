import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Input from '../../components/Input';
import ModalDeletePost from '../../components/ModalDeletePost';
import ModalEditPost from '../../components/ModalEditPost';
import PostLeap from '../../components/PostLeap';
import TextArea from '../../components/TextArea';
import api from '../../services/api';
import { IReduxState } from '../../store/types';
import { BlockInput, Container, FormYourMind, Loading } from './styles';
import ReactLoading from "react-loading";

interface ICareersProps {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [careers, setCareers] = useState<ICareersProps[]>([]);
  const [idPostToDelete, setIdPostToDelete] = useState(0);
  const [postToEdit, setPostToEdit] = useState<ICareersProps>({} as ICareersProps);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const redux = useSelector((state: IReduxState) => state.user);

  useEffect(() => {
    async function getCareers(): Promise<void> {
      const response = await api.get('/careers/');

      const orderedItemsByDate = response.data.results.sort(
        (left: ICareersProps, right: ICareersProps) => {
          return moment
            .utc(left.created_datetime)
            .diff(moment.utc(right.created_datetime));
        },
      ).reverse();

      setCareers(orderedItemsByDate);
    }

    getCareers();
  }, []);

  const handeCreatePost = async (): Promise<void> => {
    if (title !== '' && content !== '') {
      setLoading(true)
      const createPost = {
        username: redux.username,
        title,
        content,
      };
      const response = await api.post('/careers/', createPost);
      const newCareer = response.data;

      const results = [...careers, newCareer];

      const orderedItemsByDate = results.sort(
        (left: ICareersProps, right: ICareersProps) => {
          return moment
            .utc(left.created_datetime)
            .diff(moment.utc(right.created_datetime));
        },
      ).reverse();
      setTitle('')
      setContent('')
      setCareers(orderedItemsByDate);
      setLoading(false)
    }
  };

  const handleOpenDelete = (id: number): void => {
    setModalDelete(true);
    setIdPostToDelete(id)
  };

  const handleOpenEdit = (id: number, title: string, content: string, username: string, created_datetime: string): void => {
    setModalEdit(true);
    const edit = { id, title, content, username, created_datetime }
    setPostToEdit(edit)
  };

  const handleCancel = (): void => {
    setModalDelete(false);
    setModalEdit(false);
  };

  const handleDelete = async (): Promise<void> => {
    setLoading(true)
    setModalDelete(false);
    await api.delete(`/careers/${idPostToDelete}/`);
    setCareers(careers.filter(career => career.id !== idPostToDelete));
    setLoading(false)
  };

  const handleSaveEdit = async (data: any): Promise<void> => {
    setModalEdit(false);
    setLoading(true)
    const newPostList = careers.map(career => {
      if (career.id !== postToEdit.id) {
        return career;
      }

      return {
        id: postToEdit.id,
        title: data.title,
        content: data.content,
        username: data.username,
        created_datetime: data.created_datetime
      };
    });

    setCareers(newPostList);
    await api.patch(`/careers/${postToEdit.id}/`, data);
    setLoading(false)
  };

  if (loading) {
    return (
      <Loading>
        <ReactLoading type={'spin'} color="#333" />
      </Loading>
    )
  }

  return (
    <Container>
      <header>
        <h3>CodeLeap Network</h3>
      </header>

      <FormYourMind>
        <h2>What`s on your mind?</h2>

        <BlockInput>
          <p>Title</p>
          <Input
            name="title"
            onChange={e => setTitle(e.target.value)}
            placeholder="Hello World"
          />
        </BlockInput>

        <BlockInput>
          <p>Content</p>
          <TextArea
            name="content"
            onChange={e => setContent(e.target.value)}
            placeholder="Content Here"
          />
        </BlockInput>

        <button disabled={false} type="button" onClick={handeCreatePost}>
          <p className="text">Create</p>
        </button>
      </FormYourMind>

      {careers.map(career => (
        <PostLeap
          key={career.id}
          id={career.id}
          title={career.title}
          username={career.username}
          userLogged={redux.username}
          created_datetime={career.created_datetime}
          content={career.content}
          handleOpenDelete={() => handleOpenDelete(career.id)}
          handleOpenEdit={() => handleOpenEdit(career.id, career.title, career.content, career.username, career.created_datetime)}
        />
      ))}

      <ModalDeletePost
        isOpen={modalDelete}
        handleCancel={handleCancel}
        handleDelete={handleDelete}
      />

      <ModalEditPost
        isOpen={modalEdit}
        postToEdit={postToEdit}
        handleCancel={handleCancel}
        handleSave={handleSaveEdit}
      />
    </Container>
  );
};

export default Home;
