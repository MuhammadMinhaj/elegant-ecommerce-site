import { Box } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { CirclePicker } from 'react-color';

export default function ColorPicker() {
  const [color, setColor] = useState('');
  const handleColorChange = (newColor) => {
    setColor(newColor);
  };
  return (
    <Box display="flex" justifyContent="center">
      <CirclePicker
        color={color}
        onChangeComplete={handleColorChange}

      />
    </Box>
  );
}
