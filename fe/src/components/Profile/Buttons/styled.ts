import styled from '@emotion/styled';

export const Button = styled.button`
  border: none;
  border-radius: 100%;
  margin: 5px 15px;
  & > svg {
    width: 30px;
    height: 30px;
    padding: 5px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  padding: 15px;
`;

export const TextContainer = styled.div`
  text-align: center;
`;
