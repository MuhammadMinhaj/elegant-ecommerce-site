import { Box, Grid } from '@mui/material';
import Item from './Item';

function Brands() {
  return (
    <Box py="1rem">
      <Box className="container">
        <Grid container spacing={2}>
          <Item imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/cache/catalog/brands/b1-155x50.jpg" />
          <Item imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/cache/catalog/brands/b11-155x50.jpg" />
          <Item imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/cache/catalog/brands/b13-155x50.jpg" />
          <Item imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/cache/catalog/brands/b15-155x50.jpg" />
          <Item imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/cache/catalog/brands/b2-155x50.jpg" />
          <Item imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/cache/catalog/brands/b4-155x50.jpg" />
          <Item imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/cache/catalog/brands/b8-155x50.jpg" />
          <Item imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/cache/catalog/brands/b15-155x50.jpg" />
          <Item imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/cache/catalog/brands/b11-155x50.jpg" />
          <Item imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/cache/catalog/brands/b1-155x50.jpg" />
          <Item imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/cache/catalog/brands/b4-155x50.jpg" />
          <Item imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/cache/catalog/brands/b8-155x50.jpg" />

        </Grid>

      </Box>
    </Box>
  );
}

export default Brands;
