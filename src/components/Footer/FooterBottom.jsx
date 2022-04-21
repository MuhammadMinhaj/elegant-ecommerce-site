import { Box, Typography } from '@mui/material';

function FooterBottom() {
  return (
    <Box color="var(--white)" py="0.5rem" textAlign="center">
      <Box className="container">
        <Typography color="var(--white)" variant="subtitle1">
          All Rights Reserved. Copyright © 2022
        </Typography>
        <Typography color="var(--white)" variant="subtitle1">
          Designed & Developed By
          {' '}
          <Typography
            component="a"
            href="https://muhammadminhaj.github.io"
            color="var(--white)"
            variant="subtitle1"
            sx={{
              textDecoration: 'none',
              '&:hover': {
                color: 'var(--secondary)'
              },
              fontWeight: 'bold'
            }}
            target="_blank"
          >
            Muhammad Minhaj
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

export default FooterBottom;
