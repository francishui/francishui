import * as React from 'react';

import {Button} from "@mui/material";



export default function CustomButton(props) {


  return (
    <Button variant="contained"    size="large" onClick={props.onClick} sx={{boxShadow:"5", color: '#4484b2', bgcolor: '#ffffff', transition: "0.4s",
      ':hover': {
        bgcolor: '#4484b2',
        color: '#f5f5f5',
        transform: 'scale(1.01)',
      }, borderRadius: "20px", fontSize:{lg:"0.8vw", md:"1.8vw", xs:"3vw"} }}><strong>{props.text}</strong></Button>
  )
}