import { Box, Grid } from '@mui/material';
import Item from './Item';

function TopCategory() {
  return (
    <Box>
      <Box className="container" py="2rem">
        <Grid container spacing={2}>
          <Item title="Headphones" count="12k Orders" imgSrc="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-1.png&w=1920&q=75" />

          <Item title="Watch" count="8k Orders" imgSrc="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-1.png&w=1920&q=75" />

          <Item title="TV" count="3k Orders" imgSrc="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-1.png&w=1920&q=75" />
        </Grid>
      </Box>
    </Box>

  );
}

export default TopCategory;
