import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 90%;
  height: 100px;
  margin: 5%;
  border-bottom: 1px solid;
`;

export const ImageContainer = styled.div`
  box-shadow: 1px 1px 1px gray;
  border-radius: 40%;
  background-color: white;
  width: 80px;
  height: 80px;
  & > svg,
  img {
    width: 80px;
    height: 80px;
    border-radius: 40%;
  }
`;
export const TextContainer = styled.div`
  width: 60%;
  padding: 10px 20px;
`;

export const NickNameContainer = styled.div`
  font-size: 30px;
  margin-bottom: 5px;
`;

export const StateMessageContainer = styled.div`
  font-size: 16px;
`;
