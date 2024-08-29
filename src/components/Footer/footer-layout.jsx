import { Box, Typography } from '@mui/material';

function Layout({ children, title, subTitle }) {
  return (
    <Box p="1rem">
      <Box py="1.5rem">
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle1">{subTitle}</Typography>
      </Box>
      {children}
    </Box>
  );
}

export default Layout;
