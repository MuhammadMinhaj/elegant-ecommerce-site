import { Box, Divider, Grid } from '@mui/material';
import { useState } from 'react';
import GridItem from './Item/GridItem';
import TableItem from './Item/TableItem';
import ViewFilter from './ViewFilter';

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
              <GridItem isStart />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem isStart isEnd />
              <GridItem isEnd />
              <GridItem isEnd />
              <GridItem isEnd />
            </Grid>
          ) : (
            <>
              <TableItem />
              <TableItem />
              <TableItem />
            </>
          )
        }

      </Box>

    </Box>

  );
}

export default DynamicCategory;
