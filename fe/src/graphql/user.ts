import { gql } from '@apollo/client';

export const MY_INFO = gql`
  query {
    myInfo {
      _id
      email
      nickName
    }
  }
`;

export const USER_INFO = gql`
  query ($id: string) {
    useinfo(id: $id) {
      _id
      email
      nickName
    }
  }
`;

export const LOCAL_LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;
