import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./Container/LandingPage";
import NavBar from "./Container/Navbar";
import PreTestPage from "./Container/PreTestPage";
import ResultPage from "./Container/ResultPage";
import TestPage from "./Container/TestPage";
import TestDetailsContext from "./ContextProviders/testDetails";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <TestDetailsContext>
          <Route exact  path="/test" component={TestPage} />
          <Route exact path="/preTest" component={PreTestPage} />
          <Route exact path="/result" component={ResultPage} />
          <Route exact path="/*" component={LandingPage} />
        </TestDetailsContext>
      </Switch>
    </Router>
  );
}
