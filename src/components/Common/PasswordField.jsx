import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import * as React from 'react';

function PasswordField({
  icon, label, inputRef, errorMsg, handleChange, name
}) {
  const [isShow, setShow] = React.useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box py="0.5rem" width="100%">
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={isShow ? 'text' : 'password'}
          inputRef={inputRef}
          onChange={handleChange}
          name={name}
          error={!!errorMsg}
          startAdornment={<Box color="var(--muted)">{icon}</Box>}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShow(!isShow)}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {isShow ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
      )}
          label={label}
        />
      </FormControl>
    </Box>
  );
}

export default PasswordField;
