import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import navlogo from './images/navlogo.png';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles ((theme)=>({ 
    root : {
        display : "flex" ,
        justifyContent : "center" ,
        alignItems : "center" ,
        height : "100vh",
        color : "#ffffff",
        backgroundColor : "white",
        position : "sticky",
        
        
     } ,
 
     app : {
         
         fontFamily : 'Nunito' ,
         background : 'none' ,
         height : "15vh",
         backgroundColor : "white" ,
         
 
     },
     appbarWrapper : {
        width : '90%' ,
        margin : '0 auto' ,
        color : "#ffffff",
    } ,

    logo : {
        marginTop : "10px",
    }, 

    button : {
         backgroundColor : "#47ABFC" ,
         fontSize : "13px",
         fontFamily : "Exo",
         color :"black",
         height : "40px",
         width  :  "200px" ,
         border : "none" ,
         marginLeft : "80px",
         display : "flex",
         justifyContent : "center" ,
         justifyItems : "center",
         padding : "0"
         
         
         
         
    },
    whitebutton : {
        backgroundColor : "#ffffff" ,
        height : "30px",
        width  :  "110px" ,
        border : "none" ,
        marginLeft : "480px",
        color : "black",
        textDecoration : "none",
        fontSize : "15px",
        fontFamily : "Exo",

        
    } ,
    white1button : {
        backgroundColor : "#ffffff" ,
        height : "30px",
        width  :  "110px" ,
        border : "none" ,
        marginInline : "8px",
        color : "black" ,
        textDecoration : "none",
        fontSize : "15px",
        fontFamily : "Exo",
    } ,




})) ;


const Navbar = () => {
const classes = useStyles();
  return <div>

        <AppBar className = {classes.app} >
           <Toolbar className = {classes.appbarWrapper} >
           <div className={classes.logo}>
           <img src = {navlogo} alt='girlscript' height= '71px' marginTop = "20px"  />  
           </div>

           <a className= {classes.whitebutton} href = "/"  >
                Home
           </a>
            
           <a className= {classes.white1button} href = "/about" >
                 About Us
           </a>

           <a className= {classes.white1button} href='/contact'  >
                 Contact
           </a>


           <Button className= {classes.button} href = "/track" >
              Start Learning  
           </Button>
            
               
           </Toolbar> 
           </AppBar>

  </div>;
};

export default Navbar;
