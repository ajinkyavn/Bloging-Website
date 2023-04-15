import React,{useEffect,useState} from 'react';
import '../css/Widgets.css';
import { Avatar, IconButton } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Axios  from 'axios';
// import { Label } from '@mui/icons-material';

function Widgets() {
  const [user, setUser] = useState('');
  useEffect(() => {
    Axios.get("http://localhost:5000/widget")
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className='main'>
      <div className='feed__header'>
            <h3>My Account</h3>
      </div>
      <div className='main2'>
      <h2 className='heading'>{user}</h2>
    </div>
    </div>
  );
}

export default Widgets;