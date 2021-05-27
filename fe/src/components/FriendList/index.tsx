import React from 'react';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import Profile from './Profile';

const FriendList = () => {
  const list = [];
  for (let i = 0; i < 10; i += 1)
    list.push({
      imageUrl:
        'https://user-images.githubusercontent.com/46195613/119775073-0f253780-befe-11eb-971f-d388c738a545.jpg',
      nickName: i,
      id: 5 * i,
    });

  return (
    <>
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
    </>
  );
};

export default FriendList;
