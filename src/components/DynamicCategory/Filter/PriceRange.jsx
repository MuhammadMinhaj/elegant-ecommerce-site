import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as React from 'react';
import PriceRangeInput from './PriceRangeInput';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box py="1rem">

      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <PriceRangeInput />

    </Box>
  );
}
