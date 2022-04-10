import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

function InputField({ icon, label, placeholder }) {
  return (
    <Box py="0.5rem" width="100%">
      <TextField
        id="input-with-icon-textfield"
        label={label}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {icon}
            </InputAdornment>
          )
        }}
        variant="outlined"
        fullWidth
        placeholder={placeholder}
      />

    </Box>
  );
}
export default InputField;
