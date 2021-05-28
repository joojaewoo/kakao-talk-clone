import React from 'react';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import Header from '../Reusable/Header';
import Profile from './Profile';
import Button from '../Reusable/Button';
import { SearchIcon, AddUserIcon } from '../Reusable/Icons';
import Container from './styled';

const FriendList = () => {
  const list = [];
  const myInfo = {
    imageUrl:
      'https://user-images.githubusercontent.com/46195613/119775073-0f253780-befe-11eb-971f-d388c738a545.jpg',
    nickName: 'joojaewoo',
    id: -5,
    stateMessage: '좋은하루',
  };
  for (let i = 0; i < 10; i += 1)
    list.push({
      imageUrl:
        'https://user-images.githubusercontent.com/46195613/119775073-0f253780-befe-11eb-971f-d388c738a545.jpg',
      nickName: i,
      id: 5 * i,
    });

  return (
    <>
      <Header title="친구">
        <Button type="button">
          <SearchIcon />
        </Button>
        <Button type="button">
          <AddUserIcon />
        </Button>
      </Header>
      <Container>
        <Link href={`/${myInfo.id}`}>
          <a>
            <Profile
              nickName={myInfo.nickName}
              key={myInfo.id}
              imageUrl={myInfo.imageUrl}
              stateMessage={myInfo.stateMessage}
              width="70px"
              height="70px"
              isMy
            />
          </a>
        </Link>
        {list && list.length
          ? list.map(({ imageUrl, stateMessage, nickName, id }) => (
              <Link href={`/${id}`}>
                <a>
                  <Profile
                    nickName={nickName}
                    key={id}
                    imageUrl={imageUrl}
                    stateMessage={stateMessage}
                  />
                </a>
              </Link>
            ))
          : null}
      </Container>
    </>
  );
};

export default FriendList;
