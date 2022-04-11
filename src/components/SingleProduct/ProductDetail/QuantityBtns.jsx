import {
  Add as AddIcon, Remove as RemoveIcon
} from '@mui/icons-material';
import {
  Box, CardActionArea,
  Paper,
  Typography
} from '@mui/material';

function IncreaseDecreaseButton({ icon, isDisabled }) {
  return (
    <CardActionArea disabled={isDisabled}>
      <Box
        display="flex"
        minWidth="50px"
        justifyContent="center"
        color={isDisabled ? 'var(--muted)' : 'var(--primary)'}
      >
        {icon}
      </Box>
    </CardActionArea>
  );
}

export default function BasicButtonGroup({ isDisabled }) {
  return (
    <Box py="2rem">
      <Typography variant="subtitle1" color="text.secondary">Quantity : </Typography>
      <Paper variant="outlined">
        <Box display="flex">
          <IncreaseDecreaseButton icon={<RemoveIcon />} isDisabled={isDisabled} />
          <Box px="1rem" color={isDisabled ? 'var(--neutral)' : 'var(--primary)'}>
            <Typography variant="h6" color="inherit">
              0
            </Typography>
          </Box>
          <IncreaseDecreaseButton icon={<AddIcon />} isDisabled={isDisabled} />
        </Box>
      </Paper>
    </Box>
  );
}
