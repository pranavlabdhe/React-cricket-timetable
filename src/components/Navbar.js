import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react'
import logo from '../images/cricket_PNG118.png'
import '../../src/index.css'
import '../App.css';
const Navbar=()=>{
    return (
        <AppBar position="relative" color="inherit" id="AppBar">
            <Toolbar>
             <img src={logo} alt="logo" id="logo"/>   
           <Typography id="title">Cricket Time-Table...</Typography>
            </Toolbar>
        </AppBar>

    )

       
    
}
export default Navbar;