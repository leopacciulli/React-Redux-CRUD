import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface ITextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const TextArea: React.FC<ITextAreaProps> = ({ onChange, placeholder, defaultValue }) => {
  return (
    <Container>
      <textarea onChange={onChange} placeholder={placeholder}  defaultValue={defaultValue} />
    </Container>
  );
};

export default TextArea;
