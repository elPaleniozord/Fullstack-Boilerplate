import { gql } from 'apollo-boost';

export const CHECK_AUTH = gql`
  query IsUserLoggedIn {
    isAuth @client
  }
`
export const GET_USER = gql`
  query currentUser {
    currentUser {
      name
    }
  }
`