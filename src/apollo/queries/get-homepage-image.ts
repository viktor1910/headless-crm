import { gql } from '@apollo/client';

export const GET_HOME_PAGE_IMAGE = gql`
  {
    bannerMd: mediaItems(first: 10, where: { search: "banner-md" }) {
      edges {
        node {
          id
          altText
          mediaDetails {
            width
          }
          mediaItemUrl
          slug
          sourceUrl
        }
      }
    }
    bannerLg: mediaItems(first: 10, where: { search: "banner-lg" }) {
      edges {
        node {
          id
          altText
          mediaDetails {
            width
          }
          mediaItemUrl
          slug
          sourceUrl
        }
      }
    }
  }
`;
