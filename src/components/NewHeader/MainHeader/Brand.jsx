import { Box } from '@mui/material';
import { useRouter } from 'next/router';

function Barnd() {
  const router = useRouter();
  return (
    <Box>
      <Box className="container">
        <Box component="img" src="/images/site-logo.png" width="200px" height="auto" alt="Brand name" sx={{ cursor: 'pointer' }} onClick={() => router.push('/')} />
      </Box>
    </Box>
  );
}

export default Barnd;
