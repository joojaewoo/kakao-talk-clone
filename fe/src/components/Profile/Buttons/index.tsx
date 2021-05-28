import React, { FunctionComponent } from 'react';
import { ChatIcon, EditIcon } from '../../Reusable/Icons';
import Button from '../../Reusable/Button';
import { Container, ButtonContainer, TextContainer } from './styled';

interface Props {
  isMyProfile: boolean;
}

const MyProfileButtons: FunctionComponent<Props> = ({ isMyProfile }) => (
  <>
    {isMyProfile ? (
      <Container>
        <ButtonContainer>
          <Button type="button" width="30px" height="30px" margin="5px 15px">
            <ChatIcon />
          </Button>
          <TextContainer>나와의 채팅</TextContainer>
        </ButtonContainer>
        <ButtonContainer>
          <Button type="button" width="30px" height="30px" margin="5px 15px">
            <EditIcon />
          </Button>
          <TextContainer>프로필 수정</TextContainer>
        </ButtonContainer>
      </Container>
    ) : (
      <Container>
        <ButtonContainer>
          <Button type="button" width="30px" height="30px" margin="5px 15px">
            <ChatIcon />
          </Button>
          <TextContainer>1:1 채팅</TextContainer>
        </ButtonContainer>
      </Container>
    )}
  </>
);

export default MyProfileButtons;
