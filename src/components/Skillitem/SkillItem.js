import {Chip} from '@mui/material';
import React from 'react';

import { Avatar} from "@mui/material";

export default function SkillItem(props) 
{
  if(props.image.length===0)
  {
    return (
      <Chip label={props.skill} variant="outlined" sx={{borderColor:"primary.blue", height:{lg:"3vh", md:"3vw"}, fontSize:{lg:"0.8vw", md:"1.3vw"}}} />    
    );
  }
  else
  {
    return (
      <Chip avatar={<Avatar src={props.image} sx={{bgcolor: "primary.grey" }}/>}  sx={{borderColor:"primary.blue", height:{lg:"3vh", md:"3vw"}, fontSize:{lg:"0.8vw", md:"1.3vw"}}} label={props.skill} variant="outlined"/>
    );
  }
}