import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, CardActionArea } from '@mui/material';
import { useRouter } from 'next/router';

function ActionButton({ icon, handleClick }) {
  return (
    <Box
      px="0.5rem"
      borderRadius="50%"
      sx={{
        overflow: 'hidden'
      }}
    >
      <CardActionArea onClick={handleClick}>

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
      </CardActionArea>

    </Box>
  );
}

function Actions({ position }) {
  const router = useRouter();

  return (
    <Box display="flex" alignItems="center" justifyContent={position || 'center'}>
      <ActionButton icon={<ShoppingCartIcon />} />
      <ActionButton icon={<VisibilityIcon />} handleClick={() => router.push('/product/demo')} />
      <ActionButton icon={<FavoriteIcon />} />
    </Box>
  );
}

export default Actions;
