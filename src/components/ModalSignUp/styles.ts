import styled from 'styled-components';

export const Form = styled.div`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 40px;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 24px;
    color: #333;
  }

  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #333;
    color: #fff;

    margin-top: 48px;
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 12px 40px;
    }
  }
`;
