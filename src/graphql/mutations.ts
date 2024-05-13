import { gql } from '@apollo/client';

export const ADD_PRODUCT_TO_ORDER = gql`
  mutation AddProductToOrder($productId: ID!) {
    addItemToOrder(productVariantId: $productId, quantity: 1) {
      __typename
    }
  }
`;
