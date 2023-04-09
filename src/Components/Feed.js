import React from 'react';
import '../css/Feed.css';
import Post from './Post';



function Feed({array}) {
  console.log(array)
  const items = array;
  items.reverse();
  return (
    <div className='feed'>
        <div className='feed__header'>
            <h2>Home</h2>
        </div>
        <Post username={"devendramukane@gmail.com"} text={"This is sample"}/>
         {items.map(item => (
            <Post username={item.curruser} text={item.textarea}  />
            
      ))}
    </div>
  )
}

export default Feed;