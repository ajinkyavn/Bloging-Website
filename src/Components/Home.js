import React, { useState, useEffect } from 'react'
import Axios from "axios";
import '../css/Home.css'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      Axios.get("http://localhost:5000/Home")
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  return (
    <div className='Home'>
      <Sidebar/>
      <Feed array={users}/>
      <Widgets/>
    </div>
  )
}
