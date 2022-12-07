import { gql } from '@apollo/client';

export const GET_MENUS = gql`
menuItems(where: {location: PRIMARY, parentId: "0"}) {
    edges {
      node {
        id
        label
        url
      }
    }
  }
`;
