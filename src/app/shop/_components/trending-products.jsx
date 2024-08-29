'use client';
import products from '@/data/products.json';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

export default function TrendingProducts() {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box bgcolor="var(--white)" borderBottom="1px solid #ededed">
      <Box className="container" py="0.5rem">
        <Box display={isMD ? 'block' : 'flex'} alignItems="center">
          {isMD ? (
            <Box>
              <Typography
                sx={{
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
              <Box position="relative" minWidth="150px">
                <Typography
                  sx={{
                    background: '#fe2424',
                    padding: '5px 10px',
                    fontSize: '16px',
                    color: '#fff',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    maxWidth: '150px',
                    width: '100%',
                    fontStyle: 'italic',
                    lineHeight: '13px',
                    '&::before': {
                      content: '""',
                      display: 'block',
                      width: '0',
                      height: '0',
                      borderTop: '18px solid transparent',
                      borderBottom: '18px solid transparent',
                      borderLeft: '15px solid #fe2424',
                      position: 'absolute',
                      top: '0px',
                      right: '-15px'
                    },
                    '&::after': {
                      content: '"\f111"',
                      color: '#fff',
                      position: 'absolute',
                      top: '5px',
                      right: '-10px',
                      fontFamily: 'FontAwesome',
                      fontSize: '6px'
                    }
                  }}
                >
                  Trending This Month
                </Typography>
              </Box>
              <Box width="1rem" />
            </>
          )}

          <Box width="100%">
            <Carousel
              responsive={responsive}
              ssr // means to render carousel on server-side.
              infinite
            >
              {products.map(({ title, price, images, discount }) => (
                <Box
                  key={title}
                  display="flex"
                  width="100%"
                  alignItems="center"
                  border="1px solid var(--white)"
                  sx={{
                    '&:hover': {
                      border: '1px solid var(--white-border)',
                      transition: 'all 0.25s'
                    }
                  }}
                >
                  <Box
                    sx={{
                      backgroundImage: `url("${images[0]}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '80px',
                      width: '80px'
                    }}
                  >
                    {/* <Box component="img" src={imgSrc} maxWidth="80px" maxHeight="auto" width="100%" /> */}
                  </Box>
                  <Box width="0.5rem" />
                  <Box flexGrow="1">
                    <Typography
                      sx={{
                        lineHeight: '1',
                        '&:hover': {
                          color: 'var(--secondary)',
                          transition: 'all 0.25s',
                          cursor: 'pointer'
                        }
                      }}
                      variant="subtitle1"
                      color="var(--text-head)"
                    >
                      {title}
                    </Typography>
                    <Typography
                      sx={{ lineHeight: '1' }}
                      variant="h6"
                      color={discount ? 'red' : 'var(--primary)'}
                    >
                      {price}
                    </Typography>
                    {discount && (
                      <Box display="flex" alignItems="center">
                        <Typography component="del" variant="subtitle2" color="text.secondary">
                          {price}
                        </Typography>
                        <Typography component="del" variant="subtitle2" color="text.secondary">
                          - {discount}% OFF
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
