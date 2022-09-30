import { Alert, Button, Card, TextField } from '@mui/material'
import { Box, Container } from '@mui/system'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import validator from 'validator'
import { db } from '../firebase'
import './Signin.css'
toast.configure()
function Signin() {
  const navigate=useNavigate()
  const [email,setemail]=useState('')
  const [pass,setpass]=useState('')
  const [fetcher,sfetcher]=useState([]);
  const getref=collection(db,"users")
  const [emailer,semailer]=useState([])
  //console.log(getref)
  useEffect(() => {
    const datas=async() => {
    const data= await getDocs(getref).then(res=>{
     
     
     sfetcher(res.docs.map((doc)=>({id:doc.id,...doc.data()})))
     semailer(res.docs.map((doc)=>({"email":doc.data().email,"pass":doc.data().password})))
     
    })
   
   }
   datas()
 })
 const func=(a)=>{
  return a.email==email
 }
 
  const clicker=(e)=>{
    
    setTimeout(() => {
      console.log(emailer.find(func))
    
    if (email!='') {

      if (validator.isEmail(email) && emailer.find(func)) {
        
        if(pass== emailer.find(func).pass)
        {
            localStorage.setItem("email",email)
            navigate('/')
        }
        else
        {
          toast.error('Incorrect Password',{autoClose:1800})
        }
      }
      else
      {
          toast.error('Email doesnot exists',{autoClose:1800})
      }
    }
    else
    {
      
    } 
    }, 1000);
    e.preventDefault()
    
  }
  return (
    <div>
        
            <Container sx={{position:'relative',top:'30vh'}}>
              
                <Box
                component="form"
                sx={{backgroundColor:''}}
                >
                 <TextField onChange={(e)=>{setemail(e.target.value.trim())}} label="E-mail" name="email" variant='outlined' id='hello' autoFocus sx={{mt:3,width:'90%',ml:2}}></TextField><br/>
                <TextField onChange={(e)=>{setpass(e.target.value.trim())}} label="Password"name='pass' type="password" variant='outlined' id='heart'sx={{mt:3,width:'90%',ml:2}} ></TextField><br/>
                <div style={{marginTop:'8px',marginLeft:'15px'}}><a href="#" >Forgot password?</a></div>
                <Button type="submit" onClick={clicker} className='indigo darken-3'  variant='contained' sx={{mt:3,width:'90%',ml:2,backgroundColor:'#1976d2'}} >Sign in</Button>
                
                </Box>
                <div className='center' style={{marginTop:'20px'}}><a href="#" >Create a new account</a></div>
                
            </Container>
            
            
        
    </div>
  )
}
export default Signin