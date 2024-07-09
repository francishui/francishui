import * as React from 'react';
import {Box, Fab, Zoom, useScrollTrigger} from '@mui/material';
import KeyboardDoubleArrowUp from '@mui/icons-material/KeyboardDoubleArrowUp';
export default function ScrollTop() {

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });

  const handleClick = (event, dest) => {
    const anchor = document.querySelector(dest);
  
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  
  return (

    <Zoom in={trigger}>
    <Box onClick={(evt) => handleClick(evt, "#home")} role="presentation" sx={{zIndex: 5, position: 'fixed', bottom: 16, right: 16 ,
    }}>
      <Fab color="primary" size="small" sx={{ transition: "0.4s",':hover': {

        backgroundColor: '#6aa4e6',
        transform: 'translate(0, -8px)',
    }}} aria-label="scroll back to top">
      <KeyboardDoubleArrowUp />
      </Fab>
    </Box>
  </Zoom>
  );
}