import React from 'react';
import Profile from './index';

export default {
  title: 'FriendList/Profile',
  component: Profile,
};

export const Default = () => (
  <Profile
    nickName="주재우"
    imageUrl="https://user-images.githubusercontent.com/46195613/119775073-0f253780-befe-11eb-971f-d388c738a545.jpg"
    stateMessage="오늘 날씨 좋다"
  />
);
