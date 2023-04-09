import React from 'react';
import '../css/Widgets.css';
import { Avatar, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import { Label } from '@mui/icons-material';


function Widgets() {
  return (
    <div className='main'>
      <div className='feed__header'>
            <h2>Contributors</h2>
      </div>
      <div className='main2'>
      <h2 className='heading'>Front-End</h2>
      <div className='info'>
        <Avatar src="Dev.jpg"/>
        <h3>Devendra Mukane</h3>
      </div>
        <div >
          <IconButton>
            <GitHubIcon className='social' onClick={() => window.open('https://github.com/Devendra372', '_blank')}/>
          </IconButton>
          <IconButton>
            <InstagramIcon className='social' onClick={() => window.open('https://www.instagram.com/_devendra.sm/', '_blank')}/>
          </IconButton>
          <IconButton>
            <MailOutlineIcon className='social' onClick={() => window.location = 'mailto:devendramukane@gmail.com'}/>
          </IconButton>
        </div>
      <br/>
      <h2 className='heading'>Back-End</h2>
      <div className='info'>
        <Avatar src="aj.png"/>
        <h3>Ajinkya Narkhede</h3>
      </div>
        <div >
        <IconButton>
            <GitHubIcon className='social' onClick={() => window.open('https://github.com/ajinkyavn', '_blank')}/>
          </IconButton>
          <IconButton>
            <InstagramIcon className='social' onClick={() => window.open('https://www.instagram.com/ajinkya_vn013/', '_blank')}/>
          </IconButton>
          <IconButton>
            <MailOutlineIcon className='social' onClick={() => window.location = 'mailto:ajinkyanarkhede013@gmail.com'}/>
          </IconButton>
        </div>
    </div>
    </div>
  );
}

export default Widgets;