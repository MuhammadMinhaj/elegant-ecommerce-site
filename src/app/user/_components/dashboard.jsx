'use client';
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import CakeIcon from '@mui/icons-material/Cake';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentsIcon from '@mui/icons-material/Payments';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export default function UserDashboard() {
  return (
    <>
      <Box p="1rem">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper variant="outlined" sx={{ borderRadius: '1rem' }}>
              <Box display="flex" p="1rem" alignItems="center">
                <Box>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 80, height: 80 }}
                  />
                </Box>
                <Box width="1rem" />
                <Box>
                  <Typography variant="h6">Ralph Edwards</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Balance:{' '}
                    <Typography variant="subtitle2" component="span" color="var(--secondary)">
                      $500
                    </Typography>
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Type:{' '}
                    <Typography variant="subtitle2" component="span" color="var(--primary)">
                      Silver
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          {[
            {
              title: 'All Orders',
              id: 1,
              count: 3,
              icon: <ShoppingBagOutlinedIcon fontSize="inherit" color="inherit" />
            },
            {
              title: 'Awaiting Payments',
              id: 2,
              count: 3,
              icon: <PaymentsIcon fontSize="inherit" color="inherit" />
            },
            {
              title: 'Awaiting Delivery',
              id: 3,
              count: 3,
              icon: <LocalShippingIcon fontSize="inherit" color="inherit" />
            }
          ].map((item) => (
            <Grid key={item.id} item xs={6} sm={6} md={4} lg={2}>
              <Box>
                <Paper variant="outlined" sx={{ borderRadius: '1rem' }}>
                  <Box p="0.5rem" textAlign="center">
                    <Box fontSize="1.5rem" color="#574d70">
                      {item.icon}
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }} color="#221543">
                      {item.count}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {item.title}
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {[
          { title: 'Full Name', id: 1, description: 'Developer', icon: <PersonSharpIcon /> },
          {
            title: 'Email',
            id: 2,
            description: 'user@gmail.com',
            icon: <AlternateEmailSharpIcon />
          },
          { title: 'Phone', id: 3, description: '+54 426 6534', icon: <PhoneIphoneIcon /> },
          { title: 'Date of birth', id: 4, description: '00-00-0000', icon: <CakeIcon /> }
        ].map((item, i) => (
          <ListItem key={item.id} divider={i !== 3}>
            <ListItemAvatar>
              <Avatar>{item.icon}</Avatar>
            </ListItemAvatar>
            <Box display="flex" width="100%" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle1">{item.title}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {item.description}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </>
  );
}
