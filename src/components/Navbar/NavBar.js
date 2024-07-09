import React, { useState } from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Stack, Button} from "@mui/material";
import MenuSocialButton from '../MenuSocialButton/MenuSocialButton';
import './NavBar.css';
import NavBarButton from 'components/NavBarButton/NavBarButton';


function Navbar() 
{
  const [nav, setNav] = useState(false)
  const [slide, setSlide] = useState(false)
  const [navbar, setNavbar] = useState(false);

  const handleNav = () => 
  {
    setNav(!nav)
    setSlide(!slide)
  }

  const handleClick =  (dest) => 
  {
    setNav(!nav)
    const anchor = document.querySelector(dest);
    
    if (anchor) 
    {
      anchor.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };
    
  const handleHeaderClick =  () => 
  {
    const anchor= document.querySelector("#home");
    
    if(anchor) 
    {
      anchor.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  const changeBackground=() =>
  {
    if(window.scrollY>= 700)
    {
      setNavbar(true)
    }
    else
    {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <Stack width="100%"  justifyContent="center" height="6vh" position= "fixed" zIndex= "20" className='navbar' sx={{bgcolor: navbar?"primary.black":"transparent"}}>
      <Stack direction="row" justifyContent="space-between" >
        <Stack direction="row" zIndex="30" width={{lg: "30vw", md: "25vw", xs:"60vw"}} >
          <Button underline="none" spacing="100px" onClick={handleHeaderClick}   sx={{ transition: "0.4s",':hover': { color: 'primary.blue'}, fontSize: {lg: "1.25vw", md: "2.5vw", xs:"5vw"}  }}>
            <img width="40vw" class="ICON" alt="Francis' icon" src="/images/ICON.png"/>
            <strong>&nbsp;FRANCIS HUI</strong>
          </Button>
        </Stack>
        <Stack direction={{md:"row", xs:"column"}} justifyContent="center" zIndex="20" spacing={{lg:"2vw", md:"2.5vw", xs:"5vh"}} position={{md:"static", xs:"absolute"}} className={nav ? 'nav-menu active' : 'nav-menu'}>
          <NavBarButton onClick={() => handleClick("#home")} text="HOME"/>
          <NavBarButton onClick={() => handleClick("#aboutme")} text="ABOUT ME"/>
          <NavBarButton onClick={() => handleClick("#experience")} text="EXPERIENCE"/>
          <NavBarButton onClick={() => handleClick("#education")} text="EDUCATION"/>
          <NavBarButton onClick={() => handleClick("#project")} text="PROJECT"/>

          <Stack direction="row" justifyContent="center" display={{md:"none", xs:"flex"}} spacing="-2vw" marginTop="4vh">
            <MenuSocialButton href="mailto:francis.huikh@gmail.com" icon={<MailIcon/>}/>
            <MenuSocialButton href="https://www.linkedin.com/in/francishui0122/" icon={<LinkedInIcon/>}/>
            <MenuSocialButton href="https://www.instagram.com/francis_hui_/" icon={<InstagramIcon/>}/>
            <MenuSocialButton href="https://www.facebook.com/francis.huikh/" icon={<FacebookIcon/>}/>
            <MenuSocialButton href="https://wa.me/14379796709/" icon={<WhatsappIcon/>}/>
          </Stack>                     
        </Stack>
        
        <Stack display={{lg:"flex",md:"flex", xs:"none"}} width={{lg:"30vw", md: "1vw"}}/>
        <Stack display={{md: "none", xs:"block"}} color= 'primary.white' zIndex={20}  padding = "1rem" onClick={handleNav}>
          {nav ? (<CloseIcon/>) : (<MenuIcon/>)}
        </Stack>
      </Stack>
    </Stack>
  )
}
export default Navbar
