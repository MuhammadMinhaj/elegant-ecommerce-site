import { Box } from '@mui/material';
import { useState } from 'react';
import CartProdItem from './CartProdItem';

const product = {
  title: 'Apple MacBook Air 13.3-Inch Retina Display 8-core Apple M1 chip with 8GB RAM, 256GB SSD (MGN63) Space Gray',
  color: 'Silver',
  size: 'M',
  price: '$220',
  imgSrc: 'https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/MGN73/macbook-mgn73Zp-a-500x500.jpg'
};

function CartProduct() {
  const [products, setProducts] = useState([
    { ...product, id: 1 },
    { ...product, id: 2 },
    { ...product, id: 3 },
    { ...product, id: 4 }]);
  const handleClickDelete = (id) => {
    setProducts((prod) => prod.filter((p) => p?.id !== id));
  };
  return (
    <Box>
      {
        products?.map((prod) => (
          <CartProdItem {...prod} handleClickDelete={() => handleClickDelete(prod?.id)} />
        ))
      }
    </Box>
  );
}

export default CartProduct;
