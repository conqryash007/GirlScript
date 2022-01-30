import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ((theme)=>({ 
   root : {
      height: "20vh" , 
      backgroundColor : "#171717" ,
      background : "none",
      marginTop : "0vh" ,
      color : "white",
   },

   title : {
      display : "flex" ,
      justifyContent : "center",
      justifyItems : "center",
      marginTop : "20px",
      fontWeight : "100%",
      
   },
 })) ;

const Footer = () => {
    const classes = useStyles();
  return <div>

       <div className={classes.root}>
       <div className={classes.title} >
          <h6  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Copyright © 2021 Girlscript Foundation.<br/> All Rights Reserved
               Designed with ❤️ by elcicneha</h6>
       </div>
      
       </div>

  </div>;
};

export default Footer;
