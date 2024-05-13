import { GraphQLError } from 'graphql';
import { ActiveOrder } from '../../types/base';
import { ACTIVE_ORDER_QUERY } from '../../graphql/queries';

export const ORDER_SUCCESS_MOCK: Array<{
  request: { query: typeof ACTIVE_ORDER_QUERY };
  result: { data: ActiveOrder };
}> = [
  {
    request: {
      query: ACTIVE_ORDER_QUERY,
    },
    result: {
      data: {
        activeOrder: {
          id: '1',
          total: 1000,
          totalQuantity: 2,
        },
      },
    },
  },
];

export const ORDER_EMPTY_ORDER_MOCK: Array<{
  request: { query: typeof ACTIVE_ORDER_QUERY };
  result: { data: {} };
}> = [
  {
    request: {
      query: ACTIVE_ORDER_QUERY,
    },
    result: {
      data: { activeOrder: null },
    },
  },
];

export const ORDER_ERROR_MOCK: Array<{
  request: { query: typeof ACTIVE_ORDER_QUERY };
  error: GraphQLError;
}> = [
  {
    request: {
      query: ACTIVE_ORDER_QUERY,
    },
    error: new GraphQLError('Something went wrong'),
  },
];
