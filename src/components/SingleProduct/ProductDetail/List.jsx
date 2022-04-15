import { Box, Typography } from '@mui/material';

function Item({ keyName, keyValue }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Typography variant="subtitle1" color="text.secondary">
        {keyName}
        {' '}
        :
      </Typography>
      <Typography variant="subtitle1">{keyValue}</Typography>
    </Box>
  );
}

function List() {
  return (
    <Box>
      <Item keyName="Brand" keyValue="APPLE" />
      <Item keyName="Product Code" keyValue="sf7843t5bas" />
      <Item keyName="Availability" keyValue="In Stack" />
      <Item keyName="Color" keyValue="Read | Blue | Yellow" />
    </Box>
  );
}
export default List;
