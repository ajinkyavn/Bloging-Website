import React from 'react';
import '../css/TweetBox.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src="Dev.jpg"/>
                <input placeholder="What's Happening" type='text'></input>

            </div>

            <input className='tweetBox__imageInput' placeholder='Enter image url (optional)' type='text'></input>
            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  );
}

export default TweetBox;