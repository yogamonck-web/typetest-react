import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./Container/LandingPage";
import NavBar from "./Container/Navbar";
import PreTestPage from "./Container/PreTestPage";
import ResultPage from "./Container/ResultPage";
import TestPage from "./Container/TestPage";

export default function App() {
  return (
    <Router>
      <NavBar />
        <Switch>
            <Route path="/test" component={TestPage} />
            <Route path="/preTest" component={PreTestPage} />
            <Route path="/result" component={ResultPage} />
            <Route path="/*" component={LandingPage} />
        </Switch>
    </Router>
  );
}
