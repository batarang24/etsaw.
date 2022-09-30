import { AppBar,Box, BottomNavigation, BottomNavigationAction ,Container, IconButton, Toolbar, Typography, Avatar, Menu, MenuItem} from '@mui/material'
import React, { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HomeIcon from '@mui/icons-material/Home';
import Course from './Course';
import SettingsIcon from '@mui/icons-material/Settings';
import img from './hello.png'

import hor from './012.jpg'
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom';
import Structure from './Structure';

 function Divert() {
  return (
    <>
    <nav className='' style={{backgroundColor:'#0e2640',height:'65px'}}>
            <a href='#' className='brand-logo left'>etSaw</a>
       </nav>
    <Container> 
        <div  className='z-depth-2' style={{width:'100%',height:'300px',position:'relative',top:'15vh',borderRadius:'20px'}}>
            <div style={{position:'relative',top:'20px',left:'25px'}}>
                <h5 style={{fontWeight:'bold',position:'relative',top:'10px',color:'#0e2640'}}>About you?</h5>
            </div>
            <div style={{marginTop:"50px",marginLeft:'20px',}}>
            <label >
                <input name="1" type="radio"  />
                <span style={{fontSize:'1.3rem',marginTop:'20px'}}>I'm intrested in coding but don't know nothing</span>
            </label>
            <label>
                <input name="1" type="radio"  />
                <span style={{fontSize:'1.3rem',marginTop:'20px'}}>I know something but get stuck</span>
            </label>
            <label>
                <input name="1" type="radio"  />
                <span style={{fontSize:'1.3rem',marginTop:'20px'}}>I am well experienced</span>
            </label>
            </div>
        </div>
    </Container>
    </> 
  )
}
export default Divert