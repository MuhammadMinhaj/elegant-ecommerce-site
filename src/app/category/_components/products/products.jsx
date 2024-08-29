'use client';
import ProductGridItem from '@/components/product/product-grid-item';
import ProductTableItem from '@/components/product/product-table-item';
import products from '@/data/products.json';
import { Box, Divider, Grid } from '@mui/material';
import { useState } from 'react';
import ViewFilter from './view-filter';

function ResponsiveGridItem(props) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <ProductGridItem {...props} withActions />
    </Grid>
  );
}

function DynamicCategory() {
  const [isGrid, setGrid] = useState(false);
  const handleClickToViewChange = () => {
    setGrid(!isGrid);
  };
  return (
    <Box bgcolor="var(--white)" borderRadius="0.5rem">
      <ViewFilter isGrid={isGrid} handleClickToViewChange={handleClickToViewChange} />
      <Divider />
      <Box p="1rem">
        {isGrid ? (
          <Grid container>
            {products.map((product) => (
              <ResponsiveGridItem key={product.title} {...product} />
            ))}
          </Grid>
        ) : (
          products.map((product) => (
            <ProductTableItem key={product.title} {...product} withActions />
          ))
        )}
      </Box>
    </Box>
  );
}

export default DynamicCategory;
