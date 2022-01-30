import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles ((theme)=>({

    root : {
      
       height : "150vh", 
       backgroundColor : "#F5FBFF",
    },

    subheading : { 
        fontWeight : "100" ,
        marginTop : "10px" , 
        fontSize : "120%" ,
        
    } , 

    head : {
      justifyContent : "center",
      display : "flex" ,
    },
    title : {
        marginTop : "5vh" ,
        display : "flex" , 
        justifyItems : "center" ,
        justifyContent : "center" ,
        fontSize :  "200%" ,
        letterSpacing : 0 ,
        marginBottom : "0vh" ,
        fontFamily: "Titillium Web",
      },

      
    grid : {
      width : '100%',
      margin : '0px',

  },

  root1: {
      margin : '0px',
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0),
        width: theme.spacing(35),
        height: theme.spacing(28),
      },
    },

    paper : {
        marginInlineStart : '150px',
        marginTop : '20px',
        padding : theme.spacing(2),
        backgroundColor : "#ffffff",
        

    },
    paper2 : {
      marginInlineStart : '0px',
      marginTop : '90px',
      padding : theme.spacing(2),
      backgroundColor : "#ffffff",

  },
  paper3 : {
      marginInlineStart : '0px',
      marginTop : '20px',
      padding : theme.spacing(2),
      backgroundColor : "#ffffff",
      

  },

    main :{
      height : "100vh",
      backgroundColor : "#F5FBFF" ,
      margin : '0px',
      marginTop : "0vh" ,
      
      
    },

    text:{
      color:"#000000",
      width : '140%',
      justifyContent : 'space-evenly' ,
      textAlign : "space-evenly",
      
  }, 

  subtitle : {
     fontSize : "120%" , 
     lineHeight : "110%",
    
  },

  button : {
    backgroundColor : "#47ABFC" ,
    color :"white",
    height : "40px",
    width  :  "200px" ,
    border : "none" ,
    marginInlineStart : "80px",
  },

 })) ;

const Home = () => {
const classes = useStyles();
  return <div className={classes.root}>
      <div className={classes.title}>
          <h1 className={classes.title} >WHAT YOU NEED TO DO</h1>
      </div>
            <div className={classes.head} >
               <h3 className={classes.subheading} >To be eligible to get the FREE Certificate Voucher </h3>
            </div>

            <Grid container spacing = {3} className = {classes.grid} >
            <Grid item >
            <div className={classes.root1}>
             
            
            <Paper elevation={20} className = {classes.paper} md={6} >
             <div className={classes.subtitle}>
            <h4>Choose your own track and LEARN</h4>
             </div>
             <p>Choose any one of the track and complete the course. If you have incomplete progress from the previous challenge, you can continue this new challenge from that point itself and complete the course.</p>
             <Button className= {classes.button} href = "/track" >
                   Get Started for FREE  
                   </Button>
            </Paper>  
            
            
            <Paper elevation={20} className = {classes.paper2} md={6} >
            <div className={classes.subtitle}>
            <h4>Update your LinkedIn Skills</h4>
            </div>
            <p>Once you complete the course, you will have to update your LinkedIn Skill and add "Microsoft Azure" to your profile. Once the profile is updated successfully, share your LinkedIn Profile with us.</p>
            <Button className= {classes.button} href = "https://www.microsoft.com/en-in/campaign/AzureSkills/?source=FC-4" >
                   Get Started for FREE  
                   </Button>
            </Paper> 

            
            <Paper elevation={20} className = {classes.paper3} md={6} >
            <div className={classes.subtitle}>
            <h4>Give a mock test to be eligible</h4>
             </div>
             <p>On successful completion of the above two steps, you can take up a mock test for your track. Passing Criteria: 70%
Incase someone fails to achieve this then they need not worry. We'll mail a 2nd mock test to them.</p>
<Button className= {classes.button} href = "/track" >
                   Get Started for FREE  
                   </Button>
            </Paper> 

         

            </div>
            </Grid>
        </Grid>

            
         </div>;
};

export default Home;
