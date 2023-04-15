import React,{useState} from 'react';
import '../css/PostBlog.css';
import Axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'

function PostBlog() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
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
            {/* <input className='tweetBox__imageInput' placeholder='Enter image url (optional)' type='text'></input> */}
            <select value={selectedOption} onChange={handleChange} className='selectcategory'>
              <option className='opt'>-- Please select a Category --</option>
              <option value="option1" className='opt'>Option 1</option>
              <option value="option2" className='opt'>Option 2</option>
              <option value="option3" className='opt'>Option 3</option>
            </select>
            <p>{selectedOption}</p>
            <Button type="submit" className='tweetBox__tweetButton' >Post</Button>
        </form>
    </div>
  );
}

export default PostBlog;