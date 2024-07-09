import React from 'react';
import {Link, Stack, Typography} from "@mui/material";

import ContactBar from '../../components/ContactBar/ContactBar';

export default function Copyright() {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-evenly" alignItems="Center" sx={{ my: 4 }}>
      <ContactBar />
      <Typography variant="body1" color="text.secondary" >
        {'Copyright © '}
        <Link color="inherit" href="#">
          Francis Hui
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Stack>
  );
}