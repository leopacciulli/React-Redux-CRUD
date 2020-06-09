import styled from 'styled-components';

export const Post = styled.div`
  border: 1px solid #999999;
  box-sizing: border-box;
  margin: 44px 37px 35px;
  margin-bottom: 0;

  header {
    justify-content: space-between;
  }

  p {
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;

    &:first-child {
      margin-right: 32px;
    }
  }
`;

export const Content = styled.div`
  padding: 37px;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #777777;

  p {
    font-size: 18px;
  }

  p:first-child {
    font-weight: bold;
  }
`;

export const Text = styled.div`
  margin-top: 18px;
  font-size: 18px;
  line-height: 21px;
`;
