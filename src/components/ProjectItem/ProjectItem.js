import {Paper, ImageListItem, Stack, Typography} from '@mui/material';
import React from 'react';
import HubIcon from '@mui/icons-material/Hub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CustomButton from 'components/CustomerButton/CustomButton';

const handleClick = (dest) => {
  window.open(dest, "_blank");
};


const downloadFile = (dest) => {
  const a = document.createElement('a')
  a.href = dest
  a.download = dest.split('/').pop()
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
};


function getTryItNow(tryItNow) {
  if (tryItNow.length===0) 
  {
    return <></>;
  }
  return <CustomButton onClick={()=>handleClick(tryItNow)} text="Try It Now"/>
}

function getSourceCode(sourceCode) {
  if (sourceCode.length===0) 
  {
    return <></>;
  }
  return <CustomButton onClick={()=>handleClick(sourceCode)} text="Source Code"/>
}

function getDownload(download) {
  if (download.length===0) 
  {
    return <></>;
  }
  return <CustomButton onClick={()=>downloadFile(download)} text="Download"/>
}

function getVideo(video) {
  if (video.length===0) 
  {
    return <></>;
  }
  return <CustomButton onClick={()=>handleClick(video)} text="Video"/>
}



export default function ProjectItem(props) {

  return (
    <Stack direciton="column" width={{lg:"26vw", md:"42vw", xs:"76vw"}} marginBottom={{lg:"1vh", md:"1vh", xs:"1vh"}}>
      <Paper>
        <Stack direction="column"  spacing={{lg:"1vh",padding:"2vh", xs:"1vh"}} padding={{lg:"2vh", md:"1.5vh", xs:"2vh"}}>
          <ImageListItem>
            <img src={props.image} alt={props.image}/>
          </ImageListItem>
          <Typography color="primary.black" fontWeight="600" fontSize={{lg:"1vw", md:"1.8vw", xs:"3.5vw"}}>{props.title}</Typography>
          <Typography minHeight={{lg:"10vh", md:"9vh", xs:"12vh"}} color="primary.black" fontWeight="400" fontSize={{lg:"0.8vw", md:"1.6vw", xs:"3.5vw"}}>{props.description}</Typography>
          <Stack direction="row" minHeight={{lg:"2.5vh", md:"1vh", xs:"1vh"}} spacing={{lg:"0.5vw", md:"0.5vw", xs:"1vw"}} >
            <LocationOnIcon sx={{color: "primary.black", fontSize:{lg:"0.8vw", md:"1.8vw", xs:"3.5vw"}}}/>
            <Typography sx={{color: "primary.black", fontSize:{lg:"0.8vw", md:"1.6vw", xs:"3.5vw"}}}>{props.location}</Typography>
          </Stack>
          <Stack direction="row" minHeight={{lg:"2.5vh", md:"3.5vh", xs:"5vh"}} spacing={{lg:"0.5vw", md:"0.5vw", xs:"1vw"}} >
            <HubIcon sx={{color: "primary.black", fontSize:{lg:"0.8vw", md:"1.8vw", xs:"3.5vw"}}}/>
            <Typography variant='body2' sx={{color: "primary.black", fontSize:{lg:"0.8vw", md:"1.6vw", xs:"3.5vw"}}}>{props.skill}</Typography>
          </Stack>
          <Stack direction="row" spacing={{lg:"0.5vw", md:"1vw", xs:"2vw"}}>
            {getTryItNow(props.tryItNow)}
            {getSourceCode(props.sourceCode)}
            {getDownload(props.download)}
            {getVideo(props.video)}
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}