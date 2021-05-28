import React from 'react';
import { ChatIcon, SearchIcon, AddUserIcon } from '../Icons';
import Header from './index';
import Button from '../Button';

export default {
  title: 'Reusable/Head',
  component: Header,
};

export const FriendList = () => (
  <Header title="친구">
    <Button type="button">
      <SearchIcon />
    </Button>
    <Button type="button">
      <AddUserIcon />
    </Button>
  </Header>
);

export const ChatList = () => (
  <Header title="채팅">
    <Button type="button">
      <SearchIcon />
    </Button>
    <Button type="button">
      <ChatIcon />
    </Button>
  </Header>
);
