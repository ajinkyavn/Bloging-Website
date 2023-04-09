import React from 'react';
import "../css/Post.css"
// import VerifiedIcon from '@mui/icons-material/Verified';
import Avatar from '@mui/material/Avatar';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({displayName,username,text}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
            <Avatar src="logo.jpg"/>
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                        {displayName} <span className='post__headerSpecial'>@{username}
                        </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>{text}</p>
                </div>
            </div>
            <div className='post__footer'>
                <ChatBubbleOutlineIcon fontSize='small'/>
                <RepeatIcon fontSize='small'/>
                <FavoriteBorderIcon fontSize='small'/>
                <PublishIcon fontSize='small'/>
            </div>
        </div>
    </div>
  );
}

export default Post;