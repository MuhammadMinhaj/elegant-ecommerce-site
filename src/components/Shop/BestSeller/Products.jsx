import { Grid } from '@mui/material';
import GridItem from '../../DynamicCategory/Product/Item/GridItem';
import TableItem from '../../DynamicCategory/Product/Item/TableItem';

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

function Products({ isGrid }) {
  if (isGrid) {
    return (
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
    );
  }

  return (
    <Grid container>
      <ResponsiveTableItem />
      <ResponsiveTableItem />
      <ResponsiveTableItem />
      <ResponsiveTableItem />
      <ResponsiveTableItem isEnd />
      <ResponsiveTableItem isEnd />
    </Grid>
  );
}

export default Products;
