'use client';
import { Box, Divider, Grid, Tab, Tabs, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import ProductDescription from '../_component/product-description';
import ProductDetail from '../_component/product-details/product-details';
import ProductHeader from '../_component/product-header';
import ProductImgViewer from '../_component/product-img-viewer';
import ProductReviews from '../_component/product-reviews/product-reviews';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function SingleProductPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="container" py="1rem">
      <Box bgcolor="#fff" borderRadius="0.5rem">
        <ProductHeader />
        <Divider />
        <Box p="1rem">
          <Grid container spacing={2}>
            <Grid item md={5}>
              <ProductImgViewer
                images={[
                  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27gn800-b/27gn800-b-05-500x500.jpg',
                  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27gn800-b/27gn800-b-03-500x500.jpg',
                  'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27gn800-b/27gn800-b-02-500x500.jpg'
                ]}
                name="My Test Produt"
              />
            </Grid>
            <Grid item md={7}>
              <ProductDetail />
              <Box py="1rem">
                <Typography variant="subtitle1" color="text.secondary" py="0.5rem">
                  Tags
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Chip label="Hp" />
                  <Chip label="Elite" />
                  <Chip label="Display" />
                  <Chip label="Monitor" />
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: '100%' }} px="1rem" py="2rem">
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="ProductDescription" {...a11yProps(0)} />
              <Tab label="Reviews" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ProductDescription />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ProductReviews />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
