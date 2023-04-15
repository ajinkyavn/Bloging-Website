import React,{useState} from 'react';
import '../css/PostBlog.css';
import Axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'

function PostBlog(props) {
    const expadned=props;
  return (
    <div className='tweetBox'>
            <div className='tweetBox__input'>
                <Avatar src="logo.jpg"/>
                <h2 className='title'>Blog</h2>
            </div>
            <p>
                {expanded}
            </p>
            <Button type="submit" className='tweetBox__tweetButton' >Back</Button>
    </div>
  );
}

export default PostBlog;