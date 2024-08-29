import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Paper } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

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
        {[
          {
            name: 'Category 1'
          },
          {
            name: 'Category 2'
          },
          {
            name: 'Category 3'
          },
          {
            name: 'Category 4'
          },
          {
            name: 'Category 5'
          },
          {
            name: 'Category 6'
          },
          {
            name: 'Category 7'
          },
          {
            name: 'Category 8'
          },
          {
            name: 'Category 9'
          },
          {
            name: 'Category 10'
          }
        ].map((category, i) => (
          <ListItem key={category.name} disablePadding divider={i !== 9}>
            <ListItemButton>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary={category.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
