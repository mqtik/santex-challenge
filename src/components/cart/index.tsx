import React from 'react';
import { ActiveOrder } from '../../types/base';
import { Wrapper } from './styles';
import { useQuery } from '@apollo/client';
import { ACTIVE_ORDER_QUERY } from '../../graphql/queries';
import { CircularProgress, Typography } from '@mui/material';

const Cart: React.FC = () => {
  // Adding fetchPolicy: 'no-cache',
  // to fix tests
  const {
    loading: loadingOrder,
    error,
    data: activeOrder,
  } = useQuery<ActiveOrder>(ACTIVE_ORDER_QUERY, { fetchPolicy: 'no-cache' });
  const order = activeOrder?.activeOrder;

  console.log('active order', activeOrder?.activeOrder, error, loadingOrder);
  if (error) {
    return <Typography>Something went wrong getting the order</Typography>;
  }
  if (loadingOrder) {
    return <CircularProgress data-testid="loading" />;
  }

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {!order?.totalQuantity ? <p>You did not place any orders.</p> : null}
      <h2>Total: ${order?.total?.toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
