import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import Details from "./Details";
import Home from "./Home";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import { AppBar,Box, BottomNavigation, BottomNavigationAction ,Container, IconButton, Toolbar, Typography, Avatar, Menu, MenuItem} from '@mui/material'
import React, { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HomeIcon from '@mui/icons-material/Home';
import Leaderboard from "./Leaderboard";
import Implicit from "./implicit";
import { param } from "jquery";


function Structure() {
    
   
  return (
    <>
       <Routes>
        <Route path="login" element={<Signin/>}></Route>
        <Route path="signin" element={<Signup/>}></Route>
      </Routes>
    </>
  )
}
export default Structure