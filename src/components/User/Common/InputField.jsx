import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

function InputField({
  icon, label, placeholder, inputRef, errorMsg, handleChange, name, type
}) {
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
        name={name}
        inputRef={inputRef}
        variant="outlined"
        fullWidth
        placeholder={placeholder}
        error={!!errorMsg}
        helperText={errorMsg}
        onChange={handleChange}
        type={type || 'text'}
      />

    </Box>
  );
}
export default InputField;
