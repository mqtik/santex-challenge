import Button from '@mui/material/Button';
import React from 'react';
import { ProductItem } from '../../types/base';
import { Wrapper } from './styles';
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT_TO_ORDER } from '../../graphql/mutations';
import { ACTIVE_ORDER_QUERY } from '../../graphql/queries';

type Props = {
  item: ProductItem;
};

const Item: React.FC<Props> = ({ item }) => {
  const [addProductToOrder] = useMutation(ADD_PRODUCT_TO_ORDER);
  return (
    <Wrapper>
      <div className="restaurantInfo">
        <img src={item.featuredAsset?.source} alt={item.featuredAsset?.name} />
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() =>
              addProductToOrder({
                variables: { productId: item.id },
                refetchQueries: [{ query: ACTIVE_ORDER_QUERY }],
              })
            }
          >
            Buy
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Item;
