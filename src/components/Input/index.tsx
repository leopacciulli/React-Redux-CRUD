import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<IInputProps> = ({ onChange, placeholder, defaultValue }) => {
  return (
    <Container>
      <input onChange={onChange} placeholder={placeholder} defaultValue={defaultValue} />
    </Container>
  );
};

export default Input;
