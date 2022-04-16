import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const style = { color: 'var(--text-head)', '&:hover': { color: 'var(--secondary)', textDecoration: 'underline', cursor: 'pointer' } };

function Link({ title, path, isLink }) {
  const router = useRouter();
  if (isLink) {
    return (
      <Box>
        <Typography component="a" href={path || '/'} sx={style} variant="subtitle1">
          {title}
        </Typography>
      </Box>
    );
  }
  return (
    <Box>
      <Typography component="span" onClick={() => router.push(path || '/')} sx={style} variant="subtitle1">
        {title}
      </Typography>
    </Box>
  );
}

export default Link;
