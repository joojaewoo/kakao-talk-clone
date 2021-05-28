import React, { FunctionComponent } from 'react';
import { Container, NickNameContainer, StateMessageContainer, TextContainer } from './styled';
import Image from '../../Reusable/Image';

interface Props {
  imageUrl?: string;
  nickName: string;
  stateMessage?: string;
  width?: string;
  height?: string;
  isMy?: boolean;
}

const Profile: FunctionComponent<Props> = ({
  imageUrl,
  nickName,
  stateMessage,
  width = '60px',
  height = '60px',
  isMy = false,
}) => (
  <Container isMy={isMy}>
    <Image imageUrl={imageUrl} width={width} height={height} />
    <TextContainer>
      <NickNameContainer>{nickName}</NickNameContainer>
      <StateMessageContainer>{stateMessage}</StateMessageContainer>
    </TextContainer>
  </Container>
);

export default Profile;
