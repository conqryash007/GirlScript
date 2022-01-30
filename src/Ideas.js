import React from 'react';
import {makeStyles} from '@material-ui/core/styles' ;
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import first from "./images/first.png";
import second from "./images/second.png";
import third from "./images/third.png";





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
          marginInlineStart : '50px',
          marginTop : '20px',
          padding : theme.spacing(3),
          height : "100%",
          width : "25%",
          backgroundColor : "#ffffff",
          

      },
      paper2 : {
        marginInlineStart : '30px',
        marginTop : '20px',
        height : "100%",
        width : "25%",
        padding : theme.spacing(3),
        backgroundColor : "#ffffff",

    },
    paper3 : {
        marginInlineStart : '30px',
        marginTop : '20px',
        padding : theme.spacing(3),
        height : "100%",
        width : "25%",
        backgroundColor : "#ffffff",
        

    },

      main :{
        height : "70vh",
        
        margin : '0px',
        marginTop : "0vh" ,
        
        
      },

      text:{
        color:"#000000",
        width : '140%',
        justifyContent : 'space-evenly' ,
        textAlign : "space-evenly",
        
    },

    sizeAvatar: {
        marginTop : "0vh",
        height: theme.spacing(6),
        width: theme.spacing(6),
      },
     
      title : {
        fontSize :  "24px" ,
      },



}));





function Ideas(){
    const classes = useStyles();
    return (
        <div className = {classes.main} >
        
        
        <Grid container spacing = {3} className = {classes.grid} >
            <Grid item >
            <div className={classes.root}>
             
            
            <Paper elevation={20} className = {classes.paper} md={6} >
            <Avatar alt="Remy Sharp" src={second}  className={classes.sizeAvatar} />
            <div className= {classes.title} >
                <h4>Learn with easy-to-read instruction</h4>
             </div>
            <p>Choose any one of the track and complete the course. If you have incomplete progress from the previous challenge, you can continue this new challenge from that point itself and complete the course.</p>
            
            </Paper>  
            
            
            <Paper elevation={20} className = {classes.paper2} md={6} >
            <Avatar alt="Remy Sharp" src={first}  className={classes.sizeAvatar} />
            <div className= {classes.title} >
            <h4>Get a FREE Certification Voucher</h4>
            </div>
            <p> Once you complete the course, you will have to update your LinkedIn Skill and add "Microsoft Azure" to your profile. Once the profile is updated successfully, share your LinkedIn Profile with us.</p>
            </Paper> 

            
            <Paper elevation={20} className = {classes.paper3} md={6} >
            <Avatar alt="Remy Sharp" src={third}  className={classes.sizeAvatar} />
            <div className= {classes.title} >
            <h4>Develop <br/> marketable skills</h4>
            </div>
            <p>On successful completion of the above two steps, you can take up a mock test for your track. Passing Criteria: 70% Incase someone fails to achieve this then they need not worry. We'll mail a 2nd mock test to them. </p>
            </Paper> 

         

            </div>
            </Grid>
        </Grid>   
        </div>
        );

        

   
}

export default Ideas ; 