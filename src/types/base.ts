export interface Document {
  id: number;
}

export interface ProductItem extends Document {
  name: string;
  description: string;
  address?: string;
  picture?: string;
  featuredAsset: Asset;
  variants?: Variants[];
}

interface Asset {
  source: string;
  name: string;
}

interface Variants {
  id: string;
  price: number;
}

export interface ActiveOrder {
  activeOrder: {
    id: string;
    total: number;
    totalQuantity: number;
  };
}

export interface ItemsData {
  products: {
    items: Array<ProductItem>;
  };
}
