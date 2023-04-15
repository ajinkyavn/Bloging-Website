import React from 'react';
import '../css/Feed.css';
import Post from './Post';
import Dropdown from './Dropdown';



function Feed(props) {
  const allBlogs = props.array;
  console.log(props)
  if (!allBlogs) {
    return null; 
  }
  const reversedBlogs = [...allBlogs].reverse();
  return (
    <div className="feed">
      <div className="feed__header">
      <Dropdown />
      </div>
      {reversedBlogs.map((item) => (
        <Post username={item.curruser} text={item.textarea} />
      ))}
    </div>
  );
}

export default Feed;