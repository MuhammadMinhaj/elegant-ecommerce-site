import { Box, Divider, Grid } from '@mui/material';
import { useState } from 'react';
import GridItem from './Item/GridItem';
import TableItem from './Item/TableItem';
import ViewFilter from './ViewFilter';

function ResponsiveGridItem(props) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <GridItem {...props} />
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
              <ResponsiveGridItem isStart />
              <ResponsiveGridItem />
              <ResponsiveGridItem />
              <ResponsiveGridItem isEnd isStart />
              <ResponsiveGridItem isEnd />
              <ResponsiveGridItem isEnd />
            </Grid>
          ) : (
            <>

              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem isEnd />

            </>
          )
        }

      </Box>

    </Box>

  );
}

export default DynamicCategory;
