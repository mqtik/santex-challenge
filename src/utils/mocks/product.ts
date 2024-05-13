import { ADD_PRODUCT_TO_ORDER } from '../../graphql/mutations';

export const ADD_PRODUCT_ORDER_MOCK = [
  {
    request: {
      query: ADD_PRODUCT_TO_ORDER,
      variables: { productId: 1 },
    },
    result: {
      data: {
        addProductToOrder: {
          id: 1,
        },
      },
    },
  },
];

export const PRODUCT_MOCK = {
  id: 1,
  name: 'Mock Product',
  description: 'Mock product description',
  featuredAsset: {
    name: 'Mock Image Alt',
    source: 'mockImageUrl',
  },
};
