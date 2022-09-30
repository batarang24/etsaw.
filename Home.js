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

function Home() {
    const [anchorEl,setanchor]=useState(null)
    const navigate=useNavigate()
    const open=Boolean(anchorEl)
    const handleopen=(e)=>{
        setanchor(e.currentTarget)

    }
    const handleClose=(e)=>{
        setanchor(null)
    }
    const [value,setvalue]=useState('home')
    const change=(e,newv)=>{
        
        setvalue(newv)
    }
  return (
    <div>
       <nav className='' style={{backgroundColor:'#0e2640'}}>
            <a href='#' className='brand-logo left'>etSaw</a>
            <Avatar  alt="profile "  className='right z-depth-4' onClick={handleopen} src={img} sx={{ margin:'15px',width:'30px',height:'30px'}} />
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
                <MenuItem onClick={(e)=>{navigate('profile')}}><Person2Icon/>&nbsp;&nbsp;Profile</MenuItem>
                <MenuItem onClick={handleClose}><LogoutIcon/>&nbsp;&nbsp;Logout</MenuItem>
            </Menu>
            
            
           
       </nav>
       <Container sx={{mt:4}}>
        <div className='row'>
            <Box sx={{boxShadow:4,borderRadius:'10px',backgroundImage:`url(${hor})`,backgroundPosition:'center'}} onClick={(e)=>{navigate('implicit')}}><Course sub="Data Structure" teacher="Chandiran"  /></Box>
            <Box sx={{boxShadow:4,borderRadius:'10px',backgroundImage:`url(${hor})`,backgroundPosition:'center'}}><Course sub="Networks" teacher="Eminem"/></Box>
            

        
        </div>
        </Container>
        <Structure/> 
    </div>
  )
}
export default Home