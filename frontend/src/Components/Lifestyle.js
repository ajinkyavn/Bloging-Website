import React, { useState, useEffect } from 'react'
import Axios from "axios";
import '../css/Home.css'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

export default function Lifestyle() {
    const [allBlogs, setAllBlogs] = useState([]);
    useEffect(() => {
      Axios.get("http://localhost:5000/lifestyle")
        .then(response => {
          setAllBlogs(response.data.total);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  return (
    <div className='Home'>
      <Sidebar/>
      <Feed array={allBlogs}/>
      <Widgets />
    </div>
  )
}
