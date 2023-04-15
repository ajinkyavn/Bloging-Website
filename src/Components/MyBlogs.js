import React, { useState, useEffect } from 'react'
import Axios from "axios";
import '../css/Home.css'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

export default function Home() {
    const [users, setUsers] = useState({});
    const [myBlogs, setMyBlogs] = useState([]);
    useEffect(() => {
      Axios.get("http://localhost:5000/myblogs")
        .then(response => {
          setUsers(response.data);
          setMyBlogs(response.data.userBlogs);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    console.log(myBlogs);
    if(myBlogs.length==0){
        myBlogs.push("No Blogs to display")
    }
  return (
    <div className='Home'>
      <Sidebar/>
      <Feed array={myBlogs}/>
      <Widgets/>
    </div>
  )
}
