import React from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import { Actions, Post, Content, User, Text } from './styles';

interface IProps {
  handleOpenDelete: (id: number) => any;
  handleOpenEdit: (id: number, title: string, content: string, username: string, created_datetime: string) => any;
  id: number;
  title: string;
  username: string;
  created_datetime: string;
  content: string;
  userLogged: string;
}

const PostLeap: React.FC<IProps> = ({
  handleOpenDelete,
  handleOpenEdit,
  id,
  title,
  username,
  created_datetime,
  content,
  userLogged
}) => {
  const start = new Date(created_datetime).getTime();
  const end = new Date().getTime();
  const duration = end - start;

  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  const stringHours = hours;
  const stringMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let date = `${stringHours} hours ago`;
  if (stringHours === 0) {
    date = `${stringMinutes} minutes ago`
  }

  return (
    <Post>
      <header>
        <p>{title}</p>
        {userLogged && userLogged === username &&
          <Actions>
            <FiTrash2 onClick={() => handleOpenDelete(id)} />
            <FiEdit onClick={() => handleOpenEdit(id, title, content, username, date)} />
          </Actions>
        } 
      </header>

      <Content>
        <User>
          <p>@{username}</p>
          <p>{date}</p>
        </User>

        <Text>{content}</Text>
      </Content>
    </Post>
  );
};

export default PostLeap;
