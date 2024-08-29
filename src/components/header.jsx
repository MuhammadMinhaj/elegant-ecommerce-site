'use client';
import useUIAuction from '@/context/ui/useUIAuction';
import {
  FavoriteBorder as FavoriteBorderIcon,
  PersonOutline as PersonOutlineIcon,
  ShoppingBasket as ShoppingBasketIcon
} from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import Navbar from './navbar/navbar';
import SearchBox from './search-box';

function Header() {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  const { openWishlist, openUserSignup, openCart } = useUIAuction();

  return (
    <>
      <Box bgcolor="var(--primary)" py="0.25rem" color="var(--white)">
        <Box className="container" display={isMD ? 'block' : 'flex'} justifyContent="space-between">
          {!isMD && (
            <Box display="flex">
              <Box display="flex" alignItems="center">
                <MailIcon />
                <Box width="0.5rem" />

                <Typography variant="subtitle2"> support@elegent-ecommerce.com</Typography>
              </Box>
              <Box width="2rem" />
              <Box display="flex" alignItems="center">
                <PhoneIcon />
                <Box width="0.5rem" />

                <Typography variant="subtitle2">+8801XXXXXXXXX</Typography>
              </Box>
            </Box>
          )}

          <Box textAlign="center">
            <Typography variant="caption">
              TRENDY 25SILVER JEWELRY, SAVE UP 35% OFF TODAY
            </Typography>
          </Box>
          {!isMD && (
            <Box>
              <Typography variant="subtitle2">
                Monday - Fiday: 9 AM - 12 AM, Become a seller
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Box
        bgcolor="var(--white)"
        position="sticky"
        sx={{
          top: '0',
          zIndex: '9999',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' // Adds a shadow to the bottom
        }}
      >
        <Box
          className="container"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py="0.5rem"
        >
          {!isMD && (
            <Link href="/" passHref>
              <Box
                component="img"
                src="/images/site-logo.png"
                width="65px"
                height="auto"
                alt="Brand name"
                sx={{ cursor: 'pointer' }}
              />
            </Link>
          )}
          <SearchBox />
          {!isMD && (
            <Box display="flex">
              <IconButton onClick={openWishlist}>
                <FavoriteBorderIcon />
              </IconButton>

              <IconButton onClick={openUserSignup}>
                <PersonOutlineIcon />
              </IconButton>
              <IconButton onClick={openCart}>
                <ShoppingBasketIcon />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
      <Navbar />
    </>
  );
}

export default Header;
