import GridItem from '@/app/category/_components/products/Item/GridItem';
import TableItem from '@/app/category/_components/products/Item/TableItem';
import ViewFilter from '@/app/category/_components/products/view-filter';
import Title from '@/components/title';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Grid } from '@mui/material';
import { useState } from 'react';

function ResponsiveGridItem(props) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <GridItem {...props} />
    </Grid>
  );
}

function ResponsiveTableItem(props) {
  return (
    <Grid item xs={12} sm={12} md={6}>
      <TableItem {...props} />
    </Grid>
  );
}

function FeaturedProduct() {
  const [isGrid, setGrid] = useState(false);
  const handleClickToViewChange = (currentViewStatus) => {
    setGrid(currentViewStatus);
  };
  return (
    <Box bgcolor="var(--white)">
      <Box className="container">
        <Title
          title="Featured Products"
          icon={<ShoppingCartIcon fontSize="inherit" />}
          endActions={
            <ViewFilter isNonePagination handleClickToViewChange={handleClickToViewChange} />
          }
          isNotDivider
        />
        <Box p="1rem">
          {isGrid ? (
            <Grid container>
              <ResponsiveGridItem isStart />
              <ResponsiveGridItem />
              <ResponsiveGridItem />
              <ResponsiveGridItem isStart />
              <ResponsiveGridItem />
              <ResponsiveGridItem isEnd isStart />
              <ResponsiveGridItem isEnd />
              <ResponsiveGridItem isEnd />
            </Grid>
          ) : (
            <Grid container>
              <ResponsiveTableItem />
              <ResponsiveTableItem />
              <ResponsiveTableItem />
              <ResponsiveTableItem />
              <ResponsiveTableItem isEnd />
              <ResponsiveTableItem isEnd />
            </Grid>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default FeaturedProduct;
