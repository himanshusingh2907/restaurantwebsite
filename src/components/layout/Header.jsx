 import React,{useState} from 'react'
 import { AppBar, Box, Drawer, IconButton, Toolbar, Typography,Divider } from '@mui/material'
 //import FastfoodIcon from '@mui/icons-material/Fastfood';
 import { NavLink} from 'react-router-dom';
 import '../../styles/HeaderStyle.css';
 import Logo from '../../images/logo.svg'
 import MenuIcon from '@mui/icons-material/Menu';
 const Header = () => {
  const [mobileOpen,setMobileOpen]=useState(false);

  // handle menuclick
  const handleDrawerToggle =() => {
    setMobileOpen(!mobileOpen);
  }
  // menu drawer

  const drawer =(
    <Box  onClick={ handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography 
        color={'goldenrod'} 
        variant="h6" 
        component="div"
         sx={{flexGrow:1, my:2}}>
           <img src={Logo} alt="logo" height={'70'} width='200'/>
        </Typography>
        <Divider/>
          <ul className="mobile-navigation"> 
            <li> 
              <NavLink ActiveClassName="active" to={'/Home'} > Home</NavLink>
            </li>
            <li> 
              <NavLink to={'/About'}> About </NavLink>
            </li>
            <li>
              <NavLink to={'/Menu'}>Menu</NavLink>
            </li>
            <li>
              <NavLink to={'/Contact'}>Contact</NavLink>
            </li>
            
          </ul>

        
    </Box>
  )

   return (
     <>
     <Box>
      <AppBar component={'nav'} sx={{bgcolor:'black'}}>
         <Toolbar sx={{ justifyContent: 'space-between' }}>
        
          <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr:2 ,display:{sm:"none"},}}
          onClick={handleDrawerToggle}>
         <MenuIcon/>
          </IconButton>
        <Typography 
        color={'goldenrod'} 
        variant="h6" 
        component="div"
         sx={{flexGrow:1}}>
         <img src={Logo} alt="logo" height={'70'} width='250'/>
        </Typography>
        <Box sx={{display:{xs:'none',sm:'block'}}}> 
          <ul className="navigation-menu"> 
            <li> 
              <NavLink ActiveClassName="active" to={'/Home'} > Home</NavLink>
            </li>
            <li> 
              <NavLink to={'/About'}> About </NavLink>
            </li>
            <li>
              <NavLink to={'/Menu'}>Menu</NavLink>
            </li>
            <li>
              <NavLink to={'/Contact'}>Contact</NavLink>
            </li>
            
          </ul>

          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav"> 
        <Drawer variant="temporary" open={mobileOpen} 
        onClose={handleDrawerToggle}
        sx={{display:{xs:'block',sm:'none'},"& .MuiDrawer-paper" :{
          boxSizing:"border-box",width:"240px",
        }}}>
          {drawer}
        </Drawer>
      </Box>
      <Box >
      <Toolbar/>
      </Box>
     
     </Box>
     </>
   )
 }
 
 export default Header