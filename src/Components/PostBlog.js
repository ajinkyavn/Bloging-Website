import React from 'react';
import '../css/PostBlog.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'

function PostBlog() {
  return (
    <div className='tweetBox'>
        <form >
            <div className='tweetBox__input'>
                <Avatar src="logo2.png"/>
                <h2 className='title'>Blog</h2>
            </div>
            <textarea name="textarea" rows="20" cols="100" placeholder='Whats on your mind !?'></textarea>
            <input className='tweetBox__imageInput' placeholder='Enter image url (optional)' type='text'></input>
            <Button className='tweetBox__tweetButton' >Post</Button>
        </form>
    </div>
  );
}

export default PostBlog;