import {
  Box, CardActionArea, Typography
} from '@mui/material';

function Item({ title, count, imgSrc }) {
  return (
    <Box bgcolor="var(--white)" p="0.75rem" borderRadius="2rem">
      <CardActionArea sx={{ borderRadius: '1rem' }}>
        <Box sx={{
          backgroundImage: `url("${imgSrc}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          maxWidth: '400',
          width: '100%',
          height: '120px',
          borderRadius: '1rem'
        }}
        >
          <Box height="100%" position="relative">
            <Box position="absolute" bottom="0rem" left="0" bgcolor="var(--secondary)" color="var(--white)" borderRadius="1rem" p="0.25rem">
              <Typography variant="caption">{title}</Typography>
            </Box>
            <Box position="absolute" top="0rem" right="0" bgcolor="var(--primary)" color="var(--white)" borderRadius="1rem" p="0.5rem">
              <Typography variant="caption">{count}</Typography>
            </Box>
          </Box>
        </Box>
      </CardActionArea>

    </Box>

  );
}
export default Item;
