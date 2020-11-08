import React, {
  useEffect
} from "react";
import Dashboard from "./Pages/Dashboard";
import axios from "axios";
import Tasks from "./Pages/Tasks";
import Messages from "./Pages/Messages";
import Patients from "./Pages/Patients";
import Nav from "./Pages/Nav";
import ProfilePage from "./Pages/ProfilePage";

//import About from './About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

// CSS Should be done this way
const useStyles = makeStyles({
  root: {},
});

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Switch>
        <Nav>
          <Route exact path="/" component={Dashboard} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/messages" component={Messages} />
          <Route path="/patients" component={Patients} />
          
        </Nav>
      </Switch>
    </Router>
  );
}

export default App;
