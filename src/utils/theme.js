'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontStyle
  },
  palette: {},
  components: {}
});

export default responsiveFontSizes(theme);
