import React from 'react';
import '../css/Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon'/>
      </div>
    </div>
  );
}

export default Widgets;