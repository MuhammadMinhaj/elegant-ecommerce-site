import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import LockIcon from '@mui/icons-material/Lock';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Box, Divider } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { useRouter } from 'next/router';

function Item({
  icon, name, handleClick, selected
}) {
  return (
    <ListItemButton selected={selected} onClick={handleClick}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  );
}

const sidenavListsData = [
  {
    title: 'Dashboard',
    list: [{
      name: 'Orders',
      path: 'orders',
      icon: <ShoppingBagOutlinedIcon />
    },
    {
      name: 'Wishlist',
      path: 'wish-list',
      icon: <FavoriteBorderIcon />
    },
    {
      name: 'Support Tickets',
      path: 'support-tickets',
      icon: <HeadsetMicIcon />
    }
    ]
  },
  {
    title: ' Account Settings',
    list: [
      {
        name: 'Profile Info',
        path: 'profile',
        icon: <PersonSharpIcon />
      },
      {
        name: 'Addresses',
        path: 'addresses',
        icon: <LocationOnSharpIcon />
      },
      {
        name: 'Change Password',
        path: 'change-password',
        icon: <LockIcon />
      }
    ]
  }
];

export default function Sidebar({ currentPath }) {
  const router = useRouter();
  const handleClickToChangeRoute = (path) => {
    router.push(`/user/${path}`);
  };
  return (
    <Box bgcolor="var(--white)" borderRadius="1rem" sx={{ overflow: 'hidden' }}>
      {
      sidenavListsData.map(({ list, title }, ind) => (
        <Box key={title}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={(
              <ListSubheader component="div" id="nested-list-subheader">
                {title}
              </ListSubheader>
            )}
          >
            {
            list?.map(({ icon, name, path }) => (
              <Item
                icon={icon}
                name={name}
                key={name}
                handleClick={() => handleClickToChangeRoute(path)}
                selected={currentPath === path}
              />
            ))
          }
          </List>
          {
            ind !== sidenavListsData.length - 1 && (
            <Box py="1rem">
              <Divider />
            </Box>
            )
          }
        </Box>
      ))
      }

    </Box>

  );
}
