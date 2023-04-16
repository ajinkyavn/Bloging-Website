import React, { useState } from 'react';
import '../css/PostBlog.css';
import Axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

function PostBlog() {
  const [selectedOption, setSelectedOption] = useState('Education');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const createBlog = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post('http://localhost:5000/postblog', {
        textarea: event.target.textarea.value,
        selectedOption,
      });
      alert("The blog has been posted...")
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
    const goHome = () => {
      console.log("Redirecting to home...");
      window.location.href = "/home";
    }
    const btnstyle={
      marginRight:"22em",
    }
  return (
    <div className='tweetBox'>
      <form method='post' action='http://localhost:5000/postblog' onSubmit={createBlog}>
        <div className='tweetBox__input'>
          <Avatar src='logo.jpg' />
          <h2 className='title'>Blog</h2>
        </div>
        <textarea name='textarea' rows='20' cols='100' placeholder='What&apos;s on your mind!?' />
        <select value={selectedOption} onChange={handleChange} className='selectcategory'>
          <option className='opt'>-- Please select a Category --</option>
          <option value='Education' className='opt'>
            Education
          </option>
          <option value='Sports' className='opt'>
            Sports
          </option>
          <option value='Lifestyle' className='opt'>
            Lifestyle
          </option>
          <option value='Health' className='opt'>
            Health
          </option>
          <option value='Business' className='opt'>
            Business
          </option>
          <option value='Entertainment' className='opt'>
            Entertainment
          </option>
          <option value='Other' className='opt'>
            Other
          </option>
        </select>
        <Button type='submit' className='tweetBox__tweetButton'>
          Post
        </Button>
        <Button type='submit' style={btnstyle} className='tweetBox__tweetButton' onClick={goHome}>
          Back
        </Button>
      </form>
    </div>
  );
}

export default PostBlog;
