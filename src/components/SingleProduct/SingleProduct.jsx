import {
  Box, Divider, Grid, Tab, Tabs, Typography
} from '@mui/material';
import { useState } from 'react';
import Description from './Description';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductImage from './ProductImage';
import ProductTopbar from './ProductTopbar';
import Reviews from './Reviews/Reviews';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

function SingleProductView() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="container" py="1rem">
      <Box bgcolor="#fff" borderRadius="0.5rem">
        <ProductTopbar />
        <Divider />
        <Box p="1rem">
          <Grid container spacing={2}>
            <Grid item md={5}>
              <ProductImage images={['https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27gn800-b/27gn800-b-05-500x500.jpg', 'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27gn800-b/27gn800-b-03-500x500.jpg', 'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27gn800-b/27gn800-b-02-500x500.jpg']} name="My Test Produt" />
            </Grid>
            <Grid item md={7}>
              <ProductDetail />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: '100%' }} px="1rem" py="2rem">
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Description" {...a11yProps(0)} />
              <Tab label="Reviews" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Description />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Reviews />
          </TabPanel>
        </Box>

      </Box>

    </Box>
  );
}
export default SingleProductView;
