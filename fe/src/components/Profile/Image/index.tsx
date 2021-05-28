import React, { FunctionComponent } from 'react';
import ImageComponent from '../../Reusable/Image';
import NameContainer from './styled';

interface Props {
  imageUrl?: string;
  name: string;
}

const Image: FunctionComponent<Props> = ({ imageUrl, name }) => (
  <>
    <ImageComponent imageUrl={imageUrl} width="110px" height="110px" />
    <NameContainer>{name}</NameContainer>
  </>
);

export default Image;
