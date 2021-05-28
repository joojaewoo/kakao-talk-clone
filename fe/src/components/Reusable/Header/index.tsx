import React, { FunctionComponent } from 'react';
import { FlexDiv, TitleContainer, ButtonContainer } from './styled';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Header: FunctionComponent<Props> = ({ title, children }: Props) => (
  <FlexDiv>
    <TitleContainer>{title}</TitleContainer>
    <ButtonContainer>{children}</ButtonContainer>
  </FlexDiv>
);

export default Header;
