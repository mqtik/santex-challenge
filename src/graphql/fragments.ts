import { gql } from '@apollo/client';

export const PRODUCT_DETAILS = gql`
  fragment ProductDetails on Product {
    id
    name
    description
  }
`;

export const ASSET_DETAILS = gql`
  fragment AssetDetails on Asset {
    name
    source
  }
`;

export const VARIANT_DETAILS = gql`
  fragment VariantDetails on ProductVariant {
    id
    price
  }
`;

export const ORDER_DETAILS = gql`
  fragment OrderDetails on Order {
    id
    total
    totalQuantity
  }
`;
