import Title from '@/components/title';
import BusinessIcon from '@mui/icons-material/Business';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Grid, Typography } from '@mui/material';

function TextItem({ title, description }) {
  return (
    <Box display="flex" alignItems="center" py="1rem">
      <Box mr="1rem" color="var(--secondary)" sx={{ fontSize: '2rem' }}>
        <CheckCircleIcon color="inherit" fontSize="inherit" />
      </Box>
      <Box>
        <Typography variant="h5" color="var(--text-head)">
          {title}
        </Typography>
        <Typography variant="caption" color="var(--text-pera)">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

function BusinessToBusiness() {
  return (
    <Box py="0.25rem">
      <Box className="container">
        <Title
          title="B2B Solution"
          subTitle="We have great product solutions for your business"
          icon={<BusinessIcon fontSize="inherit" />}
        />
        <Box height="2rem" />
        <Grid container>
          <Grid item sm={12} md={6}>
            <Box>
              <Box borderRadius="50%" component="img" src="/b2b.png" width="100%" height="auto" />
            </Box>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box>
              <Typography variant="h5" color="var(--text-head)">
                We help IT companies engineering capacity scale
              </Typography>
              <Typography variant="caption" color="var(--text-pera)">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eaque magnam
                repudiandae temporibus tempora illum deserunt accusamus sapiente, vitae aperiam!
              </Typography>
              <Typography variant="caption" color="var(--text-pera)" />
              <TextItem
                title="Certified Company"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eaque magnam repudiandae temporibus tempora illum deserunt accusamus sapiente, vitae aperiam!"
              />
              <TextItem
                title="Awared Company"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eaque magnam repudiandae temporibus tempora illum deserunt accusamus sapiente, vitae aperiam!"
              />
              <Box
                component="button"
                className="custom-btn-outline"
                display="flex"
                alignItems="center"
              >
                <CheckIcon />
                <Box component="span" width="1rem" />
                Apply Now
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default BusinessToBusiness;
