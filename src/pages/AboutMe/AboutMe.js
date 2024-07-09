import React from 'react';
import {ImageListItem, Grid, Stack, Typography} from '@mui/material';
import Typing from "../../components/Typing/Typing";
import skills from "../../assets/data/skills.json";
import CustomButton from 'components/CustomerButton/CustomButton';
import SkillItems from '../../components/SkillItems/SkillItems';

const downloadCV = () => {
  const a = document.createElement('a')
  a.href = "FrancisHui_CV.pdf"
  a.download = "FrancisHui_CV.pdf".split('/').pop()
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
};

export default function About() 
{
  return(
    <Stack id={'aboutme'} direction="row" justifyContent="center" minHeight="100vh" sx={{background: 
      {
        xs: "linear-gradient(180deg,  black 0%, black 45%, white 55%,white 100%)",
        md: "linear-gradient(175deg,  black 0%, black 77%, white 78%,white 100%)",
        lg: `linear-gradient(170deg,  black 0%, black 54%, white 55%,white 100%)`
      }}}>
      <Stack width={{lg:"85%", md:"95%", xs:"95%"}} direction="column" justifyContent="center">
        <Grid container direction="row" spacing={2}>
          <Grid item lg={4} md={12} xs={12}>  
            <Stack direction="row" width="100%" height="100%" justifyContent="center">
              <Stack direction="column" height="100%" maxWidth={{lg:"30vw", md: "90%", xs: "95%"}} justifyContent="center">
                <ImageListItem sx={{outline: `5px solid black`}}>
                  <img src="/images/recentPic.jpg" alt="Francis Hui" loading="lazy"/>
                </ImageListItem>
              </Stack>
            </Stack>
          </Grid>
          <Grid item lg={8} md={12} xs={12}>
            <Stack direciton="column" spacing={{lg:"2vh", md:"1vh",xs:"1vh"}}>
              <Typography sx={{color:"primary.blue", fontWeight:"600", fontSize:{lg:"3vw", md: "8vw", xs:"10vw"}}}>Francis Hui</Typography>
              <Typography sx={{color:"primary.white", fontWeight:"600", fontSize:{lg:"2vw", md: "5.4vw", xs:"6.67vw"}}}> An Analyst Programmer</Typography>
              <Typography minHeight={{lg:"13vh", md:"25vh", xs:"25vh"}} sx={{color: "primary.green", fontWeight:"400", fontSize:{lg:"1vw", md: "3vw", xs:"4vw"}, fontFamily:'consolas'}}>
                <strong>
                  <Typing var = "> Francis is a well-trained programmer familiar with DevOps cycle and backend development, professional and passionate in data structure and design pattern which are beneficial to improve system performance. He is authorized to work in Canada, and currently seeking for any opportunities available in Canada."/>
                </strong>
              </Typography>
              <Grid container spacing={{lg:"0.5vw", md:"1vw", xs:"0.5vh"}}>
              {   
                skills.map((skill)=>{
                return (
                  <SkillItems category={skill.category} skillList={skill.skills}/>
                )})
              }
              </Grid>
              <Stack width="100%">
                <CustomButton onClick={downloadCV} text="Download CV"/>
              </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  </Stack>
  );
}