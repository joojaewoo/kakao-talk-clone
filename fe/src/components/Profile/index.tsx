import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Buttons from './Buttons';
import Image from './Image';
import { XIcon } from '../Reusable/Icons';
import { BackgroundContainer, ButtonContainer, ImgContainer, BackButton } from './styled';
import { MY_INFO, USER_INFO } from '../../graphql/user';

const Profile = () => {
  const router = useRouter();
  const { userId } = router.query || {};
  const {
    data: { myInfo },
  } = useQuery(MY_INFO);
  const {
    data: { userInfo },
  } = useQuery(USER_INFO, { variables: { userId } });
  const flag = myInfo._id === userInfo._id;
  return (
    <>
      <BackgroundContainer>
        <BackButton onClick={() => router.back()}>
          <XIcon />
        </BackButton>
        <ImgContainer>
          <Image name={userInfo.nickName} imageUrl={userInfo.imageUrl} />
        </ImgContainer>
        <ButtonContainer>
          <Buttons isMyProfile={flag} />
        </ButtonContainer>
      </BackgroundContainer>
    </>
  );
};

export default Profile;
