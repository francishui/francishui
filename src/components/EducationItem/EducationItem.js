import {Chip, Avatar, Stack, Typography } from '@mui/material';
import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

import CustomButton from 'components/CustomerButton/CustomButton';
import {useState } from 'react';
const handleClick = (dest) => {
  window.open(dest, "_blank");
};



export default function EducationItem(props) 
{
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Stack onClick={() => toggleIsExpanded()} class = {props.isLeft?"container-education left-container-education":"container-education right-container-education"}>
      <img onClick={() => toggleIsExpanded()} src={props.image} alt={props.image}/>
      <Stack class = "text-box-education">
        <Stack class="date-education">
          <Stack direction="row" spacing="0.2vw" useFlexGap flexWrap="wrap">
            <Chip sx={{borderWidth:"0.1vw", borderColor:"primary.blue", bgcolor:'primary.white', fontSize:{lg:"1vw", md:"1.5vw", xs:"3vw"}}} avatar={<Avatar sx={{bgcolor:'primary.white'}}><CalendarMonthIcon sx={{color:"primary.blue"}}/></Avatar>} label={props.date} variant="outlined"/> 
            <Chip sx={{borderWidth:"0.1vw", borderColor:"primary.blue", bgcolor:'primary.white', fontSize:{lg:"1vw", md:"1.5vw", xs: "3vw"}}} avatar={<Avatar sx={{bgcolor:'primary.white'}}><LocationOnOutlinedIcon sx={{color:"primary.blue"}}/></Avatar>} label={props.location} variant="outlined"/>
          </Stack>
        </Stack>
        <Typography fontWeight="600" fontSize={{lg:"1.25vw", md:"2.25vw",xs:"4vw"}}>{props.school}</Typography>
        <Typography fontWeight="400" fontStyle="italic" fontSize={{lg:"1.1vw", md:"2vw",xs:"3.75vw"}}>{props.title}</Typography>
        <Stack direction="column" spacing={{lg:"0.5vh", md:"0.25vh",xs:"0.5vh"}} padding={{lg:"0.5vh", md:"0.3vh",xs:"0.4vh"}} height={isExpanded ? "100%" : "0vh"} overflow="hidden">
            {
                props.description.map((ds)=>
                {
                  return (
                    <Typography fontSize={{lg:"1vw", md:"1.5vw",xs:"3.75vw"}}><ThumbUpOffAltIcon sx={{marginRight:{lg:"0.5vw", md:"0.5vw",xs:"1vw"}, fontSize: {lg:"1vw", md: "1.5vw", xs: "4vw"}}}/>{ds}</Typography>
                  )
                })
            }
            <Stack direciton="row" width={{lg:"10vw", md:"20vw", xs:"40vw"}} paddingLeft={{lg:"0vw", md:"0vw",xs:"1vw"}}>
              <CustomButton onClick={() => handleClick(props.link)} text="Visit Website"/>
            </Stack>
        </Stack>
        <Stack class={props.isLeft? "left-container-arrow-education":"right-container-arrow-education"}/>
    </Stack>
  </Stack>
  );
}