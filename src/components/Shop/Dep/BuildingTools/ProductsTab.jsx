import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid, Grow } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import * as React from 'react';
import Product from '../Product/Product';

export default function ProductsTab() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grow in>
            <Grid container spacing={2}>
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />

            </Grid>
          </Grow>
        </TabPanel>
        <TabPanel value="2">
          <Grow in>

            <Grid container spacing={2}>

              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />

            </Grid>
          </Grow>
        </TabPanel>
        <TabPanel value="3">
          <Grow in>

            <Grid container spacing={2}>
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />

            </Grid>
          </Grow>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
