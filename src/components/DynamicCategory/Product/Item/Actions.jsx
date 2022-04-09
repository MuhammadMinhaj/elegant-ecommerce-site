import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box } from '@mui/material';

function ActionButton({ icon }) {
  return (
    <Box
      boxShadow={1}
      p="0.35rem"
      borderRadius="50%"
      sx={{
        '&:hover': {
          background: 'black',
          color: 'var(--white)',
          cursor: 'pointer'
        },
        overflow: 'hidden'
      }}
    >
      {icon}
    </Box>
  );
}

function Actions() {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-around">
      <ActionButton icon={<ShoppingCartIcon />} />
      <ActionButton icon={<VisibilityIcon />} />
      <ActionButton icon={<FavoriteIcon />} />
    </Box>
  );
}

export default Actions;
