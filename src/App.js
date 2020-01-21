import React from 'react';
import Grid from "./components/grid/Grid";
import classes from './App.module.scss';

const App = () => {
  return (
    <div className={classes.container}>
      Hello world
      <Grid />
    </div>
  );
}

export default App;
