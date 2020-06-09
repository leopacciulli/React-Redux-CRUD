import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: #fff;
  border-radius: 8px;
  width: 100%;
  font-size: 16px;

  & + div {
    margin-top: 24px;
  }

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 1px solid #ddd;
    color: #333;
    height: 40px;
    border-radius: 8px;
    padding: 0 16px;

    &::placeholder {
      color: #b7b7cc;
    }
  }
`;
