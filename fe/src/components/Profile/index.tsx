import React from 'react';
import { useRouter } from 'next/router';
import Buttons from './Buttons';
import Image from './Image';
import XIcon from '../Reusable/Icons/X';
import { BackgroundContainer, ButtonContainer, ImgContainer, BackButton } from './styled';

const Profile = () => {
  const flag = true;
  const router = useRouter();
  return (
    <>
      <BackgroundContainer>
        <BackButton onClick={() => router.back()}>
          <XIcon />
        </BackButton>
        <ImgContainer>
          <Image
            name="주재우"
            imageUrl="https://user-images.githubusercontent.com/46195613/119775073-0f253780-befe-11eb-971f-d388c738a545.jpg"
          />
        </ImgContainer>
        <ButtonContainer>
          <Buttons isMyProfile={flag} />
        </ButtonContainer>
      </BackgroundContainer>
    </>
  );
};

export default Profile;
