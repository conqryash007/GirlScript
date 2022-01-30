import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import MicrosoftLogo from "./images/MicrosoftLogo.png"

const useStyles = makeStyles ((theme)=>({ 
    root : {
       height: "100vh" , 
       backgroundColor : "#ffffff" ,
       width : "110%",
      
    },
    
    left : {
       backgroundColor  : "#ffffff" ,
       height: "100vh" ,
       marginTop : "30px",
       width : "80%",
       display : "flex" , 
      justifyItems : "center" ,
      justifyContent : "center" ,

    },
 
    title : {
     marginTop : "120px" ,   
     marginLeft : "250px",

     fontSize :  "190%" ,
     letterSpacing : 0 ,
     lineHeight : "150%",
     marginBottom : "0vh" ,
     fontFamily : "Titillium Web" ,
     color : "black",
    },

     bluehead : {
        marginTop : "150px" ,   
        marginLeft : "150px",
        marginRight : "80vh",
        color : "black",
        width : "50%"
     },
     image : {
         marginLeft : "250px",
         
     },

     
 
 
  })) ;

const Challenge = () => {
const classes = useStyles();
  return <div> 

<div>
         <div className={classes.root}>

          <Grid container spacing={1}  >

              
              <div className={classes.left}>
              <Grid xs={12} item alignItems='center' >
                 <div className={classes.title}>
                     <h1>ABOUT<br/>MICROSOFT<br/>CERTIFICATION<br/>CHALLENGE</h1>
                 </div>
                 <div className={classes.image}>
                     <img src={MicrosoftLogo} alt = "microsoft" height="60px"/>
                 </div> 
                 
                 

              </Grid>
              <Grid xs={12} item alignItems='center' >
              <div className= {classes.bluehead}  >
                   <p> This Challenge is brought to you by GirlScript Foundation.<br/><br/>Azure is Microsoft's own cloud computing service. Its data centers handles all major services like building, testing, deploying, and management.<br/><br/>Choose one of the 3 Microsoft Fundamental courses and build a strong foundation over Azure .

                    </p>
                      
                   </div>
                </Grid>  
                   
                  

              </div>

              

              
                  
               
              



          </Grid>

         </div>

  </div>;

  </div>;
};

export default Challenge;
