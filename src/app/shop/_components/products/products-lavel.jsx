'use client';
import ArrowActions from '@/components/arrow-actions';
import GridProductItem from '@/components/product/product-grid-item';
import products from '@/data/products.json';
import { Box, CardActionArea, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';

function ProductsLevel() {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  const [count, setCount] = useState(0);
  const handleClickCount = (newCount) => {
    setCount(newCount);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          {[
            {
              id: 0,
              name: 'Best Sales'
            },
            {
              id: 1,
              name: 'Featured'
            },
            {
              id: 2,
              name: 'New Arrival'
            }
          ].map((actionButton) => (
            <Box key={actionButton.id} mr="0.5rem" borderRadius="0.5rem" overflow="hidden">
              <CardActionArea onClick={() => handleClickCount(actionButton.id)}>
                <Box
                  border="1px solid var(--secondary)"
                  borderRadius="0.5rem"
                  bgcolor={actionButton.id === count ? 'var(--secondary)' : 'var(--white)'}
                  color={actionButton.id === count ? 'var(--white)' : 'var(--secondary)'}
                  px={isMD ? '0.25rem' : '2rem'}
                  py="0.5rem"
                >
                  <Typography variant={isMD ? 'caption' : 'subtitle2'} sx={{ fontWeight: '600' }}>
                    {actionButton.name}
                  </Typography>
                </Box>
              </CardActionArea>
            </Box>
          ))}
        </Box>
        <ArrowActions />
      </Box>

      <Box height="1.5rem" />
      <Grid container>
        {products.map((prod) => (
          <Grid key={prod.title} item xs={12} sm={6} md={6} lg={4}>
            <GridProductItem {...prod} withActions />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductsLevel;
