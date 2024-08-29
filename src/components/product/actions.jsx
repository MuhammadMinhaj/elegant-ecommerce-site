import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Box, CardActionArea } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { useRouter } from 'next/navigation';

function ActionButton({ icon, handleClick, name, isSmall }) {
  return (
    <Tooltip title={name || 'N/A'} placement="right-start">
      <Box p="0.25rem">
        <CardActionArea onClick={handleClick} sx={{ borderRadius: '50%' }}>
          <Box
            boxShadow={1}
            p={isSmall ? '0.15rem' : '0.35rem'}
            borderRadius="50%"
            sx={{
              '&:hover': {
                background: 'var(--white)',
                color: 'var(--secondary)',
                cursor: 'pointer'
              },
              overflow: 'hidden',
              background: 'var(--secondary)',
              color: 'var(--white)'
            }}
          >
            {icon}
          </Box>
        </CardActionArea>
      </Box>
    </Tooltip>
  );
}

function Actions({ isSmall }) {
  const router = useRouter();

  return (
    <Box borderRadius="1rem">
      <ActionButton isSmall={isSmall} name="Add to cart" icon={<ShoppingCartOutlinedIcon />} />
      <ActionButton
        isSmall={isSmall}
        name="View this"
        icon={<VisibilityOutlinedIcon />}
        handleClick={() => router.push('/product/demo')}
      />
      <ActionButton isSmall={isSmall} name="Compare this" icon={<CompareArrowsIcon />} />
      <ActionButton
        isSmall={isSmall}
        name="Add to wishlist"
        icon={<FavoriteBorderOutlinedIcon />}
      />
    </Box>
  );
}

export default Actions;
