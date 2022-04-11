import { Box, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import CategoryMenu from './CategoryMenu';
import MoreMenu from './MoreMenu';
import NavItem from './NavItem';

const navbarData = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Shop',
    path: '/shop'
  },
  {
    name: 'B2B',
    path: '/'
  },
  {
    name: 'Recent Products',
    path: '/'
  },
  {
    name: 'Blog',
    isDropDown: true
  },
  {
    name: 'User Account',
    isDropDown: true
  },
  {
    name: 'Contact US',
    path: '/'
  },
  {
    name: 'Extra',
    path: '/'
  }
];

function Navbar() {
  const screenTypeOne = useMediaQuery('(max-width:1200px)');
  const screenTypeTwo = useMediaQuery('(max-width:1100px)');
  const screenTypeThree = useMediaQuery('(max-width:1000px)');
  const screenTypeFour = useMediaQuery('(max-width:900px)');
  const screenTypeFive = useMediaQuery('(max-width:800px)');
  const isMD = useMediaQuery('(max-width:600px)');

  const [limit, setLimit] = useState({ min: 0, max: 7 });
  useEffect(() => {
    switch (true) {
      case screenTypeFive:
        setLimit({ min: 0, max: 2 });
        break;
      case screenTypeFour:
        setLimit({ min: 0, max: 3 });
        break;
      case screenTypeThree:
        setLimit({ min: 0, max: 4 });
        break;
      case screenTypeTwo:
        setLimit({ min: 0, max: 5 });
        break;

      case screenTypeOne:
        setLimit({ min: 0, max: 6 });
        break;
      default:
        setLimit({ min: 0, max: 7 });
    }
  }, [screenTypeOne, screenTypeTwo, screenTypeThree, screenTypeFour, screenTypeFive]);
  return (
    <Box component="nav" bgcolor="var(--primary)" color="var(--white)">
      <Box className="container" py="0.5rem">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <CategoryMenu />
          <Box display="flex" justifyContent="flex-end">
            <Box display="flex" justifyContent="flex-end">
              {
               !isMD && navbarData.slice(limit.min, limit.max).map(({ ...rest }) => (
                 <NavItem {...rest} key={rest?.name} />
               ))
              }
            </Box>
            {
              (navbarData?.length > 7 || limit.max < 7)
              && (
              <MoreMenu
                options={isMD ? navbarData : navbarData.slice(limit.max, navbarData.length)}
              />
              )
            }

          </Box>

        </Box>
      </Box>

    </Box>
  );
}

export default Navbar;
