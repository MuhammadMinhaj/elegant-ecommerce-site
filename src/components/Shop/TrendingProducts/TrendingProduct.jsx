import {
  Box, Typography, useMediaQuery, useTheme
} from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import productsData from '../../../productsData';
import Item from './Item';
import TrendingTitle from './TrendingTitle';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 9
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function TrendingProduct() {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box bgcolor="var(--white)" borderBottom="1px solid #ededed">
      <Box className="container" py="0.5rem">
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
            ) : (
              <>
                <TrendingTitle />
                <Box width="1rem" />
              </>
            )
          }

          <Box width="100%">
            <Carousel
              responsive={responsive}
              ssr // means to render carousel on server-side.
              infinite
            >
              {productsData?.products?.map((prod) => (
                <Item {...prod} />
              ))}

            </Carousel>
          </Box>
        </Box>

      </Box>
    </Box>
  );
}

export default TrendingProduct;
