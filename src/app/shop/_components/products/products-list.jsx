'use client';
import ViewFilter from '@/app/category/_components/products/view-filter';
import Title from '@/components/title';
import StarIcon from '@mui/icons-material/Star';
import { Box, Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import Products from './products';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

function ProductList({ title }) {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  const [isGrid, setGrid] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleClickToViewChange = (currentViewStatus) => {
    setGrid(currentViewStatus);
  };
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const options = ['Best Sellers', 'New Arrivals', 'Best Ratings'];

  const SallerTabs = (
    <Tabs
      textColor="inherit"
      indicatorColor="secondary"
      value={selectedTab}
      onChange={handleChange}
      aria-label="basic tabs example"
    >
      {options.map((opt, ind) => (
        <Tab label={opt} key={opt} {...a11yProps(ind)} />
      ))}
    </Tabs>
  );

  return (
    <Box bgcolor="var(--white)" py="2rem">
      <Box className="container">
        <Title
          isNotDivider
          title={title}
          icon={<StarIcon fontSize="inherit" />}
          endActions={
            <Box color="var(--secondary)" display="flex">
              {!isMD && SallerTabs}
              <ViewFilter isNonePagination handleClickToViewChange={handleClickToViewChange} />
            </Box>
          }
        />
        {isMD && SallerTabs}
        <Products isGrid={isGrid} />
      </Box>
    </Box>
  );
}

export default ProductList;
