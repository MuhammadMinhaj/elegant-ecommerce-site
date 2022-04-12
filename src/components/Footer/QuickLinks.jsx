import LinkIcon from '@mui/icons-material/Link';
import { Box, Grid, Typography } from '@mui/material';
import Layout from './Layout';

function LinkItem({ name, href }) {
  return (
    <Box display="flex" alignItems="center">
      <Box color="var(--secondary)">
        <LinkIcon fontSize="1rem" color="inherit" />
      </Box>
      <Box width="1rem" />
      <Typography component="a" href={href} variant="subtitle1" sx={{ '&:hover': { color: 'var(--secondary)' }, color: 'var(--white)' }}>
        {name}
      </Typography>
    </Box>
  );
}

function QuickLinks() {
  return (
    <Layout title="Quicklinks" subTitle="Click on the below link to find out our other exicting items">
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Box>
            <LinkItem name="Make Profit" href="/" />
            <LinkItem name="Terms & Conditions" href="/" />
            <LinkItem name="Our Partners" href="/" />
            <LinkItem name="Privacy Policy" href="/" />
            <LinkItem name="FAQs" href="/" />
            <LinkItem name="Achievements" href="/" />
          </Box>
        </Grid>
        <Grid item md={6}>

          <Box>
            <LinkItem name="Privacy Policy" href="/" />
            <LinkItem name="FAQs" href="/" />
            <LinkItem name="Achievements" href="/" />
            <LinkItem name="Terms & Conditions" href="/" />
            <LinkItem name="Our Partners" href="/" />
          </Box>
        </Grid>

      </Grid>

    </Layout>

  );
}

export default QuickLinks;
