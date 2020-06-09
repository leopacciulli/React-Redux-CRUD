import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  padding-bottom: 80px;

  header {
    height: 80px;
    opacity: 0.8;
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 37px;

    h3 {
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;
    }
  }
`;

export const FormYourMind = styled.div`
  margin: 44px 37px 35px;
  padding: 32px;
  border: 1px solid #999999;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

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

export const BlockInput = styled.div`
  margin-top: 24px;

  p {
    margin-bottom: 8px;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`