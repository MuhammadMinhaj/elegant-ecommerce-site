import {
  Box, CardActionArea, Typography
} from '@mui/material';

function Product({
  title, subTitle, imgSrc
}) {
  return (

    <CardActionArea>
      <Box borderRadius="0.25rem" sx={{ overflow: 'hidden' }} bgcolor="var(--white)">
        <Box component="img" src={imgSrc} width="100%" maxHeight="150px" />
        <Box p="0.75rem" textAlign="center">
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle1" color="text.secondary">{subTitle}</Typography>
        </Box>
      </Box>
    </CardActionArea>

  );
}

export default Product;
