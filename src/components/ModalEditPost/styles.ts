import styled from 'styled-components';

export const Form = styled.div`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
`;

export const BlockInput = styled.div`
  margin-top: 24px;

  p {
    margin-bottom: 8px;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;

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
    margin-right: 24px;
    align-self: flex-end;
    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 12px 40px;
    }
  }
`;
