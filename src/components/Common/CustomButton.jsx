import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {
  Box, CardActionArea, Typography
} from '@mui/material';

function CustomButton({
  title, subTitle, isChecked, handleClick, icon
}) {
  return (
    <Box border={`1px solid var(--${isChecked ? 'success' : 'primary'})`} color={isChecked ? 'var(--success)' : 'var(--primary)'} borderRadius="0.5rem" sx={{ overflow: 'hidden' }}>
      <CardActionArea onClick={handleClick}>
        <Box display="flex" alignItems="center" p="0.5rem" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            {
              icon
            }

            <Box width="0.5rem" />
            <Box display="flex" flexDirection="column">
              <Typography variant="button">
                {title}
              </Typography>
              {
                subTitle && (
                <Typography variant="caption" color="text.secondary">
                  {subTitle}
                </Typography>
                )
              }

            </Box>
          </Box>
          {isChecked ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
        </Box>
      </CardActionArea>
    </Box>

  );
}
export default CustomButton;
