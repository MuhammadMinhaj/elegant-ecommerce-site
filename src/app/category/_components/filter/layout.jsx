'use client';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function Layout({ title, children, isExpanded }) {
  const [expanded, setExpanded] = React.useState(isExpanded || false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <Box sx={{ borderRadius: '0.5rem', overflow: 'hidden' }} my="0.5rem">
      <Accordion expanded={expanded} onChange={handleToggle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6">{title}</Typography>
        </AccordionSummary>
        {expanded && <Divider />}

        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </Box>
  );
}
