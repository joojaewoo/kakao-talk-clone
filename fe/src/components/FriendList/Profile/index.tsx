import React, { FunctionComponent } from 'react';
import {
  Container,
  ImageContainer,
  NickNameContainer,
  StateMessageContainer,
  TextContainer,
} from './styled';
import UserIcon from '../../Reusable/Icons/User';

interface Props {
  imageUrl?: string;
  nickName: string;
  stateMessage?: string;
}

const Profile: FunctionComponent<Props> = ({ imageUrl, nickName, stateMessage }) => (
  <Container>
    <ImageContainer>
      {imageUrl ? <img src={imageUrl} alt="profileImage" /> : <UserIcon />}
    </ImageContainer>
    <TextContainer>
      <NickNameContainer>{nickName}</NickNameContainer>
      <StateMessageContainer>{stateMessage}</StateMessageContainer>
    </TextContainer>
  </Container>
);

export default Profile;
