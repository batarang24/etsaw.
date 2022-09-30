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
import Leaderin from './Leaderin';
import Structure from './Structure';
 function Leaderboard() {
    const [anchorEl,setanchor]=useState(null)
    const open=Boolean(anchorEl)    
    const handleopen=(e)=>{
        setanchor(e.currentTarget)
    }
    const handleClose=(e)=>{
        setanchor(null)
    }
  return (
    <>
    <div>
        <nav className='' style={{backgroundColor:'#0e2640'}}>
            <a href='#' className='brand-logo left'>etSaw</a>
            <Avatar alt="profile " className='right z-depth-4' onClick={handleopen} src={img} sx={{ margin:'15px',width:'30px',height:'30px'}} />
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
                <MenuItem onClick={handleClose}><Person2Icon/>&nbsp;&nbsp;Profile</MenuItem>
                <MenuItem onClick={handleClose}><LogoutIcon/>&nbsp;&nbsp;Logout</MenuItem>
            </Menu>
       </nav>
       <Container >
              <div className='z-depth-1 white-text' style={{marginTop:'30px',marginBottom:'10px', height:'50px', display:'flex',justifyContent:"space-around",backgroundColor:'#0e2640',borderRadius:'5px'}}>
                <div ><h6 style={{fontWeight:'bold'}}>Rank</h6></div>
                <div  className='center' style={{flex:'0.5'}} ><h6 style={{fontWeight:'bold'}}>Player Name</h6></div>
                <div ><h6 style={{fontWeight:'bold'}}>League</h6></div>
                <div ><h6 style={{fontWeight:'bold'}}>T.D</h6></div>
              </div>
              <h6 style={{fontWeight:'bold'}}>League Based</h6>
              <Leaderin name="Naren"  rank="1" league="Master" td="2.0"/>
              <Leaderin name="Yasin" rank="2" league="Master" td="1.5"/>
              <Leaderin name="Abinesh" rank="3" league="Silver" td="2.0"/>
              <Leaderin name="Aswin"rank="4" league="Silver" td="1.2"/>
              <h6 style={{fontWeight:'bold'}}>T.D Based</h6>
              <Leaderin name="Naren"  rank="1" league="Master" td="2.0"/>
              <Leaderin name="Yasin" rank="2" league="Master" td="1.5"/>
      
       </Container>
       
    </div>
    <Structure/>
    </>
  )
}
export default Leaderboard