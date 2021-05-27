import React from 'react';
import ProfileButtons from './index';

export default {
  title: 'Profile/ProfileButtons',
  component: ProfileButtons,
};

export const MyProfile = () => <ProfileButtons isMyProfile />;
export const OthersProfile = () => <ProfileButtons isMyProfile={false} />;
