import SendIcon from '@mui/icons-material/Send';
import {
  Box, IconButton, Paper, Typography
} from '@mui/material';
import SocialIcons from '../Common/SocialIcons';
import Layout from './Layout';

function EmailField() {
  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '1200px',
        height: '50px',
        overflow: 'hidden'
      }}
      variant="outlined"
    >
      <Box display="flex" alignItems="center" flexGrow="1">

        <Box
          component="input"
          sx={{
            outline: 'none',
            border: 'none'
          }}
          width="100%"
          p="1rem"
          placeholder="Email address"
        />
        <IconButton>
          <SendIcon />
        </IconButton>
      </Box>

    </Paper>
  );
}

function QuickLinks() {
  return (
    <Layout title="News Letter" subTitle="Subscribe to our newsletter to receive latest news & notification on our services.">
      <Box pb="2rem">
        <EmailField />
      </Box>
      <Box>
        <Typography variant="h6">Follow us on the social media</Typography>
        <SocialIcons />
      </Box>

    </Layout>

  );
}

export default QuickLinks;
