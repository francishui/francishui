import * as React from 'react';
import {Avatar, Link} from "@mui/material";
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(({
  outer: {
    transition: "0.4s",
    '&:hover': {
      background: "#4484b2", 
      transform: "scale(1.25)",
      "& .inner": {
        color: "#f5f5f5"
      }
    },
  },
}));

export default function ContactItem(props) {

  const classes = useStyles();

  return (
    <Link href={props.dest} target="_blank" sx={{outline: 'none'}}>
      <Avatar className={classes.outer} sx={{ height:{lg:"2vw", md:"5.5vw", xs:"10vw"}, width:{lg:"2vw", md:"5.5vw", xs:"10vw"}, position: "static", bgcolor: "#ffffff"}}>
        {props.icon}
      </Avatar>
    </Link>
  );
}