import React from 'react';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import Header from '../Reusable/Header';
import Profile from '../Reusable/Profile';
import Button from '../Reusable/Button';
import { SearchIcon, AddUserIcon } from '../Reusable/Icons';
import Container from './styled';

const ChatList = () => {
  const chatRoomList = [
    {
      id: 1,
      nickName: 'test1',
      message: '오늘뭐해?',
      imageUrl: '',
      time: '15:25',
    },
    {
      id: 2,
      nickName: 'test2',
      message: '오늘뭐해?',
      time: '15:28',
      imageUrl: '',
    },
    {
      id: 3,
      nickName: 'test3',
      message: '오늘뭐해?',
      time: '15:45',
      imageUrl: '',
    },
    {
      id: 4,
      nickName: 'test4',
      message: '오늘뭐해?',
      time: '15:25',
      imageUrl: '',
    },
    {
      id: 5,
      nickName: 'test5',
      message: '오늘뭐해?',
      time: '15:25',
      imageUrl: '',
    },
  ];

  return (
    <>
      <Header title="채팅">
        <Button type="button">
          <SearchIcon />
        </Button>
        <Button type="button">
          <AddUserIcon />
        </Button>
      </Header>
      <Container>
        {chatRoomList && chatRoomList.length ? (
          chatRoomList.map(({ imageUrl, message, nickName, id, time }) => (
            <Link href={`/chat/${id}`} key={id}>
              <a>
                <Profile
                  nickName={nickName}
                  imageUrl={imageUrl}
                  stateMessage={message}
                  time={time}
                />
              </a>
            </Link>
          ))
        ) : (
          <div>친구를 추가하세요</div>
        )}
      </Container>
    </>
  );
};

export default ChatList;
