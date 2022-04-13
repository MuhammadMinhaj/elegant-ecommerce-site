import {
  Box, Typography, useMediaQuery, useTheme
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';
import TrendingTitle from './TrendingTitle';

function Products() {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box display={isMD ? 'block' : 'flex'}>
      <Item name="Balltip nullaelit frankfu" imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/cache/catalog/demo/product/2-200x200.jpg" price="$300" discount="10" />
      <Item name="Balltip nullaelit frankfu" imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/cache/catalog/demo/product/1-200x200.jpg" price="$300" discount="10" />

      <Item name="Dicta vidisse inermis" imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/cache/catalog/demo/product/17-200x200.jpg" price="$400" discount="10" />

      <Item name="Dicta vidisse inermis" imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/cache/catalog/demo/product/17-200x200.jpg" price="$800" />
      <Item name="Balltip nullaelit frankfu" imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/cache/catalog/demo/product/1-200x200.jpg" price="$300" discount="10" />
    </Box>
  );
}

function TrendingProduct() {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box bgcolor="var(--white)">
      <Box className="container" py="1rem">
        <Box display={isMD ? 'block' : 'flex'} alignItems="center">

          {
            isMD ? (
              <Box>

                <Typography sx={{
                  fontSize: '16px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  fontStyle: 'italic',
                  lineHeight: '13px',
                  textAlign: 'center'
                }}
                >
                  Trending This Month
                </Typography>
              </Box>
            ) : <TrendingTitle />
          }

          <Box flexGrow="1">
            <Carousel cycleNavigation animation="slide" indicators={false} height="80px" fullHeightHover>
              <Products />
              <Products />
              <Products />
            </Carousel>
          </Box>
        </Box>

      </Box>
    </Box>
  );
}

export default TrendingProduct;
