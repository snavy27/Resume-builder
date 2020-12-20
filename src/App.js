import React from "react";
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard"
import Resume from "./Resume"

const Application = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} /> 
        <Route path="/resume" component={Resume} />
      </Switch>
    </Router>
  );
};

const App = () => {
  return (
      <Application />
    
  );
};

export default App;