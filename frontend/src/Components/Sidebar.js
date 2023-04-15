import React from "react";
import { Link } from "react-router-dom";
import "../css/Sidebar.css";
import SidebarOption from "./SidebarOption";
import Avatar from "@mui/material/Avatar";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Button from '@mui/material/Button'

export default function Sidebar(){
    return(
        <div className="sidebar">
        <Avatar src="logo.jpg"/>
        <Link to="/home" className="alink">
          <SidebarOption active Icon={HomeIcon} text="Home"/>
        </Link>
        <Link to="/myblogs" className="alink">
          <SidebarOption Icon={SearchIcon} text="MyBlogs" />
        </Link>
        <Link to="/about" className="alink">
          <SidebarOption Icon={NotificationsNoneIcon} text="About"/>
        </Link>
        <Link to="/postblog" className="link"><Button variant="outlined" className="sidebar__tweet" fullWidth>Blog</Button></Link>
        </div>
    );
}


