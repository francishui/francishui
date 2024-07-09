import * as React from 'react';
import {Button} from "@mui/material";


export default function NavBarButton(props) 
{
  return (
    <Button underline="none" onClick={props.onClick} className="NavButton" sx={{  transition: "0.4s",
      ':hover': {
        color: 'primary.blue',
        transform: 'scale(1.25)',
      }, fontSize: {lg:"0.9vw", md:"1.5vw", xs:"2.5vh"}  }}><strong>{props.text}</strong></Button>
  );
}