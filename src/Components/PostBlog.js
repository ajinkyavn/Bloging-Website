import React,{useState} from 'react';
import '../css/PostBlog.css';
import Axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'

function PostBlog() {
  const [blog, setBlog] = useState(''); 
  const setData = useState();  
    const createBlog = async (textarea) => {
      try {
        const response = await Axios.post("http://localhost:5000/postblog", {
          textarea
        });
        setData(String(response.data));
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <div className='tweetBox'>
        <form method='post' action="http://localhost:5000/postblog" onSubmit={createBlog} >
            <div className='tweetBox__input'>
                <Avatar src="logo.jpg"/>
                <h2 className='title'>Blog</h2>
            </div>
            <textarea name="textarea" rows="20" cols="100" placeholder='Whats on your mind !?' onChange={(e) => setBlog(e.target.value)}></textarea>
            <input className='tweetBox__imageInput' placeholder='Enter image url (optional)' type='text'></input>
            <Button type="submit" className='tweetBox__tweetButton' >Post</Button>
        </form>
    </div>
  );
}

export default PostBlog;