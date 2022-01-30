import React from 'react';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import certificate from "./images/certificate.jpg"
import Button from '@material-ui/core/Button';

const useStyles = makeStyles ((theme)=>({
    root : {
       color : "white",
       display : "flex",
       justifyContent : "center" ,
      

       
    },

    image: {
      marginTop :"5vh",
      marginLeft: "10px",
      display : "flex" ,
      justifyContent : "center" ,
      justifyItems : "center",
      
    },
    
  })) ;


class ProfileTabs extends React.PureComponent {
  state = { activeIndex: 0 }

  handleChange = (_, activeIndex) => this.setState({ activeIndex })
  render() {
    const { activeIndex } = this.state;
    
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <VerticalTabs 
          
          value={activeIndex}
          onChange={this.handleChange}
        >
          <MyTab label='Azure Fundamentals' />
          <MyTab label='Data Fundamentals' />
          <MyTab label='Security Fundamentals' />
        </VerticalTabs>

        { activeIndex === 0 && <TabContainer >
        <h1>Azure Fundamentals</h1>
        Azure Fundamentals is a six part series that teaches you basic cloud concepts , provides a streamlined overview of many Azure services, 
        and guides you with hands-on exercises to deploy your very first services for free<br/><br/>
        <Button variant="contained" size='small' href="https://docs.microsoft.com/learn/challenges?id=4ca8ff9c-0b3b-448d-83d9-073b8f8e9ea4" >
           Start Learning  
           </Button> 
           &nbsp; &nbsp;
           <Button variant="contained" size='small' href = "https://forms.gle/KeCxkhS9jhowm6yJ9" >
           Mock Test 
           </Button> </TabContainer> }
        { activeIndex === 1 && <TabContainer>
        <h1>Data Fundamentals</h1>
        Learn the fundamentals of database concepts in a cloud environment , get basic skill in cloud data services , and build your foundational 
        knowledge of cloud data services within Microsoft Azure . You will identify and describe core data concepts such as relational , non-relational, big data , and analytics .<br/><br/>
        <Button variant="contained" size='small' href = "https://docs.microsoft.com/learn/challenges?id=0159a23d-a8a7-4fdc-8cd5-9401c8ae610e" >
           Start Learning  
           </Button> 
           &nbsp; &nbsp;
           <Button variant="contained" size='small' href= "https://forms.gle/VmvzVC7Nartgd46F9" >
           Mock Test 
           </Button>
        </TabContainer> }
        { activeIndex === 2 && <TabContainer>
           <h1>Security Fundamentals</h1>
           Learn about the core concepts , principles ,and methodologies that are foundational to security , complaince , and identity solutions 
           including Zero-Trust,shared responsibility , the role of identity providers , and more .<br/><br/>
           <Button variant="contained" size='small' href = "https://docs.microsoft.com/learn/challenges?id=5b299298-0485-4262-ab12-5b9a04d62487" >
           Start Learning  
           </Button> 
           &nbsp; &nbsp;
           <Button variant="contained" size='small'  href ="https://forms.gle/R7HYbsHbxFLRSNcn6" >
           Mock Test 
           </Button>

        </TabContainer> }
    </div>
    )
  }
}

const VerticalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: 'column',
    color : "white" ,
    width : "500px",
    marginTop : "10vh", 
    justifyContent : "left" ,
    justifyItems : "left",
    fontSize : "50%",
  },
  indicator: {
    display: 'none',
    color : "white" ,
    marginTop : "20vh" ,
    
  }
}))(Tabs)

const MyTab = withStyles(theme => ({
  selected: {
    display : "flex",
    justifyItems : "left",
    justifyContent : "left" ,
    width : "30%" ,
    color: 'white',
    borderBottom: '2px solid teal',
    fontSize : "150%",
    
  }
}))(Tab);

function TabContainer(props) {
    const classes = useStyles();
  return (
      <div className={classes.root}>
    <Typography component="div"   style={{ padding: 24 }}>
      {props.children}
    </Typography>
    <div className={classes.image}>
          <img src={certificate} alt="certificate" height="240px"  />
    </div>

      </div>
  );
}

export default ProfileTabs;