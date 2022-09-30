import { Button, TextField } from '@mui/material'
import { Box, Container } from '@mui/system'
import { addDoc, collection, getDoc, getDocs } from 'firebase/firestore'
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import validator from 'validator'
import { db } from '../firebase'

toast.configure()

function Signup() {
  const navigate=useNavigate()
  const [fname,sfname]=useState('')
  const [lname,slname]=useState('')
  const [email,semail]=useState('')
  const [emailer,semailer]=useState([])
  const [pass,spass]=useState('')
  const flen=fname.length
  const llen=lname.length
  const lpass=pass.length
  const collect=collection(db,'users')
  useEffect(() => {
    const first =async ()=>{
        const a=await getDocs(collect).then((res)=>{
          semailer(res.docs.map((doc)=>(doc.data().email)))
        })
    }
    first()
    
  })
  const func=(a)=>{
    return a==email
   }
  

  const clicker=(e)=>{
    e.preventDefault()

    if(fname!=''  && email!='' && pass!='')
    {
       if(flen>3 && flen<15)
       {
          if(llen>3 && llen<8)
          {
              if(validator.isEmail(email) &&!(emailer.find(func)))
              {
                  if(lpass>6 && lpass<15)
                  {
                      const obj={
                        "fname":fname,
                        "lname":lname,
                        "email":email,
                        "password":pass
                      }
                      const save= async ()=>{
                          await addDoc(collect,obj).then((res)=>{
                          navigate('/')
                      })
                      }
                      save()
                  }
                  else
                  {
                    toast.error('Password length exceeds',{autoClose:1800})
                  }
              }
              else
              {
                toast.error('Invalid email',{autoClose:1800})
              }
          }
          else
          {
            toast.error('Last name length exceeds',{autoClose:1800})
          }
       }
       else
       {
        toast.error('First name length exceeds',{autoClose:1800})
       }
    }
    else
    {
      console.log(fname)
      toast.error('All fields are required',{autoClose:1800})
    }
  }
  return (
    
    <div>
        <Container sx={{position:'relative',top:'20vh'}}>
                <Box
                component="form"
                sx={{backgroundColor:''}}
                >
                
                <TextField onChange={(e)=>{sfname(e.target.value.trim())}} label="First Name" variant='outlined' id='hello' autoFocus sx={{mt:3,ml:2,width:'90%'}}></TextField>
                <TextField onChange={(e)=>{slname(e.target.value.trim())}} label="Last Name" variant='outlined' id='hello' sx={{mt:3,ml:2,width:'90%'}}></TextField><br/>
                 <TextField onChange={(e)=>{semail(e.target.value.trim())}} label="E-mail" variant='outlined' id='hello' sx={{mt:3,width:'90%',ml:2}}></TextField><br/>
                <TextField onChange={(e)=>{spass(e.target.value.trim())}} label="Password" type="password" variant='outlined' id='heart'sx={{mt:3,width:'90%',ml:2}} ></TextField><br/>
              
                <Button type="submit" onClick={clicker} className='indigo darken-3'  variant='contained' sx={{mt:3,width:'90%',ml:2,backgroundColor:'#1976d2'}} >Sign up</Button>
                
                </Box>
                <div className='center' style={{marginTop:'20px'}}><a href="#" >Already have an account</a></div>
                
            </Container>
            
    </div>
  )
}
export default Signup