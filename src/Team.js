import React from 'react';
import {makeStyles} from '@material-ui/core/styles' ;
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import dummy  from "./images/dummy.jpg";
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import kamini from "./images/kamini.jpg";
import muskan from "./images/muskan.jpg";
import manas from "./images/manas.jpg";
import harsha from "./images/harsha.jpg";



const useStyles = makeStyles((theme) => ({

    grid : {
        width : '100%',
        margin : '0px',

    },

    root: {
        margin : '0px',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(16),
          height: theme.spacing(35),
        },
      },

      paper : {
          marginInlineStart : '150px',
          marginTop : '130px',
          padding : "0px",
          height : "310px",
          width : "25%",
          backgroundColor : "#ffffff",
          

      },
      paper2 : {
        marginInlineStart : '00px',
        marginTop : '60px',
        height : "380px",
        width : "25%",
        padding : "0px",
        backgroundColor : "#ffffff",

    },
    paper3 : {
        marginInlineStart : '0px',
        marginTop : '0px',
        padding : "0px",
        height : "350px",
        width : "25%",
        backgroundColor : "#ffffff",
        

    },

    paper4 : {
        marginInlineStart : '150px',
        marginTop : '0px',
        padding : "0px",
        height : "350px",
        width : "25%",
        backgroundColor : "#ffffff",
        

    },
    paper5 : {
        marginInlineStart : '0px',
        marginTop : '0px',
        padding : "0px",
        height : "350px",
        width : "25%",
        backgroundColor : "#ffffff",
        

    },

      main :{
        height : "240vh",
        backgroundColor: "#F5FBFF",
         margin : '0px',
        marginTop : "0vh" ,
        
        
      },

      text:{
        color:"#000000",
        width : '140%',
        justifyContent : 'space-evenly' ,
        textAlign : "space-evenly",
        
    }, 

    title : {
        marginTop : "30px" ,   
        marginLeft : "120px",
        display : "flex" , 
        justifyItems : "center" ,
        
        fontSize :  "220%" ,
        fontFamily : "Titillium Web" ,
    } ,
    name : {
      lineHeight : "10px",
      marginLeft : "10px",
    } ,

    details :{
       display : "flex" ,
       justifyContent : "center",
       justifyItems : "center",
    }

  


}));

const Team = () => {
const classes = useStyles();    
  return <div>

<div className = {classes.main} >
        
        
        <Grid container spacing = {0} className = {classes.grid} >
            <Grid item >
              <div className={classes.title} >
                <h1>OUR TEAM </h1>
              </div>

              
             
            <div className={classes.root}>
             
             
            
            <Paper elevation={20} className = {classes.paper} md={6} >
            <img src={kamini} alt = "dummy" width= "100%" height="70%" />
             <div className={classes.details} >
               <div className={classes.name}  >
                   <h3>Kamini</h3>
                   <h4>Youth Coordinator</h4>
               </div>
               
              <IconButton href="https://www.linkedin.com/in/kamini-singh-619483204">
                <LinkedInIcon/>
              </IconButton>
              <IconButton href="https://mobile.twitter.com/KaminiS30055234">
                <TwitterIcon/>
              </IconButton>
              <IconButton>
                <InstagramIcon/>
              </IconButton>
               

             </div>
                
            
            </Paper>  
            
            
            <Paper elevation={20} className = {classes.paper2} md={6} >
            <img src={muskan} alt = "dummy" width= "100%" height="75%" />
            <div className={classes.details} >
               <div className={classes.name}  >
                   <h3>Muskan</h3>
                   <h4>Youth Coordinator</h4>
               </div>
               
              <IconButton href="https://www.linkedin.com/in/muskan-bansal-095601189">
                <LinkedInIcon/>
              </IconButton>
              <IconButton href="https://twitter.com/Muskan0109?t=cvjWeCd1Pl205ByLiXpm-A&s=09">
                <TwitterIcon/>
              </IconButton>
              <IconButton>
                <InstagramIcon/>
              </IconButton>
               

             </div>
            
            </Paper> 

            
            <Paper elevation={20} className = {classes.paper3} md={6} >
            <img src={manas} alt = "dummy" width= "100%" height="75%" />
            <div className={classes.details} >
               <div className={classes.name}  >
                   <h3>Manas</h3>
                   <h4>Youth Coordinator</h4>
               </div>
               
              <IconButton href="https://linkedin.com/in/cyberbuddy-manas">
                <LinkedInIcon/>
              </IconButton>
              <IconButton href="https://twitter.com/cyberbuddy_io">
                <TwitterIcon/>
              </IconButton>
              <IconButton>
                <InstagramIcon/>
              </IconButton>
               

             </div>
            
            </Paper> 

            <Paper elevation={20} className = {classes.paper4} md={6} >
            <img src={harsha} alt = "dummy" width= "100%" height="75%" />
            <div className={classes.details} >
               <div className={classes.name}  >
                   <h3>Harsha</h3>
                   <h4>Youth Coordinator</h4>
               </div>
               
              <IconButton href = "https://www.linkedin.com/in/harsha-bajaj-398323200" >
                <LinkedInIcon/>
              </IconButton>
              <IconButton href="https://twitter.com/bajajharsha2?t=kdeTDeOpBGGLMhKKqhfhUA&s=08">
                <TwitterIcon/>
              </IconButton>
              <IconButton>
                <InstagramIcon/>
              </IconButton>
               

             </div>
            
            </Paper> 

            <Paper elevation={20} className = {classes.paper5} md={6} >
            <img src={dummy} alt = "dummy" width= "100%" height="75%" />
            <div className={classes.details} >
               <div className={classes.name}  >
                   <h3>Rishikesh</h3>
                   <h4>Youth Coordinator</h4>
               </div>
               
              <IconButton href="">
                <LinkedInIcon/>
              </IconButton>
              <IconButton href="" >
                <TwitterIcon/>
              </IconButton>
              <IconButton>
                <InstagramIcon/>
              </IconButton>
               

             </div>
            
            </Paper> 

         

            </div>
            </Grid>
        </Grid>   
        </div>
        


  </div>;
};

export default Team;
