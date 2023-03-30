import * as React from 'react';
// import '../css/Navbar.css'
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import backimg from '../images/background2.jpg'

export default function Navbar() {
    return (
      <div className='appdiv'>
        <AppBar color="transparent" elevation={0}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="#43bed8"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Button style={{marginLeft:"65%", color:'#43bed8' , fontWeight:'bolder'}}className="project">Projects</Button>
            <Button color="inherit" style={{marginLeft:"5%", color:'#43bed8' , fontWeight:'bolder' }}>About Me</Button>
            <Button color="inherit" style={{marginLeft:"5%", color:'#43bed8' , fontWeight:'bolder' }}>Contact</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }