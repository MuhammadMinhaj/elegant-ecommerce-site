import {
  Box, Paper, Typography
} from '@mui/material';

function CardItem({ icon, title, count }) {
  return (
    <Box>
      <Paper variant="outlined" sx={{ borderRadius: '1rem' }}>
        <Box p="0.5rem" textAlign="center">
          <Box fontSize="1.5rem" color="#574d70">
            {icon}
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }} color="#221543">{count}</Typography>
          <Typography variant="subtitle2" color="text.secondary">{title}</Typography>
        </Box>
      </Paper>
    </Box>

  );
}

export default CardItem;
