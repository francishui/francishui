import React from 'react';
import {Box, Stack, Typography } from '@mui/material';
import Carousel from "react-elastic-carousel";
import './Project.css';
import projects from "../../assets/data/projects.json";
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const breakPoints = [
  {width: 0, itemsToShow: 1},
  {width: 600, itemsToShow: 2},
  {width: 900, itemsToShow: 3},
  {width: 1200, itemsToShow: 3},
]

export default function Project() 
{
  return(
    <Stack id={'project'} direction={"row"} sx={{minHeight: "80vh", background:`white`}} justifyContent="center"> 
      <Stack width={{lg:"85%", md:"95%", xs:"95%"}} direction="column" spacing={{lg:"5vh", md:"5vh", xs:"5vh"}} justifyContent="center">
        <Stack border="2px" direction="row"  justifyContent="center">
          <Box sx={{borderBottom: 3,  borderColor:"primary.blue"}}  height={{lg:"8vh", md:"6.5vh", xs:"6.5vh"}} width={{lg:"6vw", md:"10vw", xs:"20vw"}}>
            <Stack direction="row" width="100%" justifyContent="center">
              <AccountTreeIcon sx={{ marginTop:"1vh", color: "primary.blue", marginRight:{lg:"0.5vw", md:"0.5vw", xs:"1vw"}, fontSize:{lg:"2.5vw", md:"5vw", xs:"8vw"}}}/>
              <Typography  color="primary.blue" fontSize={{lg:"2.2vw", md: "5vw", xs:"7vw"}}>Projects</Typography>
            </Stack>
          </Box>
        </Stack>
        <Carousel breakPoints={breakPoints}>
        {   
          projects.map((project)=>{
          return (
            <ProjectItem title={project.title} description={project.description} location={project.location} skill={project.skill} image={project.image} tryItNow={project.tryItNow} sourceCode={project.sourceCode} download={project.download} video={project.video}/>
          )})
        }
        </Carousel>
      </Stack>     
    </Stack>
  );
}