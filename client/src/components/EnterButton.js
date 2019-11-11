import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CarInfo from '../containers/CarInfo'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function EnterButton() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        Come On In!
      {/* <Router> 
      <Route exact path="/new" component={CarInfo}> */}
       
      {/* </Route>
      </Router> */}
      </Button>
    </div>
  );
}