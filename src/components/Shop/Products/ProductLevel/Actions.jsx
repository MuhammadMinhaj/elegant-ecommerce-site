import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {
  Box, CardActionArea, IconButton, Typography
} from '@mui/material';
import { useState } from 'react';

function CustomButton({ name, isActive, handleClick }) {
  return (
    <Box mr="0.5rem" borderRadius="0.5rem" overflow="hidden">
      <CardActionArea onClick={handleClick}>
        <Box border="1px solid var(--secondary)" borderRadius="0.5rem" bgcolor={isActive ? 'var(--secondary)' : 'var(--white)'} color={isActive ? 'var(--white)' : 'var(--secondary)'} px="2rem" py="0.5rem">
          <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>{name}</Typography>
        </Box>
      </CardActionArea>
    </Box>
  );
}

function ActionsButton() {
  const [count, setCount] = useState(0);
  const handleClickCount = (newCount) => {
    setCount(newCount);
  };
  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <CustomButton name="Best Sales" isActive={count === 0} handleClick={() => handleClickCount(0)} />
        <CustomButton name="Featured" isActive={count === 1} handleClick={() => handleClickCount(1)} />
        <CustomButton name="New Arrival" isActive={count === 2} handleClick={() => handleClickCount(2)} />
      </Box>
      <Box display="flex" alignItems="center" color="var(--secondary)">
        <IconButton color="inherit">
          <ArrowCircleLeftIcon />
        </IconButton>
        <IconButton color="inherit">
          <ArrowCircleRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
export default ActionsButton;
