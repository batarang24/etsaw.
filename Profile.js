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
import Structure from './Structure';

function Profile() {
    const [anchorEl,setanchor]=useState(null)
    const open=Boolean(anchorEl)
    const handleopen=(e)=>{
        setanchor(e.currentTarget)
    }
    const handleClose=(e)=>{
        setanchor(null)
    }
    
  return (
    <div>
         <nav className='' style={{backgroundColor:'#0e2640',marginBottom:0}}>
            <a href='#' className='brand-logo left'>etSaw</a>
            <Avatar alt="profile " className='right z-depth-4' onClick={handleopen} src={img} sx={{ margin:'16px',width:'30px',height:'30px'}} />
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
                
                <MenuItem onClick={handleClose}><LogoutIcon/>&nbsp;&nbsp;Logout</MenuItem>
            </Menu>
       </nav>
       
        <div className='row' style={{marginTop:'20px'}}>
            <div className="col s12 center" style={{backgroundColor:''}}>
                <label htmlFor="files"><div className=''><img src={img} className=' z-depth-2' style={{width:'150px',height:'150px',marginTop:'15px',borderRadius:'50%'}}></img></div></label>
                <h5 style={{fontWeight:'bold'}}>Naren Vasu</h5>
            </div>
            <div className="col s12 center" style={{backgroundColor:'',display:'flex',justifyContent:'space-around',borderBottom:'2px solid #0e2640'}}>
                <div><p className='indigo-text'>50</p><p style={{fontWeight:'bold',fontSize:'1.2rem'}}>T.D</p></div>
                <div><p className='indigo-text'>Master</p><p style={{fontWeight:'bold',fontSize:'1.2rem'}}>League</p></div>
                <div><p className='indigo-text'>2000</p><p style={{fontWeight:'bold',fontSize:'1.2rem'}}>Points</p></div>
            
            </div>
            <div className="col s12 " style={{backgroundColor:'',marginTop:'20px'}}>
              <div className='col s9' >
                <h6 style={{fontWeight:'bolder',fontSize:'1.4rem'}}>Finished Courses</h6>
                    <ul>
                        <li><h6 className='indigo-text'>Data Structure</h6></li>
                        <li><h6 className='indigo-text'>Networks</h6></li>
                    </ul>
              </div>
              <div className='col s3' >
              <h6 style={{fontWeight:'bolder',fontSize:'1.4rem'}}>Points</h6>
                <ul>
                    <li><h6 className='indigo-text'>1000000</h6></li>
                    <li><h6 className='indigo-text'>2000000</h6></li>
                </ul>
              </div>
            </div>
            <div className="col s12 " style={{backgroundColor:'',marginTop:'20px'}}>
              <div className='col s9' >
                <h6 style={{fontWeight:'bolder',fontSize:'1.4rem'}}>Ongoing Courses</h6>
                    <ul>
                        <li><h6 className='indigo-text'>Data Structure</h6></li>
                        <li><h6 className='indigo-text'>Networks</h6></li>
                    </ul>
              </div>
              <div className='col s3' >
              <h6 style={{fontWeight:'bolder',fontSize:'1.4rem'}}>Points</h6>
                <ul>
                    <li><h6 className='indigo-text'>1000000</h6></li>
                    <li><h6 className='indigo-text'>2000000</h6></li>
                </ul>
              </div>
            </div>
            
            

            
        </div>
            
           
        
        
       <Structure/>
    </div>
  )
}
export default Profile