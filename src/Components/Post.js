import React from 'react';
import "../css/Post.css"
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
            <Avatar src="logo.jpg"/>
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                        Devendra Mukane <span className='post__headerSpecial'>
                            <VerifiedIcon className='post__badge'/>@GodFather
                        </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>Hello Everyone this is my Blogging Website and this is first blog</p>
                </div>
            </div>
            <img src="logo192.png" alt=""></img>
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