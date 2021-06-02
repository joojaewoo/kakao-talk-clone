import styled from '@emotion/styled';

interface Props {
  isMy: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  width: 90%;
  height: ${(props) => (props.isMy ? '80px' : '70px')};
  margin: 0 5% 2% 5%;
  border-bottom: ${(props) => (props.isMy ? '1px solid' : 'none')};
`;

export const TextContainer = styled.div`
  width: 60%;
  padding: 10px 20px;
`;

export const NickNameContainer = styled.div`
  font-size: 25px;
  margin-bottom: 5px;
`;

export const StateMessageContainer = styled.div`
  font-size: 14px;
`;
