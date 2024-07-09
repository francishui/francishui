import React, { useEffect } from 'react';
import Experience from './pages/Experience/Experience';
import Navbar from './components/Navbar/NavBar';
import Education from './pages/Education/Education';
import Project from './pages/Project/Project';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Footer from "./components/Footer/Footer";
import ScrollTop from './components/ScrollTop/ScrollTop';
import {CssBaseline} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: ['sans-serif','Inconsolata'].join(','),
    h1: {
      fontWeight: 700
    },
    h2: {
      fontWeight: 700
    },
    h3: {
      fontWeight: 700
    },
    h4: {
      fontWeight: 700
    },
    h5: {
      fontWeight: 700,
      fontFamily: 'Inconsolata'
    },
    h6: {
      fontWeight: 700,
    },
    h7: {
      fontWeight: 700,
      fontFamily: 'Inconsolata'
    },
    h8: {
      fontWeight: 700,
      fontFamily: 'Inconsolata'
    }
  },
  palette: {
    primary: {
      main: "#faf9f7",
      grey: "#f5f5f5",
      blue: "#6aa4e6",
      black: "#000000",
      white: "#ffffff",
      green: "#20C20E"
    },
    secondary: {
      main: "#6aa4e6"
    },
    lightblue: {
      piplup: "#6aa4e6"
    },
    yellow: {
      piplup: "#f2d88b"
    },
    blue: {
      piplup: "#4484b2"
    },
    green:
    {
      piplup: "#20C20E"
    },
    white: {
      piplup: "#faf9f7"
    },
    grey: {
      piplup: "#808080"
    },
    black: {
      piplup: "#0f0f0f"
    },
    mode: "light",
    action: {
      active: "#efc8b1",
    }
  }
});

function App() {
useEffect(()=>
{
  document.title="Francis' Personal Website"
},[]);
  return (
    
    <>
    <ThemeProvider theme={theme}>
      <Navbar />
      <CssBaseline />
      <CssBaseline />
      <Home />
      <AboutMe />
      <Experience />
      <Education />
      <Project />
      <Footer/>
      <ScrollTop />
      </ThemeProvider>
    </>
  );
}

export default App;
