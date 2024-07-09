import React from 'react';

import {Box, Stack, Typography } from '@mui/material';
import educations from "../../assets/data/educations.json";
import './Education.css';
import EducationItem from 'components/EducationItem/EducationItem';
import SchoolIcon from '@mui/icons-material/School';

export default function Education() 
{
  return(
    <Stack id={'education'} direction={"row"} sx={{minHeight: {lg:"80vh",md:"50vh"}, justifyContent:"center",
        background: 
        {
          xs: "linear-gradient(180deg,  #6aa4e6 0%, #6aa4e6 80%, #6aa4e6 80%, white 100%)",
          md: 'linear-gradient(180deg,  #6aa4e6 0%, #6aa4e6 80%, #6aa4e6 80%, white 100%)',
          lg: `linear-gradient(180deg,  #6aa4e6 0%, #6aa4e6 80%, #6aa4e6 80%, white 100%)`
        }}}> 

<Stack width={{lg:"95%", md:"100%", xs:"95%"}} direction="column" marginTop={{lg:"5vh", md:"5vh", xs:"5vh"}} marginBottom={{lg:"5vh", md: "5vh", xs:"5vh"}} spacing={{lg:"5vh", md:"3vh", xs:"5vh"}} justifyContent="flex-start">
  <Stack direction="row" justifyContent="center">
    <Box sx={{borderBottom: 3,  borderColor:"primary.white"}}  height={{lg:"8vh", md:"6.5vh", xs:"6.5vh"}} width={{lg:"6vw", md:"10vw", xs:"20vw"}}>
      <Stack direction="row" width="100%" justifyContent="center">
        <SchoolIcon sx={{ marginTop:"1vh", color: "primary.white", marginRight:{lg:"0.5vw", md:"0.5vw", xs:"1vw"}, fontSize:{lg:"2.5vw", md:"5vw", xs:"8vw"}}}/>
        <Typography  color="primary.white" fontSize={{lg:"2.2vw", md: "5vw", xs:"7vw"}}>Education</Typography>
      </Stack>
    </Box>
  </Stack>

  <Stack class = "timeline-education">
  {  
    educations.map((education)=>{
    return (
      <EducationItem isLeft={education.isLeft} school={education.school} date={education.date} location={education.location} title={education.title} image={education.image} link={education.link} description={education.description}/>
    )})
  }      
        </Stack>
            </Stack>
            

    </Stack>
  );
}