import { Box, Divider, Grid } from '@mui/material';
import GridItem from './Item/GridItem';
import ViewFilter from './ViewFilter';

function DynamicCategory() {
  return (
    <Box bgcolor="var(--white)" borderRadius="0.5rem">
      <ViewFilter />
      <Divider />
      <Box p="1rem">
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
      </Box>

    </Box>

  );
}

export default DynamicCategory;
