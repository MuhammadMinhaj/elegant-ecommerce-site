'use client';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { forwardRef, useState } from 'react';
import NumberFormat from 'react-number-format';

const NumberFormatCustom = (props, ref) => {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
};

export default function FormattedInputs() {
  const [values, setValues] = useState({
    min: '10',
    max: '1320'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Box display="flex">
      <TextField
        label="Min"
        value={values.min}
        onChange={handleChange}
        name="min"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: forwardRef(NumberFormatCustom)
        }}
        variant="standard"
      />
      <Box width="0.5rem" />
      <TextField
        label="Max"
        value={values.max}
        onChange={handleChange}
        name="max"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: forwardRef(NumberFormatCustom)
        }}
        variant="standard"
      />
    </Box>
  );
}
