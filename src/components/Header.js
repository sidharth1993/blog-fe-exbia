import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer'
  },
}));

export default function Header() {    
  const classes = useStyles();
  const history = useHistory();

  const handlePost = () => {
    history.push({
        pathname:'/blog/new'
    })
  }

  const handleRead = () => {
    history.push({
        pathname:'/blogs'
    })
  }

  const handleHome = () => {
    history.push({
        pathname:'/'
    })
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography onClick={handleHome} variant="h6" className={classes.title}>
            Blog-Xebia
          </Typography>
          <Button color="inherit" onClick={handlePost}>Post</Button>
          <Button color="inherit" onClick={handleRead}>Read</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}