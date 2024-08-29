'use client';
import cartProducts from '@/data/cart-products.json';
import { Box } from '@mui/material';
import { useState } from 'react';
import CartProdItem from './cart-product-item';

function CartProduct() {
  const [products, setProducts] = useState(cartProducts);
  const handleClickDelete = (id) => {
    setProducts((prod) => prod.filter((p) => p?.id !== id));
  };
  return (
    <Box px="0.5rem">
      {products?.map((prod) => (
        <CartProdItem
          key={prod.title}
          {...prod}
          handleClickDelete={() => handleClickDelete(prod?.id)}
        />
      ))}
    </Box>
  );
}

export default CartProduct;
