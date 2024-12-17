import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:"center",bgcolor:"#1A1A19",color:"white",p:3}}>
      <Box sx={{my:2, "& svg":{
        fontSize:"60px",cursior:"pointer",
        mr:3,},
        "& svg:hover":{
          color:"goldenrod",
          cursior:"pointer",
          transform:'translateX(5px)',
          transition:"all 400ms"
        

      },
       }}>
       <InstagramIcon/>
       <XIcon/>
       <GitHubIcon/>
       <YouTubeIcon/>
      </Box>

    <Typography variant="h5" sx={{
      "@media(max-width:600px)":{
        fontsize:"1rem"
      }}}>
        All Right Reserved &copy; Techinfo yt
    </Typography>

    </Box>
    
    </>
  )
}

export default Footer