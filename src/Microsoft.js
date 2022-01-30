import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MicrosoftLogo from "./images/MicrosoftLogo.png";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles ((theme)=>({ 
   root : {
      height: "100vh" , 
      backgroundColor : "#ffffff" ,
   },
   image : {
       display : "flex",
       justifyContent : "center",
       justifyItems : "center",
       marginTop : "15vh",
   },
   title : {
    marginTop : "0vh",
    display : "flex" , 
    justifyItems : "center" ,
    justifyContent : "center" ,
    fontSize :  "210%" ,
    letterSpacing : "0" ,
    marginBottom : "0vh" ,
    fontFamily : "Titillium Web" ,
    lineHeight : "150%",
    
  },
    subtitle : {
      display : "flex" , 
      justifyItems : "center" ,
      justifyContent : "center" ,
      fontSize :  "22px" ,
      marginTop : "0vh",
      lineHeight : "100%",
    },

  button : {
    backgroundColor : "#47ABFC" ,
    color :"black",
    height : "50px",
    width  :  "200px" ,
    border : "none" ,
    
    
    
    
},
btn : {
    display : "flex",
    justifyContent : "center",
    justifyItems : "center",
},
 })) ;

const Microsoft = () => {
const classes = useStyles();
  return <div>
            <div className={classes.root}>
                <div className={classes.image}>
                   <img src = {MicrosoftLogo} alt='micro' height="80px" />
                </div>
                <div className={classes.title}>
                   <h1>&nbsp;&nbsp;LEARN AND GET <br/> &nbsp;&nbsp;&nbsp; CERTIFIED IN <br/> MICROSOFT AZURE </h1>
                   
                </div>
                <div className={classes.subtitle}>
                   <h6> Participate in the Microsoft Certification Challenge, build a strong foundation over <br/> &nbsp;&nbsp;&nbsp;&nbsp; Azure and get the Azure Certification Voucher worth 4000 INR! for FREE.</h6>
                </div>
                <div className={classes.btn}>
                   <Button className= {classes.button} href = "/track" >
                   Get Started for FREE  
                   </Button>
                </div>
                
            </div>

         </div>;
};

export default Microsoft;
