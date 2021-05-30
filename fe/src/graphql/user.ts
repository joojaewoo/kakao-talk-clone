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
  query ($id: String!) {
    useinfo(id: $id) {
      _id
      email
      nickName
    }
  }
`;

export const CREATE_USER = gql`
  mutation ($email: String!, $password: String!, $nickName: String!) {
    createUser(password: $password, email: $email, nickName: $nickName)
  }
`;

export const LOCAL_LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const AUTH_EMAIL = gql`
  mutation ($email: String!, $auth: String!) {
    authEmail(email: $email, auth: $auth)
  }
`;

export const SEND_EMAIL = gql`
  mutation ($email: String!) {
    sendEmail(email: $email)
  }
`;
