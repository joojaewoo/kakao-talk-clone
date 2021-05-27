import styled from '@emotion/styled';

export const Container = styled.div`
  box-shadow: 1px 1px 1px gray;
  border-radius: 40%;
  background-color: white;
  width: 110px;
  height: 110px;
  & > svg,
  img {
    width: 110px;
    height: 110px;
    border-radius: 40%;
  }
`;

export const NameContainer = styled.div`
  text-align: center;
  padding: 5px;
  margin: 5px;
  font-size: 20px;
`;
