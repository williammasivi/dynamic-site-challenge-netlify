import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CrewPage from "./pages/CrewPage";
import DestinationPage from "./pages/DestinationPage";
import TechnologyPage from "./pages/TechnologyPage";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/crew" component={CrewPage} />
      <Route exact path="/destination" component={DestinationPage} />
      <Route exact path="/technology" component={TechnologyPage} />
    </Router>
  );
};

export default App;
