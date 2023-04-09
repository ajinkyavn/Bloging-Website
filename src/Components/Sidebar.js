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

        {/* <Icon/> */}
        {/* <Icon className="sidebar__Icon"/> */}
        <Avatar src="logo.jpg"/>
        <SidebarOption active Icon={HomeIcon} text="Home"/>
        {/* <SidebarOption Icon={SearchIcon} text="MyBlogs"/>
        <SidebarOption Icon={NotificationsNoneIcon} text="Subscriptions"/> */}
        
        <Link to="/postblog" className="link"><Button variant="outlined" className="sidebar__tweet" fullWidth>Blog</Button></Link>
        </div>
    );
}