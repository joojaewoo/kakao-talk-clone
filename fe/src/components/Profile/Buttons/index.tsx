import React, { FunctionComponent } from 'react';
import ChatIcon from '../../Reusable/Icons/Chat';
import EditIcon from '../../Reusable/Icons/Edit';
import { Button, Container, ButtonContainer, TextContainer } from './styled';

interface Props {
  isMyProfile: boolean;
}

const MyProfileButtons: FunctionComponent<Props> = ({ isMyProfile }) => (
  <>
    {isMyProfile ? (
      <Container>
        <ButtonContainer>
          <Button type="button">
            <ChatIcon />
          </Button>
          <TextContainer>나와의 채팅</TextContainer>
        </ButtonContainer>
        <ButtonContainer>
          <Button type="button">
            <EditIcon />
          </Button>
          <TextContainer>프로필 수정</TextContainer>
        </ButtonContainer>
      </Container>
    ) : (
      <Container>
        <ButtonContainer>
          <Button type="button">
            <ChatIcon />
          </Button>
          <TextContainer>1:1 채팅</TextContainer>
        </ButtonContainer>
      </Container>
    )}
  </>
);

export default MyProfileButtons;
