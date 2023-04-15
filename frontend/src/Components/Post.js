import React,{useState} from 'react';
import "../css/Post.css"
import IconButton from "@material-ui/core/IconButton";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import { Avatar } from '@mui/material';

function Post({displayName,username,text}) {
    const [liked,setLiked] = useState(false);
    const likedfun = async(text) => {
        setLiked(true);
    };
    let result;
    if(text!==undefined && text.length>35){
        let text1 = text.slice(0, 35);
        let text2 = ".......";
        result = text1.concat(text2);
    }
    else{
        result=text;
    }
  return (
    <div className='post'>
        <div className='post__avatar'><Avatar src='logo.jpg' /></div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                        {displayName} <span className='post__headerSpecial'>
                           @{username}
                        </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>{result}</p>
                </div>
            </div>
            <div className='post__footer'>
                <IconButton onClick={likedfun}>
                    <FavoriteBorderIcon fontSize='small'color={liked ? "secondary" : "inherit"}/>
                </IconButton>
                <ChatBubbleOutlineIcon fontSize='small'/>
                <RepeatIcon fontSize='small'/>
                <PublishIcon fontSize='small'/>
            </div>
        </div>
    </div>
  );
}

export default Post;