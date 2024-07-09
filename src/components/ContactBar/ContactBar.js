import * as React from 'react';
import {Stack} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import ContactItem from '../ContactItem/ContactItem';


export default function ContactBar() {
  return (
    <Stack direction="row" spacing={{lg:"0.5vw", md:"1.5vw", xs:"2vw"}}>
      <ContactItem dest="mailto:francis.huikh@gmail.com" icon={<MailIcon className="inner" sx={{fontSize:{lg:"1.2vw", md:"3.5vw", xs:"6vw"}, color:'primary.blue'}}/>}/>
      <ContactItem dest="https://www.linkedin.com/in/francishui0122/" icon={<LinkedInIcon className="inner" sx={{fontSize:{lg:"1.2vw", md:"3.5vw", xs:"6vw"}, color: 'primary.blue'}}/>}/>
      <ContactItem dest="https://www.instagram.com/francis_hui_/" icon={<InstagramIcon className="inner" sx={{fontSize:{lg:"1.2vw", md:"3.5vw", xs:"6vw"}, color: 'primary.blue'}}/>}/>
      <ContactItem dest="https://www.facebook.com/francis.huikh/" icon={<FacebookIcon className="inner" sx={{fontSize:{lg:"1.2vw", md:"3.5vw", xs:"6vw"}, color: 'primary.blue'}}/>}/>
      <ContactItem dest="https://wa.me/14379796709/" icon={<WhatsappIcon className="inner" sx={{fontSize:{lg:"1.2vw", md:"3.5vw", xs:"6vw"}, color:'primary.blue'}}/>}/>
    </Stack>
  );
}