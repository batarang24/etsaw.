import { Avatar } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from './hello.png'

 function Leaderin(props) {
  const navigate=useNavigate()
  return (
    <div className='z-depth-1' onClick={()=>{navigate('/profile')}} style={{marginTop:'5px',height:'60px', display:'flex',justifyContent:"space-around",backgroundColor:'white',borderRadius:'5px'}}>
        
        <div style={{marginTop:'8px'}}><h6 style={{fontWeight:'bold'}}>{props.rank} </h6></div>
        <div  className=''style={{flex:'0.5',marginTop:'8px',display:'flex',paddingLeft:'25px'}}><Avatar alt="profile " src={img} sx={{margin:'5px',marginRight:'15px', width:'30px',height:'30px'}} /><h6 style={{fontWeight:'bold'}}>{props.name}</h6></div>
        <div style={{marginTop:'8px'}} ><h6 style={{fontWeight:'bold'}}>{props.league} </h6></div>
        <div style={{marginTop:'8px'}} ><h6 style={{fontWeight:'bold'}}>{props.td} </h6></div>
   
      </div>
  )
}
export default Leaderin