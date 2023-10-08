import React, { useState } from 'react';
import Logo from "../Assets/Logo.png";
import '../App.css';
import { BrowserRouter } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom'; // Mengimpor Link dari react-router-dom

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CourseIcon from "@mui/icons-material/MenuBook";
import AboutUsIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />
        },
        {
            text: "Materi Music",
            icon: <InfoIcon />
        },
        {
            text: "Kursus",
            icon: <CourseIcon />
        },
        {
            text: "Tentang Kami",
            icon: <AboutUsIcon />
        },
        {
            text: "Sign In",
            icon: <PersonIcon />
        },
    ];

    return (
        <nav>
          <div className="nav-logo-container">
            <img src={Logo} alt="" />
          </div>
          <div className="navbar-links-container">
            <Link to="/Home">Home</Link>
            <a href="">Materi Music</a>
            <a href="">Kursus</a>
            <a href="">Tentang Kami</a>
            <Link to="/SignIn">Sign In</Link>
            <Link to="/SignUp" className="primary-button" style={{ color: 'white' }}>Sign Up</Link>
          </div>
          <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
          </div>
          <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => setOpenMenu(false)}
              onKeyDown={() => setOpenMenu(false)}
            >
              <List>
                {menuOptions.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Box>
          </Drawer>
        </nav>
      );
    };
    
    export default Navbar;