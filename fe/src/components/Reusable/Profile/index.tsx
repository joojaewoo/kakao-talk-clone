import React, { FunctionComponent } from 'react';
import { Container, NickNameContainer, StateMessageContainer, TextContainer } from './styled';
import Image from '../Image';

interface Props {
  imageUrl?: string;
  nickName: string;
  stateMessage?: string;
  width?: string;
  height?: string;
  isMy?: boolean;
  time?: string;
}

const Profile: FunctionComponent<Props> = ({
  imageUrl,
  nickName,
  stateMessage,
  width = '60px',
  height = '60px',
  isMy = false,
  time,
}) => (
  <Container isMy={isMy}>
    <Image imageUrl={imageUrl} width={width} height={height} />
    <TextContainer>
      <NickNameContainer>{nickName}</NickNameContainer>
      <StateMessageContainer>{stateMessage}</StateMessageContainer>
    </TextContainer>
    <div>{time}</div>
  </Container>
);

export default Profile;
