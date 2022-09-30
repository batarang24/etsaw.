import { AppBar,Box, BottomNavigation, BottomNavigationAction ,Container, IconButton, Toolbar, Typography, Avatar, Menu, MenuItem, Card, Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import React, { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HomeIcon from '@mui/icons-material/Home';
import Course from './Course';
import SettingsIcon from '@mui/icons-material/Settings';
import img from './hello.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import MarginIcon from '@mui/icons-material/Margin';
import hor from './horror.jpg'
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout'
import Implicit from './implicit';
import { useNavigate } from 'react-router-dom';

/*function Details(props) {
    const colorc=useRef()
    const [ot,sot]=useState(true)
    const colorchange=()=>{
        
        if (ot)
            colorc.current.style.backgroundColor="#ab47bc"
        else
            colorc.current.style.backgroundColor="#ece9eb"
        sot(!ot)

    }
  return (
    <Card  sx={{borderRadius:'10px',marginTop:'10px'}}>
    <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon/>} ref={colorc} onClick={colorchange} sx={{borderRadius:'10px',borderBottom:'solid 1px',backgroundColor:'#ece9eb'}}>
            <Typography variant="body1" component="h2">{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{display:'flex',height:'25px',borderRadius:'3px'}} >
            <IconButton sx={{}}>
                <PlayCircleOutlineOutlinedIcon/>
                
            </IconButton>
           <Typography variant="body2" component="p" sx={{ml:2,mt:0.5}}>Video 1-Intro to data Structure</Typography>           
        </AccordionDetails>
        <AccordionDetails sx={{display:'flex',height:'25px'}}>
            <IconButton sx={{}}>
                <MarginIcon/>
                
            </IconButton>

            <Typography variant="body2" component="p" sx={{ml:2,mt:0.5}}>Test-1 Basics of Data Structure</Typography>
        </AccordionDetails>
    </Accordion>
    </Card>
  )
}
export default Details*/


function Details() {
    const navigate=useNavigate()
    const [anchorEl,setanchor]=useState(null)
    const open=Boolean(anchorEl)
    const handleopen=(e)=>{
        setanchor(e.currentTarget)
    }
    const handleClose=(e)=>{
        setanchor(null)
    }
    const [value,setvalue]=useState('home')
   
  return (
    <div>
       <nav className='' style={{backgroundColor:'#0e2640'}}>
            <a href='#' className='brand-logo left'>Data Structure</a>
            <Avatar alt="profile " className='right z-depth-4'onClick={handleopen} src={img} sx={{margin:'15px',width:'30px',height:'30px'}} />
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
                <MenuItem onClick={(e)=>{navigate('/profile')}}><Person2Icon/>&nbsp;&nbsp;Profile</MenuItem>
                <MenuItem onClick={handleClose}><LogoutIcon/>&nbsp;&nbsp;Logout</MenuItem>
            </Menu>
       </nav>
       <Container sx={{mt:4}}>
              <Implicit title="Introduction to Data Structure" />
              <Implicit title="Array"/>
              <Implicit title="Linked List"/>
              <Implicit title="Stack"/>
              <Implicit title="Queue"/>
        </Container>
       
    </div>
  )
}
export default Details