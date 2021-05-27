import React, { FunctionComponent } from 'react';
import UserIcon from '../../Reusable/Icons/User';
import { Container, NameContainer } from './styled';

interface Props {
  imageUrl?: string;
  name: string;
}

const Image: FunctionComponent<Props> = ({ imageUrl, name }) => (
  <>
    <Container>{imageUrl ? <img src={imageUrl} alt="profile" /> : <UserIcon />}</Container>
    <NameContainer>{name}</NameContainer>
  </>
);

export default Image;
