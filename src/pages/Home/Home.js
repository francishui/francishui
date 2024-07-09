import React from 'react'

import {Stack, Typography} from "@mui/material";
import CustomButton from 'components/CustomerButton/CustomButton';
import Typing from "../../components/Typing/Typing";
import ContactBar from '../../components/ContactBar/ContactBar'
import {} from "@mui/material";

const handleClick = (dest) => 
{
  const anchor = document.querySelector(dest);

  if (anchor) 
  {
    anchor.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
};

function Home() 
{
  return (
    <Stack id={'home'} direction="row" justifyContent="center" sx={{minHeight: "100vh", bgcolor: "primary.black"}}>
      <Stack direction="column" justifyContent="space-between" width={{md:"90%", xs:"95%"}}>
        <Stack direction="row" width="100%" justifyContent="center" marginTop={{lg:"25vh",md:"25vh",xs:"32.5vh"}}>
          <Stack direction="column" width={{lg: "37vw", md:"70vw", xs:"90%"}} spacing={{ md:"3vh", xs: "1.5vh"}} justifyContent="flex-start">
            <Stack direction="row" spacing={{ xs: 1, md: 2 }} justifyContent="center" >
              <Typography sx={{fontWeight: "600", fontSize:{lg:"4.5vw", md: "9vw", xs: "11vw"}, color: "primary.white"}}> I'm</Typography>
              <Typography sx={{fontWeight: "600", fontSize:{lg:"4.5vw", md: "9vw", xs: "11vw"}, color: "primary.blue"}}>Francis Hui</Typography>
            </Stack>
            <Stack direction="row" spacing={{ xs: 1, md: 2 }} justifyContent="center" >
              <Typography sx={{fontWeight: "600", fontSize:{lg:"3vw", md: "6.5vw", xs: "8vw"}, color: "primary.white"}}> Analyst Programmer </Typography>
            </Stack>
            <Typography variant='body2' sx={{ fontSize:{lg:"1.5vw", md: "2.8vw", xs: "3.3vw"}, color: "primary.green" }}>
              <strong><Typing var = "> based in Toronto <br>> seeking for new challenge <br>> click the buttons to learn more about me!"/></strong>
            </Typography>
          </Stack>
        </Stack> 
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing="2vh" marginBottom={{lg:"1vh", md:"3vh", xs:"2vh"}}>
          <Stack direction="row" justifyContent={{md:"flex-start", xs:"center"}}>
            <ContactBar/>
          </Stack>
          <Stack direction="row"  justifyContent={{md:"flex-end", xs:"center"}}>
          <Stack width={{lg:"10vw", md: "25vw", xs:"40vw"}} >
            <CustomButton onClick={() => handleClick("#aboutme")} text="Learn More"/>
          </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
} export default Home
