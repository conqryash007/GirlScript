import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProfileTabs from "./ProfileTabs";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#171717",
  },
  title: {
    color: "white",
    fontSize: "250%",
    display: "flex",
    justifyItems: "center",
    justifyContent: "center",
    fontFamily: "Titillium Web",
    lineHeight: "100%",
  },
  subtitle: {
    color: "white",
    display: "flex",
    justifyItems: "center",
    justifyContent: "center",
    fontFamily: "Exo",
  },

  left: {
    width: "90%",
    marginLeft: "10px",
  },

  boom: {
    marginTop: "5vh",
    marginLeft: "60px",
  },
}));

const Track = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.title}>
          <h1>CHOOSE A TRACK</h1>
        </div>
        <div className={classes.subtitle}>
          <p>You only get one Certificate Voucher, so choose wisely</p>
        </div>

        <div className={classes.boom}>
          <div className={classes.left}>
            <ProfileTabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
