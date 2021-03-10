import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SideMenuDrawer from './SideMenuDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignItems:"center"
  },
  login : {
    backgroundColor:"#567B95",
    color:"white",
    fontWeight:"bold",
    fontSize:"12px",
  },
  
  navbar : {
      backgroundColor:"white",
      color: "black",
      padding:"0 8%",
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <SideMenuDrawer/>
          </IconButton>
          <Typography>
            <h4>Politics</h4>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <img src="/title.png" alt="title" width="250px"/>
          </Typography>
          <Button className={classes.login} variant="text" size="small">Log in</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}