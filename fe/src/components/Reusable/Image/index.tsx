import React, { FunctionComponent } from 'react';
import UserIcon from '../Icons/User';
import Container from './styled';

interface Props {
  imageUrl?: string;
  width: string;
  height: string;
  alt?: string;
}

const Image: FunctionComponent<Props> = ({ imageUrl, width, height, alt = 'profile' }) => (
  <Container width={width} height={height}>
    {imageUrl ? <img src={imageUrl} alt={alt} /> : <UserIcon />}
  </Container>
);

export default Image;
