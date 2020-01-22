import React from 'react';
import classes from './App.module.scss';
import Grid from "./containers/Grid";
import Controlls from "./containers/Controls";

const App = () => {
  return (
    <div className={classes.container}>
      <Controlls />
      <Grid />
    </div>
  );
}

export default App;
