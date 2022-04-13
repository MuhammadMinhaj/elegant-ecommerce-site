import { Box, Divider, Grid } from '@mui/material';
import { useState } from 'react';
import productsData from '../../../productsData';
import GridItem from './Item/GridItem';
import TableItem from './Item/TableItem';
import ViewFilter from './ViewFilter';

function ResponsiveGridItem(props) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <GridItem {...props} withActions />
    </Grid>
  );
}

function DynamicCategory() {
  const [isGrid, setGrid] = useState(false);
  const handleClickToViewChange = (currentViewStatus) => {
    setGrid(currentViewStatus);
  };
  return (
    <Box bgcolor="var(--white)" borderRadius="0.5rem">
      <ViewFilter handleClickToViewChange={handleClickToViewChange} />
      <Divider />
      <Box p="1rem">
        {
          isGrid ? (
            <Grid container>
              {
                productsData?.products?.map((prod) => (
                  <ResponsiveGridItem {...prod} />
                ))
              }

            </Grid>
          )

            : productsData?.products?.map((prod) => (
              <TableItem {...prod} withActions />
            ))

        }

      </Box>

    </Box>

  );
}

export default DynamicCategory;
