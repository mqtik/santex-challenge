import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import Cart from './components/cart';
import { Wrapper, StyledButton } from './App.styles';
import { AddShoppingCart } from '@mui/icons-material';
import { ActiveOrder, ItemsData } from './types/base';
import ProductItem from './components/productItem';
import { ACTIVE_ORDER_QUERY, GET_PRODUCT_LIST } from './graphql/queries';
import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import Footer from './components/footer';

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const {
    loading: loadingProducts,
    error: errorProduct,
    data: allProducts,
  } = useQuery<ItemsData>(GET_PRODUCT_LIST, {});
  const {
    loading: loadingOrder,
    error: errorOrder,
    data: activeOrder,
  } = useQuery<ActiveOrder>(ACTIVE_ORDER_QUERY);
  const order = activeOrder?.activeOrder;

  const products = allProducts?.products?.items;
  if (loadingProducts || loadingOrder) return <LinearProgress />;
  if (errorProduct || errorOrder) {
    return <Typography>Something went wrong</Typography>;
  }

  return (
    <Wrapper>
      <Footer />
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={order?.totalQuantity} color="error">
          <AddShoppingCart />
        </Badge>
      </StyledButton>
      <Grid container spacing={1}>
        {products?.map((item) => (
          <Grid item key={item.id} xs={12} sm={12}>
            <ProductItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
