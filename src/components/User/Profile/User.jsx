import {
  Avatar, Box, Paper, Typography
} from '@mui/material';

function User() {
  return (
    <Paper variant="outlined" sx={{ borderRadius: '1rem' }}>
      <Box display="flex" p="1rem" alignItems="center">
        <Box>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 80, height: 80 }}
          />
        </Box>
        <Box width="1rem" />
        <Box>
          <Typography variant="h6">Ralph Edwards</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Balance:
            {' '}
            <Typography variant="subtitle2" component="span" color="var(--secondary)">$500</Typography>
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Type:
            {' '}
            <Typography variant="subtitle2" component="span" color="var(--primary)">Silver</Typography>
          </Typography>
        </Box>

      </Box>
    </Paper>
  );
}

export default User;
