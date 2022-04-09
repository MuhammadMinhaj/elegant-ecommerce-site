import { Box, CardActionArea, Typography } from '@mui/material';

function Item({ title, countItem }) {
  return (

    <Box width="120px" boxShadow={2} textAlign="center" mx="0.25rem" borderRadius="100px 100px 5px 5px" sx={{ overflow: 'hidden' }}>
      <CardActionArea>
        <Box component="img" borderRadius="50%" width="100px" height="100px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8a5aAU0e2bzMT7QWsDZZXMEZacnd9KGGAGg&usqp=CAU" />
        <Box bgcolor="#212529" color="white" py="0.5rem">
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="h6">{countItem}</Typography>
        </Box>
      </CardActionArea>

    </Box>

  );
}

export default Item;
