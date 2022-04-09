import { Box, Divider, Grid } from '@mui/material';
import Item from './Item/Item';
import ViewFilter from './ViewFilter';

function DynamicCategory() {
  return (
    <Box bgcolor="var(--white)" borderRadius="0.5rem">
      <ViewFilter />
      <Divider />
      <Box p="1rem">
        <Grid container>
          <Item isStart />
          <Item />
          <Item />
          <Item />
          <Item isStart isEnd />
          <Item isEnd />
          <Item isEnd />
          <Item isEnd />
        </Grid>
      </Box>

    </Box>

  );
}

export default DynamicCategory;
