import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid , Card , CardContent} from '@material-ui/core';


const useStyles = makeStyles ((theme)=>({ 
   root : {
      height: "100vh" , 
      backgroundColor : "#47ABFC" ,
   },
   
   left : {
      backgroundColor  : "#47ABFC" ,
      height: "100vh" ,
      width : "80%",
      marginBottom : "0vh",
      display : "flex" , 
      justifyItems : "center" ,
      justifyContent : "center" ,
   },

   title : {
    marginTop : "15vh" ,   
    marginLeft : "220px",
    fontSize :  "250%" ,
    letterSpacing : 0 ,
    marginBottom : "0vh" ,
    fontFamily : "Titillium Web" ,
    color : "white",
    lineHeight : "150%",
    display : "flex" , 
      justifyItems : "center" ,
      justifyContent : "center" ,
   },

   

    titler : {
     
        marginTop : "15vh" ,   
        marginLeft : "150px",
        marginRight : "80vh",
        color : "black",
    },
    card : {
      width : "350%",
      
    },
  



 })) ;

const Note = () => {
const classes = useStyles();
  return <div>
  <div className={classes.root}>

   <Grid container spacing={1} 
    direction='row'
    justify='space-evenly'
    alignItems='stretch'  >

       
       <div className={classes.left}>
       <Grid xs={12}  item alignItems='center' >
          <div className={classes.title}>
              <h1>A FEW <br/> THINGS <br/>TO NOTE.</h1>
          </div>
          
       </Grid>

       <Grid xs={12}  item alignItems='center' >
            <div className={classes.titler}>
             <Card  className= {classes.card}>
               <CardContent>
                 <h4>📧Common mail ID</h4>
                 <p>
                   Make sure you use a common mail id through out the process .
                 </p>
                 <h4>⭕Not Again</h4>
                 <p>
                   Incase you have already recieved a Certificate Voucher from our Previous Programs
                   in any one of the Above Tracks , You won't be eligible for this Certification
                 </p>
                 <h4>📋Only One Voucher</h4>
                 <p>
                   We will give only one Certification Voucher per Student so choose your course wisely
                 </p>
               </CardContent>
             </Card>
            </div>
           </Grid>
       
       

       </div>

       

       
           
           <div className={classes.right}>
        
           </div>
       



   </Grid>

  </div>

</div>;
};

export default Note;
