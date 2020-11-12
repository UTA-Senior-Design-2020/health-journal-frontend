import React from "react";
import Dashboard from "./Pages/Dashboard";
import Tasks from "./Pages/Tasks";
import Messages from "./Pages/Messages";
import Patients from "./Pages/Patients";
import Nav from "./Pages/Nav";
import ProfilePage from "./Pages/ProfilePage";
import Login from "./Pages/Login";
import Signup from './Pages/Signup'
import Settings from './Pages/Settings'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './Pages/ForgotPassword'
import { AuthProvider } from "./Context/AuthContext";


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
    <AuthProvider>
      <Router>
      <Switch>
        <Nav>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/profile" component={ProfilePage} />
          <PrivateRoute path="/tasks" component={Tasks} />
          <PrivateRoute path="/messages" component={Messages} />
          <PrivateRoute path="/patients" component={Patients} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/settings" component={Settings} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Nav>
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
