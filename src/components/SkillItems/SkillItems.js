import {Grid, Divider, Stack, Typography, Box } from '@mui/material';
import React from 'react';
import SkillItem from 'components/Skillitem/SkillItem';
export default function SkillItems(props) {
  return (
    <Grid item lg={3} md={3} xs={12}>
      <Box minHeight={{lg:"17.5vh", md:"15vh", xs:"8.5vh"}} sx={{bgcolor:{md:"primary.white", xs:"transparent"}, borderRadius:"2vh", border:{lg:'0.25vh solid #6aa4e6', md:'0.2vh solid #6aa4e6', xs:''} }}>
        <Stack direction="column" spacing={0.5}>
        <Stack display={{md:"flex", xs:"none"}}>
          <Typography align="center">{props.category}</Typography>
        </Stack>
        <Stack width="40vw" display={{md:"none", xs:"flex"}}>
          <Typography align="flex-start">{props.category}</Typography>
        </Stack>
        <Stack display={{md:"flex", xs:"none"}}>
          <Divider sx={{bgcolor:"primary.blue"}} orientation="horizontal"/>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Stack direction="row" width={{md:"95%", xs:"100%"}} justifyContent="flex-start" useFlexGap flexWrap="wrap" spacing={{lg:"0.5vh", md:"0.5vh", xs: "0.5vh" }}>
          {
            props.skillList.map((skills)=>{
              return (
                <SkillItem skill={skills.skill} image={skills.image}/>
              )
            })
          } 
          </Stack>
        </Stack>
      </Stack>
    </Box>
  </Grid>
  );
}