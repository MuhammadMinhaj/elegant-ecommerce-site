import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import CakeIcon from '@mui/icons-material/Cake';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import * as React from 'react';

function ProfileListItem({
  title, value, icon, isEnd
}) {
  return (

    <ListItem divider={!isEnd}>
      <ListItemAvatar>
        <Avatar>
          {icon}
        </Avatar>
      </ListItemAvatar>
      <Box display="flex" width="100%" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="subtitle1" color="text.secondary">{value}</Typography>
      </Box>
    </ListItem>
  );
}

function ProfileInfoList() {
  return (
    <Box>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ProfileListItem title="Full Name" value="Developer" icon={<PersonSharpIcon />} />
        <ProfileListItem title="Email" value="developer@gmail.com" icon={<AlternateEmailSharpIcon />} />
        <ProfileListItem title="Phone" value="+95 356 4568" icon={<PhoneIphoneIcon />} />
        <ProfileListItem title="Date of birth" value="00-00-0000" isEnd icon={<CakeIcon />} />
      </List>
    </Box>

  );
}

export default ProfileInfoList;
