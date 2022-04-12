import StarIcon from '@mui/icons-material/Star';
import {
  Box, Tab, Tabs, useMediaQuery, useTheme
} from '@mui/material';
import { useState } from 'react';
import Title from '../../Common/Title';
import ViewFilter from '../../DynamicCategory/Product/ViewFilter';
import Products from './Products';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

function BestSeller() {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  const [isGrid, setGrid] = useState(false);
  const handleClickToViewChange = (currentViewStatus) => {
    setGrid(currentViewStatus);
  };
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const options = ['Best Sellers', 'New Arrivals', 'Best Ratings'];

  const SallerTabs = (
    <Tabs textColor="inherit" indicatorColor="secondary" value={selectedTab} onChange={handleChange} aria-label="basic tabs example">
      {
    options.map((opt, ind) => (
      <Tab label={opt} key={opt} {...a11yProps(ind)} />
    ))
  }
    </Tabs>
  );

  return (
    <Box bgcolor="var(--white)" py="2rem">
      <Box className="container">
        <Title
          title={options[selectedTab]}
          icon={<StarIcon fontSize="inherit" />}
          endActions={(
            <Box color="var(--secondary)" display="flex">
              {!isMD && SallerTabs}
              <ViewFilter isNonePagination handleClickToViewChange={handleClickToViewChange} />
            </Box>
          )}
        />
        {isMD && SallerTabs}
        <Products isGrid={isGrid} />
      </Box>
    </Box>
  );
}

export default BestSeller;
