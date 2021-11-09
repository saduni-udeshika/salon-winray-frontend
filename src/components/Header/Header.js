import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom';

function Header(){
    return (
        <header>
            <div className="nav-container">
                <div className="nav-brand">Winray</div>
                <Link to={"/"} className = "link">
                    <div className="nav-item">HOME</div>
                </Link>
                <div className="nav-item">ABOUT</div>
                    <div className="nav-item"> CONTACT US</div>
                <Link to={"/myAccount"} className = "link">
                    <div className="nav-item"> MY ACCOUNT</div>
                </Link>
                <Link to={"/adminPanel"} className = "link">
                    <div className="nav-item"> ADMIN PANEL</div>
                </Link>

            </div>
        </header>
    );
}

export default Header;
/*import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SALON WINRAY
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
*/