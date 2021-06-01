import React from 'react';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import Header from '../Reusable/Header';
import Profile from './Profile';
import Button from '../Reusable/Button';
import { SearchIcon, AddUserIcon } from '../Reusable/Icons';
import Container from './styled';
import { FRIEND_LIST, MY_INFO } from '../../graphql/user';

const FriendList = () => {
  const {
    data: { friends },
  } = useQuery(FRIEND_LIST);
  const {
    data: { myInfo },
  } = useQuery(MY_INFO);

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
        <Link href={`/profile/${myInfo._id}`}>
          <a>
            <Profile
              nickName={myInfo.nickName}
              key={myInfo._id}
              imageUrl={myInfo.imageUrl}
              stateMessage={myInfo.stateMessage}
              width="70px"
              height="70px"
              isMy
            />
          </a>
        </Link>
        {friends && friends.length ? (
          friends.map(({ imageUrl, stateMessage, nickName, _id: id }) => (
            <Link href={`/profile/${id}`} key={id}>
              <a>
                <Profile nickName={nickName} imageUrl={imageUrl} stateMessage={stateMessage} />
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

export default FriendList;
