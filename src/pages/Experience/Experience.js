import React from 'react';
import {Box, Stack, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import './Experience.css';
import ExperienceItem from 'components/ExperienceItem/ExperienceItem';
import experiences from "../../assets/data/experiences.json";

export default function Experience() 
{
  return(
    <Stack id={'experience'} direction={"row"} sx={{minHeight: {lg:"80vh",md:"50vh"}, justifyContent:"center",
        background: 
        {
          xs: "linear-gradient(180deg,  white 0%, white 80%, white 80%,#6aa4e6 100%)",
          md: 'linear-gradient(180deg,  white 0%, white 80%, white 80%,#6aa4e6 100%)',
          lg: `linear-gradient(180deg,  white 0%, white 80%, white 80%,#6aa4e6 100%)`
        }}}> 

<Stack width={{lg:"95%", md:"100%", xs:"95%"}} direction="column" marginTop={{lg:"5vh", md:"5vh", xs:"5vh"}} marginBottom={{lg:"5vh", md: "5vh", xs:"5vh"}} spacing={{lg:"5vh", md:"3vh", xs:"5vh"}} justifyContent="flex-start">
  <Stack direction="row" justifyContent="center">
    <Box sx={{borderBottom: 3,  borderColor:"primary.blue"}}  height={{lg:"8vh", md:"6.5vh", xs:"6.5vh"}} width={{lg:"6vw", md:"10vw", xs:"20vw"}}>
      <Stack direction="row" width="100%" justifyContent="center">
        <WorkIcon sx={{ marginTop:"1vh", color: "primary.blue", marginRight:{lg:"0.5vw", md:"0.5vw", xs:"1vw"}, fontSize:{lg:"2.5vw", md:"5vw", xs:"8vw"}}}/>
        <Typography  color="primary.blue" fontSize={{lg:"2.2vw", md: "5vw", xs:"7vw"}}>Experience</Typography>
      </Stack>
    </Box>
  </Stack>

  <Stack class = "timeline">
  {  
    experiences.map((experience)=>{
    return (
      <ExperienceItem isLeft={experience.isLeft} company={experience.company} date={experience.date} location={experience.location} title={experience.title} image={experience.image} link={experience.link} skill={experience.skill} description={experience.description}/>
    )})
  }      
  </Stack>
    </Stack>       
    </Stack>
  );
}