import { gql } from '@apollo/client';
import {
  PRODUCT_DETAILS,
  ORDER_DETAILS,
  VARIANT_DETAILS,
  ASSET_DETAILS,
} from './fragments';

export const GET_PRODUCT_LIST = gql`
  ${ASSET_DETAILS}
  ${PRODUCT_DETAILS}
  ${VARIANT_DETAILS}

  query get_product_list {
    products(options: { take: 30 }) {
      items {
        ...ProductDetails
        featuredAsset {
          ...AssetDetails
        }
        variants {
          ...VariantDetails
        }
      }
    }
  }
`;

export const ACTIVE_ORDER_QUERY = gql`
  ${ORDER_DETAILS}

  query active_order_details {
    activeOrder {
      ...OrderDetails
    }
  }
`;
