import { Typography } from '@mui/material'
import React from 'react'

import './Course.css'
 function Course(props) {

    const card={
        height:'130px',
        borderRadius:'10px',
        marginTop:'15px',
       
       

    }
  return (
    <div className='' style={card}>
        <Typography variant="h5" component="h1" className='black-text' sx={{m:1,fontWeight:'bold',position:'relative',top:'10px'}}>
          {props.sub}
        </Typography>
        <Typography variant="h7" component="p" className='grey-text text-lighten-2'  sx={{m:'10px',position:'relative',top:'40%'}}>
          {props.teacher}
        </Typography>
        
    </div>
  )
}
export default Course