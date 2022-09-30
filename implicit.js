
import { Accordion ,AccordionSummary,AccordionDetails,Typography,IconButton,Card, Button,Link} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import MarginIcon from '@mui/icons-material/Margin';
import React, { useRef,useState } from 'react'
import { Document, Page } from 'react-pdf';
import pdf  from './comics.pdf';
function Implicit(props) {
    const [flag,eflag]=useState(false)
    const clicker=()=>{
        eflag(!flag)
    }
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
  
  return (
   
    <Card  sx={{borderRadius:'10px',marginTop:'10px'}}>
        <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon/>} onClick={clicker} sx={{borderRadius:'10px',borderBottom:'solid 1px',backgroundColor:`${(flag)?'#0e2640':''}`,color:`${(flag)?'white':''}`}}>
                <Typography variant="body1" component="h2">{props.title}</Typography>
            </AccordionSummary>
            <AccordionDetails className="" sx={{display:'flex',borderBottom:'1px solid black',height:'50px',backgroundColor:'',borderRadius:'3px'}} >
                    <PlayCircleOutlineOutlinedIcon sx={{marginTop:'3px'}}/>
                <a href='https://youtu.be/ProCzqLd_bE' style={{textDecoration:'underline'}}><Typography variant="body2" component="p" sx={{ml:2,mt:0.7}}>Video 1-Intro to data Structure &nbsp;(Animated)</Typography> </a>          
            </AccordionDetails>
            <AccordionDetails className="" sx={{display:'flex',borderBottom:'1px solid black',height:'50px',backgroundColor:'',borderRadius:'3px'}} >
                    <PlayCircleOutlineOutlinedIcon sx={{marginTop:'3px'}}/>
                <a href="https://www.youtube.com/watch?v=23fZHW8hf0c&t=4s" style={{textDecoration:'underline'}}><Typography variant="body2" component="p" sx={{ml:2,mt:0.7}}>Video 1-Intro to data Structure &nbsp;(Lecture)</Typography></a>           
            </AccordionDetails>
            <AccordionDetails sx={{display:'flex',height:'50px',backgroundColor:'',borderBottom:'1px solid black'}}>
                    <MarginIcon  sx={{marginTop:'2px'}} />

                <Typography variant="body2" component="p" sx={{ml:2,mt:0.5}}><a style={{textDecoration:'underline'}} >Basics of Data Structure (Comics) </a>
                
                </Typography>
            </AccordionDetails>
            <AccordionDetails sx={{display:'flex',height:'50px',backgroundColor:''}}>
                    <MarginIcon  sx={{marginTop:'2px'}} />

                <Typography variant="body2" component="p" sx={{ml:2,mt:0.5}}><a style={{textDecoration:'underline'}} href='https://fvhog4ub7oe.typeform.com/to/csPZApTJ'>Test-1 Basics of Data Structure</a></Typography>
            </AccordionDetails>
        </Accordion>
    </Card>
  )
}
export default Implicit