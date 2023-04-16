import React from "react";
import { Link } from "react-router-dom";
import "../css/Sidebar.css";
import SidebarOption from "./SidebarOption";
import Avatar from "@mui/material/Avatar";
// import Icon from '../logo/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Button from '@mui/material/Button'

export default function Sidebar(){
    return(
        <div className="sidebar">
        <Avatar src="logo.jpg"/>
        <Link to="/home" className="link">
          <SidebarOption active Icon={HomeIcon} text="Home"/>
        </Link>
        <Link to="/myblogs" className="link">
          <SidebarOption Icon={SearchIcon} text="MyBlogs" />
        </Link>
        <Link to="/sport" className="link">
          <SidebarOption Icon={NotificationsNoneIcon} text="Sport"/>
        </Link>
        <Link to="/education" className="link">
          <SidebarOption Icon={NotificationsNoneIcon} text="Education"/>
        </Link>
        <Link to="/lifestyle" className="link">
          <SidebarOption Icon={NotificationsNoneIcon} text="Lifestyle"/>
        </Link>
        <Link to="/entertainment" className="link">
          <SidebarOption Icon={NotificationsNoneIcon} text="Entertainment"/>
        </Link>
        <Link to="/health" className="link">
          <SidebarOption Icon={NotificationsNoneIcon} text="Health"/>
        </Link>
        <Link to="/business" className="link">
          <SidebarOption Icon={NotificationsNoneIcon} text="Business"/>
        </Link>
        <Link to="/other" className="link">
          <SidebarOption Icon={NotificationsNoneIcon} text="Other"/>
        </Link>
        <Link to="/about" className="link">
          <SidebarOption Icon={NotificationsNoneIcon} text="About"/>
        </Link>
        <Link to="/postblog" className="link"><Button variant="outlined" className="sidebar__tweet" fullWidth>Blog</Button></Link>
        </div>
    );
}