import * as React from 'react';
import {Button} from "@mui/material";


export default function MenuSocialButton(props) 
{
  return (
    <Button href={props.href} target="_blank" sx={{width: "1vw", outline: 'none', transition: "0.4s", ':hover': 
        {
          color: '#6aa4e6',
          transform: 'scale(1.25)',
        }
    }}>
        {props.icon}
    </Button>
  );
}