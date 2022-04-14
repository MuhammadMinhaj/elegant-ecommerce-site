import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
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
      <ActionButton icon={<ShoppingCartOutlinedIcon />} />
      <ActionButton icon={<VisibilityOutlinedIcon />} handleClick={() => router.push('/product/demo')} />
      <ActionButton icon={<CompareArrowsIcon />} />
      <ActionButton icon={<FavoriteBorderOutlinedIcon />} />
    </Box>
  );
}

export default Actions;
