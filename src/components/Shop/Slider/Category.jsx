import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Paper } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function CategoryItem({ title, isEnd }) {
  return (
    <ListItem disablePadding divider={!isEnd}>
      <ListItemButton>
        <ListItemIcon>
          <ArrowRightIcon />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
}

export default function Category() {
  return (
    <Paper variant="outlined" sx={{ overflow: 'hidden', borderRadius: '0px 0px 1rem 1rem' }}>
      <List
        sx={{
          width: '100%',
          overflow: 'auto',
          maxHeight: 400,
          bgcolor: 'background.paper'
        }}
        aria-label="contacts"
      >
        <CategoryItem title="Category item 1" />
        <CategoryItem title="Category item 2" />
        <CategoryItem title="Category item 3" />
        <CategoryItem title="Category item 4" />
        <CategoryItem title="Category item 5" />
        <CategoryItem title="Category item 6" />
        <CategoryItem title="Category item 7" isEnd />

      </List>
    </Paper>
  );
}
