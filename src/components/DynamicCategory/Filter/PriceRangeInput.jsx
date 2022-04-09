import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import * as React from 'react';
import NumberFormat from 'react-number-format';

const NumberFormatCustom = React.forwardRef((props, ref) => {
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
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default function FormattedInputs() {
  const [values, setValues] = React.useState({
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
          inputComponent: NumberFormatCustom
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
          inputComponent: NumberFormatCustom
        }}
        variant="standard"
      />
    </Box>
  );
}
