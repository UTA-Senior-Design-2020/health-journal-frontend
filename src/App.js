import React from "react";
import Dashboard from './Pages/Dashboard';
import Nav from './Pages/Nav';
//import About from './About';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { makeStyles } from "@material-ui/core/styles";

// CSS Should be done this way
const useStyles = makeStyles({
  root: {
    background: "#FBFCFD",
    minHeight: "100vh",
  },
});


function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Route path="/dashboard" component={Dashboard}/>       
      </div>
    </Router>
  );
}

export default App;
