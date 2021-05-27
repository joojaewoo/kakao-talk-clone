import styled from '@emotion/styled';

interface Props {
  background?: string;
}

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props: Props) => props.background || '#bbbbbb'};
`;

export const ImgContainer = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 92%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 2%;
  left: 2%;
  border: none;
  background: none;
  & > svg {
    width: 20px;
    height: 20px;
  }
`;
