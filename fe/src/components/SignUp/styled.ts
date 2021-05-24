import styled from '@emotion/styled';

export const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
`;

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10%;
  & > div {
    padding: 20px 0;
  }
`;
