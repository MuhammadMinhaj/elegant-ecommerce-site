import { Box, Rating, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import * as React from 'react';

function UserReviewItem({
  name, rating, date, description, isEnd
}) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <Box width="100%">
          <Box display="flex" alignItems="center" width="100%" justifyContent="space-between">
            <Typography variant="h6">{name}</Typography>

            <Typography variant="subtitle1" color="text.secondary">{date}</Typography>
          </Box>
          <Rating readOnly defaultValue={rating || 3} />

          <Typography variant="body2" color="text.secondary">{description}</Typography>
        </Box>
      </ListItem>
      {
    !isEnd && <Divider variant="inset" component="li" />
  }
    </>

  );
}

export default function UserReviews() {
  return (
    <Box>
      <Typography variant="h5">All reviews</Typography>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <UserReviewItem name="Muhammad Minhaj" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account." date="2.4 years ago" />
        <UserReviewItem name="Ashik" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account." date="2.4 years ago" />
        <UserReviewItem name="Shaker" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account." isEnd date="2.4 years ago" />
      </List>
    </Box>

  );
}
